
function playAudio() {
  var jingleSound = document.getElementById("jingle");
  var voiceSound = document.getElementById("voice");

  var selectedVoice = document.getElementById("voice-select").value;
  voiceSound.src = "sound-effects/voices/" + selectedVoice;

  jingleSound.play();
  voiceSound.play();
}


