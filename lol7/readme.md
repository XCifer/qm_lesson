- 可以用HTML表达的一定不要用图

- inline 元素不能直接设置宽与高
  display: inline-block

- 节日活动页
- bg.jpg 是雪碧图 spirites
  
  网页打开速度受以下影响，
  HTTP请求数
  img src
  link href
  script src
  http 请求去下载
  HTML
  并发http请求数是有限的

- html css类命名很重要，积累取名词汇量

- 背景很华丽，页面写法很难
  将背景分离出盒子，单独做
  用bg-$*n 将背景铺在下面
  .bg z-index:1
  .main z-index:2
  .bg position:absolute 定位之后离开正常的文档流
  .main 将会跟它重合