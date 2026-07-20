window.CQE_MODULES=window.CQE_MODULES||[];
window.CQE_MODULES.push({
 n:6,ar:'الطرق الكمية والأدوات',en:'Quantitative Methods and Tools',weight:34,
 intro:'أثقل محاور الاختبار. يتطلب فهم المفاهيم والافتراضات واختيار الأداة، ثم إجراء الحساب وتفسير النتيجة. لا تحفظ المعادلة دون معرفة متى يجوز استخدامها.',
 lessons:[
 {id:'6.1',title:'أنواع البيانات ومقاييس القياس',en:'Data Types and Measurement Scales',level:'Understand',ref:'ASQ CQE Handbook, 5th ed., Ch.6; 4th ed., pp.299–303',body:`
 <p>البيانات إما <b>Continuous</b> مثل الوزن، أو <b>Discrete</b> مثل عدد العيوب. وقد تكون Variable أو Attribute.</p>
 <ul><li><b>Nominal:</b> فئات دون ترتيب، مثل نوع العيب.</li><li><b>Ordinal:</b> ترتيب دون مسافات متساوية، مثل منخفض/متوسط/عالٍ.</li><li><b>Interval:</b> مسافات متساوية وصفر غير مطلق، مثل °C.</li><li><b>Ratio:</b> صفر حقيقي ونسب ذات معنى، مثل الزمن والكتلة.</li></ul>
 <div class='trap'><b>فخ:</b> لا تحسب متوسطًا ذا معنى لأرقام أكواد الفئات؛ رقم المورد 3 ليس أكبر جودة من المورد 2.</div>`},
 {id:'6.2',title:'جمع البيانات والنزاهة والأتمتة',en:'Data Collection, Integrity and Automation',level:'Analyze',ref:'5th ed., Ch.6 new automation/database content; 4th ed., pp.300–303',body:`
 <p>خطة جمع البيانات تحدد التعريف التشغيلي، المصدر، من يجمع، متى، حجم العينة، طريقة الاختيار، ووحدات القياس. يجب التحقق من Completeness وAccuracy وConsistency وTimeliness.</p>
 <p>الأتمتة وقواعد البيانات تقللان النقل اليدوي، لكنهما قد تنشران الخطأ أسرع. يلزم Validation للواجهات، قواعد كشف القيم الشاذة، Audit Trail، وإدارة Master Data.</p>
 <div class='example'><b>مثال:</b> إذا كان مستشعر الضغط يرسل psi بينما النظام يفسر kPa، ستصبح لوحة المؤشرات دقيقة حسابيًا وخاطئة ماديًا.</div>`},
 {id:'6.3',title:'الإحصاء الوصفي',en:'Descriptive Statistics',level:'Apply',ref:'5th ed., Ch.6; 4th ed., pp.303–311',body:`
 <div class='formula'>x̄ = Σx / n<br>s² = Σ(x-x̄)² / (n-1)<br>s = √s²<br>CV = s/x̄ × 100%</div>
 <p>المتوسط حساس للقيم الشاذة، والوسيط أكثر مقاومة. المدى بسيط لكنه يعتمد على قيمتين فقط. IQR = Q3-Q1 مناسب للبيانات المنحرفة.</p>
 <p>Skewness يصف عدم التناظر، وKurtosis شكل الذيل/القمة. لا تلخص توزيعًا متعدد القمم بمتوسط واحد فقط.</p>
 <div class='example'><b>مثال:</b> أزمنة إصلاح 10،11،12،13،90؛ المتوسط 27.2 والوسيط 12. المتوسط وحده يضلل بسبب حالة شاذة.</div>`},
 {id:'6.4',title:'مفاهيم الاحتمال',en:'Probability Concepts',level:'Apply',ref:'5th ed., Ch.6; 4th ed., pp.311–321',body:`
 <div class='formula'>P(Aᶜ)=1-P(A)<br>P(A∪B)=P(A)+P(B)-P(A∩B)<br>P(A|B)=P(A∩B)/P(B)</div>
 <p>للحدثين المستقلين: P(A∩B)=P(A)P(B). الاستقلال يختلف عن التنافي؛ الحدثان المتنافيان لا يحدثان معًا، بينما المستقلان لا يؤثر أحدهما في احتمال الآخر.</p>
 <p>Bayes يحدث الاحتمال بعد ظهور دليل جديد، وهو مفيد في تفسير نتائج الفحص عندما يكون العيب نادرًا.</p>
 <div class='trap'><b>فخ:</b> حتى اختبار عالي الحساسية قد ينتج Positive False كثيرة إذا كان انتشار العيب منخفضًا جدًا.</div>`},
 {id:'6.5',title:'التوزيعات المستمرة',en:'Continuous Probability Distributions',level:'Analyze',ref:'5th ed., Ch.6; 4th ed., pp.321–333',body:`
 <ul><li><b>Normal:</b> متناظر ويحدد بـμ وσ.</li><li><b>Uniform:</b> كل القيم في النطاق متساوية الاحتمال.</li><li><b>Exponential:</b> الزمن بين أحداث بمعدل ثابت وMemoryless.</li><li><b>Weibull:</b> مرن للاعتمادية.</li><li><b>Lognormal:</b> متغير موجب ناتج عن عوامل مضاعفة.</li><li><b>t:</b> تقدير المتوسط مع σ مجهول، وذيول أثقل خاصة عند n صغير.</li></ul>
 <div class='formula'>Z = (x-μ)/σ</div>
 <div class='trap'><b>فخ:</b> لا تستخدم جداول الطبيعي آليًا لبيانات شديدة الانحراف أو محدودة بصفر دون فحص الملاءمة أو تحويل مناسب.</div>`},
 {id:'6.6',title:'التوزيعات المتقطعة',en:'Discrete Probability Distributions',level:'Analyze',ref:'5th ed., Ch.6; 4th ed., pp.333–339',body:`
 <ul><li><b>Binomial:</b> n ثابت، محاولات مستقلة، نتيجتان، واحتمال p ثابت. المتوسط np والتباين np(1-p).</li><li><b>Poisson:</b> عدد أحداث في زمن/مساحة بمعدل λ؛ المتوسط والتباين λ.</li><li><b>Hypergeometric:</b> سحب دون إرجاع من مجتمع محدود.</li><li><b>Geometric:</b> عدد المحاولات حتى أول نجاح.</li></ul>
 <div class='example'><b>مثال:</b> عدد خدوش على متر مربع قد يناسب Poisson؛ عدد القطع المعيبة في عينة ثابتة قد يناسب Binomial.</div>
 <div class='trap'><b>فخ:</b> “عيوب Defects” قد تتعدد في الوحدة، أما “وحدات معيبة Defectives” فكل وحدة تُعد مرة واحدة.</div>`},
 {id:'6.7',title:'نظرية الحد المركزي وتوزيعات العينات',en:'CLT and Sampling Distributions',level:'Analyze',ref:'5th ed., Ch.6; 4th ed., pp.339–347',body:`
 <p>توزيع متوسطات العينات يقترب من الطبيعي مع زيادة n تحت شروط مناسبة، ومتوسطه μ وانحرافه المعياري <b>Standard Error</b>:</p>
 <div class='formula'>SE(x̄)=σ/√n &nbsp; or &nbsp; s/√n</div>
 <p>زيادة العينة تقلل الخطأ المعياري بنسبة الجذر، لذلك خفض SE للنصف يحتاج مضاعفة الحجم أربع مرات.</p>
 <p>العينة الكبيرة لا تعالج Bias في طريقة الاختيار؛ عينة ضخمة منحازة تعطي تقديرًا دقيقًا للقيمة الخطأ.</p>`},
 {id:'6.8',title:'التقدير وفترات الثقة',en:'Point Estimates and Confidence Intervals',level:'Apply',ref:'5th ed., Ch.6; 4th ed., pp.347–359',body:`
 <p>Point Estimate قيمة واحدة، بينما Confidence Interval تعكس عدم اليقين.</p>
 <div class='formula'>Mean, σ known: x̄ ± z(α/2) σ/√n<br>Mean, σ unknown: x̄ ± t(α/2,df) s/√n<br>Proportion: p̂ ± z(α/2) √[p̂(1-p̂)/n]</div>
 <p>ثقة 95% تعني أن الطريقة ستنتج فترات تحتوي المعلمة في نحو 95% من العينات المتكررة، لا أن احتمال المعلمة داخل الفترة الحالية 95% بالمعنى التكراري.</p>
 <div class='trap'><b>فخ:</b> زيادة الثقة توسع الفترة، وزيادة n تضيقها.</div>`},
 {id:'6.9',title:'منطق اختبار الفرضيات',en:'Hypothesis Testing Framework',level:'Analyze',ref:'5th ed., Ch.6; 4th ed., pp.359–383',body:`
 <p>حدد H0 وH1، مستوى α، الاختبار والافتراضات، ثم Statistic وp-value والقرار والتفسير العملي.</p>
 <ul><li><b>Type I α:</b> رفض H0 وهي صحيحة.</li><li><b>Type II β:</b> عدم رفض H0 وهي خاطئة.</li><li><b>Power=1-β:</b> احتمال اكتشاف أثر حقيقي محدد.</li></ul>
 <p>إذا p≤α نرفض H0. لا تقل “نقبل H0” عادة؛ نقول لا توجد أدلة كافية لرفضها.</p>
 <div class='trap'><b>فخ:</b> p-value ليست احتمال أن H0 صحيحة، وليست حجم الأثر. عينة ضخمة قد تجعل فرقًا تافهًا دالًا إحصائيًا.</div>`},
 {id:'6.10',title:'اختيار الاختبار الإحصائي',en:'Selecting Statistical Tests',level:'Evaluate',ref:'5th ed., Ch.6; 4th ed., pp.359–398',body:`
 <table><tr><th>السؤال</th><th>اختبار شائع</th></tr><tr><td>متوسط واحد مقابل هدف</td><td>One-sample t أو z</td></tr><tr><td>متوسط مجموعتين مستقلتين</td><td>Two-sample t</td></tr><tr><td>قبل/بعد لنفس الوحدات</td><td>Paired t</td></tr><tr><td>3 متوسطات أو أكثر</td><td>ANOVA</td></tr><tr><td>نسبة واحدة/نسبتان</td><td>Proportion test</td></tr><tr><td>استقلال متغيرين وصفيين</td><td>Chi-square</td></tr><tr><td>مقارنة تباينين</td><td>F test</td></tr></table>
 <p>إذا لم تتحقق افتراضات الاختبارات المعلمية، قد تستخدم بدائل مثل Mann–Whitney وWilcoxon وKruskal–Wallis، أو تحويل البيانات.</p>
 <div class='trap'><b>فخ:</b> بيانات قبل/بعد ليست مجموعتين مستقلتين.</div>`},
 {id:'6.11',title:'ANOVA وتحليل التباين',en:'Analysis of Variance',level:'Analyze',ref:'5th ed., Ch.6; 4th ed., pp.383–398',body:`
 <p>ANOVA تختبر H0 بأن جميع المتوسطات متساوية عبر مقارنة التباين بين المجموعات بالتباين داخلها.</p>
 <div class='formula'>F = MSbetween / MSwithin</div>
 <p>رفض H0 يعني أن متوسطًا واحدًا على الأقل مختلف، ولا يحدد أيها؛ تُستخدم مقارنات Post-hoc مع ضبط الخطأ المتعدد.</p>
 <p>الافتراضات: استقلال المشاهدات، بواقي قريبة من الطبيعي، وتجانس معقول للتباين. Two-way ANOVA تفحص عاملين والتفاعل بينهما.</p>
 <div class='trap'><b>فخ:</b> إجراء عدة t-tests بدل ANOVA يرفع Family-wise Type I Error.</div>`},
 {id:'6.12',title:'الارتباط والانحدار والسلاسل الزمنية',en:'Correlation, Regression and Time Series',level:'Analyze',ref:'5th ed., Ch.6; 4th ed., pp.398–414',body:`
 <p>معامل Pearson r من -1 إلى +1 للعلاقة الخطية. الارتباط لا يثبت السببية وقد يتأثر بالقيم الشاذة والنطاق المحدود.</p>
 <div class='formula'>Simple regression: ŷ = b0 + b1x</div>
 <p>R² نسبة التباين المفسرة، لكنه لا يضمن صلاحية النموذج. افحص البواقي للخطية والاستقلال وثبات التباين والطبيعية عند الاستدلال.</p>
 <p>في Time Series قد توجد Trend وSeasonality وAutocorrelation؛ تقسيم البيانات عشوائيًا قد يسرّب المستقبل إلى الماضي.</p>
 <div class='trap'><b>فخ:</b> Extrapolation خارج نطاق البيانات مخاطرة حتى لو كان R² مرتفعًا.</div>`},
 {id:'6.13',title:'أساسيات SPC والمجموعات العقلانية',en:'SPC and Rational Subgrouping',level:'Analyze',ref:'5th ed., Ch.6; 4th ed., pp.414–416',body:`
 <p>SPC يميز <b>Common Causes</b> الكامنة في النظام عن <b>Special Causes</b> غير المعتادة. الاستجابة لسبب عام كأنه خاص تؤدي إلى Tampering وزيادة التباين.</p>
 <p><b>Rational Subgroup</b> يجمع مشاهدات متقاربة بحيث يظهر التباين قصير المدى داخل المجموعة والتغير عبر الزمن بين المجموعات.</p>
 <div class='example'><b>مثال:</b> خمس قطع متتالية كل ساعة أفضل لدراسة تغير العملية من أخذ قطعة واحدة من كل وردية وخلطها في مجموعة واحدة.</div>
 <div class='trap'><b>فخ:</b> حدود السيطرة ليست حدود المواصفة، وقد تكون العملية مستقرة لكنها غير قادرة.</div>`},
 {id:'6.14',title:'مخططات المتغيرات',en:'Variables Control Charts',level:'Apply',ref:'5th ed., Ch.6; 4th ed., pp.416–443 and Appendix A–B',body:`
 <ul><li><b>X̄-R:</b> متوسط ومدى لمجموعات صغيرة عادة 2–10.</li><li><b>X̄-S:</b> متوسط وانحراف معياري لمجموعات أكبر.</li><li><b>I-MR:</b> قياسات فردية عندما n=1.</li></ul>
 <div class='formula'>X̄ chart: UCL=X̿+A2R̄, CL=X̿, LCL=X̿-A2R̄<br>R chart: UCL=D4R̄, LCL=D3R̄</div>
 <p>حلل مخطط التشتت R أو S أولًا؛ إذا كان غير مستقر، تفسير مخطط المتوسط قد يكون مضللًا. الثوابت تعتمد على حجم المجموعة.</p>
 <div class='trap'><b>فخ:</b> لا تحسب Moving Range بين بيانات غير مرتبة زمنيًا.</div>`},
 {id:'6.15',title:'مخططات الصفات وتفسير الإشارات',en:'Attribute Charts and Signals',level:'Evaluate',ref:'5th ed., Ch.6; 4th ed., pp.416–448',body:`
 <ul><li><b>p:</b> نسبة الوحدات غير المطابقة، n قد يتغير.</li><li><b>np:</b> عدد الوحدات غير المطابقة، n ثابت.</li><li><b>c:</b> عدد العيوب مع فرصة فحص ثابتة.</li><li><b>u:</b> عيوب لكل وحدة مع فرصة/حجم متغير.</li></ul>
 <p>إشارات السبب الخاص قد تشمل نقطة خارج 3σ، سلسلة طويلة على جانب واحد، اتجاهًا، أو نمطًا غير عشوائي. استخدم قواعد محددة مسبقًا وتجنب مطاردة كل تذبذب.</p>
 <div class='example'><b>اختيار:</b> عدد الخدوش لكل متر مربع مع اختلاف مساحة العينة → u-chart؛ نسبة القطع المعيبة → p-chart.</div>`},
 {id:'6.16',title:'قدرة وأداء العملية',en:'Process Capability and Performance',level:'Evaluate',ref:'5th ed., Ch.6; 4th ed., pp.449–457',body:`
 <div class='formula'>Cp=(USL-LSL)/(6σwithin)<br>Cpk=min[(USL-μ)/(3σwithin),(μ-LSL)/(3σwithin)]<br>Pp=(USL-LSL)/(6σoverall)<br>Ppk=min[(USL-μ)/(3σoverall),(μ-LSL)/(3σoverall)]</div>
 <p>قبل القدرة: تأكد من استقرار العملية، ملاءمة MSA، وصحة التوزيع أو استخدم تحليلًا غير طبيعي. Cp يقيس الإمكانية إذا تمركزت العملية؛ Cpk يأخذ التمركز. Pp/Ppk يعكسان الأداء طويل المدى.</p>
 <div class='example'><b>تشخيص:</b> Cp=1.67 وCpk=0.85 يعني تشتتًا محتملًا جيدًا لكن المتوسط قريب من أحد الحدود.</div>
 <div class='trap'><b>فخ:</b> لا تستخدم Cpk لعملية غير مستقرة كضمان للمستقبل.</div>`},
 {id:'6.17',title:'تصميم وتحليل التجارب DOE',en:'Design and Analysis of Experiments',level:'Evaluate',ref:'5th ed., Ch.6; 4th ed., pp.457–493',body:`
 <p>DOE يدرس عدة عوامل وتفاعلاتها. المصطلحات: Factor، Level، Response، Treatment، Main Effect، Interaction، Experimental Error.</p>
 <ul><li><b>Randomization:</b> تحمي من أثر ترتيب التجارب.</li><li><b>Replication:</b> تقدر الخطأ وتزيد القوة.</li><li><b>Blocking:</b> يعزل مصدر تباين معروف.</li><li><b>Full Factorial:</b> كل التركيبات.</li><li><b>Fractional Factorial:</b> عدد أقل مع Confounding/Aliasing.</li></ul>
 <p>التفاعل يعني أن أثر عامل يتغير حسب مستوى عامل آخر؛ لهذا يفشل أسلوب One-Factor-at-a-Time في كشفه بكفاءة.</p>
 <div class='example'><b>مثال:</b> الحرارة قد ترفع القوة عند زمن معالجة طويل وتخفضها عند زمن قصير؛ المتوسط العام يخفي التفاعل.</div>
 <div class='trap'><b>فخ:</b> Optimization قبل استقرار نظام القياس يجعل DOE يحسن الضوضاء.</div>`}
 ]
});