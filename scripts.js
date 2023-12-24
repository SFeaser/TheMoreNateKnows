timer = null

function getSelectedVoice() {
  return "sound-effects/voices/" + document.getElementById("voice-select").value;
}

function resetAudio() {
  if (timer) clearTimeout(timer);
  document.getElementById("jingle").load();
  document.getElementById("voice").load();
}

function showGif() {
  if (document.getElementById("gif-checkbox").checked) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loading-gif").src = "the-more-you-gif.gif"
  }
}

function closeGif() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("loading-gif").src = "";
}


function playVoice() {
  document.getElementById("voice").src = getSelectedVoice();
  document.getElementById("voice").play();
}


function playJingle() {
  document.getElementById("jingle").play();
}

function playAudio() {
  resetAudio();
  playJingle();
  timer = setTimeout(() => {
    playVoice();
    clearTimeout(timer);
  }, 1000);
}

// Events
document.getElementById('main-btn').addEventListener('click', playAudio);
document.getElementById('voice-select').addEventListener('change', resetAudio);
document.getElementById('jingle').addEventListener('play', showGif);
document.getElementById('voice').addEventListener('ended', closeGif);

// function toggleDropdown() {
//   var dropdown = document.getElementById("dropdown-content");
//   if (dropdown.style.display === "block") {
//     dropdown.style.display = "none";
//   } else {
//     dropdown.style.display = "block";
//   }
// }

function toggleDropdown() {
  var dropdown = document.getElementById("dropdown-content");
  dropdown.style.display = "block";
}

function closeDropdown() {
  var dropdown = document.getElementById("dropdown-content");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
}

document.addEventListener("click", function(event) {
  var dropdown = document.getElementById("dropdown-content");
  var gearIcon = document.querySelector(".settings-icon i");

  if (!dropdown.contains(event.target) && !gearIcon.contains(event.target)) {
    closeDropdown();
  }
});

document.getElementById("dropdown-content").addEventListener("click", function(event) {
  event.stopPropagation();
});
