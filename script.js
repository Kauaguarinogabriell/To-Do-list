const InputTaskName = document.getElementById("input-task");
const list = document.getElementById("list");
let arraylist = [list]
const listdo = document.getElementById("listdo")

function CreateItemAndAddId(element, atribut, elementClass, conteudo){
    this.item = element
    this.classe = elementClass
    this.content = conteudo
    const NewObject = document.createElement(element)
    NewObject.setAttribute(atribut, elementClass)
    NewObject.innerHTML = conteudo
    return NewObject
}

function addelement() {
    const taskname = InputTaskName.value;
    if(taskname != 0) {
        const litask = new CreateItemAndAddId("li", "class", "containertask", "")
        const check = new CreateItemAndAddId("input", "class", "checkbox", "")
        const newtask = new CreateItemAndAddId("div", "class", "task", "")
        const divtext = new CreateItemAndAddId("div", "null", "", taskname)
        list.appendChild(litask)
        newtask.appendChild(check)
        check.setAttribute("type", "checkbox")
        newtask.appendChild(divtext)
        litask.appendChild(newtask)
        InputTaskName.value = ''

        arraylist.forEach(() => {
            const div = new CreateItemAndAddId("div", "class", "buttons", "")
            const remove = new CreateItemAndAddId("img", "src", "/imagens/trash.svg", "")
            newtask.appendChild(div);
            div.appendChild(remove);
            remove.addEventListener("click", () => {
                list.removeChild(litask)
            })
            check.addEventListener("click", () => {
                listdo.appendChild(newtask)
            })
        })
    }
}
const FaqListArrow = document.querySelector("#FAQ")
FaqListArrow.addEventListener("click", () => {
    if(FaqListArrow.classList == "ativo"){
        FaqListArrow.setAttribute("src", "/imagens/caret-down.svg")
        listdo.classList = "desativado"
        FaqListArrow.classList = "null"
    } else {
        FaqListArrow.classList = "ativo"
        listdo.classList = "ativo"
        FaqListArrow.setAttribute("src", "/imagens/caret-right.svg")
    }
})
InputTaskName.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        addelement()
    }
})