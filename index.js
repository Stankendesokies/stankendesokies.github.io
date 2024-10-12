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

document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("video");
  var playButton = document.getElementById("play_button");
  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      // Play the video
      video.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = "Pause";
    } else {
      // Pause the video
      video.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = "Play";
    }
  });
  const videoPlayer = document.querySelector('.controls')
  const progress = videoPlayer.querySelector('.progress')
  const progressBar = videoPlayer.querySelector('.progress-bar')
  const volume = videoPlayer.querySelector('.volume')
  const currentTimeElement = videoPlayer.querySelector('.current')
  const durationTimeElement = videoPlayer.querySelector('.duration')

  video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percentage}%`
  })

  progress.addEventListener('click', (e => {
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = progressTime
  }))

  volume.addEventListener('mousemove', (e) => {
    video.volume = e.target.value
  })

  const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60)
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
  }

  video.addEventListener('timeupdate', currentTime)
});
