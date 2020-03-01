<template>
  <div class="home main">
    <div class="videoPlay">
      <videoPlayer
        class="vjs-custom-skin videoPlayer"
        :options="playerOptions"></videoPlayer>
    </div>
  </div>
</template>
<script>

import {mapState} from 'vuex'
import {videoPlayer} from "vue-video-player";
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
      playerOptions: {
        live: true,
        autoplay: true, // 如果true，浏览器准备好时开始播放
        muted: false, // 默认情况下将会消除任何音频
        loop: false, // 是否视频一结束就重新开始
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          currentTimeDisplay: true, // 当前时间
          volumeControl: true, // 声音控制键
          playToggle: true, // 暂停和播放键
          progressControl: true, // 进度条
          fullscreenToggle: true // 全屏按钮
        },
        height: "300",
        width: "500",
        techOrder: ["flash"],
        flash: {
          hls: {
            withCredentials: false
          },
          swf: "./static/VideoJS.swf"
        },
        sources: [
          {
            type: "rtmp/mp4",
            // src: "rtmp://58.200.131.2:1935/livetv/dftv"
            src:'rtmp://58.200.131.2:1935/livetv/hunantv'
          }
        ],

        autoplay: true,
        controls: true,
        notSupportedMessage: "此视频暂无法播放，请稍后再试" // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
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
