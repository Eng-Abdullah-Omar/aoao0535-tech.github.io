const modules=(window.CQE_MODULES||[]).sort((a,b)=>a.n-b.n);
const questionBank=[
{d:1,q:'أي تعريف يعكس منظور Juran للجودة؟',o:['المطابقة للمتطلبات فقط','الملاءمة للاستخدام','الفحص بنسبة 100%','انعدام التباين تمامًا'],a:1,e:'Juran ركز على Fitness for Use.'},
{d:1,q:'في RACI، من يتحمل المسؤولية النهائية عن المخرج؟',o:['Responsible','Accountable','Consulted','Informed'],a:1,e:'Accountable هو المسؤول النهائي ويفضل أن يكون واحدًا.'},
{d:1,q:'أي مؤشر يُعد Leading Indicator؟',o:['مطالبات الضمان الماضية','عدد الشكاوى المغلقة','نسبة إكمال الصيانة الوقائية','تكلفة الفشل الخارجي'],a:2,e:'إكمال الصيانة إنذار مبكر قبل ظهور الفشل.'},
{d:1,q:'متى تكون Nominal Group Technique مناسبة؟',o:['عندما نريد حساب Cpk','لتقليل سيطرة شخص على توليد وترتيب الأفكار','لمعايرة الأجهزة','لاختبار التوزيع الطبيعي'],a:1,e:'تبدأ بأفكار فردية ثم مشاركة وتصويت.'},
{d:1,q:'أي عبارة صحيحة عن CTQ؟',o:['أي متغير يمكن قياسه','متطلب قابل للقياس مرتبط بحاجة حرجة','اسم آخر لسياسة الجودة','يحدده المورد فقط'],a:1,e:'CTQ ترجمة تشغيلية لحاجة العميل أو الخطر.'},
{d:2,q:'أي فرق صحيح بين الوثيقة والسجل؟',o:['السجل يوجه العمل والوثيقة تثبته','الوثيقة تحدد المطلوب والسجل يثبت التنفيذ','كلاهما لا يخضع للضبط','السجل لا يحتاج فترة احتفاظ'],a:1,e:'النموذج الفارغ وثيقة وبعد التعبئة يصبح سجلًا.'},
{d:2,q:'أي صياغة هي الأقوى لعدم مطابقة؟',o:['الموظفون غير مهتمين','يجب تحسين النظام','المتطلب والدليل والفجوة موثقة','يفضل شراء برنامج جديد'],a:2,e:'عدم المطابقة تبنى على معيار ودليل موضوعي وفجوة.'},
{d:2,q:'ما الذي يعد Cost of Appraisal؟',o:['تصميم FMEA','الفحص النهائي','خردة داخلية','ضمان العميل'],a:1,e:'الفحص والاختبار والتدقيق ضمن Appraisal.'},
{d:2,q:'ما الدليل الأقوى على فعالية التدريب؟',o:['توقيع الحضور','رضا المتدربين','تحسن السلوك والنتيجة في العمل','عدد الشرائح'],a:2,e:'الفعالية تتجاوز Reaction إلى Behavior وResults.'},
{d:2,q:'التدقيق على مورد هو غالبًا:',o:['First-party','Second-party','Third-party دائمًا','Product test فقط'],a:1,e:'المنظمة على موردها أو العميل على مورده Second-party.'},
{d:3,q:'ما الفرق بين Verification وValidation؟',o:['لا فرق','الأول تحقق من متطلبات التصميم والثاني من الاستخدام المقصود','الأول بعد البيع فقط','الثاني خاص بالمعايرة'],a:1,e:'Verification: built right؛ Validation: right product.'},
{d:3,q:'أي مرحلة تثبت الأداء المستمر في ظروف الإنتاج الفعلية؟',o:['IQ','OQ','PQ','MRB'],a:2,e:'PQ يثبت الأداء في ظروف الاستخدام/الإنتاج الفعلية.'},
{d:3,q:'في نظام Series، موثوقية النظام تساوي:',o:['مجموع الموثوقيات','حاصل ضرب الموثوقيات','أعلى موثوقية','1 ناقص حاصل ضرب الفشل'],a:1,e:'كل عنصر يجب أن ينجح في النظام المتسلسل.'},
{d:3,q:'تحسين الفحص النهائي في FMEA يؤثر غالبًا على:',o:['Severity','Occurrence','Detection','وظيفة المنتج'],a:2,e:'الفحص يحسن الكشف ولا يمنع السبب عادة.'},
{d:3,q:'إذا كان Weibull beta أكبر من 1 فهذا يدل غالبًا على:',o:['فشل مبكر','معدل ثابت','تآكل مع العمر','عدم وجود فشل'],a:2,e:'β>1 يرتبط بمرحلة Wear-out.'},
{d:4,q:'Producer’s Risk هو احتمال:',o:['قبول دفعة سيئة','رفض دفعة جيدة','قبول دفعة جيدة','رفض دفعة سيئة'],a:1,e:'يرمز له عادة α.'},
{d:4,q:'أي خطة مناسبة للبيانات المتغيرة؟',o:['Z1.4 فقط','Z1.9 عند تحقق الافتراضات','p-chart فقط','لا توجد خطط'],a:1,e:'Z1.9 للمتغيرات وZ1.4 للصفات.'},
{d:4,q:'Rework يعني:',o:['إعادة المنتج للمواصفة الأصلية','قبول المنتج كما هو','إتلاف المنتج','إصلاح لا يحقق المواصفة الأصلية'],a:0,e:'Rework يعيد المطابقة الكاملة.'},
{d:4,q:'Reproducibility في MSA ترتبط غالبًا بـ:',o:['اختلاف القطع','اختلاف المقيمين أو الظروف','القيمة الاسمية','حدود المواصفة'],a:1,e:'Repeatability داخل المقيم؛ Reproducibility بين المقيمين.'},
{d:4,q:'جهاز معاير لكن نتائج المقيمين مختلفة جدًا. الاستنتاج:',o:['النظام مناسب حتمًا','المعايرة وحدها لا تثبت صلاحية نظام القياس','المواصفة خاطئة','يجب زيادة الإنتاج'],a:1,e:'MSA يشمل الجهاز والطريقة والمشغل والبيئة.'},
{d:5,q:'أي أداة ترتب الفئات حسب الأثر؟',o:['Pareto','Scatter','SIPOC','CMM'],a:0,e:'Pareto يوضح القلة المؤثرة.'},
{d:5,q:'Correction تعني:',o:['إزالة السبب الجذري','إصلاح الحالة الحالية','إعادة تصميم النظام دائمًا','منع كل المخاطر'],a:1,e:'Corrective Action يعالج السبب؛ Correction يعالج الحالة.'},
{d:5,q:'OEE يساوي:',o:['مجموع التوافر والأداء والجودة','حاصل ضرب التوافر والأداء والجودة','الجودة فقط','زمن الدورة على الطلب'],a:1,e:'OEE=A×P×Q.'},
{d:5,q:'أي أداة تقلل زمن تغيير الإعداد؟',o:['SMED','QFD','ANOVA','AQL'],a:0,e:'SMED يفصل الإعداد الداخلي والخارجي ويبسطه.'},
{d:5,q:'أقوى إجراء لمنع تركيب قطعة بالعكس:',o:['إعادة التدريب فقط','زيادة التفتيش','Poka-Yoke أو Fixture يمنع الخطأ','إرسال بريد'],a:2,e:'المنع الهندسي أقوى من التذكير والكشف.'},
{d:6,q:'إذا p-value أقل من alpha، فالقرار:',o:['نقبل H0','نرفض H0','نثبت H1 بنسبة 100%','نزيد alpha بعد النتيجة'],a:1,e:'نرفض H0 عند مستوى الدلالة المحدد مسبقًا.'},
{d:6,q:'Type I Error هو:',o:['عدم رفض H0 وهي خاطئة','رفض H0 وهي صحيحة','انخفاض Power فقط','قيمة شاذة'],a:1,e:'Type I=α.'},
{d:6,q:'أي مخطط يناسب نسبة الوحدات غير المطابقة مع تغير حجم العينة؟',o:['np','p','c','u'],a:1,e:'p-chart للنسبة ويمكن أن يتغير n.'},
{d:6,q:'إذا Cp=1.67 وCpk=0.85، فالاستنتاج الأقرب:',o:['العملية متمركزة','العملية غير متمركزة رغم قدرة محتملة جيدة','القياس مثالي','لا توجد مواصفات'],a:1,e:'الفجوة بين Cp وCpk تشير إلى مشكلة تمركز.'},
{d:6,q:'أي أداة تكشف التفاعلات بين العوامل؟',o:['DOE','Check Sheet','Pareto','Run Chart'],a:0,e:'التجارب العاملية تكشف Main Effects وInteractions.'},
{d:6,q:'زيادة حجم العينة أربع مرات تجعل Standard Error تقريبًا:',o:['أربع مرات','نصفه','ضعفه','لا يتغير'],a:1,e:'SE يتناسب عكسيًا مع جذر n.'},
{d:6,q:'أي عبارة صحيحة عن الارتباط؟',o:['يثبت السببية','لا يتأثر بالقيم الشاذة','يقيس علاقة ولا يثبت السببية','يصلح دائمًا للعلاقة المنحنية'],a:2,e:'Correlation لا يثبت السببية.'},
{d:7,q:'Residual Risk هو:',o:['الخطر قبل الضوابط','الخطر بعد تطبيق الضوابط','تكلفة الجودة','احتمال القبول'],a:1,e:'المتبقي بعد الضوابط والمعالجة.'},
{d:7,q:'أي صياغة تصف خطرًا جيدًا؟',o:['المورد سيئ','نحتاج بديلًا','بسبب مورد وحيد قد يتأخر المكون فيتوقف الخط','المخزون'],a:2,e:'تتضمن السبب والحدث والأثر.'},
{d:7,q:'RPN يساوي:',o:['S+O+D','S×O×D','P×Cost فقط','MTBF/MTTR'],a:1,e:'الصيغة التقليدية Severity×Occurrence×Detection.'},
{d:7,q:'RTO يصف:',o:['فقد البيانات المقبول','زمن استعادة الخدمة المستهدف','معدل العيب','أقصى RPN'],a:1,e:'RTO زمن الاستعادة، RPO فقد البيانات زمنيًا.'},
{d:7,q:'بعد تنفيذ معالجة الخطر يجب:',o:['إغلاق السجل فورًا','إعادة تقييم الخطر المتبقي وفعالية الضبط','حذف الخطر','تغيير المالك فقط'],a:1,e:'تنفيذ الإجراء لا يثبت أن الخطر أصبح مقبولًا.'}
];
let active=[];
function render(){
 let h='';
 modules.forEach(m=>{
  h+=`<section class="module" id="module-${m.n}" data-module="${m.n}"><div class="module-title"><div><span>المحور ${m.n}</span><h2>${m.ar}</h2><small>${m.en}</small></div><div class="module-weight">${m.weight} سؤالًا</div></div><p class="module-intro">${m.intro}</p>`;
  m.lessons.forEach((l,i)=>{
   h+=`<details class="lesson" id="${l.id}" data-search="${strip(l.title+' '+l.en+' '+l.body)}"><summary><span class="lesson-number">${l.id}</span><div><h3>${l.title}</h3><small>${l.en}</small></div><span class="level">${l.level}</span></summary><div class="lesson-body"><div class="reference">المرجع: ${l.ref}</div>${l.body}<label class="done"><input type="checkbox" data-progress="${l.id}"> تمت مذاكرة هذا الدرس</label></div></details>`;
  });
  h+='</section>';
 });
 document.getElementById('modules').innerHTML=h;
 document.getElementById('lessonCount').textContent=modules.reduce((s,m)=>s+m.lessons.length,0)+' وحدة';
 initProgress();
}
function strip(s){return String(s).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').toLowerCase()}
function initProgress(){
 const boxes=[...document.querySelectorAll('[data-progress]')];
 function update(){let n=0;boxes.forEach(x=>{if(x.checked)n++;localStorage.setItem('cqe-'+x.dataset.progress,x.checked?'1':'0')});let p=boxes.length?Math.round(n/boxes.length*100):0;progress.value=p;progressText.textContent=`التقدم ${p}% — ${n}/${boxes.length}`}
 boxes.forEach(x=>{x.checked=localStorage.getItem('cqe-'+x.dataset.progress)==='1';x.addEventListener('change',update)});update();
}
function toggleAll(open){document.querySelectorAll('details.lesson').forEach(x=>x.open=open)}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function buildQuiz(n=20){
 active=shuffle(questionBank).slice(0,Math.min(n,questionBank.length));
 quiz.innerHTML=active.map((x,i)=>`<div class="qcard" id="q${i}"><div class="domain-badge">المحور ${x.d}</div><b>${i+1}. ${x.q}</b>${x.o.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}<div class="answer">الإجابة الصحيحة: <b>${x.o[x.a]}</b><br>${x.e}</div></div>`).join('');
 examMeta.textContent=`عدد الأسئلة: ${active.length} من بنك حالي يحتوي ${questionBank.length} سؤالًا أصليًا`;
 score.textContent='';
}
function grade(){
 let s=0,by={};active.forEach((x,i)=>{by[x.d]=by[x.d]||[0,0];by[x.d][1]++;let v=document.querySelector(`input[name=q${i}]:checked`),c=document.getElementById('q'+i);c.classList.add('show');if(v&&+v.value===x.a){s++;by[x.d][0]++;c.classList.add('correct')}else c.classList.add('wrong')});
 const detail=Object.entries(by).map(([d,v])=>`المحور ${d}: ${v[0]}/${v[1]}`).join(' | ');
 score.textContent=`النتيجة: ${s} من ${active.length} (${Math.round(s/active.length*100)}%) — ${detail}`;
}
function searchCourse(){
 const q=strip(courseSearch.value);let shown=0;
 document.querySelectorAll('.lesson').forEach(l=>{const ok=!q||l.dataset.search.includes(q);l.style.display=ok?'block':'none';if(ok){shown++;if(q)l.open=true}});
 document.querySelectorAll('.module').forEach(m=>{m.style.display=[...m.querySelectorAll('.lesson')].some(l=>l.style.display!=='none')?'block':'none'});
 searchResult.textContent=q?`تم العثور على ${shown} درسًا مطابقًا`:'عرض جميع الدروس';
}
document.querySelectorAll('.toc-btn').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.target).scrollIntoView());
render();buildQuiz(20);courseSearch.addEventListener('input',searchCourse);searchCourse();