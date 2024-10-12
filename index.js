function openNav() {
  if (window.innerWidth<=1350) {
    document.getElementById("sidebar").style.width = "410px";
    document.body.style.background = "linear-gradient(145deg, rgba(89, 2, 124, 1) 0%, rgba(113,35,117,1) 25%, rgba(136,7,136,1) 50%, rgba(191,6,127,1) 75%, rgba(222,0,99,1) 100%)";
  }
  else {
    document.getElementById("sidebar").style.width = "200px";
    document.body.style.background = "linear-gradient(145deg, rgba(89, 2, 124, 1) 0%, rgba(113,35,117,1) 25%, rgba(136,7,136,1) 50%, rgba(191,6,127,1) 75%, rgba(222,0,99,1) 100%)";
  }
}
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.background = "linear-gradient(145deg, rgba(63,2,107,1) 0%, rgba(113,35,147,1) 25%, rgba(136,7,166,1) 50%, rgba(191,6,157,1) 75%, rgba(222,0,129,1) 100%)";
}

//var video = document.getElementById("video");
//var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
//playButton.addEventListener("click", function() {
//  if (video.paused == true) {
 //   // Play the video
 //   video.play();
//
 //   // Update the button text to 'Pause'
//    playButton.innerHTML = "Pause";
// } else {
 //   // Pause the video
//    video.pause();
//
//    // Update the button text to 'Play'
 //   playButton.innerHTML = "Play";
 // }
//});

// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");

const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");

function changeButtonState(type) {
  if (type === "playpause") {
    // Play/Pause button
    if (video.paused || video.ended) {
      playpause.setAttribute("data-state", "play");
    } else {
      playpause.setAttribute("data-state", "pause");
    }
  } else if (type === "mute") {
    // Mute button
    mute.setAttribute("data-state", video.muted ? "unmute" : "mute");
  }
}

video.addEventListener(
  "play",
  () => {
    changeButtonState("playpause");
  },
  false,
);

video.addEventListener(
  "pause",
  () => {
    changeButtonState("playpause");
  },
  false,
);

stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;

  // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
  changeButtonState("playpause");
});

mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
  changeButtonState("mute");
});

playpause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});

function checkVolume(dir) {
  if (dir) {
    const currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === "+" && currentVolume < 1) {
      video.volume += 0.1;
    } else if (dir === "-" && currentVolume > 0) {
      video.volume -= 0.1;
    }

    // If the volume has been turned off, also set it as muted
    // Note: can only do this with the custom control set as when the 'volumechange' event is raised,
    // there is no way to know if it was via a volume or a mute change
    video.muted = currentVolume <= 0;
  }
  changeButtonState("mute");
}

const alterVolume = (dir) => {
  checkVolume(dir);
};

video.addEventListener(
  "volumechange",
  () => {
    checkVolume();
  },
  false,
);

progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  video.currentTime = pos * video.duration;
});