
window.onload = function() {
    let startBtn = document.getElementById('btn-start');
    let resetBtn = document.getElementById('btn-reset');
    let stopBtn = document.getElementById('btn-stop');

    let seconds = 00;
    let tens = 00;
    let screenTens = document.getElementById('tens');
    let screenSeconds = document.getElementById('seconds');

    let bodyElement = document.body
    let interval;

   


    startBtn.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        bodyElement.style.backgroundColor = '#C9E4DE'
        bodyElement.style.color = 'white'

    }

    stopBtn.onclick = function() {
        clearInterval(interval);

        bodyElement.style.backgroundColor = '#FAEDCB';
        bodyElement.style.color = 'black';
    }

    resetBtn.onclick = function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        screenSeconds.innerHTML = seconds;
        screenTens.innerHTML = tens

        bodyElement.style.backgroundColor = '#DBCDF0';
        bodyElement.style.color = 'white'
    }


    function startTimer() {
        tens++;

        if(tens <= 9) {
            screenTens.innerHTML = "0" + tens;
        }

        if(tens > 9) {
            screenTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds")
            seconds++;
            screenSeconds.innerHTML = "0" + seconds;
            tens = 0;
            screenTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            screenSeconds.innerHTML = seconds;
        }
    }

}




