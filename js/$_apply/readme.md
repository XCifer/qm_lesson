- 性能优化  
    script 标签具有阻塞性， src 下载代码，或行内的js并执行  不要放在头部  
    页面的显示，painting 绘制 排列 重绘重排  
    生命周期 window.onLoad document DOMContentLoaded  

    js 开始不要阻止页面的下载 但是也不要等到window.onload  
        DOMContentLoaded dom ready   img

- $(callback)  
    jquery $第一种使用用途是dom ready事件  
    $(function(){
        //js here
    })
    $(selector) 用于选择元素  
    动态页面  
    可以不用等数据取出来 先显示页面 再去取数据 快得多