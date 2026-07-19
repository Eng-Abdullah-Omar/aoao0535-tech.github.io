(() => {
  "use strict";

  const translations = {
    ar: {
      brand: "مكتبتي التدريبية",
      brandSub: "كل دوراتك في مكان واحد",
      eyebrow: "بوابة التعلّم الخاصة بك",
      heroTitle: "رابط واحد، وكل دوراتك أمامك.",
      heroText: "اختر الدورة التي تريد متابعتها. عند إنشاء دورة جديدة، تُضاف هنا بدون تغيير روابط الدورات السابقة.",
      browseCourses: "استعرض الدورات",
      library: "مكتبة الدورات",
      coursesTitle: "اختر مسارك التدريبي",
      searchLabel: "ابحث عن دورة",
      searchPlaceholder: "ابحث عن دورة...",
      emptyState: "لا توجد دورة مطابقة لبحثك.",
      futureEyebrow: "مصممة للمستقبل",
      futureTitle: "إضافة الدورات الجديدة سهلة",
      futureText: "كل الدورات تُدار من ملف واحد اسمه courses.js. أضف بيانات الدورة والرابط، وستظهر بطاقة جديدة تلقائيًا.",
      footer: "مكتبتي التدريبية",
      backTop: "العودة للأعلى",
      openCourse: "دخول الدورة",
      available: "متاحة الآن",
      comingSoon: "قريبًا",
      countOne: "دورة واحدة",
      countMany: "{count} دورات"
    },
    en: {
      brand: "My Learning Library",
      brandSub: "All your courses in one place",
      eyebrow: "Your personal learning gateway",
      heroTitle: "One link. Every course in one place.",
      heroText: "Choose the course you want to continue. New courses can be added here without changing any existing course links.",
      browseCourses: "Browse courses",
      library: "Course library",
      coursesTitle: "Choose your learning path",
      searchLabel: "Search courses",
      searchPlaceholder: "Search courses...",
      emptyState: "No course matches your search.",
      futureEyebrow: "Built for growth",
      futureTitle: "Adding new courses is simple",
      futureText: "All courses are managed from one file named courses.js. Add the course details and URL, and a new card appears automatically.",
      footer: "My Learning Library",
      backTop: "Back to top",
      openCourse: "Open course",
      available: "Available now",
      comingSoon: "Coming soon",
      countOne: "1 course",
      countMany: "{count} courses"
    }
  };

  const state = {
    lang: localStorage.getItem("courseHubLanguage") || "ar",
    theme: localStorage.getItem("courseHubTheme") || "system",
    query: ""
  };

  const elements = {
    languageButton: document.getElementById("languageButton"),
    themeButton: document.getElementById("themeButton"),
    themeIcon: document.getElementById("themeIcon"),
    courseGrid: document.getElementById("courseGrid"),
    courseSearch: document.getElementById("courseSearch"),
    emptyState: document.getElementById("emptyState"),
    courseCount: document.getElementById("courseCount"),
    year: document.getElementById("year")
  };

  function text(key) {
    return translations[state.lang][key] || key;
  }

  function applyLanguage() {
    const isArabic = state.lang === "ar";
    document.documentElement.lang = state.lang;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = isArabic ? "مكتبتي التدريبية" : "My Learning Library";

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (translations[state.lang][key]) node.textContent = translations[state.lang][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      if (translations[state.lang][key]) node.placeholder = translations[state.lang][key];
    });

    elements.languageButton.innerHTML = `<span aria-hidden="true">${isArabic ? "EN" : "ع"}</span>`;
    elements.languageButton.setAttribute("aria-label", isArabic ? "Switch to English" : "التبديل إلى العربية");
    renderCourses();
  }

  function resolveTheme() {
    if (state.theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return state.theme;
  }

  function applyTheme() {
    const resolved = resolveTheme();
    document.documentElement.dataset.theme = resolved;
    elements.themeIcon.textContent = resolved === "dark" ? "☀" : "☾";
    elements.themeButton.setAttribute(
      "aria-label",
      resolved === "dark"
        ? (state.lang === "ar" ? "تفعيل الوضع الفاتح" : "Use light mode")
        : (state.lang === "ar" ? "تفعيل الوضع الليلي" : "Use dark mode")
    );
  }

  function normalized(value) {
    return String(value || "").toLocaleLowerCase(state.lang === "ar" ? "ar" : "en").trim();
  }

  function courseMatches(course) {
    if (!state.query) return true;
    const haystack = [
      course.titleAr,
      course.titleEn,
      course.descriptionAr,
      course.descriptionEn,
      course.badgeAr,
      course.badgeEn
    ].map(normalized).join(" ");
    return haystack.includes(normalized(state.query));
  }

  function createCourseCard(course, index) {
    const isArabic = state.lang === "ar";
    const available = course.status !== "coming-soon";
    const title = isArabic ? course.titleAr : course.titleEn;
    const description = isArabic ? course.descriptionAr : course.descriptionEn;
    const badge = isArabic ? course.badgeAr : course.badgeEn;
    const meta = isArabic ? course.metaAr : course.metaEn;
    const card = document.createElement("article");
    card.className = "course-card";
    card.style.setProperty("--delay", `${index * 70}ms`);

    const href = available ? course.url : "#";
    const linkAttrs = available ? "" : 'aria-disabled="true" tabindex="-1"';

    card.innerHTML = `
      <div class="course-card-top">
        <div class="course-icon" aria-hidden="true">${escapeHtml(course.icon || "•")}</div>
        <span class="status-pill ${available ? "available" : "soon"}">
          <span aria-hidden="true"></span>${available ? text("available") : text("comingSoon")}
        </span>
      </div>
      <div class="course-body">
        <span class="course-badge">${escapeHtml(badge)}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
      </div>
      <div class="course-footer">
        <span class="course-meta">${escapeHtml(meta)}</span>
        <a class="course-link ${available ? "" : "disabled"}" href="${escapeAttribute(href)}" ${linkAttrs}>
          <span>${text("openCourse")}</span>
          <span class="arrow" aria-hidden="true">${isArabic ? "←" : "→"}</span>
        </a>
      </div>
    `;
    return card;
  }

  function renderCourses() {
    const courses = Array.isArray(window.COURSES) ? window.COURSES : [];
    const filtered = courses.filter(courseMatches);
    elements.courseGrid.replaceChildren(...filtered.map(createCourseCard));
    elements.emptyState.hidden = filtered.length !== 0;

    const countText = courses.length === 1
      ? text("countOne")
      : text("countMany").replace("{count}", courses.length);
    elements.courseCount.textContent = countText;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }

  elements.languageButton.addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    localStorage.setItem("courseHubLanguage", state.lang);
    applyLanguage();
    applyTheme();
  });

  elements.themeButton.addEventListener("click", () => {
    state.theme = resolveTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("courseHubTheme", state.theme);
    applyTheme();
  });

  elements.courseSearch.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderCourses();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (state.theme === "system") applyTheme();
  });

  elements.year.textContent = new Date().getFullYear();
  applyLanguage();
  applyTheme();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();
