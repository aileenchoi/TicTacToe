
//event listener for placing tile
//event listener for checking win?
let teamX = true;

// Hover 
const handleHover = (event) => {
  if(teamX){
    event.target.querySelector('.fa-xmark').style.visibility="visible";
       event.target.querySelector('.fa-xmark').style.opacity=".25";
  } else{
    event.target.querySelector(".fa-o").style.visibility = "visible";
    event.target.querySelector('.fa-o').style.opacity=".25";
  }
};
const handleMouseOut = (event) => {
  if(teamX){
    event.target.querySelector('.fa-xmark').style.visibility="hidden";
     
   
  } else{
    event.target.querySelector(".fa-o").style.visibility = "hidden";
   
   
  }
};

// Click to place mark
const handleClick = (event) => {
  if(teamX){
    console.log(event.target)
    event.currentTarget.querySelector('.fa-xmark').style.visibility="visible";
     event.currentTarget.querySelector('.fa-xmark').style.opacity="1";  event.currentTarget.removeEventListener("mouseenter", handleHover);
    event.currentTarget.removeEventListener("click", handleClick);
    event.currentTarget.removeEventListener("mouseleave", handleMouseOut);
    
    event.currentTarget.value = "x";
    teamX=false;
    winnerAssess(arr);
    console.log(arr);
  } 
  
  
  else{
    event.currentTarget.querySelector('.fa-o').style.opacity="1";
    event.currentTarget.querySelector('.fa-o').style.visibilty="visible";
      
    event.currentTarget.removeEventListener("mouseenter", handleHover);
    event.currentTarget.removeEventListener("click", handleClick);
    event.currentTarget.removeEventListener("mouseleave", handleMouseOut);
    
    event.currentTarget.value = "o";
    
    teamX=true;
    winnerAssess(arr);
    console.log(arr);
  }
}
const boxes = document.getElementsByClassName("lines");


// Event listeners
Array.from(boxes).forEach((box) => {

    box.addEventListener("mouseenter", handleHover);
    box.addEventListener("click", handleClick);
    box.addEventListener("mouseleave", handleMouseOut);
    box.value = Math.random();
})

// Winning combinations 
const arr = Array.from(boxes);
const winnerAssess = (arr) => {
  if (arr[0].value==arr[1].value && arr[1].value==arr[2].value){
  document.querySelector('span').innerText = 'You Won!'
} else if (arr[3].value==arr[4].value && arr[4].value==arr[5].value){
    document.querySelector('span').innerText = 'You Won!'
}else if(arr[6].value==arr[7].value && arr[7].value==arr[8].value){
    document.querySelector('span').innerText = 'You Won!'
}else if(arr[0].value==arr[4].value&& arr[4].value==arr[8].value){
    document.querySelector('span').innerText = 'You Won!'
  }else if(arr[2].value==arr[4].value&& arr[4].value==arr[6].value){
    document.querySelector('span').innerText = 'You Won!'
  }  else if (arr[0].value==arr[3].value && arr[3].value==arr[6].value){
  document.querySelector('span').innerText = 'You Won!'
  } else if (arr[1].value==arr[4].value && arr[4].value==arr[7].value){
  document.querySelector('span').innerText = 'You Won!'
    } else if (arr[2].value==arr[5].value && arr[5].value==arr[8].value){
  document.querySelector('span').innerText = 'You Won!'
}
} 
console.log(arr[2].value)


// Reset Button 
document.querySelector('button').addEventListener('click', reset)

function reset() {
location.reload()
    
     
}
   