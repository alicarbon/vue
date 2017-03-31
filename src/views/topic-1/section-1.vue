<template>
  <div class="c-view-container">
      <video-player video-source="./src/assets/videos/test.mp4"></video-player>
  </div>
</template>

<script>
import VideoPlayer from '../../views/components/video-player.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Topic 1: Section 1'
    }
  },
  components: {
      VideoPlayer
  }
}
</script>
