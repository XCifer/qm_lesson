- component 组件  
    来自于Facebook 用搭积木的概念来类比做网站
    我们的网页不再是由标签这个原子级别的构成 div+css  
    由组件构成  swiper scroll-view mapview  
    具有特定的功能或表现  
    区块的，功能块的  
    calendar第三方组件

- components 是MVVM架构的核心 它跟pages是平级的， 
    components 构成page .json文件
    {
        'usingComponent':{
            "icon":'../../components/icon/index'
        }
    }

    icon组件
    在引用中会用到一些图标  
    edit add map home 
    相对独立的组件  
    可以在多个页面中复用