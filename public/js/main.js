let body = document.querySelector("body")
let input1 = document.getElementById("input-task")
input1.style.border = 'dotted'
input1.style.borderColor = 'black'
let msgErreur = document.getElementsByClassName('error')[0]

// form attribute
let form = document.getElementsByClassName('row')[0]
form.setAttribute('onsubmit', 'return false')

//////////////////  AJOUTER  ///////////////////////////////////
let Ajouter = document.getElementsByClassName("btn")[0]
Ajouter.style.backgroundColor = 'turquoise'
Ajouter.style.marginRight = '189px'
Ajouter.style.fontWeight = 'bold'

///////////////  4 BUTTONS  ///////////////////// 
// ul dans boxbody
let ul = document.getElementById("list all")
function AjoutElem() {
  if (1 < 2) {
    var li = document.createElement('li')
    ul.appendChild(li)
    let p = document.createElement('span')
    li.appendChild(p)
    p.innerText = input1.value
    input1.value = ''

    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.justifyContent = "space-between"
    li.style.padding = '40px'
    li.style.fontWeight = 'bold'
    li.style.backgroundColor = "lightgray"
    /////////////    BTN CHECK   ///////////////////

    let div = document.createElement('div')
    li.appendChild(div)
    let btnCheck = document.createElement('i')
    btnCheck.setAttribute("class", "far fa-2x fa-check-circle")
    btnCheck.style.color = 'lightgreen'
    div.appendChild(btnCheck)
    btnCheck.addEventListener("click", () => {
      if (li.style.backgroundColor == "green") {
        li.style.backgroundColor = "lightgray"
      } else {
        li.style.backgroundColor = "green"
      }
    })

    //  BTN EDIT
    let btne = document.createElement('i')
    btne.setAttribute("class", "fas fa-2x fa-edit")
    btne.style.marginLeft = '50px'
    btne.style.color = 'orange'
    div.appendChild(btne)

    //EVENT EDIT
    btne.addEventListener("click", () => {
      btnCheck.remove()
      btnd.remove()
      btne.remove()
      let input2 = document.createElement("input")
      input2.style.margin= '10px'
      li.appendChild(input2)
      let btns = document.createElement('i')
      btns.setAttribute("class", "fas fa-2x fa-save")
      btns.style.color = "red"
      btns.style.marginRight = "650px"
      li.appendChild(btns)

      /////// EVENT save
      btns.addEventListener("click", () => {
        p.innerText = input2.value
        p.style.display = "inline-block"
        div.style.display = ""
        li.removeChild(btns)
        li.removeChild(input2)
        li.appendChild(div)
        div.append(btnCheck, btne, btnd)
      })
    })

    /////// BTN delete remove li
    let btnd = document.createElement('i')
    btnd.setAttribute("class", "far fa-2x fa-trash-alt")
    btnd.style.marginLeft = '50px'
    btnd.style.color = 'red'
    div.appendChild(btnd)
    btnd.addEventListener('click', () => {
      li.remove()
    })

    // remove msg erreur
    msgErreur.classList.add("display-none")
    li.setAttribute('class', 'p-x p-y p-3');
    li.style.backgroundColor = 'lightgrey'
    li.style.fontSize = "20px"
    li.style.borderRadius = "5px"

  } else {
    // remove le message d'erreur
    msgErreur.classList.remove("display-none")
  }

  // LES FILTRES
  // variables
  let todo = document.getElementsByTagName('button')[1]
  todo.style.backgroundColor = 'orange'
  todo.style.color = 'white'
  todo.style.fontWeight = 'bold'

  let done = document.getElementsByTagName('button')[2]
  done.style.backgroundColor = 'green'
  done.style.color = 'white'  
  done.style.fontWeight = 'bold'

  let all = document.getElementsByTagName('button')[3]
  all.style.backgroundColor = 'blue'
  all.style.color = 'white'
  all.style.fontWeight = 'bold'

  // BOUTON A FAIRE
  todo.addEventListener("click", () => {
    if (li.style.backgroundColor == "green") {
      li.style.display = "none"
    } else {
      li.style.display = "flex"
    }
  })
  // BOUTON FAIT

  done.addEventListener("click", () => {
    if (li.style.backgroundColor != "green") {
      li.style.display = "none"
    } else {
      li.style.display = "flex"
    }
  })

  // BOUTON ALL
  all.addEventListener("click", () => {
    li.style.display = "flex"
  })
}

//event
Ajouter.addEventListener("click", () => {
  AjoutElem()
})


