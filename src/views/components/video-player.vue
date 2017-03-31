<template>
    <div class="c-video-container">
        <video v-on:timeupdate="seekupdate" class="c-video" :src="videoSource" controls autoplay></video>
        <div class="c-video-controls">
            <button v-on:click="playpause" type="button" class="c-video-controls__play-pause">Pause</button>
            <input v-on:change="seek" type="range" class="c-video-controls__seek-bar" value="0">
            <button v-on:click="mute" type="button" class="c-video-controls__mute">Mute</button>
            <input v-on:change="volume" type="range" class="c-video-controls__volume-bar" min="0" max="1" step="0.1" value="1">
        </div>
    </div>
</template>

<script>
export default {
  name: 'video-player',
  props: ['videoSource'],
  data () {
      return {}
  },
  mounted () {
      let video2 = document.querySelector(".c-video");
      console.log(video2);
  },
  methods: {
      playpause: () => {
          let video = document.querySelector(".c-video");
          let playPauseButton = document.querySelector(".c-video-controls__play-pause");
          if (video.paused == true) {
            video.play();
            playPauseButton.innerHTML = "Pause";
          } else {
            video.pause();
            playPauseButton.innerHTML = "Play";
          }
      },
      mute: () => {
          let video = document.querySelector(".c-video");
          let muteButton = document.querySelector('.c-video-controls__mute');
          if (video.muted == false) {
            video.muted = true;
            muteButton.innerHTML = "Unmute";
          } else {
            video.muted = false;
            muteButton.innerHTML = "Mute";
          }
      },
      seek: () => {
          let video = document.querySelector(".c-video");
          let seekBar = document.querySelector('.c-video-controls__seek-bar');
          var time = video.duration * (seekBar.value / 100);
          video.currentTime = time;
      },
      volume: () => {
          let video = document.querySelector(".c-video");
          let volumeBar = document.querySelector('.c-video-controls__volume-bar');
          video.volume = volumeBar.value;
      },
      seekupdate: () => {
          let video = document.querySelector(".c-video");
          let seekBar = document.querySelector('.c-video-controls__seek-bar');
          var value = (100 / video.duration) * video.currentTime;
          seekBar.value = value;
      }
  }
}
</script>
