const inputTask = document.querySelector("#input-task");
const list = document.querySelector("#list");
const listdo = document.querySelector("#listdo")
function addelement () {
    const taskname = inputTask.value;
    if(taskname != 0) {
        const newtask = document.createElement("li")
        newtask.setAttribute("id", "task")
        const check = document.createElement("input")
        check.setAttribute("type", "checkbox")
        check.setAttribute("id", "checkbox")
        newtask.appendChild(check)
        const divtext = document.createElement("div")
        newtask.appendChild(divtext)
        divtext.innerText = taskname
        list.appendChild(newtask);
        inputTask.value = ''
        let arraylist = [list]
        arraylist.forEach(() => {
            const div = document.createElement("div")
            div.setAttribute("id", "buttons")
            newtask.appendChild(div);
            const addsubtask = document.createElement("img")
            addsubtask.setAttribute("src", "/imagens/plus-circle.svg")
            div.appendChild(addsubtask)
            const remove = document.createElement("img")
            remove.setAttribute("src", "/imagens/trash.svg");
            div.appendChild(remove);
            remove.addEventListener("click", () => {
                list.removeChild(newtask)
            })
            check.addEventListener("click", () => {
                newtask.style.textDecoration = "line-through"
                listdo.appendChild(newtask)
            })
        });
    } else {
        alert("digite algo")
    }
}
inputTask.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        addelement()
    }
})