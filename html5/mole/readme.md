1. 分析布局+建立html结构
2. box-sizing
    盒子模型 
    在默认的时候 width height 设置是对盒子模型里内容的设置
    元素在页面上显示的真正大小是整个盒子模型
    内容>padding>border>margin,
    元素出现在页面山其实是一个painting绘制的原则

    如何解决？
    box-sizing:border-box;
    占位大小 = border + padding + content 
    优先 border、padding 占位， 剩下的才是内容的
