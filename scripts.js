
function playAudio() {
  var jingle = document.getElementById("jingle");
  var voice = document.getElementById("voice");

  var selectedVoice = document.getElementById("voice-select").value;
  voice.src = selectedVoice;

  jingle.play();
  voice.play();
}

