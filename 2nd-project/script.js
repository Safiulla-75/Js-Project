function buttonMsg() {
  const icon = document.querySelector('.icon');
  if (icon) {
    icon.style.display = 'block';
  
    setTimeout(() => {
      icon.style.display = 'none';
    }, 1000);
  }
};