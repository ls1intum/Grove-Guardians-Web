const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BlocklyEditor-C9iFoIB2.js","assets/vendor-react-DXUQMs69.js","assets/vendor-D4SIQPNx.js","assets/vendor-DCGwZphf.css","assets/vendor-blockly-DuIubxbE.js","assets/vendor-ui-CWDbP2J8.js"])))=>i.map(i=>d[i]);
import{r as i,j as e,c as De}from"./vendor-react-DXUQMs69.js";import"./vendor-D4SIQPNx.js";import{C as Le,U as ze,R as Te,B as Oe,L as Ae,H as Fe,b as Re,Z as Me,X as be,D as We,c as Pe,d as me,E as fe,A as Ie,a as Ve,S as ke,f as He,P as qe,e as $e,g as xe}from"./vendor-ui-CWDbP2J8.js";import"./vendor-blockly-DuIubxbE.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const Ke="modulepreload",Ge=function(t){return"/Grove-Guardians-Web/"+t},ce={},Ue=function(n,o,l){let s=Promise.resolve();if(o&&o.length>0){let d=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),a=c?.nonce||c?.getAttribute("nonce");s=d(o.map(u=>{if(u=Ge(u),u in ce)return;ce[u]=!0;const h=u.endsWith(".css"),b=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${b}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":Ke,h||(m.as="script"),m.crossOrigin="",m.href=u,a&&m.setAttribute("nonce",a),document.head.appendChild(m),h)return new Promise((p,f)=>{m.addEventListener("load",p),m.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(c){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=c,window.dispatchEvent(a),!a.defaultPrevented)throw c}return s.then(c=>{for(const a of c||[])a.status==="rejected"&&r(a.reason);return n().catch(r)})},pe=i.createContext(void 0),Xe=()=>{const t=i.useContext(pe);if(!t)throw new Error("useBlockly must be used within a BlocklyProvider");return t},Ze=({onOpenSidebar:t,onFinishLevel:n,onBackToLobby:o,activeLevelId:l,isTeacherMode:s=!1})=>{const{undo:r,redo:c}=Xe();return e.jsxs("header",{className:"app-header",children:[e.jsx("button",{type:"button",className:"header-left",title:"Zum Startbildschirm zurückkehren",onClick:o,"aria-label":"Zurück zum Startbildschirm",children:e.jsx("img",{src:"heros.svg",alt:"",className:"logo-img"})}),e.jsxs("div",{className:"header-center",children:[s&&e.jsx("span",{className:"teacher-mode-badge",children:"Lehrkraft-Modus"}),l&&e.jsxs("button",{type:"button",className:"finish-button-header",title:s?`Lösung ${l} schließen`:"Mission abschließen",onClick:n,"aria-label":s?`Lösung ${l} schließen`:"Aktuelle Mission abschließen",children:[e.jsx(Le,{size:18,strokeWidth:4.5,"aria-hidden":"true"}),e.jsx("span",{children:s?`Lösung ${l} schließen`:`Mission ${l} abschließen`})]})]}),e.jsxs("div",{className:"header-right",children:[e.jsx("button",{type:"button",className:"icon-button",title:"Rückgängig machen",onClick:r,"aria-label":"Rückgängig",children:e.jsx(ze,{size:22})}),e.jsx("button",{type:"button",className:"icon-button",title:"Wiederherstellen",onClick:c,"aria-label":"Wiederherstellen",children:e.jsx(Te,{size:22})}),e.jsx("button",{type:"button",className:"icon-button",title:"Aufgabenstellung",onClick:()=>t("story"),"aria-label":"Aufgabenstellung öffnen",children:e.jsx(Oe,{size:22})}),e.jsx("button",{type:"button",className:"icon-button",title:"Hilfe & Tipps",onClick:()=>t("help"),"aria-label":"Hilfe & Tipps öffnen",children:e.jsx(Ae,{size:22})}),e.jsx("button",{type:"button",className:"icon-button",title:"Zum Startbildschirm zurückkehren",onClick:o,"aria-label":"Zurück zum Startbildschirm",children:e.jsx(Fe,{size:22})})]})]})},ae={white:"rgb(255, 255, 255)",black:"rgb(0, 0, 0)",red:"rgb(255, 0, 0)",green:"rgb(0, 255, 0)",blue:"rgb(0, 0, 255)",yellow:"rgb(255, 255, 0)",magenta:"rgb(255, 0, 255)",cyan:"rgb(0, 255, 255)"},Ye=({colors:t,interval:n=50,isActive:o,progress:l})=>{const[s,r]=i.useState(0),c=i.useRef(null),a=i.useMemo(()=>{if(!o||t.length===0||!t[s])return ae.white;const u=t[s].toLowerCase();return ae[u]||u},[o,t,s]);i.useEffect(()=>{if(!o||t.length===0)return;const u=performance.now(),h=b=>{const m=b-u,p=Math.min(Math.floor(m/n),t.length-1);r(p),c.current=requestAnimationFrame(h)};return c.current=requestAnimationFrame(h),()=>{c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),r(0)}},[o,t,n]);const d=i.useMemo(()=>({width:"180px",height:"180px",borderRadius:"50%",backgroundColor:a,border:"10px solid #FFFFFF",margin:"20px auto",boxShadow:o?`0 0 40px ${a}`:"0 0 10px rgba(0,0,0,0.2)",transition:"none",cursor:"pointer"}),[a,o]);return e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{className:`flashing-circle ${o?"is-active":""}`,style:d,role:"status","aria-label":"Ozobot Optical Interface"}),e.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#2f4928",fontWeight:700},children:o?e.jsx("div",{className:"flashing-progress-inline",children:e.jsx("div",{className:"flashing-progress-fill",style:{width:`${l}%`}})}):e.jsx("span",{children:"Roboter hier platzieren"})})]})},Je=({isFlashingOpen:t,toggleFlashing:n,currentCode:o,onResizeFinished:l,isFlashingActive:s,onStartFlashing:r,onStopFlashing:c,flashingColors:a})=>{const[d,u]=i.useState(0);i.useEffect(()=>{if(!s||a.length===0)return;const g=a.length*50,_=Date.now(),y=setInterval(()=>{const w=Date.now()-_,N=Math.min(w/g*100,100);u(N),N>=100&&clearInterval(y)},50);return()=>{clearInterval(y),u(0)}},[s,a.length]);const h=g=>{g.propertyName==="max-height"&&l?.()},b=()=>{s?c():r()},m=!o&&!s,p=t?"Programmübertragung schließen":"Programmübertragung öffnen",f=s?"Aktuelle Übertragung abbrechen":m?"Erstelle zuerst ein Programm":"Programm auf den Roboter laden";return e.jsxs("div",{className:`flashing-area ${t?"open":""}`,onTransitionEnd:h,children:[e.jsx("div",{className:"flashing-control-bar",children:e.jsx("button",{className:"flashing-button",onClick:n,title:p,children:t?e.jsxs(e.Fragment,{children:[e.jsx(Re,{size:18,strokeWidth:5,"aria-hidden":"true"}),e.jsx("span",{children:"Schließen"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Me,{size:18,strokeWidth:3,"aria-hidden":"true"}),e.jsx("span",{children:"Programm übertragen"})]})})}),e.jsxs("div",{className:"flashing-content",children:[e.jsxs("h2",{children:["Setzt den Roboter auf den Kreis und klickt dann auf ",e.jsx("em",{children:"Programm laden"})]}),e.jsx("div",{className:"flashing-display-container",children:e.jsx(Ye,{colors:a.length>0?a:["white"],interval:50,isActive:s,progress:d})}),e.jsx("button",{className:`load-action-button ${s?"is-aborting":""}`,onClick:b,disabled:m,title:f,children:s?e.jsxs(e.Fragment,{children:[e.jsx(be,{size:18,strokeWidth:4,"aria-hidden":"true"}),e.jsx("span",{children:"Abbrechen"})]}):e.jsxs(e.Fragment,{children:[e.jsx(We,{size:20,strokeWidth:3.5,"aria-hidden":"true"}),e.jsx("span",{children:"Programm laden"})]})})]})]})},Qe=({type:t,onClose:n,activeLevel:o})=>{const[l,s]=i.useState(void 0),r=l===o?.id&&o?.id!==void 0;if(!t)return null;const c=t==="story",a=c?"Aufgabenstellung":"Hilfe & Tipps",d=c?"Aufgabenstellung schließen":"Hilfe & Tipps schließen";return e.jsxs("aside",{className:"app-sidebar",children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("h3",{children:a}),e.jsx("button",{type:"button",className:"close-button",onClick:n,"aria-label":"Schließen",title:d,children:e.jsx(Pe,{size:20,"aria-hidden":"true"})})]}),e.jsx("div",{className:"sidebar-content",children:e.jsxs("div",{className:"help-section",children:[c&&o&&e.jsxs("div",{className:"help-item level-task-box",children:[e.jsxs("div",{className:"level-badge",children:["Mission ",o.id]}),e.jsx("h4",{children:o.title}),e.jsx("p",{className:"task-text",children:o.task}),o.hint&&e.jsxs("div",{className:`hint-container ${r?"is-visible":"is-hidden"}`,children:[e.jsx("strong",{children:"Tipp:"}),e.jsx("button",{type:"button",className:"hint-toggle-button",onClick:()=>s(r?void 0:o?.id),"aria-label":r?"Tipp ausblenden":"Tipp anzeigen",title:r?"Tipp ausblenden":"Tipp anzeigen",children:r?e.jsx(me,{size:16}):e.jsx(fe,{size:16})}),e.jsx("p",{children:o.hint})]})]}),!c&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"help-item",children:[e.jsx("h4",{children:"Blöcke verbinden"}),e.jsx("p",{children:"Zieht Blöcke aus dem Menü links in den Arbeitsbereich. Verbindet die Blöcke, indem ihr sie aneinander hängt."})]}),e.jsxs("div",{className:"help-item",children:[e.jsx("h4",{children:"Übertragung"}),e.jsxs("p",{children:["Klickt auf ",e.jsx("em",{children:"Programm übertragen"}),". Setzt dann den Roboter auf den weißen Kreis und klickt auf ",e.jsx("em",{children:"Programm laden"}),"."]})]}),e.jsxs("div",{className:"help-item",children:[e.jsx("h4",{children:"Roboter starten"}),e.jsxs("p",{children:["Setzt den Roboter auf der Missions-Karte auf ",e.jsx("em",{children:"Start"}),". Drückt dann den Knopf am Roboter zweimal schnell hintereinander."]})]}),e.jsxs("div",{className:"help-item orientation-helper","aria-label":"Orientierung links und rechts",children:[e.jsx("h4",{children:"Links und Rechts"}),e.jsxs("div",{className:"direction-cards",role:"list",children:[e.jsxs("div",{className:"direction-card direction-left",role:"listitem",children:[e.jsx("span",{className:"direction-icon","aria-hidden":"true",children:e.jsx(Ie,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Links"}),e.jsx("p",{children:"Dieser Pfeil zeigt nach links."})]})]}),e.jsxs("div",{className:"direction-card direction-right",role:"listitem",children:[e.jsx("span",{className:"direction-icon","aria-hidden":"true",children:e.jsx(Ve,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Rechts"}),e.jsx("p",{children:"Dieser Pfeil zeigt nach rechts."})]})]})]}),e.jsxs("p",{className:"orientation-tip",children:["Merksatz: ",e.jsx("em",{children:"Links"})," ist da, wo der Daumen ein ",e.jsx("em",{children:"L"})," macht."]})]})]})]})})]})},et="Hier findet ihr die wichtigsten Spielregeln. So wisst ihr immer, was ihr als Nächstes tun müsst!",ue=[{title:"Bewegen auf dem Spielbrett",items:["Ihr dürft immer genau ein Feld weitergehen.","Geht dabei nur auf ein Feld direkt daneben."]},{title:"Nebelmarken und Missionen",items:["Kommt ihr auf ein Feld mit einer Nebelmarke, dreht ihr sie um.","Auf der Rückseite steht eine Missions-Nummer.","Nehmt euch die passende Missions-Karte mit dieser Nummer."]},{title:"Mission starten",items:["Wählt in der App die richtige Missions-Nummer aus.","Klickt auf „Mission starten“.","Lest dann die Aufgabenstellung aufmerksam durch.","Jetzt löst ihr die Aufgabe gemeinsam mit eurem Partner."]},{title:"Zusammenarbeiten",items:["Ihr arbeitet immer zu zweit.","Ein Spieler programmiert, der andere Spieler plant den Weg.","Nach jeder Runde tauscht ihr die Rollen!"]},{title:"Weitergehen nach einer Mission",items:["Habt ihr die Mission geschafft, dürft ihr im nächsten Zug weitergehen.","Sonderregel: Habt ihr eine Mission in der Siedlung geschafft, dürft ihr die jeweilige Wald-Trick Karte auf dem Spielfeld umdrehen.","Wenn ihr es noch nicht schafft, probiert es einfach nochmal!"]},{title:"Der Weg in den Dunkelwald",items:["In den Dunkelwald dürft ihr erst, wenn ihr genug Missionen geschafft habt.","Dafür braucht ihr als Gruppe: 5 Missionen in der Siedlung und 6 Missionen im Nebelwald."]},{title:"Gemeinsam im Dunkelwald",items:["Im Dunkelwald löst ihr alle zusammen die Missionen.","Nur als Gruppe könnt ihr alle Hindernisse überwinden!"]}],tt=({isOpen:t,onClose:n})=>{const o=i.useRef(null),l=i.useRef(null),s=i.useRef(null),[r,c]=i.useState(0),a=ue.length,d=ue[r],u=r===a-1;return i.useEffect(()=>{if(!t)return;s.current=document.activeElement;const h=document.body.style.overflow;document.body.style.overflow="hidden";const b=()=>l.current?Array.from(l.current.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')):[],m=f=>{f.key==="Escape"&&n()},p=f=>{if(f.key!=="Tab")return;const g=b();if(g.length===0){f.preventDefault();return}const _=g[0],y=g[g.length-1],w=document.activeElement;f.shiftKey?(w===_||!l.current?.contains(w))&&(f.preventDefault(),y.focus()):(w===y||!l.current?.contains(w))&&(f.preventDefault(),_.focus())};return window.addEventListener("keydown",m),window.addEventListener("keydown",p),o.current?.focus(),()=>{document.body.style.overflow=h,window.removeEventListener("keydown",m),window.removeEventListener("keydown",p),s.current?.focus()}},[t,n]),t?e.jsx("div",{className:"rules-modal-overlay",onMouseDown:h=>{h.target===h.currentTarget&&n()},children:e.jsxs("div",{ref:l,className:"rules-modal-card",role:"dialog","aria-modal":"true","aria-labelledby":"rules-modal-title","aria-describedby":"rules-modal-description",children:[e.jsxs("div",{className:"rules-modal-header",children:[e.jsxs("div",{className:"rules-modal-title-group",children:[e.jsx("span",{className:"rules-modal-icon","aria-hidden":"true",children:e.jsx(ke,{size:22})}),e.jsx("div",{className:"rules-modal-heading",children:e.jsx("h2",{id:"rules-modal-title",children:"Spielregeln"})})]}),e.jsx("button",{ref:o,type:"button",className:"rules-modal-close",onClick:n,"aria-label":"Spielregeln schließen",children:e.jsx(be,{size:18})})]}),e.jsx("p",{id:"rules-modal-description",className:"rules-modal-lead",children:et}),e.jsxs("div",{className:"rules-modal-progress","aria-live":"polite",children:[e.jsxs("span",{children:["Regel ",r+1," von ",a]}),e.jsx("div",{className:"rules-modal-progress-track","aria-hidden":"true",children:e.jsx("div",{className:"rules-modal-progress-fill",style:{width:`${(r+1)/a*100}%`}})})]}),e.jsx("div",{className:"rules-modal-grid",children:e.jsxs("section",{className:"rules-modal-section",children:[e.jsx("h3",{children:d.title}),e.jsx("ul",{children:d.items.map(h=>e.jsx("li",{children:h},h))})]},d.title)}),e.jsx("div",{className:"rules-modal-footer",children:e.jsxs("div",{className:"rules-modal-footer-actions",children:[r>0&&e.jsx("button",{type:"button",className:"rules-modal-back",onClick:()=>c(h=>h-1),children:"Zurück"}),u?e.jsx("button",{type:"button",className:"rules-modal-confirm",onClick:n,children:"Verstanden"}):e.jsx("button",{type:"button",className:"rules-modal-confirm",onClick:()=>c(h=>h+1),children:"Weiter"})]})})]})}):null},$={S:5,N:11,D:4},nt=t=>{const n=t.match(/^([SND])(\d+)$/);if(!n)return{category:"S",number:"1"};const o=n[1],l=Number(n[2]),s=$[o];return!Number.isInteger(l)||l<1||l>s?{category:"S",number:"1"}:{category:o,number:String(l)}},lt=({onStartLevel:t,completedLevels:n,isTeacherMode:o=!1,selectedLevelId:l,onSelectedLevelChange:s})=>{const{category:r,number:c}=nt(l),[a,d]=i.useState(!1),u=Object.values($).reduce((k,v)=>k+v,0),h=Math.min(n.length,u),b=Math.round(h/u*100),m=n.filter(k=>k.startsWith("S")).length,p=n.filter(k=>k.startsWith("N")).length,f=n.filter(k=>k.startsWith("D")).length,g=3,y=n.includes("D2")||n.includes("D4")||f>=2?3:p>=3||f>=1?2:m>=3||p>=1?1:0,w=Array.from({length:g},(k,v)=>v<y),N=w.filter(Boolean).length,z=()=>{const k=`${r}${c}`;s(k),t(k)},B=`${r}${c}`,E=n.includes(B),D=o?"Lösung anzeigen":E?"Mission wiederholen":"Mission starten";return e.jsxs("div",{className:"lobby-container",children:[e.jsxs("div",{className:"lobby-main-content",children:[e.jsxs("div",{className:"lobby-branding",children:[e.jsx("p",{className:"lobby-site-title",children:"Helden des Lichterwaldes"}),e.jsx("img",{src:"heros.svg",alt:"Logo",className:"lobby-logo"}),e.jsx("h1",{children:"Bereit für die nächste Mission?"}),e.jsx("p",{className:"lobby-subtitle",children:"Erforscht die Geheimnisse des Lichterwaldes mit eurem magischen Begleiter!"}),e.jsx("div",{className:"lobby-utility-actions",children:e.jsxs("button",{type:"button",className:"lobby-secondary-button",onClick:()=>d(!0),children:[e.jsx(ke,{size:18,"aria-hidden":"true"}),e.jsx("span",{children:"Spielregeln ansehen"})]})})]}),e.jsxs("section",{className:"progress-footer","aria-label":"Level-Fortschritt",children:[e.jsxs("div",{className:"lobby-progress-header",children:[e.jsx("span",{className:"lobby-progress-title",children:"Fortschritt"}),e.jsx("span",{className:"lobby-progress-stars","aria-label":`${N} von ${g} Sternen`,children:w.map((k,v)=>e.jsx("span",{className:k?"lobby-star lobby-star--filled":"lobby-star",children:"★"},v))})]}),e.jsx("div",{className:"lobby-progress-track",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":b,"aria-label":"Abgeschlossene Level in Prozent",children:e.jsx("div",{className:"lobby-progress-fill",style:{width:`${b}%`}})})]}),e.jsxs("section",{className:"level-entry-card forest-theme",children:[e.jsx("h2",{className:"card-title",children:"Wählt eure Mission"}),e.jsxs("div",{className:"input-group-combined",children:[e.jsxs("div",{className:"select-wrapper",children:[e.jsx("label",{className:"input-label",htmlFor:"level-category-select",children:"Gebiet:"}),e.jsxs("select",{id:"level-category-select",name:"levelCategory",className:"level-select category-part",value:r,onChange:k=>{const v=k.target.value;s(`${v}1`)},children:[e.jsx("option",{value:"S",children:"S (Siedlung)"}),e.jsx("option",{value:"N",children:"N (Nebelwald)"}),e.jsx("option",{value:"D",children:"D (Dunkelwald)"})]})]}),e.jsxs("div",{className:"select-wrapper",children:[e.jsx("label",{className:"input-label",htmlFor:"level-number-select",children:"Mission:"}),e.jsx("select",{id:"level-number-select",name:"levelNumber",className:"level-select number-part",value:c,onChange:k=>{const v=k.target.value;s(`${r}${v}`)},children:Array.from({length:$[r]},(k,v)=>(v+1).toString()).map(k=>e.jsx("option",{value:k,children:k},k))})]}),e.jsxs("button",{className:"start-button-forest",onClick:z,"aria-label":D,children:[E?e.jsx(He,{size:18,strokeWidth:4,"aria-hidden":"true"}):e.jsx(qe,{size:18,strokeWidth:4,"aria-hidden":"true"}),e.jsx("span",{children:D})]})]}),e.jsxs("div",{className:"success-note-slot","aria-live":"polite",children:[o&&e.jsx("div",{className:"lobby-teacher-banner",children:"Lehrkraft-Modus: Lösungen werden automatisch vorgeladen"}),!o&&e.jsxs("div",{className:E?"success-note is-visible":"success-note is-hidden",children:[e.jsx("span",{className:"sparkle","aria-hidden":"true"})," Diese Mission habt ihr schon gemeistert."]})]})]})]}),e.jsx(tt,{isOpen:a,onClose:()=>d(!1)},a?"rules-open":"rules-closed")]})},ot={schueler:{salt:"ozobot-schueler-v1",iterations:21e4,hashHex:"b6f674a3339b0749f80498a94e1484e66c90dee88dd83add7220091d278b46d0"},lehrer:{salt:"ozobot-lehrer-v1",iterations:21e4,hashHex:"16d975f823a95253e70eb7a5218ab1406fb61f700c7ca65d2d529955b1b0f3de"}},Y=()=>typeof TextEncoder<"u"&&typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof crypto.subtle.importKey=="function"&&typeof crypto.subtle.deriveBits=="function",st=t=>{const n=new Uint8Array(t);return Array.from(n,o=>o.toString(16).padStart(2,"0")).join("")},rt=(t,n)=>{if(t.length!==n.length)return!1;let o=0;for(let l=0;l<t.length;l+=1)o|=t.charCodeAt(l)^n.charCodeAt(l);return o===0},it=async(t,n,o)=>{if(!Y())throw new Error("Web Crypto API is not supported in this browser.");const l=new TextEncoder,s=await crypto.subtle.importKey("raw",l.encode(t),"PBKDF2",!1,["deriveBits"]),r=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:l.encode(n),iterations:o},s,256);return st(r)},de=async(t,n)=>{const o=ot[n],l=await it(t,o.salt,o.iterations);return rt(l,o.hashHex)},ct=async t=>{if(!Y())return null;const[n,o]=await Promise.all([de(t,"lehrer"),de(t,"schueler")]);return n?"lehrer":o?"schueler":null},at=({onLogin:t})=>{const[n,o]=i.useState(""),[l,s]=i.useState(!1),[r,c]=i.useState(null),[a,d]=i.useState(!1),[u,h]=i.useState(!1),[b,m]=i.useState(0),[p,f]=i.useState(null),g=i.useRef(null),_=i.useCallback(()=>{d(!0),setTimeout(()=>d(!1),500),g.current?.select()},[]),y=i.useCallback(async w=>{if(w.preventDefault(),!Y()){c("Dieser Browser ist zu alt. Bitte aktualisiere den Browser oder nutze ein anderes Gerät."),_();return}const N=Date.now();if(p!==null&&N<p){const B=Math.ceil((p-N)/1e3);c(`Zu viele Versuche. Bitte warte ${B} Sekunden.`),_();return}const z=n.trim();if(!z){c("Bitte gib ein Passwort ein."),_();return}h(!0);try{const B=await ct(z);if(B){m(0),f(null),t(B);return}const E=b+1;if(m(E),E>=5){const D=Math.min(3e4,(E-4)*5e3);f(Date.now()+D),c(`Zu viele Fehlversuche. Bitte warte ${Math.ceil(D/1e3)} Sekunden.`)}else c("Falsches Passwort. Bitte versuche es nochmal.");_()}finally{h(!1)}},[n,t,_,b,p]);return e.jsx("div",{className:"login-overlay",children:e.jsxs("div",{className:"login-card",children:[e.jsxs("div",{className:"login-logo-row",children:[e.jsx("img",{src:"heros.svg",alt:"",className:"login-logo","aria-hidden":"true"}),e.jsx("p",{className:"login-site-title",children:"Helden des Lichterwaldes"})]}),e.jsx("div",{className:"login-icon-wrap","aria-hidden":"true",children:e.jsx($e,{size:36,strokeWidth:2.2})}),e.jsx("h1",{className:"login-heading",children:"Willkommen!"}),e.jsx("p",{className:"login-sub",children:"Bitte gib das Passwort ein, um loszulegen."}),e.jsxs("form",{onSubmit:y,noValidate:!0,className:"login-form",children:[e.jsx("div",{className:"login-input-wrap",children:e.jsxs("div",{className:"login-password-field",children:[e.jsx("input",{ref:g,id:"login-password",type:l?"text":"password",className:`login-input${a?" login-input--shake":""}`,value:n,onChange:w=>{o(w.target.value),c(null)},placeholder:"Passwort eingeben",autoComplete:"current-password",disabled:u,"aria-label":"Passwort","aria-invalid":r!==null,"aria-describedby":r?"login-error":void 0}),e.jsx("button",{type:"button",className:"login-password-toggle-btn",onClick:()=>s(w=>!w),disabled:u,"aria-label":l?"Passwort verbergen":"Passwort anzeigen","aria-pressed":l,children:l?e.jsx(me,{size:18}):e.jsx(fe,{size:18})})]})}),r&&e.jsx("p",{id:"login-error",className:"login-error",role:"alert",children:r}),e.jsx("button",{type:"submit",className:"login-submit-btn",disabled:u,children:u?"Prüfe...":"Anmelden"})]})]})})},S={greenBase:"#6b8e23",brownBase:"#9b6b4a",surfaceDark:"#243520",textOnDark:"#eef3e8",actionGreen:"#2ecc71"},ge=(t,n)=>o=>{o.style.borderRadius=n.borderRadius??"20px",o.style.border=`2px solid ${n.borderColor??S.greenBase}`,n.boxShadow&&(o.style.boxShadow=n.boxShadow),t?.(o)},ut=(t,n={})=>({background:S.surfaceDark,color:S.textOnDark,backdrop:"rgba(28, 43, 26, 0.75)",...t,didOpen:ge(t.didOpen,n)}),dt=(t,n={})=>({toast:!0,position:"top-end",background:S.surfaceDark,color:S.textOnDark,...t,didOpen:ge(t.didOpen,{borderRadius:"18px",borderColor:S.greenBase,...n})}),W=(t,n={})=>xe.fire(ut(t,n)),ht=(t,n={})=>xe.fire(dt(t,n)),bt=({children:t})=>{const[n,o]=i.useState(null),l=i.useCallback(()=>n?.undo(!1),[n]),s=i.useCallback(()=>n?.undo(!0),[n]),r=i.useCallback(async()=>{if(!n||n.getAllBlocks(!1).length===0)return;(await W({title:"Alles wegräumen?",text:"Möchtet ihr wirklich alle Blöcke löschen?",icon:"warning",showCancelButton:!0,confirmButtonText:"Ja, löschen",cancelButtonText:"Abbrechen",allowOutsideClick:!1,allowEscapeKey:!1,confirmButtonColor:S.brownBase,cancelButtonColor:S.greenBase})).isConfirmed&&(n.clear(),n.clearUndo())},[n]);return e.jsx(pe.Provider,{value:{workspace:n,setWorkspace:o,undo:l,redo:s,reset:r},children:t})},K="ozobot_completed_levels",G="ozobot_level_solutions",U="ozobot_seen_mission_stories",J=()=>{try{return window.sessionStorage}catch{return null}},F=t=>J()?.getItem(t)??null,R=(t,n)=>{J()?.setItem(t,n)},M=t=>{J()?.removeItem(t)},Q=(t,n,o)=>{if(!t)return n;try{return JSON.parse(t)}catch(l){return o?.(),console.error("Failed to parse app storage",l),n}},mt=()=>{const t=Q(F(K),[],()=>M(K));return Array.isArray(t)?t.filter(n=>typeof n=="string"):[]},ft=()=>{const t=Q(F(G),{},()=>M(G));return!t||typeof t!="object"||Array.isArray(t)?{}:Object.fromEntries(Object.entries(t).filter(n=>typeof n[1]=="string"))},he=t=>{try{R(K,JSON.stringify(t))}catch(n){console.error("Failed to persist completed levels",n)}},q=t=>{try{R(G,JSON.stringify(t))}catch(n){console.error("Failed to persist level solutions",n)}},kt=()=>{const t=Q(F(U),[],()=>M(U));return Array.isArray(t)?t.filter(n=>typeof n=="string"):[]},xt=t=>{try{R(U,JSON.stringify(t))}catch(n){console.error("Failed to persist seen mission stories",n)}},X="ozobot_auth_role",Z="ozobot_auth_timestamp",pt=1440*60*1e3,gt=()=>{const t=F(X),n=F(Z);if(!t||!n)return null;const o=Number(n);return!Number.isFinite(o)||Date.now()-o>pt?(M(X),M(Z),null):t==="schueler"||t==="lehrer"?t:null},_t=t=>{R(X,t),R(Z,String(Date.now()))},yt=()=>{const[t,n]=i.useState(()=>gt()),o=i.useCallback(s=>{_t(s),n(s)},[]),l=i.useMemo(()=>t==="lehrer",[t]);return{authRole:t,isTeacherMode:l,handleLogin:o}},L={S1:{id:"S1",title:"Auf ins Abenteuer!",task:"Bevor ihr euch in den Nebelwald aufmacht, solltet ihr den Informatik-Igel besuchen. Folgt dem Pfad zu seinem Haus. Dort zeigt er euch seine berühmte Igel-Rolle, die euch auf eurer Reise helfen wird.",hint:"Die Blöcke auf eurer Tierkarte reichen aus, um diese Mission zu lösen.",requiredBlocks:["follow_to_intersection","turn_straight","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_straight">
            <next>
              <block type="follow_to_end_of_line"></block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},S2:{id:"S2",title:"Die verlorenen Eicheln",task:"Das Eichhörnchen Emma hat im ganzen Durcheinander ihre Eicheln verloren. Sie liegen verteilt neben dem Weg. Helft Emma und sammelt alle Eicheln ein. Bringt sie anschließend zurück zu ihrem Haus. Zum Dank zeigt Emma euch einen wichtigen Wald-Trick.",hint:"Die Blöcke auf eurer Tierkarte reichen aus, um diese Mission zu lösen.",requiredBlocks:["follow_to_intersection","turn_straight","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_straight">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_straight">
                    <next>
                      <block type="follow_to_intersection">
                        <next>
                          <block type="turn_straight">
                            <next>
                              <block type="follow_to_end_of_line"></block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},S3:{id:"S3",title:"Flug-Schule",task:"Der Rabe Ramona liebt das Fliegen. Sie möchte euch zeigen, wie man sich geschickt durch die Luft bewegt. Sammelt dafür die Übungsfeder ein und bringt sie zu Ramona, um das Fliegen zu erlernen.",hint:"Die Blöcke auf eurer Tierkarte reichen aus, um diese Mission zu lösen.",requiredBlocks:["follow_to_intersection","turn_right","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_right">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_right">
                    <next>
                          <block type="follow_to_end_of_line"></block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},S4:{id:"S4",title:"Die Zauberfrüchte",task:"Die Maus Mathilde war im Nebelwald unterwegs. Dabei sind drei Körbe mit Zauberfrüchten von ihrem Wagen gerutscht. Der Nebel wird immer dichter! Sammelt alle Zauberfrüchte ein und bringt sie zurück zu Mathildes Haus. Als Belohnung zeigt sie euch einen besonderen Wald-Trick.",hint:"Die Blöcke auf eurer Tierkarte reichen aus, um diese Mission zu lösen.",requiredBlocks:["follow_to_intersection","turn_left","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_left">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_left">
                    <next>
                      <block type="follow_to_end_of_line"></block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},S5:{id:"S5",title:"Der fleißige Biber",task:"Der Biber Ben baut fleißig neue Hütten in der Wald-Siedlung. Doch leider ist sein Holz aufgebraucht. Helft ihm, neues Holz zu sammeln! Bringt das Holz dann zu ihm, damit er weiterbauen kann. Als Dank zeigt euch Ben, wie man einen echten Biber-Steg baut.",hint:"Denkt an den Wald-Trick, den euch der Informatik-Igel beigebracht hat.",requiredBlocks:["follow_to_intersection","turn_straight","turn_left","reverseAtEndOfLine","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_straight">
            <next>
              <block type="follow_to_end_of_line">
                <next>
                  <block type="reverseAtEndOfLine">
                    <next>
                      <block type="follow_to_intersection">
                        <next>
                          <block type="turn_left">
                            <next>
                              <block type="follow_to_end_of_line"></block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N1:{id:"N1",title:"Irrwald",task:"Im Nebelwald ist der Nebel ganz dicht, und viele Wege führen ins Nichts. Lasst euch nicht verwirren und folgt dem richtigen Pfad mit den Laternen.",hint:"Die Blöcke auf eurer Tierkarte reichen aus, um diese Mission zu lösen.",requiredBlocks:["follow_to_intersection","turn_left","turn_right","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_right">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_left">
                    <next>
                      <block type="follow_to_end_of_line"></block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N2:{id:"N2",title:"Die kaputte Brücke",task:"Die Brücke über den großen Fluss ist kaputt. Setzt eure Wald-Tricks ein, um dennoch ans andere Ufer zu kommen. Glücklicherweise stehen Bäume am Ufer, damit ihr von Ast zu Ast springen könnt.",hint:"Denkt an den Wald-Trick, den euch das Eichhörnchen Emma beigebracht hat.",requiredBlocks:["follow_to_intersection","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_straight">
            <next>
              <block type="follow_to_end_of_line">
                <next>
                  <block type="jump_right">
                    <next>
                      <block type="follow_to_end_of_line"></block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N3:{id:"N3",title:"Trinkpause",task:"In der Ferne glitzert ein kleiner See. Bevor ihr eine kleine Trinkpause einlegt, solltet ihr noch einmal eure Wald-Tricks üben. Springt deshalb von Baum zu Baum, um den See zu erreichen.",hint:"Denkt an den Wald-Trick, den euch das Eichhörnchen beigebracht hat.",requiredBlocks:["follow_to_intersection","turn_right","jump_right","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_left">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_right">
                    <next>
                      <block type="follow_to_end_of_line">
                        <next>
                          <block type="jump_right">
                            <next>
                              <block type="follow_to_end_of_line"></block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N4:{id:"N4",title:"Wegweiser",task:"Die Tiere des Waldes haben euch Wegweiser mit Fußspuren hinterlassen. Trotz des dichten Nebels zeigen sie euch den richtigen Weg. Achtet gut auf die Spuren, damit ihr euch nicht verlauft!",hint:"Die Blöcke auf eurer Tierkarte reichen aus, um diese Mission zu lösen.",requiredBlocks:["follow_to_intersection","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_straight">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_straight">
                    <next>
                      <block type="follow_to_intersection">
                        <next>
                          <block type="turn_straight">
                            <next>
                              <block type="follow_to_intersection">
                                <next>
                                  <block type="turn_straight">
                                    <next>
                                      <block type="follow_to_end_of_line"></block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N5:{id:"N5",title:"Picknick-Pause",task:"Damit ihr eure Kräfte stärken könnt, haben eure Freunde im Nebelwald einen Picknick-Korb vorbereitet. Lasst euch auf dem Weg dorthin nicht von den vielen Abzweigungen verwirren!",hint:"Die Blöcke auf eurer Tierkarte reichen aus, um diese Mission zu lösen.",requiredBlocks:["follow_to_intersection","turn_right","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_right">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_right">
                    <next>
                      <block type="follow_to_end_of_line"></block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N6:{id:"N6",title:"Nebelgeister",task:"Fluff hat euch seine kleinen Helfer, die Nebelgeister, geschickt. Sie zeigen euch den Weg durch den dichten Nebel. Folgt ihnen, damit ihr euch nicht verlauft.",hint:"Die Blöcke auf eurer Tierkarte reichen aus, um diese Mission zu lösen.",requiredBlocks:["follow_to_intersection","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_straight">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_right">
                    <next>
                      <block type="follow_to_end_of_line"></block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N7:{id:"N7",title:"Sackgasse",task:"Ihr seid von allen Seiten von einem Fluss umgeben. Ist das eine Sackgasse? Der Raben-Flug hilft euch weiter, um den Fluss zu überqueren.",hint:"Denkt an den Wald-Trick, den euch der Rabe Ramona beigebracht hat.",requiredBlocks:["follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_end_of_line">
        <next>
          <block type="jump_left">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_left">
                    <next>
                      <block type="follow_to_end_of_line"></block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N8:{id:"N8",title:"Flucht vor dem Nebel",task:"Dichter Nebel breitet sich aus und kommt immer näher. Beeilt euch und folgt den Lichtern am Wegrand, sie zeigen euch den richtigen Weg.",hint:"Denkt an den Wald-Trick, den dir die Maus Mathilde beigebracht hat.",requiredBlocks:["follow_to_intersection","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection">
        <next>
          <block type="turn_straight">
            <next>
              <block type="follow_to_intersection">
                <next>
                  <block type="turn_left">
                    <next>
                      <block type="follow_to_end_of_line"></block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N9:{id:"N9",title:"Dreisprung",task:"Der Pfad am Fluss stellt euer Geschick auf die Probe. Springt hin und her über das Wasser und nutzt eure Wald-Tricks. Am Ende müsst ihr auch noch einen kleinen Steg bauen, um den Fluss zu überqueren.",hint:"Denkt an die Wald-Tricks, die euch der Biber Ben, der Rabe Ramona und das Eichhörnchen Emma beigebracht haben.",requiredBlocks:["follow_to_end_of_line","jump_straight"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_end_of_line">
        <next>
          <block type="jump_left">
            <next>
              <block type="follow_to_end_of_line">
                <next>
                  <block type="jump_right">
                    <next>
                      <block type="follow_to_intersection">
                        <next>
                          <block type="turn_right">
                            <next>
                              <block type="follow_to_end_of_line">
                                <next>
                                  <block type="jump_straight">
                                    <next>
                                      <block type="follow_to_end_of_line"></block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N10:{id:"N10",title:"Reißender Fluss",task:"Ein reißender Fluss versperrt euren Weg. Nutzt eure Wald-Tricks, um ihn sicher zu überqueren und zu den drei großen Bäumen zu gelangen.",hint:"Denkt an den Wald-Trick, den euch der Biber Ben beigebracht hat.",requiredBlocks:["follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_end_of_line">
        <next>
          <block type="jump_straight">
            <next>
              <block type="turn_left">
                <next>
                  <block type="follow_to_intersection">
                    <next>
                      <block type="turn_right">
                        <next>
                          <block type="follow_to_end_of_line"></block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},N11:{id:"N11",title:"Bienenvolk",task:"Das Bienenvolk hilft euch auf eurer Reise und zeigt euch den Weg durch den dichten Nebel. Folgt den Bienen so schnell, wie ihr nur könnt, damit ihr sie nicht verliert.",hint:"Denkt an den Wald-Trick, den dir die Maus Mathilde beigebracht hat.",requiredBlocks:["follow_to_intersection","drive_fast","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="drive_fast">
        <next>
          <block type="follow_to_intersection">
            <next>
              <block type="turn_left">
                <next>
                  <block type="follow_to_intersection">
                    <next>
                      <block type="turn_right">
                        <next>
                          <block type="follow_to_end_of_line"></block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},D1:{id:"D1",title:"Verlorene Wolfskinder",task:"Die zwei Wolfskinder haben sich im Dunkelwald verirrt, als der Nebel aufzog. Bringt sie sicher zurück zu ihrer Mutter. Als Dank bringt euch die Wolfsmutter den Wolfs-Wirbel bei.",hint:"Arbeitet als Gruppe zusammen und denkt an die Wald-Tricks, die euch der Biber Ben und das Eichhörnchen Emma beigebracht haben.",requiredBlocks:["follow_to_intersection","turn_right","reverseAtEndOfLine","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_end_of_line" x="40" y="40">
        <next>
          <block type="jump_straight">
            <next>
              <block type="turn_straight">
                <next>
                  <block type="follow_to_end_of_line">
                    <next>
                      <block type="reverseAtEndOfLine">
                        <next>
                          <block type="follow_to_intersection">
                            <next>
                              <block type="turn_left">
                                <next>
                                  <block type="follow_to_intersection">
                                    <next>
                                      <block type="turn_straight">
                                        <next>
                                          <block type="follow_to_end_of_line"></block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
      <block type="follow_to_intersection" x="560" y="40">
        <next>
          <block type="turn_left">
            <next>
              <block type="follow_to_end_of_line">
                <next>
                  <block type="jump_right">
                    <next>
                      <block type="follow_to_end_of_line">
                        <next>
                          <block type="reverseAtEndOfLine">
                            <next>
                              <block type="follow_to_intersection">
                                <next>
                                  <block type="turn_right">
                                    <next>
                                      <block type="follow_to_intersection">
                                        <next>
                                          <block type="turn_straight">
                                            <next>
                                              <block type="follow_to_end_of_line"></block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},D2:{id:"D2",title:"Rettungsaktion",task:"Endlich könnt ihr Fluff in der Ferne sehen. Aber der Weg ist von stacheligen Dornenbüschen überwachsen, die ihr nur mithilfe des Wolfs-Wirbels entfernen könnt. Wirbelt euch den Weg frei und sammelt alle Nebelgeister ein. Schafft ihr es Fluff zu retten?",hint:"Arbeitet als Gruppe zusammen und denkt an den Wald-Trick, den euch die Wolfsmutter beigebracht hat.",requiredBlocks:["follow_to_intersection","reverseAtEndOfLine","follow_to_end_of_line","tornado"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection" x="40" y="40">
        <next>
          <block type="tornado">
            <next>
              <block type="turn_left">
                <next>
                  <block type="follow_to_intersection">
                    <next>
                      <block type="turn_right">
                        <next>
                          <block type="follow_to_end_of_line">
                            <next>
                              <block type="reverseAtEndOfLine">
                                <next>
                                  <block type="follow_to_intersection">
                                    <next>
                                      <block type="turn_right">
                                        <next>
                                          <block type="follow_to_intersection">
                                            <next>
                                              <block type="turn_right">
                                                <next>
                                                  <block type="follow_to_end_of_line"></block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
      <block type="follow_to_intersection" x="530" y="40">
        <next>
          <block type="tornado">
            <next>
              <block type="turn_right">
                <next>
                  <block type="follow_to_intersection">
                    <next>
                      <block type="turn_left">
                        <next>
                          <block type="follow_to_end_of_line">
                            <next>
                              <block type="reverseAtEndOfLine">
                                <next>
                                  <block type="follow_to_intersection">
                                    <next>
                                      <block type="turn_left">
                                        <next>
                                          <block type="follow_to_intersection">
                                            <next>
                                              <block type="turn_left">
                                                <next>
                                                  <block type="follow_to_end_of_line"></block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},D3:{id:"D3",title:"Leuchtende Kristalle",task:"Bieber Ben baut in der Wald-Siedlung nicht nur fleißig neue Hütten, sondern sammelt auch die leuchtenden Kristalle, die den Wald zum Leuchten bringen. Helft Ben und sammelt alle vier Kristalle ein! Als Dank zeigt er euch, wie ihr einen richtigen Biber-Steg bauen könnt.",hint:"Arbeitet als Gruppe zusammen und denkt an den Wald-Trick, den euch der Informatik-Igel beigebracht hat.",requiredBlocks:["follow_to_intersection","reverseAtEndOfLine","follow_to_end_of_line"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_intersection" x="40" y="40">
        <next>
          <block type="turn_right">
            <next>
              <block type="follow_to_end_of_line">
                <next>
                  <block type="reverseAtEndOfLine">
                    <next>
                      <block type="follow_to_intersection">
                        <next>
                          <block type="turn_right">
                            <next>
                              <block type="follow_to_intersection">
                                <next>
                                  <block type="turn_right">
                                    <next>
                                      <block type="follow_to_end_of_line">
                                        <next>
                                          <block type="reverseAtEndOfLine">
                                            <next>
                                              <block type="follow_to_intersection">
                                              <next>
                                                <block type="turn_right">
                                                  <next>
                                                    <block type="follow_to_end_of_line"></block>
                                                  </next>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
      <block type="follow_to_intersection" x="530" y="40">
        <next>
          <block type="turn_straight">
            <next>
              <block type="follow_to_end_of_line">
                <next>
                  <block type="reverseAtEndOfLine">
                    <next>
                      <block type="follow_to_intersection">
                        <next>
                          <block type="turn_left">
                            <next>
                              <block type="follow_to_intersection">
                                <next>
                                  <block type="turn_straight">
                                    <next>
                                      <block type="follow_to_end_of_line">
                                        <next>
                                          <block type="reverseAtEndOfLine">
                                            <next>
                                              <block type="follow_to_intersection">
                                                <next>
                                                  <block type="turn_left">
                                                    <next>
                                                      <block type="follow_to_end_of_line"></block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`},D4:{id:"D4",title:"Rettungsaktion",task:"Endlich könnt ihr Fluff in der Ferne sehen. Der Weg vor euch ist aber ganz schön kompliziert und unübersichtlich. Sprecht euch deshalb in eurer Gruppe genau ab, welche Pfade ihr nehmen müsst! Schafft ihr es Fluff zu retten?",hint:"Arbeitet als Gruppe zusammen und denkt an die Wald-Tricks, die euch der Rabe Ramona und der Biber Ben beigebracht haben.",requiredBlocks:["follow_to_end_of_line","jump_left","jump_straight"],solutionXml:`<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="follow_to_end_of_line" x="20" y="40">
        <next>
          <block type="jump_straight">
            <next>
              <block type="jump_left">
                <next>
                  <block type="follow_to_end_of_line">
                 <next>
                </block>
              </next>
            </block>
          </next>
        </block>
      </next>
      </block>
      <block type="follow_to_end_of_line" x="550" y="40">
        <next>
          <block type="jump_left">
            <next>
              <block type="follow_to_end_of_line">
                <next>
                  <block type="jump_straight">
                    <next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`}},wt=()=>{const[t,n]=i.useState(null),[o,l]=i.useState("S1"),[s,r]=i.useState(mt),[c,a]=i.useState(ft),d=i.useCallback(f=>L[f]?(l(f),n(f),!0):!1,[]),u=i.useCallback(()=>{n(null)},[]),h=i.useCallback(f=>{r(f),he(f)},[]),b=i.useCallback((f,g)=>{a(_=>{if(_[f]===g)return _;const y={..._,[f]:g};return q(y),y})},[]),m=i.useCallback(f=>{a(g=>{const _=Object.fromEntries(Object.entries(g).filter(([y])=>y!==f));return q(_),_})},[]),p=i.useCallback(()=>{r([]),he([]),a({}),q({})},[]);return{activeLevelId:t,selectedLobbyLevelId:o,completedLevels:s,levelSolutions:c,setSelectedLobbyLevelId:l,startLevel:d,leaveLevel:u,persistCompletedLevels:h,saveLevelSolution:b,discardLevelSolution:m,resetAllProgress:p}};function St(t){if(!t)return[];const n=L[t];return n?n.requiredBlocks??[]:[]}const vt=t=>{if(!t)return[];const n=/<block\b[^>]*\btype="([^"]+)"/g,o=[],l=new Set;let s;for(s=n.exec(t);s!==null;){const r=s[1];l.has(r)||(l.add(r),o.push(r)),s=n.exec(t)}return o},jt=t=>{if(!t)return[];const n=/<\/?block\b[^>]*>/g,o=[];let l=0,s=null,r=n.exec(t);for(;r!==null;)r[0].startsWith("</block")?(l-=1,l===0&&s!==null&&(o.push(t.slice(s,n.lastIndex)),s=null)):(l===0&&(s=r.index),l+=1),r=n.exec(t);return o},Nt=t=>{if(!t)return[];const n=L[t];if(!n)return[];const o=jt(n.solutionXml);if(o.length>0)return o.map(s=>vt(s)).filter(s=>s.length>0);const l=n.requiredBlocks??[];return l.length>0?[l]:[]};function Bt(t){return t?Object.prototype.hasOwnProperty.call(L,t):!1}function Et(t,n,o=!1){if(o)return{isValid:!0};if(!t)return{isValid:!1,reason:"NO_LEVEL"};if(!Bt(t))return{isValid:!1,reason:"LEVEL_NOT_FOUND"};if(n.length===0)return{isValid:!1,reason:"NO_BLOCKS_PLACED"};const l=Nt(t);if(l.length===0)return{isValid:!0};const s=new Set(n),r=l.map(d=>{const u=new Set(d),h=n.some(m=>!u.has(m)),b=d.filter(m=>!s.has(m));return{hasWrongBlocks:h,missingBlocks:b}});if(r.find(d=>!d.hasWrongBlocks&&d.missingBlocks.length===0))return{isValid:!0};const a=r.filter(d=>!d.hasWrongBlocks).sort((d,u)=>d.missingBlocks.length-u.missingBlocks.length)[0];return a?{isValid:!1,reason:"MISSING_BLOCKS",missingBlocks:a.missingBlocks}:{isValid:!1,reason:"WRONG_BLOCKS"}}const Ct=({activeLevelId:t,usedBlockTypes:n,isTeacherMode:o,completedLevels:l})=>({finishMission:i.useCallback(()=>{if(!t)return{kind:"blocked",issue:"NO_LEVEL",levelId:null,missingBlocks:[]};const r=Et(t,n,o);if(!r.isValid){const a=r.reason??"NO_LEVEL";return{kind:"blocked",issue:a,levelId:t,missingBlocks:r.missingBlocks??(a==="NO_BLOCKS_PLACED"?St(t):[])}}if(o)return{kind:"teacher-completed",levelId:t};const c=[...new Set([...l,t])];return{kind:"student-completed",levelId:t,completedAfterFinish:c,requiresD2Prompt:t==="D2"||t==="D4"}},[t,l,o,n])}),Dt=["black","red","green","yellow","blue","magenta","cyan","white"],Lt=t=>Number.isInteger(t)&&t>=0&&t<=255,zt=t=>{if(t.opcodes.length===0)return{isValid:!1,reason:"EMPTY_PROGRAM"};for(const o of t.opcodes){if(o.length===0)return{isValid:!1,reason:"EMPTY_OPCODE"};if(!o.every(Lt))return{isValid:!1,reason:"INVALID_BYTE"}}return t.opcodes.reduce((o,l)=>o+l.length,0)>194?{isValid:!1,reason:"PAYLOAD_TOO_LARGE"}:{isValid:!0}},Tt=t=>256-(t.reduce((o,l)=>o+l,0)&255)&255,Ot=t=>{const n=[],o=["cyan","red","yellow","cyan","yellow","magenta","cyan","red","white"];let l=7;t.forEach(c=>{[Math.floor(c/49)%7,Math.floor(c%49/7),c%7].forEach(d=>{d===l?(n.push("white"),l=7):(n.push(Dt[d]),l=d)})});const r=n[n.length-1]==="cyan"?["white","magenta","white"]:["cyan","magenta","white"];return[...o,...n,...r]},At=t=>{const n=[1,7],o=[40,147],l=[3,174],s=t.opcodes.flat(),r=[...o,...s,...l],c=r.length+1,a=199-c,b=[...[...n,a,0,c,45],...r],m=Tt(b);return Ot([...b,m])},Ft=()=>{const[t,n]=i.useState(!1),[o,l]=i.useState([]),s=i.useRef(null),r=i.useCallback(()=>{s.current&&(clearTimeout(s.current),s.current=null),n(!1)},[]),c=i.useCallback(a=>{const d=zt(a);if(!d.isValid)return console.error("Ozobot Flash Program Validation Error:",d.reason),!1;try{const u=At(a);l(u),n(!0);const h=50;return s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{n(!1),s.current=null},u.length*h),!0}catch(u){return console.error("Ozobot Flash Protocol Error:",u),!1}},[]);return{isFlashingActive:t,flashingColors:o,startFlashing:c,stopFlashing:r}},Rt=()=>{const[t,n]=i.useState(""),[o,l]=i.useState({opcodes:[],unknownBlockTypes:[]}),[s,r]=i.useState([]),[c,a]=i.useState(!1),{isFlashingActive:d,flashingColors:u,startFlashing:h,stopFlashing:b}=Ft(),m=i.useCallback(()=>{n(""),l({opcodes:[],unknownBlockTypes:[]}),r([])},[]),p=i.useCallback(()=>{b(),a(!1)},[b]),f=i.useCallback(()=>{a(y=>(y&&b(),!y))},[b]),g=i.useCallback((y,w,N)=>{n(y),l(N),r(w),b()},[b]),_=i.useCallback(()=>{h(o)},[o,h]);return{previewCode:t,flashProgram:o,usedBlockTypes:s,isFlashingOpen:c,isFlashingActive:d,flashingColors:u,toggleFlashing:f,stopFlashing:b,stopAndCloseFlashing:p,updateWorkspaceCode:g,startFlashingCurrentCode:_,resetEditorState:m}},Mt=({saveLevelSolution:t,debounceMs:n})=>{const o=i.useRef(null),l=i.useRef(null),s=i.useCallback(()=>{if(!o.current)return;const{levelId:a,workspaceXml:d}=o.current;o.current=null,t(a,d)},[t]),r=i.useCallback(()=>{l.current&&(clearTimeout(l.current),l.current=null),o.current=null},[]),c=i.useCallback((a,d)=>{o.current={levelId:a,workspaceXml:d},l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{l.current=null,s()},n)},[n,s]);return i.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]),{flushPendingLevelSolutionSave:s,cancelPendingLevelSolutionSave:r,scheduleLevelSolutionSave:c}},Wt={S1:"Der Informatik-Igel ruft euch zu:",S2:"Das Eichhörnchen Emma hat einen Tipp:",S3:"Die Maus Mathilde hilft euch weiter:",S4:"Der Rabe Ramona ruft euch zu:",S5:"Der Biber Ben zeigt euch den nächsten Schritt:"},Pt={S:"Die Waldfreunde aus der Siedlung sagen:",N:"Die Nebelgeister flüstern euch zu:",D:"Fluff ruft euch durch die Dunkelheit zu:"},It="Der Lichterwald flüstert euch zu:",Vt=t=>Wt[t]??Pt[t.charAt(0)]??It,Ht=t=>t.replace(/\s(?:x|y|id)="[^"]*"/g,"").replace(/>\s+</g,"><").replace(/\s+/g," ").trim(),qt=i.lazy(()=>Ue(()=>import("./BlocklyEditor-C9iFoIB2.js"),__vite__mapDeps([0,1,2,3,4,5]))),$t=350,T=(t,n)=>{W({title:t,text:n,icon:"warning",confirmButtonText:"Verstanden",confirmButtonColor:S.brownBase})},Kt=t=>{ht({icon:"success",title:`Mission ${t} erfolgreich abgeschlossen!`,showConfirmButton:!1,timer:3200,timerProgressBar:!0,iconColor:S.actionGreen},{borderRadius:"18px",borderColor:S.greenBase,boxShadow:"0 12px 28px rgba(0, 0, 0, 0.28)"})},Gt=t=>{const n=L[t];n&&W({title:`Mission ${n.id}: ${n.title}`,text:n.task,confirmButtonText:"Los geht's!",confirmButtonColor:S.brownBase})},Ut=async()=>{const t=await W({title:"Ihr habt Fluff gerettet!",html:`
      <div class="d2-completion-stars" aria-hidden="true">
        <span>★</span><span>★</span><span>★</span>
      </div>
      <p class="d2-completion-message">Langsam löst sich der geheimnisvolle Nebel auf und der Wald beginnt wieder in allen Farben zu leuchten. Die Tiere des Waldes jubeln euch zu und feiern euch als mutige Helden des Waldes.</p>
    `,showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Noch einmal spielen",denyButtonText:"Weitere Mission erkunden",customClass:{popup:"d2-completion-popup",htmlContainer:"d2-completion-html"},confirmButtonColor:S.brownBase,denyButtonColor:S.greenBase,allowOutsideClick:!1,allowEscapeKey:!1});return t.isConfirmed?"restart":t.isDenied?"continue":null},Xt=()=>{const{authRole:t,isTeacherMode:n,handleLogin:o}=yt(),{activeLevelId:l,selectedLobbyLevelId:s,completedLevels:r,levelSolutions:c,setSelectedLobbyLevelId:a,startLevel:d,leaveLevel:u,persistCompletedLevels:h,saveLevelSolution:b,discardLevelSolution:m,resetAllProgress:p}=wt(),{previewCode:f,usedBlockTypes:g,isFlashingOpen:_,isFlashingActive:y,flashingColors:w,toggleFlashing:N,stopFlashing:z,stopAndCloseFlashing:B,updateWorkspaceCode:E,startFlashingCurrentCode:D,resetEditorState:k}=Rt(),[v,O]=i.useState(null),[ee,te]=i.useState(!1),[ne,H]=i.useState(""),[,ye]=i.useState(kt),A=i.useRef(""),[le,we]=i.useState({}),{flushPendingLevelSolutionSave:oe,cancelPendingLevelSolutionSave:P,scheduleLevelSolutionSave:se}=Mt({saveLevelSolution:b,debounceMs:$t}),{finishMission:re}=Ct({activeLevelId:l,usedBlockTypes:g,isTeacherMode:n,completedLevels:r}),Se=i.useCallback(x=>{if(!d(x)){T("Level nicht gefunden","Dieses Level wurde nicht gefunden. Schau nochmal auf dein Aufgabenblatt!");return}O(null),k(),H(""),A.current="",P(),ye(j=>{if(j.includes(x))return j;const C=[...j,x];return xt(C),n||Gt(x),C})},[P,n,k,d]),ve=i.useCallback(()=>{oe();const x=re();if(x.kind==="blocked"){if(x.issue==="LEVEL_NOT_FOUND"){T("Mission nicht gefunden","Diese Mission ist gerade nicht verfügbar. Starte bitte die Mission neu.");return}if(!x.levelId||x.issue==="NO_LEVEL")return;const j=x.levelId,C=Ht(ne),I=le[j],V=Vt(j);if(I!==void 0&&I===C){T("Probiert etwas Neues!",`${V} Ihr habt nichts verändert. Schaut euch nochmal die Missions-Karte an und probiert etwas Neues.`);return}if(we(Ce=>({...Ce,[j]:C})),x.issue==="NO_BLOCKS_PLACED"){T("Los geht's!",`${V} Schaut euch zuerst die Missions-Karte an und lest die Geschichte. Setzt dann die passenden Blöcke in den Arbeitsbereich.`);return}if(x.issue==="MISSING_BLOCKS"){T("Da fehlt noch was!",`${V} Schaut genau hin, es fehlen noch Blöcke. Fügt die passenden Blöcke ein und probiert es nochmal.`);return}if(x.issue==="WRONG_BLOCKS"){T("Da passt was nicht!",`${V} Schaut genau hin, welcher Block gehört nicht dazu? Tauscht ihn aus und probiert es nochmal.`);return}return}if(B(),A.current="",u(),x.kind!=="teacher-completed"){if(h(x.completedAfterFinish),x.requiresD2Prompt){te(!0);return}Kt(x.levelId)}},[ne,re,oe,u,le,h,B]);i.useEffect(()=>{!ee||l!==null||Ut().then(x=>{x==="restart"&&p(),te(!1)})},[l,p,ee]);const je=i.useCallback(()=>{if(!l)return;const x=()=>{m(l),P(),B(),O(null),k(),H(""),A.current="",u()};if(n){x();return}W({title:"Zurück zum Startbildschirm?",text:"Möchtet ihr wirklich zum Startbildschirm zurückkehren und alle bisherigen Änderungen löschen?",icon:"warning",showCancelButton:!0,confirmButtonText:"Ja, löschen",cancelButtonText:"Abbrechen",confirmButtonColor:S.brownBase,cancelButtonColor:S.greenBase}).then(j=>{j.isConfirmed&&x()})},[l,P,m,n,u,k,B]),Ne=i.useCallback((x,j,C,I)=>{E(x,j,I),C!==A.current&&(H(C),A.current=C),l&&!n&&se(l,C)},[l,se,E,n]),Be=i.useCallback(x=>{O(j=>j===x?null:x)},[]),Ee=i.useCallback(()=>{O(null)},[]),ie=!l;return t?e.jsx(bt,{children:e.jsx("div",{className:`app ${ie?"app-lobby":""}`.trim(),children:ie?e.jsx(lt,{onStartLevel:Se,completedLevels:r,isTeacherMode:n,selectedLevelId:s,onSelectedLevelChange:a}):e.jsxs(e.Fragment,{children:[e.jsx(Ze,{onOpenSidebar:Be,onFinishLevel:ve,onBackToLobby:je,activeLevelId:l,isTeacherMode:n}),e.jsxs("main",{className:`main-layout ${_?"flashing-open":"flashing-closed"}`,children:[e.jsx("div",{className:`blockly-workspace-container ${v?"sidebar-open":""}`,children:e.jsx(i.Suspense,{fallback:e.jsx("div",{className:"loading-placeholder",role:"status","aria-live":"polite",children:e.jsx("div",{className:"loading-spinner","aria-hidden":"true"})}),children:e.jsx(qt,{initialWorkspaceXml:l?n?L[l]?.solutionXml??null:c[l]??null:null,onCodeChange:Ne},l)})}),e.jsx(Qe,{type:v,onClose:Ee,activeLevel:L[l]})]}),e.jsx(Je,{isFlashingOpen:_,toggleFlashing:N,currentCode:f,isFlashingActive:y,onStartFlashing:D,onStopFlashing:z,flashingColors:w})]})})}):e.jsx(at,{onLogin:o})},_e=document.getElementById("root");if(!_e)throw new Error("Failed to find the root element. Ensure index.html contains <div id='root'></div>");De.createRoot(_e).render(e.jsx(i.StrictMode,{children:e.jsx(Xt,{})}));export{Xe as u};
