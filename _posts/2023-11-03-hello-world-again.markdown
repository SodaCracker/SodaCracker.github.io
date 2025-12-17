---
layout: single
title:  "Hello World Again"
categories: Devlog
---
重启这个 repo 完全就是因为闲的。

那天一大早括弧就开始挠门，那段时间因为隔壁觉得猫吵，我晚上都是把她关到厨房。不过小猫对着门又挠又撞对我来说其实比她在床前走走跑跑更吵点。我心想，我至少要没收你的作案工具，于是就抱她进来试图给她剪个指甲。括弧一边疯狂挣扎一边尖叫，我就试着用睡衣 T 恤给她绑个口绳，结果就是，我被狠狠咬了一口，坐地铁去医院的路上脑子一热买了个域名，然后大概早上 8:00 左右就已经打好两针狂犬疫苗又清醒又无所事事地坐在自家沙发上。猫的指甲还剩左后腿的最后一根没剪，但是我已经决定不去管了。

但是我现在有个域名了，家里还有台 Nas，那建个站的想法就很自然了。发生这个小事故的时间是 2023-10-28，之后的一个多星期，我就是在来回横跳，各种 poke around。

一开始想用群晖自带的 Web Station，但是渐渐插件越装越多，而且比较完善的教程都是拿 WordPress 举例子。WordPress 给我的感觉又有点古老，心理上有点抵触，就想着还是先用着 GitHub Pages，keep it simple。

不过 GitHub Pages 有自己麻烦的地方。首先，想在本地测试需要在本机上装 Jekyll，要装 Jekyll 就要装 Ruby。在 Windows 上装 Ruby，呵呵，真的是谁装谁知道，整个过程繁琐、累赘，总之就是一边装一边自己觉得丑陋。最后我采取的办法是 WSL 里装个 Linux，把环境搭在 Linux 里，顺多了。就是虚拟机的网络环境也需要点额外设置，中国开发避无可避的第一个步骤。

1. [Cloudflare + Trust Zero]({% post_url 2023-11-06-cloudflare-trustzero %})
2. [\[docker\] code-server]({% post_url 2023-11-06-docker-code-server %})
3. [\[docker\] jellyfin]({% post_url 2023-11-06-docker-jellyfin %})
4. [\[docker\] tinymediamanager]({% post_url 2023-11-06-docker-tinymediamanager %})