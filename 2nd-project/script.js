let buttonParent = document.getElementById('#btnContainer');

function noBtn(){
  if (buttonParent.style.cssText.includes('column-reverse')){
    buttonParent.style.cssText = 'flex-direction: column-reverse';
  }
  else{
  buttonParent.style.cssText = 'flex-direction: column-reverse';
}
};

function buttonMsg(){
    window.open("https://api.whatsapp.com/send/?phone=917586843561&hi")
}