function verif() {
  let trials = Number(document.getElementById("counter").value);
  let Answer = document.getElementById("f_pass").value;
  if (Answer == "11/22/2021") {
    return true;
  } else if (trials == 3) {
    alert("okay :D i ll make it easier for you");
    return true;
  } else {
    switch (trials) {
      case 0:
        alert("didn't expect you to get it wrong");
        break;

      case 1:
        alert("i forgot to say that you only have 3 times to get it right");
        break;

      case 2:
        alert("should i be mad ?");
        alert("btw you are on the last try :(");
        break;
    }
    document.getElementById("counter").value = trials + 1;
    return false;
  }
}
function verif_date() {
  let trials = Number(document.getElementById("counter").value);
  let Answer = document.getElementById("s_pass").value;
  if (Answer == "2021-11-22") {
    alert("Ye that's what i thought <3");
    return true;
  } else if (trials == 0) {
    alert("really hun?");
    document.getElementById("counter").value = trials + 1;
    return false;
  } else if (trials == 1) {
    alert("WHAT THA ACTUAL FUCK");
    document.getElementById("counter").value = trials + 1;
    return false;
  } else {
    alert("AAAAAAAAAAAAAAAAAAAAAA");
    document.getElementById("counter").value = trials + 1;
    return false;
  }
}
function greeting() {
  alert("hello there ♡");
  alert("now before you read anything");
  alert("press the button on the very tipy top of the page hunny♡♡♡");
}
function triggerAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}
