- css 命名规范 BEM
    Block
        页面是有多个Block构成的，跟其他的block区分开来，tabbar
    Element __ 
        并不是简单的父子关系
        __label
        __icon
    Modifier
        状态的修改
        __item_on

- WEUI
    微信UI规范，内嵌公众号，小程序
    调起webview，为了让用户体验一致，让用户有认同感
    mobile web app
    前端界面框架 weui.css

- 组件
    大部分的项目，70%都是由通用组件构成的，组件拿来就用。
    1. tabbar
        .tabbar>a.item>(span>img+span.badge)+p
        词汇量 组件词汇 一般词汇
        良好的结构和语义化标签
        flex 

- http 状态码
    有状态码，方便分析
    2开头 成功
    3开头 跳转
    4开头 404 notfound 403 forbidden
    5开头 错误