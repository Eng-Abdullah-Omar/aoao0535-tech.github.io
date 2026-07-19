# بوابة الدورات الرئيسية

هذه الصفحة مصممة لتكون الرابط الرئيسي الوحيد لكل دوراتك على GitHub Pages.

## الرابط المقترح

أنشئ مستودعًا باسم حسابك تمامًا:

```text
aoao0535-tech.github.io
```

بعد رفع الملفات وتفعيل GitHub Pages يصبح رابط البوابة:

```text
https://aoao0535-tech.github.io/
```

## الروابط المجهزة داخل الصفحة

- Six Sigma Green Belt:
  `https://aoao0535-tech.github.io/six-sigma-green-belt/`
- ISO 9001 Internal & Lead Auditor:
  `https://aoao0535-tech.github.io/iso9001-audit-academy/`

الصفحة تستخدم روابط نسبية تبدأ بـ `/`، لذلك ستعمل تلقائيًا داخل حسابك.

## طريقة النشر

1. أنشئ Repository جديدًا باسم `aoao0535-tech.github.io`.
2. اجعله Public.
3. ارفع جميع الملفات الموجودة داخل هذا المجلد إلى جذر المستودع.
4. افتح `Settings > Pages`.
5. اختر `Deploy from a branch`.
6. اختر الفرع `main` والمجلد `/(root)` ثم Save.

## إضافة دورة جديدة لاحقًا

افتح ملف `courses.js` وأضف عنصرًا جديدًا داخل `window.COURSES`:

```js
{
  id: "new-course",
  titleAr: "اسم الدورة بالعربي",
  titleEn: "Course name in English",
  descriptionAr: "وصف مختصر للدورة.",
  descriptionEn: "A short course description.",
  url: "/new-course/",
  icon: "★",
  badgeAr: "التصنيف",
  badgeEn: "Category",
  metaAr: "عدد الدروس • عربي / إنجليزي",
  metaEn: "Lesson count • Arabic / English",
  status: "available"
}
```

ثم احفظ التعديل. ستظهر الدورة الجديدة تلقائيًا في الصفحة.

## ملاحظة مهمة

إذا كان اسم مستودع Six Sigma مختلفًا، عدّل قيمة `url` للدورة الأولى داخل `courses.js` فقط.
