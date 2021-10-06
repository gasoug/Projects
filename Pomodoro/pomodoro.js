var milliseconds = "00"
var seconds = "00"
var minutes = "00"
var milli = document.getElementById("milliseconds")
var sec = document.getElementById("seconds")
var min = document.getElementById("minutes")
var startBtn = document.getElementById("startbt")
var pauseBtn = document.getElementById("pausebt")
var resetBtn = document.getElementById("resetbt")
var pomo = document.getElementById('times').value
var times = 0
var interval

function startCron(){
    milliseconds++
    if(milliseconds < 9){
      milli.innerHTML = "0" + milliseconds
    }
    if(milliseconds > 9){
      milli.innerHTML = milliseconds
    }
    if(milliseconds > 99){
      seconds++
      sec.innerHTML = "0" + seconds
      milliseconds = 0
      milli.innerHTML = "0" + 0
    }
    if(seconds > 9){
      sec.innerHTML = seconds
    }
    if(seconds > 59){
      minutes++
      min.innerHTML = "0" + minutes
      seconds = 0
      sec.innerHTML = "0" + seconds
    }
    if(minutes > 9){
      min.innerHTML = minutes
    }
}
function started(){
  interval = setInterval(startCron,10)
  startBtn.disabled = true
  pauseBtn.disabled = false
}
function pauseCron(){
  clearInterval(interval)
  startBtn.disabled = false
  pauseBtn.disabled = true
}
function stopCron(){
  clearInterval(interval)
  milliseconds = "00"
  seconds = "00"
  minutes = "00"
  milli.innerHTML = milliseconds
  sec.innerHTML = seconds
  min.innerHTML = minutes
  startBtn.disabled = false
  pauseBtn.disabled = false
}