#hashtag  在当前页面进行切换，本页面不会刷新  
单页应用  
hashchange 事件， 组件的动态加载  
#hashtag =>url 的一部分

- 传统的地址切换有以下问题
    1. 重度依赖于 http协议  
        <a href="***.html">
        当只有后端路由时，重新生成html网页  新的页面会需要重新从空白开始渲染，比较慢，影响体验  

- 新时代路由  
    history api, 或有hashtag 不会产生页面的跳转，捕捉到事件，马上切出对应组件  
    这样就实现了单页应用
        <a href="#/***">

- history API
    url访问， 都是浏览器中的一个访问记录  
    就是数据结构里的栈，window.pushState(null,null,'#/hash') 入站一个浏览历史
    pop返回  
    给我们的访问新增一个记录，但不会刷新页面，得到一个popstate时间，页面组件的切换  
    前端路由已经成熟，既可以hash 亦可以path 切换，全部交给pushState