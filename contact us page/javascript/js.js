
function fun(){
  if(nameInput.value.length == 3){
    plane.classList.add('move')
  }
}
function fun2(){
  if(emailInput.value.length == 10 ){
    plane.classList.remove('move')
    plane.classList.add('move2')
  }
}
function fun3(){
  if(phoneInput.value.length == 11){
    plane.classList.remove('move2')
    plane.classList.add('move3')
  }
}
function fun4(){
  if(massageInput.value.length == 4){
    plane.classList.remove('move3')
    plane.classList.add('move4')
  }
}

btn.addEventListener('click', function(){
  if(nameInput.value != '' && emailInput.value && phoneInput.value && massageInput.value){
    plane.style.rotate = '90deg';
    setTimeout(function(){
      all.style.transform = 'translateX(250%)';
      animation.style.transform = 'translateX(75vw)';
      contact.style.opacity = '0';
    },1000)
    setTimeout(function() {
      let div = document.createElement('div');
      div.className = 'done';
      let text = document.createTextNode('Done ✅');
      div.appendChild(text);
      container.appendChild(div)
    },2500)
  }
})