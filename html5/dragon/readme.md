- 手机的尺寸 
px 在手机端有问题
css 像素px         750px       828px
硬件物理尺寸iPhone8 375pt 8plus 414pt

- 相对单位
    rem   相对于HTML上的font-size 
    em    相对于自身的font-size
    vh vw 相当于设备宽度、高度百分之一

- inline-block
    用来做布局，将block元素放置一行
    但是有缺陷。有空隙来自换行符，
    1. 删除换行符
    2. 父节点fontsize为0
    https://css-tricks.com/fighting-the-space-between-inline-block-elements/?tdsourcetag=s_pctim_aiomsg

- 自适应网页RWD
rem 相对单位， 动态地生成html fontsize=10vw
结合10rem方案，flexible