<template>
  <div class="home main">
    <div class="input-group">
      <input type="text" v-model="videoURL" placeholder="输入视频流地址（例：rtmp://xx.xxx.xxx.xxx:xxxx/xxx/xxx）">
      <button type="button" @click="handleVideoURL(videoURL)">确定</button>
    </div>
    <div class="videoPlay">
      <live-video :live-data="liveData"></live-video>
    </div>
  </div>
</template>
<script>

import {mapState} from 'vuex'
import liveVideo from "../components/live";
export default {
  name: "home",
  inject: ['reload'],
  components:{liveVideo},
  computed: {
    ...mapState({
      showLoader: state => state.vux.showLoader,
    }),
  },
  data(){
    return{
      liveData:{},
      videoURL:''
    }
  },
  created() {
      // type:'http',
      // url:'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8',
      // type: 'rtmp',
      // url:'rtmp://58.200.131.2:1935/livetv/hunantv'
  },
  updated() {
  },
  mounted() {
  },
  methods:{
    handleVideoURL(URL){
      let vue = this;
      vue.liveData = {
        type:URL.substring(0,4),
        url: URL
      }
    }
  }
}
</script>

<style scoped lang="less">
.videoPlay{position: absolute;width: 600px;height: 300px;left: 0;right: 0;top: 0;bottom: 0;margin: auto;}
.input-group{height: 40px;line-height: 40px;position: absolute;width: 600px;left: 0;right: 0;top: 100px;margin: auto;}
.input-group{
  input,button{border:1px solid #CCC; border-radius:4px;background: #FFF;outline:none;display: inline-block;position: absolute}
  input{height: 30px;width: 500px;left: 0;padding: 0 5px}
  button{height: 30px;width: 80px;right: 0;cursor: pointer}
}
</style>
