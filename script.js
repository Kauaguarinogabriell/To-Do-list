const InputTaskName = document.querySelector("#input-task");
const list = document.querySelector("#list");
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


function addelement () {
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

        let arraylist = [list]
        arraylist.forEach(() => {
            const div = new CreateItemAndAddId("div", "class", "buttons", "")
            const addsubtask = new CreateItemAndAddId("img", "src", "/imagens/plus-circle.svg", "")
            const remove = new CreateItemAndAddId("img", "src", "/imagens/trash.svg", "")
            newtask.appendChild(div);
            div.appendChild(addsubtask)
            div.appendChild(remove);
            const divSubList = new CreateItemAndAddId("div", "class", "divsubtask", "")
            litask.appendChild(divSubList)
            const InputSubTask = new CreateItemAndAddId("input", "class", "Inputelementsubtask", "")
            divSubList.appendChild(InputSubTask)

            function AddNewSubTask() {
                const sublist = document.querySelector(".sublist")
                const verify = InputSubTask.value

                function CreateSubTask() {
                    if (verify != 0) {
                        const Namesubtaskvalue = InputSubTask.value 
                        const SubTask = new CreateItemAndAddId("li", "class", "subtask", Namesubtaskvalue)
                        InputSubTask.value = ''
                        sublist.appendChild(SubTask)
                    } else {
                        console.log("digite algo")
                    }
                }

                if(sublist == null) {
                    const createSublist = new CreateItemAndAddId("ul", "class", "sublist", "")
                    divSubList.appendChild(createSublist)
                    CreateSubTask()
                } else {
                    CreateSubTask()
                }
            }

            InputSubTask.addEventListener("keypress", (event) => {
                if (event.key === 'Enter') {
                    AddNewSubTask()
                }
            })


            remove.addEventListener("click", () => {
                list.removeChild(litask)
            })
            check.addEventListener("click", () => {
                newtask.style.textDecoration = "line-through"
                list.removeChild(litask)
                listdo.appendChild(newtask)
            })
        });
    } else {
        alert("digite algo")
    }
}

const ButtonArrowRight = document.querySelector("#seta")
const testelist = listdo.getElementById = ("ativo")
ButtonArrowRight.addEventListener("click", () => {
    if(testelist == false){
        ButtonArrowRight.setAttribute("src", "/imagens/caret-down.svg")
        listdo.setAttribute("id", "ativo")
    } else {
        ButtonArrowRight.setAttribute("src", "/imagens/caret-right.svg")
        listdo.setAttribute("id", "listdo")
    }

})

InputTaskName.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        addelement()
    }
})