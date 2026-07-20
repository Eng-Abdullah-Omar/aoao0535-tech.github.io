(async()=>{
 try{
  const packed=(window.CQE_CHUNKS||[]).join('');
  const bytes=Uint8Array.from(atob(packed),c=>c.charCodeAt(0));
  if(!('DecompressionStream' in window)) throw new Error('DecompressionStream is not supported');
  const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  const code=await new Response(stream).text();
  (0,eval)(code);
 }catch(err){
  console.error(err);
  document.getElementById('home').innerHTML='<div class="notice">تعذر تحميل محتوى الدورة. استخدم إصدارًا حديثًا من Safari أو Chrome.<br>Course content could not be loaded. Please use a current Safari or Chrome browser.</div>';
 }
})();