## 思路

* 参考了掘金上[一个前端非侵入式骨架屏自动生成方案](https://juejin.cn/post/7109083708463775752#heading-13)

## puppeteer 

* 如何调试
  
  [https://pptr.dev/guides/debugging](https://pptr.dev/guides/debugging)

* 浏览器不进入断点，需要在page.evaluate下一行代码中也设置断点，防止node服务中执行完后，浏览器已经关闭，无法进行下一步操作

  [https://github.com/puppeteer/puppeteer/issues/398](https://github.com/puppeteer/puppeteer/issues/398)
