let body = document.querySelector("body")
let input1 = document.getElementsByClassName("form-control")[0]

// LE  BOUTTON AJOUTER
let Ajouter = document.getElementsByClassName("btn")[0]

// les 4 BUTTONS 
let buttonTodo = document.getElementsByClassName("btn")[1]

let buttonDone = document.getElementsByClassName("btn")[2]

let supprimer = document.getElementsByClassName("btn")[3]
let buttonAll = document.getElementsByClassName("btn")[4]

let boxBody = document.getElementsByClassName("box-body")[0]

let ul = document.getElementById("list all")
boxBody.appendChild(ul)

let li = document.createElement("li")
ul.appendChild(li)

Ajouter.addEventListener("click", () => {
  li.innerText = input1.value
  ul.appendChild(li)
  li.style.fontWeight = 'bold'

  li.style.width = "1100px"
  li.style.height = "100px"
  li.style.backgroundColor = "lightgray"
  li.style.borderRadius = "1%"

})
