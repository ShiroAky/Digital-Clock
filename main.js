const btnInput = document.getElementById('input');

const show = document.getElementById('dato');

const dias = document.getElementById('dia');
const horas = document.getElementById('hora');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// window.setInterval(

//     function values() {

//         btnInput.addEventListener('input', (e) => {

//             show.innerHTML = e.target.value;

//         });

//     }, 1000);


window.setInterval(
    function showTime() {

        const dia = new Date();
        const hora = new Date();
        const minuto = new Date();
        const segundo = new Date();

        dias.innerHTML = dia.getDate();
        horas.innerHTML = hora.getHours();
        minutos.innerHTML = minuto.getMinutes();
        segundos.innerHTML = segundo.getSeconds();

    }, 1000);
