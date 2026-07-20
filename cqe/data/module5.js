window.CQE_MODULES=window.CQE_MODULES||[];
window.CQE_MODULES.push({
 n:5,ar:'التحسين المستمر',en:'Continuous Improvement',weight:26,
 intro:'يجمع هذا المحور أدوات تحليل المشكلات والتخطيط والتحسين، ومناهج Lean وSix Sigma والإجراءات التصحيحية والوقائية، مع التركيز على اختيار الأداة الصحيحة والتحقق من النتائج.',
 lessons:[
 {id:'5.1',title:'أدوات الجودة السبع الأساسية',en:'Seven Basic Quality Tools',level:'Apply',ref:'ASQ CQE Handbook, 5th ed., Ch.5; 4th ed., pp.217–229',body:`
 <p>الأدوات الأساسية تساعد في رؤية العملية والبيانات قبل القفز للحلول:</p>
 <ul><li><b>Flowchart:</b> خطوات وقرارات العملية.</li><li><b>Cause-and-Effect:</b> تنظيم الأسباب المحتملة.</li><li><b>Check Sheet:</b> جمع منظم للبيانات.</li><li><b>Histogram:</b> شكل وتشتت التوزيع.</li><li><b>Pareto:</b> ترتيب الفئات حسب الأثر.</li><li><b>Run/Control Chart:</b> التغير عبر الزمن.</li><li><b>Scatter Diagram:</b> العلاقة بين متغيرين.</li></ul>
 <div class='trap'><b>فخ:</b> Fishbone وPareto لا يثبتان السبب الجذري؛ الأول يولد فرضيات والثاني يحدد الفئات الأكبر، ثم يلزم تحقق.</div>`},
 {id:'5.2',title:'أدوات الإدارة والتخطيط',en:'Management and Planning Tools',level:'Apply',ref:'5th ed., Ch.5; 4th ed., pp.229–248',body:`
 <ul><li><b>Affinity Diagram:</b> تجميع أفكار كثيرة إلى موضوعات.</li><li><b>Interrelationship Digraph:</b> تحديد علاقات السبب والتأثير بين قضايا معقدة.</li><li><b>Tree Diagram:</b> تفكيك هدف إلى وسائل ومهام.</li><li><b>Matrix Diagram:</b> عرض العلاقات بين مجموعات.</li><li><b>Prioritization Matrix:</b> مقارنة البدائل بمعايير موزونة.</li><li><b>PDPC:</b> توقع ما قد يفشل في الخطة وإجراءات الاستجابة.</li><li><b>Activity Network Diagram:</b> تسلسل الأنشطة والمسار الحرج.</li></ul>
 <div class='example'><b>مثال:</b> استخدم Affinity بعد جلسة VOC، ثم Tree لتحويل الاحتياجات إلى متطلبات، ثم Prioritization لاختيار مبادرات التحسين.</div>`},
 {id:'5.3',title:'خرائط العمليات وSIPOC وBenchmarking',en:'Process Maps, SIPOC and Benchmarking',level:'Analyze',ref:'5th ed., Ch.5; 4th ed., pp.248–255',body:`
 <p><b>SIPOC</b> يعرض Suppliers, Inputs, Process, Outputs, Customers على مستوى عالٍ. Detailed Process Map يكشف القرارات وإعادة العمل والانتظار. Value Stream Map يضيف الزمن والمخزون وتدفق المعلومات.</p>
 <p>Benchmarking قد يكون داخليًا أو تنافسيًا أو وظيفيًا أو عامًا. الهدف فهم فجوة الأداء والممارسة، لا نسخ حل دون فهم السياق.</p>
 <div class='example'><b>مثال:</b> قد تتعلم شركة أجهزة طبية من قطاع الطيران في Traceability، لكن يجب تكييف الممارسة مع المخاطر والمتطلبات التنظيمية.</div>`},
 {id:'5.4',title:'TQM وKaizen وPDSA وTOC',en:'Improvement Methodologies',level:'Understand',ref:'5th ed., Ch.5; 4th ed., pp.255–271',body:`
 <p><b>TQM</b> يركز على العميل والقيادة والمشاركة والعمليات. <b>Kaizen</b> تحسينات صغيرة مستمرة بمشاركة العاملين. <b>PDSA</b> دورة تعلم: Plan, Do, Study, Act.</p>
 <p><b>Theory of Constraints</b>: حدد القيد، استغله، أخضع بقية النظام له، ارفع قدرته، ثم أعد الدورة إذا انتقل القيد.</p>
 <div class='example'><b>فخ تحسين محلي:</b> زيادة سرعة محطة قبل القيد تخلق مخزونًا ولا ترفع Throughput النظام. التحسين يجب أن يقاس على مستوى النظام.</div>`},
 {id:'5.5',title:'Six Sigma وDMAIC',en:'Six Sigma and DMAIC',level:'Apply',ref:'5th ed., Ch.5; 4th ed., pp.259–271',body:`
 <p>DMAIC مناسب لعملية قائمة تحتاج تحسينًا:</p><ol><li><b>Define:</b> المشكلة والعميل والنطاق.</li><li><b>Measure:</b> تعريف القياس وMSA وخط الأساس.</li><li><b>Analyze:</b> اختبار الأسباب بالبيانات.</li><li><b>Improve:</b> تطوير وتجربة الحل.</li><li><b>Control:</b> تثبيت المكاسب ونقل الملكية.</li></ol>
 <div class='formula'>DPMO = Defects / (Units × Opportunities per unit) × 1,000,000<br>RTY = Yield1 × Yield2 × ... × Yieldn</div>
 <div class='trap'><b>فخ:</b> فرصة العيب يجب أن تكون معرفة منطقيًا وثابتة؛ لا تُضخم عدد الفرص لتحسين Sigma Level شكليًا.</div>`},
 {id:'5.6',title:'Lean والقيمة والهدر',en:'Lean Principles and Eight Wastes',level:'Apply',ref:'5th ed., Ch.5; 4th ed., pp.271–284',body:`
 <p>Lean يحدد القيمة من منظور العميل، يرسم تدفق القيمة، ينشئ التدفق، يستخدم Pull، ويسعى للكمال.</p>
 <p>الهدر <b>TIMWOODS</b>: Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills underutilized.</p>
 <p>ليس كل نشاط لا يغير المنتج قابلًا للإزالة؛ بعض الأنشطة Business Non-Value-Added مطلوبة قانونيًا أو لإدارة الخطر، ويجب تبسيطها.</p>
 <div class='example'><b>مثال:</b> الفحص المتكرر بسبب عملية غير قادرة هدر، لكن فحص سلامة تنظيمي قد يبقى ضروريًا حتى مع عملية مستقرة.</div>`},
 {id:'5.7',title:'التدفق وTakt وKanban وSMED',en:'Flow, Pull and Lean Tools',level:'Analyze',ref:'5th ed., Ch.5; 4th ed., pp.276–286',body:`
 <div class='formula'>Takt Time = Available Production Time / Customer Demand</div>
 <p>Cycle Time زمن إنتاج الوحدة، Lead Time الزمن من الطلب إلى التسليم. لتحسين التدفق تُستخدم Cellular Layout، Standard Work، 5S، Visual Management، Kanban، Heijunka، وSMED.</p>
 <p>SMED يفصل الإعداد الداخلي الذي يتطلب توقف المعدة عن الخارجي الممكن أثناء التشغيل، ثم يحول الداخلي إلى خارجي ويبسّط الباقي.</p>
 <div class='trap'><b>فخ:</b> خفض Cycle Time تحت Takt لا يعني نجاح النظام إذا كانت الجودة أو التوافر ضعيفين.</div>`},
 {id:'5.8',title:'OEE وفعالية المعدات',en:'Overall Equipment Effectiveness',level:'Analyze',ref:'5th ed., Ch.5 new content',body:`
 <div class='formula'>OEE = Availability × Performance × Quality</div>
 <ul><li><b>Availability:</b> Run Time / Planned Production Time.</li><li><b>Performance:</b> Ideal Cycle Time × Total Count / Run Time.</li><li><b>Quality:</b> Good Count / Total Count.</li></ul>
 <div class='example'><b>مثال:</b> Availability=90%، Performance=95%، Quality=98%؛ OEE≈83.8%، وليس متوسط النسب.</div>
 <p>تجنب استخدام OEE لمقارنة معدات مختلفة بلا سياق. استخدمه لفهم الخسائر: أعطال، إعداد، توقفات صغيرة، سرعة منخفضة، عيوب بدء التشغيل، وعيوب الإنتاج.</p>`},
 {id:'5.9',title:'تعريف المشكلة والاحتواء',en:'Problem Identification and Containment',level:'Analyze',ref:'5th ed., Ch.5; 4th ed., pp.286–289',body:`
 <p>وصف المشكلة الجيد يحدد What, Where, When, Extent ويقارن Is/Is Not. يجب فصل العرض Symptom عن السبب Cause.</p>
 <p><b>Containment</b> يحمي العميل مؤقتًا مثل عزل المخزون أو 100% Sort، لكنه لا يزيل السبب ويجب أن يكون له مالك ومعيار انتهاء.</p>
 <div class='example'><b>وصف ضعيف:</b> “الجودة سيئة”. <b>وصف قوي:</b> “ارتفع تسريب صمام الطراز X من 0.4% إلى 3.2% في خط 2 منذ تغيير قالب التجويف يوم 5 مايو، بينما خط 1 مستقر.”</div>`},
 {id:'5.10',title:'تحليل السبب الجذري و5 Whys',en:'Root Cause Analysis and 5 Whys',level:'Evaluate',ref:'5th ed., Ch.5 new 5 Whys content; 4th ed., pp.289–291',body:`
 <p>السبب الجذري هو سبب يمكن التحكم فيه وإذا أزيل يمنع التكرار أو يخفض احتمالَه بصورة معتبرة. استخدم 5 Whys كمسار تفكير، لا كعدد إلزامي.</p>
 <p>تحقق من السبب عبر إعادة إنتاج الفشل أو المقارنة أو التجربة أو البيانات. حلل:</p><ul><li><b>Occurrence cause:</b> لماذا حدث العيب؟</li><li><b>Escape cause:</b> لماذا لم تكتشفه الضوابط؟</li><li><b>Systemic cause:</b> لماذا سمح النظام بوجود الفجوة؟</li></ul>
 <div class='trap'><b>فخ:</b> “خطأ مشغل” غالبًا نهاية سطحية؛ اسأل عن التصميم والتدريب والمعيار والواجهة والضغط والـPoka-Yoke.</div>`},
 {id:'5.11',title:'الإجراء التصحيحي والوقائي والتحقق',en:'Corrective and Preventive Action',level:'Evaluate',ref:'5th ed., Ch.5; 4th ed., pp.291–298',body:`
 <p><b>Correction</b> يصلح الحالة الحالية. <b>Corrective Action</b> يزيل سبب عدم المطابقة لمنع التكرار. التفكير الوقائي يعالج الخطر قبل الحدوث.</p>
 <p>اختيار الإجراء يقارن الفعالية والخطر والتكلفة والزمن والآثار الجانبية. بعد التنفيذ يجب التحقق من:</p><ul><li>اكتمال التنفيذ كما خُطط.</li><li>انخفاض المشكلة عبر فترة كافية.</li><li>عدم خلق مشكلة جديدة.</li><li>تحديث الوثائق وFMEA وControl Plan والتدريب.</li></ul>
 <div class='example'><b>مثال:</b> استبدال تعليمات نصية بFixture يمنع تركيب القطعة بالعكس أقوى من إعادة التدريب وحدها.</div>`}
 ]
});