//watch section
const clock = () => {
    let time = new Date();
    //console.log(time);

    let dat = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    document.querySelector(".time").innerText = hour + ":" + min + ":" + sec;
    document.querySelector(".date").innerText = dat + "-" + month + "-" + year;
}
clock();

setInterval(clock, 1000);


// for button

let clockBtn = document.querySelector('.clock');

clockBtn.addEventListener('click', ()=>{
    document.querySelector('.timeSec').innerHTML = `
    
    <div class="watch">
                    <div class="todayTime">
                        <div class="time"></div>
                        <div class="date"></div>
                    </div>
                </div>

    `
})

// end watch section

//stop watch section

let stpWatch = document.querySelector('.stpWatch');
stpWatch.addEventListener('click', () => {
    document.querySelector('.timeSec').innerHTML = `
    
    <div class="stop-watch">
            <div class="stp-watch">
                <div class="dis">
                    <div class="mill"></div>
                    <div class="stpTime">
                        <div class="hour"></div>:<div class="min"></div>:<div class="sec"></div>
                    </div>
                </div>
                <div class="stpBtn">
                <button class="start">Start</button>
                <button class="stop">Stop</button>
                <button class="reset">Reset</button>
                </div>
            </div>
        </div>

    `;

    let millSec = document.querySelector(".mill");
let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');



const timer = () => {
    millSec.innerText = '00';
    sec.innerText = '00';
    min.innerText = '00';
    hour.innerText = '00';
}
timer();

let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');


start.addEventListener('click', () => {
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;

    let mill = setInterval(() => {
        i += 1;
        millSec.innerText = i;

        if (i > 99) {
            i = 0;
            j += 1;
            sec.innerText = j;



            if (j == 59) {
                j = 0;
                k += 1;
                min.innerText = k;

                let l = 0;

                if (k == 59) {
                    k = 0;
                    l += 1;
                    hour.innerText = l;
                }

            }

        }
    }, 10);

    stop.addEventListener('click', () => {
        clearInterval(mill);
    })
})


reset.addEventListener('click', () => {
    timer()
})


})