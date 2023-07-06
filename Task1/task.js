const p = document.getElementById('timer');
let timeMinut = p.textContent * 60;


timer = setInterval(function () {
    seconds = timeMinut%60; 
    minutes = timeMinut/60%60; 
    hour = timeMinut/60/60%60; 
   
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else { 
        let strTimer = `${String(Math.trunc(hour)).padStart(2, '0')}: \
                        ${String(Math.trunc(minutes)).padStart(2, '0')}: \
                        ${String(seconds).padStart(2, '0')}`;
        p.textContent = strTimer;
    }
    --timeMinut; 
}, 1000)


// let timer = setInterval(() => {
// 	p.textContent = Number(p.textContent) - 1;
// }, 1000)
// setTimeout(() => {
//     clearInterval(timer);
//     alert('Вы победили');
// }, Number(p.textContent)*1000)

// let timer = setInterval(() => {
//     console.log(j, p.textContent)
//     p.textContent = Number(p.textContent) - 1

//     if (p.textContent <= 0) {
//         alert('Вы победили!');
//         clearInterval(timer);
//     }
// }, 1000)