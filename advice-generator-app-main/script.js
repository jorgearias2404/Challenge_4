let Advice = document.getElementById('advice')
let Advice_Message =document.getElementById('advice_message')
let Loading = document.getElementById('loading')
const Dice =document.querySelector('figure')


Dice.addEventListener('click',()=>{
    Advice_Message.style.display='none'
    Loading.style.display= 'block'
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        
        //AQUI ACTUALIZAMOS LA ENTRADA
        Advice_Message.textContent = data.slip.advice;
        Advice.textContent =`Advice# ${data.slip.id}`;

        //MOSTRAMOS NUEVOS MENSAJES
        Advice_Message.style.display='block'
        Loading.style.display= 'none'
    })
    .catch(error =>{
        console.log('Error')
    })
})