(() => {
  "use strict";

  const VERSION = "20260722-1";
  const EXPECTED_CHUNKS = 40;
  const chunkFiles = [
    "c00.js", "c01.js", "c02.js", "c03.js", "c04.js", "c05.js",
    "c06.js", "c07.js", "c08.js", "c09.js", "c10.js", "c11.js",
    "p12.js", "p14.js", "q16.js", "q20.js", "q24.js", "q28.js",
    "q32.js", "q36.js"
  ];

  const home = document.getElementById("home");

  function setStatus(message) {
    if (!home) return;
    home.innerHTML = `<div class="notice">${message}</div>`;
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
    window.CQE_CHUNKS = [];
    await Promise.all(chunkFiles.map(file => loadScript(file, forceRefresh)));

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
    const normalized = base64.replace(/\s+/g, "");
    if (!normalized || normalized.length % 4 !== 0) {
      throw new Error("Invalid CQE payload length");
    }

    const binary = atob(normalized);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
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

    const packed = window.CQE_CHUNKS.join("");
    const bytes = decodeBase64(packed);
    const code = await decompress(bytes);

    if (!code || code.length < 100) {
      throw new Error("CQE course payload is empty");
    }

    (0, eval)(`${code}\n//# sourceURL=cqe-course-app.js`);
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
        setStatus(
          "تعذر تحميل الدورة مؤقتًا. اضغط الزر لإعادة المحاولة.<br>" +
          "The course could not be loaded temporarily.<br><br>" +
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
