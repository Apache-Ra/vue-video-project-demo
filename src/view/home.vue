<template>
  <div class="home main">
    <div class="videoPlay">
      <video id="video"
             class="video video-js vjs-default-skin"
             controls
             preload="auto"
             :poster="posterImg">
      </video>
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
import videojs from 'video.js'
import 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'
export default {
  name: "home",
  inject: ['reload'],
  computed: {
    ...mapState({
      showLoader: state => state.vux.showLoader,
    })
  },
  data(){
    return{
      // 视频第一帧
      posterImg:''
    }
  },
  created() {

  },
  updated() {
  },
  mounted() {
    let vue = this;
    // 动态ID
    let videoID='video'
    // 动态URI
    let videoURL='http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'
    vue.$nextTick(() => {
      vue.player = videojs(videoID, options, () => {
        vue.player.src({
          src: videoURL
        })
      })
    })
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
