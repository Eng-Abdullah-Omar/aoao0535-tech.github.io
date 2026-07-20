window.CQE_MODULES=window.CQE_MODULES||[];
window.CQE_MODULES.push({
 n:3,ar:'تصميم المنتج والعملية والخدمة',en:'Product, Process, and Service Design',weight:21,
 intro:'يشرح هذا المحور كيف تتحول احتياجات العميل إلى متطلبات وتصميم قابل للتصنيع والقياس والاعتماد، وكيف تُدار مخاطر التصميم والموثوقية والتحقق والتصديق.',
 lessons:[
 {id:'3.1',title:'تصنيف خصائص الجودة',en:'Classification of Quality Characteristics',level:'Understand',ref:'ASQ CQE Handbook, 5th ed., Ch.3; 4th ed., pp.107–108',body:`
 <p>خصائص الجودة قد تكون <b>متغيرات Variables</b> مثل الطول والضغط، أو <b>صفات Attributes</b> مثل مطابق/غير مطابق. ويمكن تصنيفها حسب الأهمية إلى حرجة للسلامة، رئيسية للوظيفة، وثانوية.</p>
 <p>الخاصية الحرجة تحتاج ضوابط أقوى في التصميم والمورد والعملية والقياس والتتبع. التصنيف لا يكون بناءً على سهولة الفحص، بل على أثر الفشل على العميل والسلامة والقانون والوظيفة.</p>
 <div class='example'><b>مثال:</b> قطر محور قد يكون Special Characteristic لأنه يؤثر في تثبيت عجلة؛ لون الملصق قد يكون ثانويًا إلا إذا كان اللون نفسه ترميزًا للسلامة.</div>`},
 {id:'3.2',title:'مدخلات التصميم وCTQ',en:'Design Inputs and Critical-to-Quality',level:'Analyze',ref:'5th ed., Ch.3 new CTQ content; 4th ed., pp.108–111',body:`
 <p>مدخلات التصميم تشمل احتياجات العميل، الأداء، السلامة، المتطلبات القانونية، الواجهات، البيئة، الاعتمادية، الصيانة، التصنيع، الاختبار، والخبرات السابقة.</p>
 <p><b>CTQ</b> يحول الحاجة إلى متطلب قابل للقياس له تعريف تشغيلي وحدود وطريقة قياس. يجب تجنب كلمات مثل “سريع” و“قوي” دون رقم وشروط اختبار.</p>
 <div class='example'><b>VOC:</b> “المضخة هادئة”. <b>CTQ:</b> مستوى الضوضاء ≤ 55 dBA على بعد متر عند 80% من الحمل وفق طريقة اختبار محددة.</div>
 <div class='trap'><b>فخ:</b> CTQ ليس كل ما يمكن قياسه؛ هو ما يرتبط مباشرة بحاجة حرجة للعميل أو الخطر.</div>`},
 {id:'3.3',title:'مراجعات التصميم وضبط التغيير',en:'Design Review and Change Control',level:'Apply',ref:'5th ed., Ch.3; 4th ed., pp.111–112',body:`
 <p>Design Review مراجعة منهجية متعددة التخصصات لتقييم قدرة التصميم على تحقيق المتطلبات وتحديد المشكلات قبل الانتقال للمرحلة التالية.</p>
 <h4>أسئلة المراجعة</h4><ul><li>هل المتطلبات كاملة وغير متعارضة؟</li><li>هل المخاطر الحرجة عولجت؟</li><li>هل التصميم قابل للتصنيع والتجميع والفحص والصيانة؟</li><li>هل نتائج الاختبارات كافية؟</li></ul>
 <p>التغيير الهندسي يجب أن يقيّم أثره على المواد والموردين والمخزون والأدوات والبرامج والوثائق والعملاء والاعتمادات السابقة.</p>
 <div class='example'><b>مثال:</b> تغيير مادة Seal قد يحسن الحرارة لكنه يؤثر في التوافق الكيميائي وعزم التجميع والمورد ومدة التخزين؛ لا يُعامل كتغيير رسم بسيط.</div>`},
 {id:'3.4',title:'QFD وبيت الجودة',en:'Quality Function Deployment',level:'Apply',ref:'5th ed., Ch.3 restructured content; 4th ed., pp.59–63',body:`
 <p><b>QFD</b> ينشر صوت العميل عبر التصميم والعملية. أشهر مصفوفاته House of Quality.</p>
 <ol><li>تحديد احتياجات العميل وأهميتها.</li><li>تحديد الخصائص الفنية القابلة للقياس.</li><li>تقييم قوة العلاقة بين كل حاجة وكل خاصية.</li><li>تحليل الترابطات الفنية في “السقف”.</li><li>مقارنة المنافسين وتحديد الأهداف.</li></ol>
 <div class='example'><b>مثال:</b> حاجة “بطارية تدوم طويلًا” ترتبط بسعة الطاقة، استهلاك النظام، كفاءة الشحن، والحرارة. رفع السعة قد يتعارض مع الوزن والحجم.</div>
 <div class='trap'><b>فخ:</b> QFD أداة ترجمة وترتيب أولويات، وليس بديلًا للاختبار الهندسي.</div>`},
 {id:'3.5',title:'التصميم من أجل X',en:'Design for X',level:'Apply',ref:'5th ed., Ch.3; supporting ASQ design references',body:`
 <p>DFX يدمج احتياجات المراحل اللاحقة داخل التصميم بدل معالجة المشكلات بعد الإطلاق.</p>
 <ul><li><b>DFM:</b> Design for Manufacturability.</li><li><b>DFA:</b> Design for Assembly.</li><li><b>DFR:</b> Design for Reliability.</li><li><b>DFT/DFI:</b> Design for Test/Inspection.</li><li><b>DFS:</b> Design for Safety/Serviceability.</li><li><b>DFE:</b> Design for Environment.</li></ul>
 <div class='example'><b>مثال:</b> تقليل عدد المسامير وتوحيد مقاسها يخفض زمن التجميع، مخاطر الخطأ، المخزون، وأدوات العامل.</div>
 <div class='trap'><b>فخ:</b> تحسين التصنيع لا يجوز أن يضعف وظيفة المنتج أو سلامته؛ القرار متعدد الأهداف.</div>`},
 {id:'3.6',title:'الرسومات وGD&T',en:'Technical Drawings and GD&T',level:'Apply',ref:'5th ed., Ch.3; 4th ed., pp.112–115',body:`
 <p>GD&T لغة تحدد الشكل والاتجاه والموقع والملف وRunout بالنسبة إلى Datums. وهي تفصل متطلبات الوظيفة عن طريقة التصنيع.</p>
 <ul><li><b>Form:</b> Straightness, Flatness, Circularity, Cylindricity.</li><li><b>Orientation:</b> Parallelism, Perpendicularity, Angularity.</li><li><b>Location:</b> Position, Concentricity, Symmetry.</li><li><b>Profile:</b> Line/Surface profile.</li><li><b>Runout:</b> Circular/Total runout.</li></ul>
 <p><b>MMC/LMC/RFS</b> تؤثر في Bonus Tolerance وعلاقات التجميع. Datums تنشئ إطار المرجع الذي تُقاس منه الخصائص.</p>
 <div class='example'><b>فكرة وظيفية:</b> Position tolerance لثقوب لوحة يضمن تجميع البراغي أفضل من تفاوتات ± مستقلة قد تسمح بتراكم غير وظيفي.</div>`},
 {id:'3.7',title:'التحقق والتصديق والتأهيل',en:'Verification, Validation, IQ/OQ/PQ',level:'Analyze',ref:'5th ed., Ch.3 updates; 4th ed., pp.115–117',body:`
 <p><b>Verification:</b> هل مخرجات التصميم تحقق مدخلاته؟ <b>Validation:</b> هل المنتج يحقق الاستخدام المقصود في ظروف حقيقية أو ممثلة؟</p>
 <p>في تأهيل المعدات والعمليات:</p><ul><li><b>IQ:</b> Installation Qualification — هل رُكبت المعدات وفق المتطلبات؟</li><li><b>OQ:</b> Operational Qualification — هل تعمل عبر نطاقات التشغيل المحددة؟</li><li><b>PQ:</b> Performance Qualification — هل تحقق أداءً مستمرًا في ظروف الإنتاج الفعلية؟</li></ul>
 <div class='example'><b>مثال:</b> نجاح ماكينة التعبئة في التشغيل الفارغ OQ لا يثبت أنها تنتج عبوات مطابقة عبر ورديات ومشغلين ودفعات مواد مختلفة؛ هذا جزء من PQ.</div>`},
 {id:'3.8',title:'أساسيات الاعتمادية ومقاييسها',en:'Reliability and Maintainability Measures',level:'Apply',ref:'5th ed., Ch.3; 4th ed., pp.117–131',body:`
 <p>الاعتمادية احتمال أن يؤدي المنتج وظيفته المطلوبة لمدة محددة وتحت ظروف محددة.</p>
 <div class='formula'>R(t)=e<sup>-λt</sup> &nbsp; when failure rate λ is constant<br>MTBF=1/λ<br>Availability = MTBF / (MTBF + MTTR)</div>
 <p><b>MTTF</b> يُستخدم غالبًا للمنتجات غير القابلة للإصلاح، و<b>MTBF</b> للقابلة للإصلاح. <b>MTTR</b> يقيس زمن الاستعادة أو الإصلاح.</p>
 <div class='example'><b>مثال:</b> MTBF=900 ساعة وMTTR=100 ساعة؛ التوافر = 900/1000 = 90%.</div>
 <div class='trap'><b>فخ:</b> اعتمادية عالية لا تعني توافرًا عاليًا إذا كان الإصلاح بطيئًا جدًا.</div>`},
 {id:'3.9',title:'نماذج الأنظمة وWeibull',en:'Reliability Models and Weibull',level:'Analyze',ref:'5th ed., Ch.3; 4th ed., pp.131–135',body:`
 <p>في نظام Series يفشل النظام بفشل أي مكوّن:</p><div class='formula'>Rsystem = R1 × R2 × ... × Rn</div>
 <p>في مكونات متوازية مستقلة يؤدي أي مسار ناجح الوظيفة:</p><div class='formula'>Rparallel = 1 - [(1-R1)(1-R2)...(1-Rn)]</div>
 <p>توزيع Weibull يستخدم شكل β: أقل من 1 للفشل المبكر، قريب من 1 لمعدل ثابت، أكبر من 1 للتآكل. منحنى Bathtub يجمع الفشل المبكر والعمر المفيد والتآكل.</p>
 <div class='example'><b>مثال:</b> إضافة مكوّن احتياطي Parallel قد ترفع الاعتمادية، لكن الفرضية تفشل إذا كان للمكوّنين سبب مشترك مثل مصدر طاقة واحد.</div>`},
 {id:'3.10',title:'الصيانة الوقائية والتنبؤية',en:'Maintenance and Maintainability',level:'Analyze',ref:'5th ed., Ch.3; 4th ed., pp.118–124',body:`
 <p><b>Corrective maintenance</b> بعد الفشل. <b>Preventive</b> حسب الوقت أو الاستخدام. <b>Predictive/Condition-based</b> تعتمد على حالة فعلية مثل الاهتزاز والحرارة والزيت.</p>
 <p>اختيار السياسة يعتمد على نمط الفشل، أثره، إمكانية الكشف، تكلفة التوقف، والسلامة. صيانة دورية لمكوّن لا يرتبط فشله بالعمر قد لا تخفض المخاطر.</p>
 <div class='example'><b>مثال:</b> تحليل الاهتزاز لمحمل يسمح باستبداله قبل الفشل، بينما تغيير كل المحامل شهريًا قد يخلق أخطاء تركيب وهدرًا.</div>
 <div class='trap'><b>فخ:</b> الصيانة الوقائية ليست دائمًا أفضل من Run-to-Failure؛ للمكوّن الرخيص غير الحرج قد يكون Run-to-Failure اقتصاديًا.</div>`},
 {id:'3.11',title:'FMEA وتحليل المخاطر التصميمية',en:'dFMEA, pFMEA, uFMEA and Hazard Analysis',level:'Evaluate',ref:'5th ed., Ch.3 new hazard/uFMEA content; 4th ed., pp.135 and 496–520',body:`
 <p><b>dFMEA</b> يدرس فشل التصميم، <b>pFMEA</b> فشل خطوات العملية، و<b>uFMEA</b> أخطاء الاستخدام والتفاعل البشري. التسلسل: الوظيفة، نمط الفشل، الأثر، الشدة، السبب، الحدوث، الضوابط، الكشف، الإجراء.</p>
 <div class='formula'>Traditional RPN = Severity × Occurrence × Detection</div>
 <p>RPN أداة ترتيب لا قرار آلي؛ الخطر ذو شدة سلامة عالية لا يُهمل بسبب حدوث منخفض. الإجراء الأقوى يزيل السبب أو يقلل الحدوث، ثم يحسن الكشف.</p>
 <p>Hazard Analysis وFTA وFault Tree وPreliminary Hazard Analysis تدعم المخاطر النظامية. يجب تحليل <b>سبب الفشل</b> و<b>سبب الهروب</b> معًا.</p>
 <div class='trap'><b>فخ:</b> إضافة فحص نهائي تخفض Detection score غالبًا، لكنها لا تخفض Occurrence.</div>`}
 ]
});