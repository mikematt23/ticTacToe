let previousPlay = 'X'

let square1 = document.getElementById('a1')
let square2 = document.getElementById('a2')
let square3 = document.getElementById('a3')
let square4 = document.getElementById('a4')
let square5 = document.getElementById('a5')
let square6 = document.getElementById('a6')
let square7 = document.getElementById('a7')
let square8 = document.getElementById('a8')
let square9 = document.getElementById('a9')

let board = [
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  square7,
  square8,
  square9
]

function addGamePiece(selectedElement) {
  console.log("selectedElement = " + selectedElement)
  // creating element
  if (selectedElement.children.length){
    alert("Square has been played")
  } else{
     selectedElement.style.backgroundColor = "blue"
     let p = document.createElement('p')
     selectedElement.appendChild(p)
     p.innerText = previousPlay
   
   }
  setTimeout(computersTurn(),1000)
  checkEnd()
}
//checkEnd()
let horizonalWin = ()=>{
  console.log(`in the function`)
  console.log(board[0].children.length)
  let o = "noWin"
 if(square1.children.length === 1 && square2.children.length === 1 && square3.children.length === 1){
   if(square1.lastChild.innerText === "X" && square2.lastChild.innerText === "X" && square3.lastChild.innerText === "X"){
     o = "win"
   } else if(square1.lastChild.innerText === "O" && square2.lastChild.innerText === "O" && square3.lastChild.innerText === "O"){
     o = "computer"
  }

 }
  if(square4.children.length === 1 && square5.children.length === 1 && square6.children.length === 1){
   if(square4.lastChild.innerText === "X" && square5.lastChild.innerText === "X" && square6.lastChild.innerText === "X"){
     o = "win"
   } else if(square4.lastChild.innerText === "O" && square5.lastChild.innerText === "O" && square6.lastChild.innerText === "O"){
    o = "computer"
  }
 }
 if(square7.children.length === 1 && square8.children.length === 1 && square9.children.length === 1){
  if(square7.lastChild.innerText === "X" && square8.lastChild.innerText === "X" && square9.lastChild.innerText === "X"){
    o = "win"
  } else if(square7.lastChild.innerText === "O" && square8.lastChild.innerText === "O" && square9.lastChild.innerText === "O"){
   o = "computer"
 }
}
 return o
}


let verticalWin = ()=>{
  let o = "noWin"
  if(square1.children.length === 1 && square4.children.length === 1 && square7.children.length === 1){
    if(square1.lastChild.innerText === "X" && square4.lastChild.innerText === "X" && square7.lastChild.innerText === "X"){
      o = "win"
    } else if(square1.lastChild.innerText === "O" && square4.lastChild.innerText === "O" && square7.lastChild.innerText === "O"){
     o = "computer"
   }
  }
  if(square2.children.length === 1 && square5.children.length === 1 && square8.children.length === 1){
    if(square2.lastChild.innerText === "X" && square5.lastChild.innerText === "X" && square8.lastChild.innerText === "X"){
      o = "win"
    } else if(square2.lastChild.innerText === "O" && square5.lastChild.innerText === "O" && square8.lastChild.innerText === "O"){
     o = "computer"
   }
  }
  if(square3.children.length === 1 && square6.children.length === 1 && square9.children.length === 1){
    if(square3.lastChild.innerText === "X" && square6.lastChild.innerText === "X" && square9.lastChild.innerText === "X"){
      o = "win"
    } else if(square3.lastChild.innerText === "O" && square6.lastChild.innerText === "O" && square9.lastChild.innerText === "O"){
     o = "computer"
   }
  }
  return o
}

let diagonalWin = ()=>{
  let o = "noWin"
  if(square1.children.length === 1 && square5.children.length === 1 && square9.children.length === 1){
    if(square1.lastChild.innerText === "X" && square5.lastChild.innerText === "X" && square9.lastChild.innerText === "X"){
      o = "win"
    } else if(square1.lastChild.innerText === "O" && square5.lastChild.innerText === "O" && square9.lastChild.innerText === "O"){
     o = "computer"
   }
  }
  if(square3.children.length === 1 && square5.children.length === 1 && square7.children.length === 1){
    if(square3.lastChild.innerText === "X" && square5.lastChild.innerText === "X" && square7.lastChild.innerText === "X"){
      o = "win"
    } else if(square3.lastChild.innerText === "O" && square5.lastChild.innerText === "O" && square7.lastChild.innerText === "O"){
     o = "computer"
   }
  }
  return o
}


function checkEnd() {
  let horizonalResult = horizonalWin()
  if (horizonalResult === "win") {
    location.reload()
    alert('Player Has Won')
    
  }else if(horizonalResult === "computer") {
    location.reload()
    alert("Computer Has Won")
  }
   
  let verticalResult = verticalWin()
  if(verticalResult === "win"){
    location.reload()
    alert("PLayer X Has Won")  
    
  } else if(verticalResult === "computer"){
    location.reload()
    alert("Computer Has Won")
  }

  let diagonalResult = diagonalWin()
  if(diagonalResult === "win"){
    location.reload()
    alert("Player Has Won")
  }else if(diagonalResult === "computer"){
    location.reload()
    alert("computer Has won")
  }
  let drawResult = draw()
  if(drawResult === "draw"){
    location.reload()
    alert("No Winner")
  } 
 
  
}



let computersTurn = ()=>{
  for(let i =0; i < board.length; i++){
    let random = board[Math.floor(Math.random()*board.length)]
    if(random.children.length === 0){
       console.log(random)
     
       random.style.backgroundColor = "red"
       let p = document.createElement('p')
       p.innerText = "O"
       random.appendChild(p)       
       return console.log("this square can be played")
       
    }
  }   
    
}

let draw = ()=>{
  let o =""
  if(
    square1.children.length === 1 && 
    square2.children.length === 1 &&
    square3.children.length === 1 &&
    square4.children.length === 1 &&
    square5.children.length === 1 &&
    square6.children.length === 1 &&
    square7.children.length === 1 &&
    square8.children.length === 1 &&
    square9.children.length === 1
    ){
      if(
        square1.lastChild.innerText === "X" ||square1.lastChild.innerText === "O" && 
        square2.lastChild.innerText === "X" ||square2.lastChild.innerText === "O" &&
        square3.lastChild.innerText === "X" ||square3.lastChild.innerText === "O" &&
        square4.lastChild.innerText === "X" ||square4.lastChild.innerText === "O" &&
        square5.lastChild.innerText === "X" ||square5.lastChild.innerText === "O" &&
        square6.lastChild.innerText === "X" ||square6.lastChild.innerText === "O" &&
        square7.lastChild.innerText === "X" ||square7.lastChild.innerText === "O" &&
        square8.lastChild.innerText === "X" ||square8.lastChild.innerText === "O" &&
        square9.lastChild.innerText === "X" ||square9.lastChild.innerText === "O" 
      ){
        o = "draw"
      } 
  }
    return o  
}