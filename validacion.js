


const toggle_button = document.querySelector(".toggle-button")
const navList = document.querySelector(".nav_list")
toggle_button.addEventListener('click',()=> {
  navList.classList.toggle("nav_list")
})



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.querySelector(".formcontato__form")
const formulario = document.getElementById('formulario');
const warning = document.querySelector("#info")
const nombreInput = document.querySelector('input[name="nombre"]');
const emailInput = document.querySelector('input[name="email"]');
const asuntoInput = document.querySelector('input[name="asunto"]');
const mensajeTextarea = document.querySelector('textarea[name="mensaje"]');




form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  let warn = ""; 
  warning.innerHTML = warn;
  if(nombreInput.value.trim().length  < 6){
    warn = "*Nombre debe tener 6 caracteres minimo </br>"
  }
  if( !emailRegex.test(emailInput.value.trim()) ){
    warn += "*Correo no es valido </br>"
  }
  if(asuntoInput.value.trim().length  < 6){
    warn += "*Asunto debe tener 6 caracteres minimo </br>"
  }
  if(mensajeTextarea.value.trim().length  < 16){
    warn += "*La mensaje debe tener 16 caracteres al menos </br>"
  }

  if(warn.length>1){
    warning.classList.add('warning')
    warning.classList.remove('success')
    warning.innerHTML = warn
  }
  else{
    warning.classList.add('success')
    warning.classList.remove('warning')
    warning.innerHTML = "Gracias por entrar en contacto conmigo, en un tiempo muy corto te responderé. Mensaje enviada con exito."
    nombreInput.value = ""
    emailInput.value = ""
    asuntoInput.value = ""
    mensajeTextarea.value = ""
  }

  
});

//footer
const year  = document.querySelector('.footer__rodape p:nth-child(2)');

const currentYear = new Date().getFullYear();
year.innerHTML = '© ' +currentYear
