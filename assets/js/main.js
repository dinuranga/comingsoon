// Set the date to counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, Change the text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "00:00:00";
    document.getElementById("isExpired").innerHTML = "EXPIRED";
  }
}, 1000);