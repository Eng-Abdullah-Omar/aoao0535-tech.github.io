(() => {
  "use strict";

  const VERSION = "20260722-2";
  const EXPECTED_CHUNKS = 40;
  const chunkFiles = [
    "c00.js", "c01.js", "c02.js", "c03.js", "c04.js", "c05.js",
    "c06.js", "c07.js", "c08.js", "c09.js", "c10.js", "c11.js",
    "p12.js", "p14.js", "q16.js", "q20.js", "q24.js", "q28.js",
    "q32.js", "q36.js"
  ];

  const home = document.getElementById("home");
  let stage = "initializing";

  function setStatus(message) {
    if (!home) return;
    home.innerHTML = `<div class="notice">${message}</div>`;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function loadScript(file, forceRefresh = false) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      const refresh = forceRefresh ? `&r=${Date.now()}-${Math.random().toString(36).slice(2)}` : "";
      script.src = `v2/${file}?v=${VERSION}${refresh}`;
      script.async = true;
      script.onload = () => {
        script.remove();
        resolve();
      };
      script.onerror = () => {
        script.remove();
        reject(new Error(`Failed to load ${file}`));
      };
      document.head.appendChild(script);
    });
  }

  async function loadChunks(forceRefresh = false) {
    stage = "loading chunk files";
    window.CQE_CHUNKS = [];
    await Promise.all(chunkFiles.map(file => loadScript(file, forceRefresh)));

    stage = "validating 40 chunks";
    const missing = [];
    for (let index = 0; index < EXPECTED_CHUNKS; index += 1) {
      if (typeof window.CQE_CHUNKS[index] !== "string" || window.CQE_CHUNKS[index].length === 0) {
        missing.push(index);
      }
    }

    if (missing.length) {
      throw new Error(`Missing CQE chunks: ${missing.join(", ")}`);
    }
  }

  function decodeBase64(base64) {
    stage = "decoding base64 payload";
    const normalized = base64.replace(/\s+/g, "");
    if (!normalized) throw new Error("CQE payload is empty");

    try {
      const binary = atob(normalized);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
      }
      return bytes;
    } catch (error) {
      throw new Error(`Invalid CQE base64 payload (${normalized.length} chars): ${error.message}`);
    }
  }

  function loadPako() {
    if (window.pako && typeof window.pako.ungzip === "function") {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js";
      script.crossOrigin = "anonymous";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Fallback decompressor could not be loaded"));
      document.head.appendChild(script);
    });
  }

  async function decompress(bytes) {
    stage = "decompressing course payload";
    if ("DecompressionStream" in window) {
      const stream = new Blob([bytes])
        .stream()
        .pipeThrough(new DecompressionStream("gzip"));
      return new Response(stream).text();
    }

    await loadPako();
    return window.pako.ungzip(bytes, { to: "string" });
  }

  async function start(forceRefresh = false) {
    setStatus("جارٍ تحميل محتوى الدورة…<br>Loading course content…");
    await loadChunks(forceRefresh);

    stage = "joining payload";
    const packed = window.CQE_CHUNKS.join("");
    const bytes = decodeBase64(packed);
    const code = await decompress(bytes);

    if (!code || code.length < 100) {
      throw new Error("CQE course payload is empty after decompression");
    }

    stage = "starting course application";
    (0, eval)(`${code}\n//# sourceURL=cqe-course-app.js`);
    stage = "complete";
  }

  async function boot() {
    try {
      await start(false);
    } catch (firstError) {
      console.warn("CQE initial load failed; retrying without cache.", firstError);
      try {
        await start(true);
      } catch (finalError) {
        console.error("CQE course failed to load.", finalError);
        const detail = `${stage}: ${finalError?.name || "Error"}: ${finalError?.message || finalError}`;
        setStatus(
          "تعذر تحميل الدورة، وتم تسجيل سبب الخطأ أدناه.<br>" +
          "The course could not be loaded.<br><br>" +
          `<code style=\"display:block;direction:ltr;text-align:left;white-space:pre-wrap;padding:10px;background:#fff;border:1px solid #d6a847;border-radius:8px\">${escapeHtml(detail)}</code><br>` +
          "<button type=\"button\" class=\"primary\" id=\"cqeRetryButton\">إعادة التحميل / Retry</button>"
        );

        const retryButton = document.getElementById("cqeRetryButton");
        if (retryButton) {
          retryButton.addEventListener("click", () => {
            const url = new URL(window.location.href);
            url.searchParams.set("refresh", Date.now().toString());
            window.location.replace(url.toString());
          });
        }
      }
    }
  }

  boot();
})();
