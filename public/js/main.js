let body = document.querySelector("body")
let input1 = document.getElementsByClassName("form-control")[0]

// LE  BOUTTON AJOUTER
let Ajouter = document.getElementsByClassName("btn")[0]
Ajouter.style.backgroundColor = 'black'
Ajouter.style.fontWeight = 'bold'
Ajouter.style.marginRight = '190px'
Ajouter.style.color = 'turquoise'

/////// les 4 BUTTONS ///////

//toDo
let buttonTodo = document.getElementsByClassName("btn")[1]
buttonTodo.style.backgroundColor = 'blue'
buttonTodo.style.color = 'white'
buttonTodo.style.fontWeight = 'bold'

//buttonDone
let buttonDone = document.getElementsByClassName("btn")[2]
buttonDone.style.backgroundColor = 'green'
buttonDone.style.fontWeight = 'bold'

//supprimer
let supprimer = document.getElementsByClassName("btn")[3]
supprimer.style.backgroundColor = 'red'
supprimer.style.fontWeight = 'bold'

//buttonAll
let buttonAll = document.getElementsByClassName("btn")[4]
buttonAll.style.fontWeight = 'bold'

let boxBody = document.getElementsByClassName("box-body")[0]

let ul = document.getElementById("list all")
boxBody.appendChild(ul)

Ajouter.addEventListener("click", () => {
  // iF
  if (input1.value !== "") {
    let li = document.createElement("li")
    li.innerText = input1.value
    input1.value = ""
    ul.appendChild(li)
    ///////// BTN LOGO ////////////

    //check
    let btncheck = document.createElement('i')
    btncheck.setAttribute('class', "fas fa-check-square")
    btncheck.style.fontSize = '28px'
    btncheck.style.marginLeft = '820px'
    btncheck.style.marginRight = '20px'
    btncheck.style.color = 'green'
    // onclick
    btncheck.addEventListener('click', () => {
      li.style.backgroundColor = 'green'
      btncheck.style.color = 'white'
    })
    li.appendChild(btncheck)

    //edit
    let edit = document.createElement('i')
    edit.setAttribute('class', "far fa-edit")
    edit.style.fontSize = '28px'
    edit.style.color = 'yellow'
    edit.style.marginRight = '20px'
    // onclick
    edit.addEventListener('click', () => {
      
    })
    li.appendChild(edit)

    //supprimer
    let supp = document.createElement('i')
    supp.setAttribute('class', "far fa-trash-alt")
    supp.style.fontSize = '28px'
    supp.style.color = 'red'
    supp.style.marginRight = '20px'
    li.appendChild(supp)

    // STYLE Li
    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.paddingLeft = '35px'
    li.style.fontWeight = 'bold'
    li.style.width = "1100px"
    li.style.height = "100px"
    li.style.backgroundColor = "lightgray"
    li.style.borderRadius = "1%"
  }
})
