**English | [简体中文](Readme_zh.md)**

<h1 align="center"><a href="" target="_blank" rel="noopener noreferrer"><img width="250" src="https://www.swarmcloud.net/img/logo.png" alt="logo"></a></h1>
<h4 align="center">Let your viewers become your unlimitedly scalable CDN.</h4>
<p align="center">
  <a href="https://www.npmjs.com/package/swarmcloud-hls"><img src="https://img.shields.io/npm/v/swarmcloud-hls.svg?style=flat" alt="npm"></a>
  <a href="https://www.jsdelivr.com/package/npm/swarmcloud-hls"><img src="https://data.jsdelivr.com/v1/package/npm/swarmcloud-hls/badge" alt="jsdelivr"></a>
</p>

This SDK integrates 2 p2p streaming engines, one is hlsjs based, another is ServiceWorker based.
<br>
As you might expect, it supports all modern browsers (including iOS Safari) and all web players (including players without hls.js built-in)!

## Browser Support
WebRTC has already been incorporated into the HTML5 standard and it is broadly deployed in modern browsers. The compatibility of SwarmCloud depends on the browser support of WebRTC, MediaSource API or Service Worker.

Compatibility|Chrome | Firefox | macOS Safari | Opera | Edge | iOS Safari | IE |
:-: | :-: | :-: | :-: | :-: | :-:| :-:| :-:
WebRTC Datachannel | ✔ | ✔  | ✔  |  ✔ | ✔ | ✔  |  ❌ |
MSE(MMS)           | ✔  | ✔  | ✔  | ✔ | ✔ | ✔  |  ❌ |
Service Worker     | ✔ | ✔  | ✔  | ✔  | ✔ | ✔  |  ❌ |
SwarmCloud         | ✔ | ✔  | ✔  |  ✔ | ✔ |  ✔ |  ❌ |

## Usage
See [documentation](https://docs.swarmcloud.net/web-hls)

## Related Projects
- [android-p2p-engine](https://github.com/cdnbye/android-p2p-engine) - Live/VOD P2P Engine for Android and Android TV.
- [ios-p2p-engine](https://github.com/cdnbye/ios-p2p-engine) - iOS Video P2P Engine for Any Player.
- [flutter-p2p-engine](https://github.com/cdnbye/flutter-p2p-engine) - Live/VOD P2P Engine for Flutter.
- [shaka-p2p-engine](https://github.com/cdnbye/shaka-p2p-engine) - P2P engine for Shaka Player.
- [dashjs-p2p-engine](https://github.com/cdnbye/dashjs-p2p-engine) - Web Video Delivery Technology with No Plugins for MPEG-dash.

## FAQ
We have collected some [frequently asked questions](https://docs.swarmcloud.net/faq). Before reporting an issue, please search if the FAQ has the answer to your problem.

## Contact Us
Email: service@cdnbye.com
<br>
Telegram: @cdnbye
<br>
Skype: live:86755838

