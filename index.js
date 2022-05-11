function mostrar_modal(){
    var modal = document.querySelector(".modal_task");
    modal.style.display = "flex";
}
var tasks = []
function adicionar_task(){
    var task = document.querySelector("input").value;
    tasks.push(task);
}
function carregar_tasks(){

}
window.addEventListener("load", carregar_tasks())