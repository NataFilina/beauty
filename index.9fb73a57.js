const e=document.querySelector(".booking_calendar_container"),t=document.querySelector(".booking_container_btns"),n=document.getElementById("calendar-table"),o=document.getElementById("modal"),a=document.getElementById("booking-form"),c=document.getElementById("name-input"),s=document.getElementById("phone-input"),d=document.getElementById("prev-week"),i=document.getElementById("next-week"),r=document.getElementById("modal_btn"),l=document.getElementById("modal_masters"),m=document.querySelectorAll(".btn_booking"),u=document.getElementById("booking_btn_masters"),h=document.getElementById("modal_masters_select"),g=document.querySelector(".booking_btn_arr_s"),y=document.querySelector(".booking_btn_arr_m"),p=document.getElementById("booking_btn_services"),b=(document.querySelector(".booking_container_btns_top"),document.getElementById("modal_price"));let v=new Date,k=[],E=null;const _=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"];let L=["Манікюр/педикюр","Макіяж","Брови/Вії"];function f(e){return e.toISOString().split("T")[0]}async function w(){try{const e=await fetch("https://6740f284d0b59228b7f1da45.mockapi.io/beauty");if(!e.ok)throw new Error("Помилка завантаження даних по бронювання");k=await e.json(),I()}catch(e){console.error("Помилка:",e)}}function S(){r.style.display="flex"}function x(){o.classList.remove("active"),l.classList.remove("active"),b.classList.remove("active"),E=null,r.style.display="none",y.classList.remove("booking_btn_arr_down"),g.classList.remove("booking_btn_arr_down")}function I(){const e=new Date,t=function(e){const t=[];for(let n=0;n<7;n++){const o=new Date(e);o.setDate(o.getDate()+n),t.push(o)}return t}(v),a=e.toTimeString().slice(0,5);v<=e?d.classList.add("hidden"):d.classList.remove("hidden"),n.innerHTML="";const c=document.createElement("tr");c.innerHTML=`\n    <th></th>\n    ${t.map((e=>`<th>${e.toLocaleDateString("uk-UA",{month:"short",day:"2-digit",weekday:"short"})}</th>`)).join("").toUpperCase()}\n  `,c.classList.add("headerRowContent"),n.appendChild(c),_.forEach((c=>{const s=document.createElement("tr"),d=document.createElement("td");d.textContent=c,d.classList.add("timeCellTime"),s.appendChild(d),t.forEach((t=>{const n=`${f(t)} ${c}`,d=document.createElement("td"),i=t.toDateString()===e.toDateString();t<e&&i&&c<=a?(d.classList.add("disabled"),d.textContent=""):L.forEach((e=>{const a=function(e,t,n){return k.some((o=>o.date===e&&o.time===t&&o.service===n))}(f(t),c,e),s=document.createElement("button");s.textContent=e,s.disabled=a,s.classList.add("calendarServisesContent"),a&&s.classList.add("disabled"),s.addEventListener("click",(()=>function(e,t){E={key:e,service:t},o.classList.add("active")}(n,e))),d.appendChild(s)})),s.appendChild(d)})),n.appendChild(s)}))}function B(){switch(l.classList.add("active"),h.options[h.selectedIndex].text){case"Анна":L=["Манікюр/педикюр"],e.style.height="400px",t.style.height="400px";break;case"Ольга":L=["Брови/Вії"],e.style.height="290px",t.style.height="290px";break;case"Марія":L=["Макіяж"],e.style.height="290px",t.style.height="290px";break;default:L=["Манікюр/педикюр","Макіяж","Брови/Вії"],e.style.height="790px",t.style.height="790px"}I()}p.addEventListener("click",(function(){b.classList.add("active"),g.classList.add("booking_btn_arr_down")})),u.addEventListener("click",B),m.forEach((e=>{e.addEventListener("click",S)})),document.querySelectorAll(".close-btn").forEach((e=>{e.addEventListener("click",x)})),window.addEventListener("click",(e=>{e.target!==o&&e.target!==r&&e.target!==l&&e.target!==b||x()})),h.addEventListener("change",B),u.addEventListener("click",(()=>{y.classList.add("booking_btn_arr_down")})),a.addEventListener("submit",(async e=>{if(e.preventDefault(),!E)return void alert("Дані про бронювання відсутні. Спробуйте знову.");const t=c.value,n=s.value,[o,a]=E.key.split(" "),d={date:o,time:a,service:E.service,name:t,phone:n};try{const e=await fetch("https://6740f284d0b59228b7f1da45.mockapi.io/beauty",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});e.ok?(k.push(await e.json()),x(),c.value="",s.value="",I(),alert(`Бронювання підтверджено на ${o} ${a} (${E.service}).`)):alert("Помилка при бронюванні.")}catch(e){console.error("Помилка мережі:",e)}})),i.addEventListener("click",(()=>{v.setDate(v.getDate()+7),w()})),d.addEventListener("click",(()=>{v.setDate(v.getDate()-7),w()})),w();
//# sourceMappingURL=index.9fb73a57.js.map