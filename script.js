const routeCopy={
  idea:["IDEA → OBJETO","Cuéntanos qué quieres lograr. Te ayudamos a aterrizar concepto, dimensiones, función, material y primera versión."],
  pieza:["PIEZA → NUEVA PIEZA","Trae una muestra o fotos con medidas. Evaluamos cómo reproducirla, corregirla o mejorarla."],
  archivo:["ARCHIVO → PRODUCCIÓN","Sube STL, 3MF, STEP, STP u OBJ. Revisamos geometría, orientación, material, acabado y cantidad."],
  problema:["PROBLEMA → SOLUCIÓN","Explícanos qué no funciona hoy. Diseñamos una pieza o sistema simple que resuelva una necesidad concreta."]
};
document.querySelectorAll(".route-card").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".route-card").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  const [tag,text]=routeCopy[btn.dataset.route];
  document.getElementById("routeOutput").innerHTML='<span class="tag">'+tag+'</span><p>'+text+'</p>';
}));
const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const fileInput=document.getElementById("files");
fileInput.addEventListener("change",()=>{
  const title=document.querySelector(".upload-title");
  title.textContent=fileInput.files.length?fileInput.files.length+" archivo(s) seleccionado(s)":"Arrastra o selecciona archivos";
});
document.getElementById("quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject="Solicitud D&D Print Co. — "+(data.get("company")||data.get("name"));
  const body=[
    "Inicio: "+data.get("start"),
    "Nombre: "+data.get("name"),
    "Empresa: "+data.get("company"),
    "Email: "+data.get("email"),
    "Cantidad: "+data.get("qty"),
    "",
    "Proyecto:",
    data.get("message"),
    "",
    "Archivos seleccionados: "+fileInput.files.length,
    "",
    "Solicitud preparada desde ddprintco.com"
  ].join("\n");
  document.getElementById("formStatus").textContent="Solicitud preparada. Falta conectar el correo/WhatsApp corporativo para enviarla automáticamente.";
  navigator.clipboard?.writeText(subject+"\n\n"+body).catch(()=>{});
});
