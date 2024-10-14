document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.querySelector('.controls')
    const video = videoPlayer.querySelector('.video')
    const play = videoPlayer.querySelector('.play')
    const playButton = videoPlayer.querySelector('.play-button')
    const progress = videoPlayer.querySelector('.progress')
    const progressBar = videoPlayer.querySelector('.progress-bar')
    const volume = videoPlayer.querySelector('.volume')
    const currentTimeElement = videoPlayer.querySelector('.current')
    const durationTimeElement = videoPlayer.querySelector('.duration')
    const mute = videoPlayer.querySelector('.mute')
    const muteButton = videoPlayer.querySelector('.mute-button')
    const volPercent = videoPlayer.querySelector('.volume-percent')
    var volZero = false
  
    play.addEventListener("click", function() {
      if (video.paused == true) {
        playButton.innerHTML = "pause"
        video.play();
      } else {
        playButton.innerHTML = "play_arrow"
        video.pause();
      }
    })
  
    video.addEventListener('timeupdate', () => {
      const percentage = (video.currentTime / video.duration) * 100
      progressBar.style.width = `${percentage}%`
    })
  
    progress.addEventListener('click', (e) => {
      const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
      video.currentTime = progressTime
    })
  
    volume.addEventListener('mousemove', (e) => {
      const currentVolPercent = Math.floor(e.target.value * 100)
      video.volume = e.target.value
      volPercent.innerHTML = `${currentVolPercent}%`
      if (video.volume == 0) {
        muteButton.style.color = "#ff0000"
        volZero = true
      }
      else if (volZero && video.muted) {
        volZero = false
      }
      else if (volZero) {
        muteButton.style.color = "#ffffff"
        volZero = false}
    })

    volume.addEventListener('loadedmetadata', () => {
        volume.value = 1
    })
  
    mute.addEventListener('click', () => {
      if (video.muted && !volZero) {
        muteButton.style.color = "#ffffff"
        video.muted = false
      }
      else if (!video.muted && !volZero) {
        muteButton.style.color = "#ff0000"
        video.muted = true
      }
    })
  
    const currentTime = () => {
      let currentMinutes = Math.floor(video.currentTime / 60)
      let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
      let durationMinutes = Math.floor(video.duration / 60)
      let durationSeconds = Math.floor(video.duration - durationMinutes * 60)
  
      currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
      durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
    }
  
    video.addEventListener('loadedmetadata', currentTime)
    
    video.addEventListener('timeupdate', currentTime)
  });