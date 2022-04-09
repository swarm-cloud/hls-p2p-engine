**[English](README.md) | 简体中文**

<h1 align="center"><a href="" target="_blank" rel="noopener noreferrer"><img width="250" src="https://www.cdnbye.com/logo.png" alt="logo"></a></h1>
<h4 align="center">Let your viewers become your unlimitedly scalable CDN.</h4>
<p align="center">
  <a href="https://www.npmjs.com/package/swarmcloud-hls"><img src="https://img.shields.io/npm/v/swarmcloud-hls.svg?style=flat" alt="npm"></a>
  <a href="https://www.jsdelivr.com/package/npm/swarmcloud-hls"><img src="https://data.jsdelivr.com/v1/package/npm/swarmcloud-hls/badge" alt="jsdelivr"></a>
</p>

本 SDK 整合了两个 P2P 引擎：一个是[基于hlsjs](https://swarmcloud.net/views/web/introduction.html)的，用于支持 [MSE]() 的现代浏览器，另一个是[基于ServiceWorker](https://swarmcloud.net/views/hls-sw/introduction.html)的，用于不支持 MSE 的iOS Safari 。
<br>
在双引擎的驱动下，支持所有可播放 HLS 的 HTML5 播放器，对于非 hls.js 内核的播放器采用 ServiceWorker 拦截网络请求从而实现 P2P 。

## 浏览器支持情况
由于WebRTC已成为HTML5标准，目前大部分主流浏览器都已经支持。兼容性取决于浏览器是否支持 WebRTC ，以及 ServiceWorker 或者 MediaSource API 其中至少一个特性。

 兼容性|Chrome | Firefox | macOS Safari| Opera | Edge | iOS Safari | IE | 
:-: | :-: | :-: | :-: | :-: | :-:| :-:| :-:
 WebRTC Datachannel | ✔ | ✔  | ✔  |  ✔ | ✔ | ✔  |  ❌ |
 MSE                | ✔  | ✔  | ✔  | ✔ | ✔ | ❌ |  ❌ |
 Service Worker     | ✔ | ✔  | ✔  | ✔  | ✔ | ✔  |  ❌ |
 SwarmCloud         | ✔ | ✔  | ✔  |  ✔ | ✔ |  ✔ |  ❌ |

## 使用方法
参考[在线文档](https://swarmcloud.net/cn/views/hls/usage.html)

## 相关项目
- [android-p2p-engine](https://gitee.com/cdnbye/android-p2p-engine) - 安卓端原生P2P流媒体加速引擎。
- [ios-p2p-engine](https://gitee.com/cdnbye/ios-p2p-engine) - iOS端原生P2P流媒体加速引擎。
- [flutter-p2p-engine](https://gitee.com/cdnbye/flutter-p2p-engine) - Flutter视频/直播APP省流量&加速神器, 由 [mjl0602](https://github.com/mjl0602) 贡献。
- [shaka-p2p-engine](https://github.com/cdnbye/shaka-p2p-engine) - 同时支持HLS和Mpeg-Dash格式。
- [dashjs-p2p-engine](https://github.com/cdnbye/dashjs-p2p-engine) - MPEG-dash协议的Web端P2P流媒体方案。

## FAQ
我们收集了一些[常见问题](https://swarmcloud.net/cn/views/FAQ.html)。在报告issue之前请先查看一下。

## 联系我们
邮箱：service@cdnbye.com

