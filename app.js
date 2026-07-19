(() => {
  "use strict";

  const translations = {
    ar: {
      skip: "انتقل إلى الدورات",
      brand: "مكتبة عبدالله التعليمية",
      brandSub: "دوراتي التدريبية",
      navCourses: "الدورات",
      eyebrow: "ABDULLAH · COURSE LIBRARY",
      heroTitle: "دوراتي التدريبية في الجودة والتدقيق وتحسين الأداء",
      heroText: "هذه الصفحة تجمع الدورات التي أعددتها في مكان واحد، مع روابط مباشرة لكل مسار تدريبي.",
      viewCourses: "عرض الدورات",
      sharePage: "مشاركة الصفحة",
      courseCountLabel: "دورات متاحة",
      languagesLabel: "باللغتين",
      directAccessValue: "مباشر",
      directAccessLabel: "وصول للدورات",
      profileLabel: "صاحب المكتبة",
      profileStatus: "محدّثة",
      ownerName: "عبدالله",
      ownerRole: "إعداد وتطوير المحتوى التدريبي",
      focusLabel: "مجالات الدورات",
      focusQuality: "إدارة الجودة",
      focusAudit: "التدقيق",
      focusImprovement: "تحسين العمليات",
      coursesKicker: "COURSES",
      coursesTitle: "الدورات المتاحة",
      coursesText: "اختر الدورة لفتح محتواها مباشرة.",
      searchLabel: "ابحث في الدورات",
      searchPlaceholder: "ابحث في الدورات...",
      emptyTitle: "لا توجد دورة مطابقة",
      emptyText: "جرّب كلمة بحث مختلفة.",
      footerTitle: "مكتبة عبدالله التعليمية",
      footerText: "جميع دوراتي في رابط واحد.",
      footerOwner: "عبدالله",
      openCourse: "فتح الدورة",
      available: "متاحة الآن",
      lessons: "درسًا",
      courseType: "دورة تفاعلية",
      copied: "تم نسخ رابط الصفحة",
      shareTitle: "مكتبة عبدالله التعليمية",
      shareText: "دورات عبدالله التدريبية في الجودة والتدقيق وتحسين الأداء."
    },
    en: {
      skip: "Skip to courses",
      brand: "Abdullah's Course Library",
      brandSub: "My training courses",
      navCourses: "Courses",
      eyebrow: "ABDULLAH · COURSE LIBRARY",
      heroTitle: "My training courses in quality, auditing, and performance improvement",
      heroText: "This page brings together the courses I have developed, with direct access to every learning path.",
      viewCourses: "View courses",
      sharePage: "Share page",
      courseCountLabel: "available courses",
      languagesLabel: "bilingual",
      directAccessValue: "Direct",
      directAccessLabel: "course access",
      profileLabel: "Library owner",
      profileStatus: "Updated",
      ownerName: "Abdullah",
      ownerRole: "Training content development",
      focusLabel: "Course focus",
      focusQuality: "Quality management",
      focusAudit: "Auditing",
      focusImprovement: "Process improvement",
      coursesKicker: "COURSES",
      coursesTitle: "Available courses",
      coursesText: "Select a course to open it directly.",
      searchLabel: "Search courses",
      searchPlaceholder: "Search courses...",
      emptyTitle: "No matching course",
      emptyText: "Try a different search term.",
      footerTitle: "Abdullah's Course Library",
      footerText: "All my courses in one place.",
      footerOwner: "Abdullah",
      openCourse: "Open course",
      available: "Available now",
      lessons: "lessons",
      courseType: "Interactive course",
      copied: "Page link copied",
      shareTitle: "Abdullah's Course Library",
      shareText: "Abdullah's training courses in quality, auditing, and performance improvement."
    }
  };

  const safeGet = (key, fallback) => {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
  };
  const safeSet = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* Storage may be unavailable. */ }
  };

  const state = {
    lang: safeGet("abdullahLibraryLanguage", "ar"),
    theme: safeGet("abdullahLibraryTheme", "system"),
    query: ""
  };

  const el = {
    languageButton: document.getElementById("languageButton"),
    themeButton: document.getElementById("themeButton"),
    themeIcon: document.getElementById("themeIcon"),
    shareButton: document.getElementById("shareButton"),
    courseCount: document.getElementById("courseCount"),
    profileCourses: document.getElementById("profileCourses"),
    courseGrid: document.getElementById("courseGrid"),
    courseSearch: document.getElementById("courseSearch"),
    emptyState: document.getElementById("emptyState"),
    brandMark: document.getElementById("brandMark"),
    profileAvatar: document.getElementById("profileAvatar"),
    footerMark: document.getElementById("footerMark"),
    year: document.getElementById("year"),
    toast: document.getElementById("toast")
  };

  const t = key => translations[state.lang][key] || key;
  const courses = () => Array.isArray(window.COURSES) ? window.COURSES : [];
  const ar = () => state.lang === "ar";
  const esc = value => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const normalized = value => String(value || "").toLocaleLowerCase(ar() ? "ar" : "en").trim();

  function resolvedTheme() {
    if (state.theme === "system") return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return state.theme;
  }

  function applyTheme() {
    const theme = resolvedTheme();
    document.documentElement.dataset.theme = theme;
    el.themeIcon.innerHTML = theme === "dark"
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.2 8.2 0 0 1 8.8 3.5 8.7 8.7 0 1 0 20.5 15.2Z"/></svg>';
    el.themeButton.setAttribute("aria-label", theme === "dark" ? (ar() ? "تفعيل الوضع الفاتح" : "Use light mode") : (ar() ? "تفعيل الوضع الليلي" : "Use dark mode"));
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = ar() ? "rtl" : "ltr";
    document.title = ar() ? "مكتبة عبدالله التعليمية" : "Abdullah's Course Library";
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = translations[state.lang][node.dataset.i18n];
      if (value) node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
      const value = translations[state.lang][node.dataset.i18nPlaceholder];
      if (value) node.placeholder = value;
    });
    el.languageButton.textContent = ar() ? "EN" : "ع";
    el.brandMark.textContent = ar() ? "ع" : "A";
    el.profileAvatar.textContent = ar() ? "ع" : "A";
    el.footerMark.textContent = ar() ? "ع" : "A";
    render();
    applyTheme();
  }

  function matches(course) {
    if (!state.query) return true;
    const haystack = [
      course.titleAr, course.titleEn, course.descriptionAr, course.descriptionEn,
      course.categoryAr, course.categoryEn, ...(course.tagsAr || []), ...(course.tagsEn || [])
    ].map(normalized).join(" ");
    return haystack.includes(normalized(state.query));
  }

  function createCourseCard(course, index) {
    const title = ar() ? course.titleAr : course.titleEn;
    const description = ar() ? course.descriptionAr : course.descriptionEn;
    const category = ar() ? course.categoryAr : course.categoryEn;
    const tags = ar() ? course.tagsAr : course.tagsEn;
    const language = ar() ? course.languageAr : course.languageEn;
    const meta = Number.isFinite(course.lessons) ? `${course.lessons} ${t("lessons")}` : t("courseType");
    const card = document.createElement("article");
    card.className = "course-card";
    card.style.setProperty("--delay", `${index * 70}ms`);
    card.style.setProperty("--course-accent", course.accent || "#3f67e8");
    card.style.setProperty("--course-soft", course.accentSoft || "#e9edff");
    card.style.setProperty("--course-dark", course.accentDark || "#173179");
    card.innerHTML = `
      <div class="course-visual">
        <div class="course-topline">
          <span class="course-number">COURSE ${esc(course.number || String(index + 1).padStart(2, "0"))}</span>
          <span class="course-language">${esc(language)}</span>
        </div>
        <span class="course-symbol" aria-hidden="true">${esc(course.symbol || "•")}</span>
        <span class="course-visual-label">${esc(category)}</span>
      </div>
      <div class="course-body">
        <span class="course-category">${esc(category)}</span>
        <h3>${esc(title)}</h3>
        <p>${esc(description)}</p>
        <div class="course-tags">${(tags || []).slice(0, 3).map(tag => `<span>${esc(tag)}</span>`).join("")}</div>
        <div class="course-footer">
          <span class="course-meta">${esc(meta)}</span>
          <a class="course-link" href="${esc(course.url)}">
            <span>${t("openCourse")}</span><span aria-hidden="true">${ar() ? "←" : "→"}</span>
          </a>
        </div>
      </div>`;
    return card;
  }

  function renderCourses() {
    const filtered = courses().filter(matches);
    el.courseGrid.replaceChildren(...filtered.map(createCourseCard));
    el.emptyState.hidden = filtered.length !== 0;
  }

  function renderProfileCourses() {
    el.profileCourses.innerHTML = courses().map(course => {
      const title = ar() ? (course.shortTitleAr || course.titleAr) : (course.shortTitleEn || course.titleEn);
      const category = ar() ? course.categoryAr : course.categoryEn;
      return `<a class="profile-course" href="${esc(course.url)}" style="--course-accent:${esc(course.accent)};--course-soft:${esc(course.accentSoft)}">
        <span class="profile-course-symbol" aria-hidden="true">${esc(course.symbol)}</span>
        <span><strong>${esc(title)}</strong><small>${esc(category)}</small></span>
        <span class="profile-course-arrow" aria-hidden="true">${ar() ? "←" : "→"}</span>
      </a>`;
    }).join("");
  }

  function render() {
    el.courseCount.textContent = courses().length;
    renderCourses();
    renderProfileCourses();
  }

  function showToast(message) {
    el.toast.textContent = message;
    el.toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => el.toast.classList.remove("show"), 2200);
  }

  async function sharePage() {
    const shareData = { title: t("shareTitle"), text: t("shareText"), url: location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(location.href);
        showToast(t("copied"));
      }
    } catch (error) {
      if (error && error.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(location.href);
        showToast(t("copied"));
      } catch { /* No further fallback needed. */ }
    }
  }

  el.languageButton.addEventListener("click", () => {
    state.lang = ar() ? "en" : "ar";
    safeSet("abdullahLibraryLanguage", state.lang);
    applyLanguage();
  });
  el.themeButton.addEventListener("click", () => {
    state.theme = resolvedTheme() === "dark" ? "light" : "dark";
    safeSet("abdullahLibraryTheme", state.theme);
    applyTheme();
  });
  el.shareButton.addEventListener("click", sharePage);
  el.courseSearch.addEventListener("input", event => {
    state.query = event.target.value;
    renderCourses();
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (state.theme === "system") applyTheme();
  });

  el.year.textContent = new Date().getFullYear();
  applyLanguage();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();
