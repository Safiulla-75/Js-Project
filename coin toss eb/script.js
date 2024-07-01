let resultText = document.querySelector('#result')
let btn = document.querySelector('#btn');
let img = document.querySelector('#coin-img');

function tostHand(){
  resultText.style.display='none'
  btn.style.display='none';
  img.style.display='flex';
  setTimeout(()=>{
    resultText.style.display= 'block';
     btn.style.display='flex';
  img.style.display='none';
  btn.innerText = 'Toss Again'
  },2000)

 const random = Math.round(Math.random());
  if(random == 0){
    resultText.innerText = 'Tails';
  }
  else{
    resultText.innerText = 'Heads';
  }
}