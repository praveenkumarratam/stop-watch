let hr = 00;
let min = 00;
let sec = 00;
let count = 00;
let timer;
document.getElementById("start_btn").addEventListener("click", function(){
        timer = true;
        counter();
})

document.getElementById("stop_btn").addEventListener("click", function(){
    timer=false;
})

document.getElementById("restart_btn").addEventListener("click", function(){
    timer = false;
    hr = 00;
    min = 00;
    sec = 00;
    count = 00;
    
})

function counter(){
    if(timer){
        count++;
        if(count == 100){
            sec++;
            count = 0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
        }
    }

    let hrStr = hr;
    let minstr = min;
    let secstr = sec;
    let countstr = count;

    if(hr<10){
        hrStr = "0" + hrStr;
    }
    if(minstr < 10){
        minstr = "0" + minstr;
    }
    if(secstr < 10){
        secstr = "0" + secstr;
    }
    if(countstr < 10){
        countstr = "0" + countstr;
    }
    document.getElementById('hr_box').innerHTML=hrStr;
    document.getElementById('min_box').innerHTML=minstr;
    document.getElementById('sec_box').innerHTML=secstr;
    document.getElementById('count_box').innerHTML=countstr;
    setTimeout(counter, 10)
    
}