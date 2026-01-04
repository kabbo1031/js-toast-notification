let timer;

function showToast(message){
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.style.display = 'block';

  clearTimeout(timer);
  timer = setTimeout(()=>{
    toast.style.display = 'none';
  }, 2500);
}
