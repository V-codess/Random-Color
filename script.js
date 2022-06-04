const btn = document.querySelector('button');

const random = (number) =>{
  return Math.floor(Math.random()*(number+1));
}

btn.addEventListener("click" , () => {
  const randCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.getElementById('colorBox').style.backgroundColor = randCol;
  document.getElementById('button').style.color = randCol;

 
const colorName = document.querySelector('#p');
colorName.innerHTML = randCol;  
});




