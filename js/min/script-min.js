function startTimer(e,t,s,n){var a=e,r=e;$(".info").text(n);var i=setInterval(function(){isPaused||(console.log(r),a=110-100*(r/e+.1),console.log(r),$(".bg-group").css("top",a+"%"),minutes=parseInt(r/60,10),seconds=parseInt(r%60,10),minutes=minutes<10?"0"+minutes:minutes,seconds=seconds<10?"0"+seconds:seconds,t.textContent=minutes,s.textContent=seconds,--r<0&&(r=0,0===r&&"break"!==currentTimer?(clearInterval(i),startTimer(120,t,s,"Break started"),currentTimer="break"):$(".info").text("Break is over")))},1e3)}var timerOn=!1,currentTimer="session",isPaused=!1;$(document).ready(function(){var e,t=$("#session-length").text(),s=$("#break-length").text(),n=parseInt(t),a=$("#seconds").text();n=parseInt(n),a=parseInt(a),isNaN(n)&&(n=0),isNaN(a)&&(a=0),60===n&&(n=59),60===a&&(a=59),e=60*n+a,displayMinute=document.querySelector("#minutes"),displaySecond=document.querySelector("#seconds"),$(".play").click(function(){$(".play").fadeOut(),$(".pause").delay(400).fadeIn(),timerOn||startTimer(e,displayMinute,displaySecond,"Session started"),isPaused=!1}),$(".pause").click(function(){$(".pause").fadeOut(),$(".play").delay(400).fadeIn(),isPaused=!0})});