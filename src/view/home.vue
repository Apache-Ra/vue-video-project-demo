<template>
  <div class="home main">
    <div class="videoPlay">
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      >
      </video-player>
    </div>
  </div>
</template>
<script>
// 播放器变量
const options = {
  bigPlayButton: false,
  textTrackDisplay: false,
  posterImage: false,
  errorDisplay: false,
  controlBar: false,
  autoplay: true,
}
import {mapState} from 'vuex'

import {videoPlayer} from 'vue-video-player'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

export default {
  name: "home",
  inject: ['reload'],
  components:{videoPlayer},
  computed: {
    ...mapState({
      showLoader: state => state.vux.showLoader,
    }),
    player(){
      return this.$refs.videoPlayer.player;
    }
  },
  data(){
    return{
      // 视频第一帧
      posterImg:'',
      playerOptions:{
        autoplay:true,
        muted:true,
        loop:false,
        preload:'auto',
        language:'zh-CN',
        aspectRatio:'16:9',
        fluid:true,
        sources: {
          type:'application/x-mpegURL',
          src:'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'
        },
        width:document.documentElement.clientWidth,
        notSupportedMessage:'此视频暂无法播放，请稍后再试'
      }
    }
  },
  created() {

  },
  updated() {
  },
  mounted() {
  },
}
</script>

<style scoped lang="less">
.videoPlay{
  position: absolute;
  width: 500px;
  height: 300px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.videoPlay{
  .video{width: 100%;height: 100%;cursor: pointer}
}
</style>
