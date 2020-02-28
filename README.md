# vue-video-project-demo
> 基于vue-video-player 播放m3u8流媒体
## 组件和工具类
``` bash
    axios           数据请求
    fastclick       点击延迟
    less
    less-loader     css预加载
    lodash          数组处理
    uuid ID         uuid.v4()
    vuex            状态分发
    Axios           二次封装axios
    LocalStage      LocalStroage封装
    Cookie          Cookie封装

    "video.js": "^7.6.5",
    "videojs-contrib-hls": "^5.15.0",
    "vue-video-player": "^4.0.6",
```
## Build Setup

``` bash
# 下载
npm install
# 运行
npm run dev
# 打包
npm run build
```
## 文档说明
``` bash
playerOptions : {
    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
    autoplay: false, //如果true,浏览器准备好时开始回放。
    muted: false, // 默认情况下将会消除任何音频。
    loop: false, // 导致视频一结束就重新开始。
    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: 'zh-CN',
    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [{
      type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
      src: "" //url地址
    }],
    poster: "../../static/images/test.jpg", //你的封面地址
    // width: document.documentElement.clientWidth, //播放器宽度
    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
    controlBar: {
      timeDivider: true,
      durationDisplay: true,
      remainingTimeDisplay: false,
      fullscreenToggle: true  //全屏按钮
    }
}
```
[新浪微博](http://weibo.com/818qizai898)

文档以其它笔记[CSDN](https://blog.csdn.net/u013216976)

框架来源[vue-admin](https://github.com/Apache-Ra/vue-admin.git)

加入群聊[vue](https://jq.qq.com/?_wv=1027&k=5Yz7hvq)
