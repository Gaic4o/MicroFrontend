import style from "./clearButton.scss";

const el = document.createElement('button'); 
el.innerHTML = "Clear"; 
el.classList.add([style.button]); // 액세스 모듈 
el.onclick = function() {
    alert("Clear clicked"); 
}; 

document.body.appendChild(el);
