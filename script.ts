const InputTask = document.getElementById("Input-Task") as HTMLInputElement
const ListTasks = document.getElementById("List-Tasks") as HTMLUListElement
const ListTaskDoes = document.getElementById("List-Do") as HTMLDivElement

// Essa função cria novos elementos no DOM, adiciona um atributo e define o valor do mesmo
// This function creates new elements in the DOM, adds an attribute and sets its value
function CreateElementDOM(ElementHTML: string, Atributo?: string, valueAtributo?: string): HTMLElement{
  const NewElement = document.createElement(ElementHTML)
  if(Atributo != undefined){
    NewElement.setAttribute(Atributo!, valueAtributo!)
    return NewElement
  } else {
    return NewElement
  }
}

// Essa função cria o CheckBox da tarefa, e ao marcar o mesmo, ela troca a função e coloca ela na lista de feitos e desativa o checkbox da mesma
// This function creates the task's CheckBox, and when checking it, it changes the function and places it in the list of tasks and deactivates the checkbox.
function CreateCheckBox(path: HTMLElement){
  const RandomNumber = Math.floor(Math.random()*100000)
  const Check = CreateElementDOM("input", "type", "checkbox")
  Check.setAttribute("id", "CheckBoxID"+RandomNumber)
  path.appendChild(Check)
  Check.addEventListener("click", (e) => {
    const CheckTaskDoes = (e.target as HTMLElement).closest(".Task")
    ListTaskDoes.appendChild(CheckTaskDoes!)
    Check.setAttribute("disabled", "true")
  })
}

// Essa função cria a div de encapsulamento do nome da terefa
// This function creates the task name encapsulation div
function CreateTextDiv(path: HTMLElement, ContentDiv: string){
  const DivText = CreateElementDOM("div", "class", "Text-Task")
  path.appendChild(DivText)
  DivText.innerText = ContentDiv
}
 
// Essa função cria o botão de excluir a terefa, rastrei a terefa e a lista em que ela se encontra para exclusão e faz a exclusão quando solicitado
// This function creates the button to delete the task, tracks the task and the list it is in for deletion and performs the deletion when requested
function CreateButtons(path: HTMLElement){
  const DivButtons = CreateElementDOM("div", "class", "Buttons")
  const Buttons = CreateElementDOM("img", "src", "imagens/trash.svg")
  DivButtons.appendChild(Buttons)
  path.appendChild(DivButtons)
  Buttons.addEventListener("click", (e) => {
    const ListRemoveElement = (e.target as HTMLElement).parentNode?.parentNode?.parentNode as HTMLElement
    const RemoveTask = (e.target as HTMLElement).closest(".Task")
    ListRemoveElement.removeChild(RemoveTask!)
  })
}

function CreateTask(TaskName: string){
  const RandomNumber = Math.floor(Math.random()*100000)
  const TaskElement = CreateElementDOM("li", "id", TaskName+RandomNumber)
  TaskElement.setAttribute("class", "Task")
  const DivLayout = CreateElementDOM("div", "class", "DivLayout")
  TaskElement.appendChild(DivLayout)
  CreateCheckBox(DivLayout)
  CreateTextDiv(DivLayout, TaskName)
  CreateButtons(TaskElement)
  ListTasks.appendChild(TaskElement)
}

InputTask.addEventListener("keypress", (event) => {
  if(event.key === "Enter"){
    const TaskName: string = InputTask.value
    InputTask.value = ""
    CreateTask(TaskName)
  }
})