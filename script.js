var btn = document.getElementById('start');
var min = 0;
var sec = 0;
var total_time = 0;



btn.addEventListener('click', function(){
    min = document.getElementById('min-inp').value;
    sec = document.getElementById('sec-inp').value;
    sec = parseInt(sec);
    min = parseInt(min);
    if(min==NaN) min = 0;
    if(sec==NaN) sec = 0;
    console.log(typeof(sec));
    console.log(typeof(min));
    min = min * 60;
    total_time = min + sec;
    console.log(min);
    console.log(sec);
    console.log(total_time);
    mytimer = setInterval(changeText, 1000);
    
    
});

function changeText(){
    let minute = document.getElementById('min-inp');
    minute = Math.floor(total_time/60);
    let second = document.getElementById('sec-inp');
    second = total_time%60;
    console.log(minute);
    console.log(second);

    let min_text = document.getElementById('min-inp');
    if(minute<9) min_text.value = '0' + minute;
    else min_text.value = minute;
    let sec_text = document.getElementById('sec-inp');
    if(second<9) sec_text.value = '0'+ second;
    else sec_text.value = second;
    total_time--;
    if(total_time<10) beep();
    if(total_time<0){
        clearInterval(mytimer);
    };
}

pause = document.getElementById('pause');
pause.addEventListener('click', function(){
    clearInterval(mytimer);
})

reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    let min_text = document.getElementById('min-inp');
    min_text.value = 0;
    let sec_text = document.getElementById('sec-inp');
    sec_text.value = 0;
    clearInterval(mytimer);

})


var audio = document.createElement('audio');
audio.setAttribute('src', 'beep.wav')
audio.volume = .1;
function beep(){
    audio.play();
}
beep();




//   <!-- <script>
//   var time = 0;
//   var st = document.getElementById('btn');
//   btn.addEventListener('click', function () {
//       time = document.getElementById('min').value;
//       console.log(time);
//       let text = document.getElementById('min');
//       text.value = 99;
//   });
// </script>