const modal = document.querySelector(".modal_task");
const box_lista = document.querySelector(".lista_tasks")
var tasks = JSON.parse(localStorage.getItem("tasks")) || []

function mostrar_modal(){
    modal.style.display = "flex";
}
function adicionar_task(){
    var task = document.querySelector("input").value;
    if( task !== ""){
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}
function carregar_tasks(){
    var lista = JSON.parse(localStorage.getItem("tasks"))
    lista.forEach(element => {
        var div = document.createElement("div");
        var li = document.createElement("li");
        var botao = document.createElement("button");
        botao.innerHTML = "Excluir";
        botao.setAttribute("value", element)
        botao. classList.add("botao_excluir")
        li.innerHTML = element;
        div.classList.add("elemento");
        div.appendChild(li);
        div.appendChild(botao)
        box_lista.appendChild(div)

        botao.addEventListener("click", function(){
            div.remove();
            var valor_task = botao.value;
            lista.splice(lista.indexOf(valor_task), 1) 
            localStorage.setItem("tasks", JSON.stringify(lista));
            location.reload(true)
        })

    });
}
window.addEventListener("load", carregar_tasks())