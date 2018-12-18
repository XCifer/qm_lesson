生命周期  
1. 组件也会有实例化  
    Class mount JSX对象  
    constructor 本职satete 声明，可用于数据的准备或请求 传统的面向对象思想

2. 围绕mount 挂载
    - componentWillMount()
    - 性能优化  
        componentDidMount()  
        请求数据 组建的基本UI已渲染(加速)，  
        MVVM setState 推迟异步执行的数据

3. update  
    componentWillUpdate
    componentDidUpdate  

4. unmount
    卸载 

5. props  
    因为MVVM 数据流的
    shouldComponentUpdate(nextProps){
      console.log(nextProps)
    if (nextProps.num === this.props.num){
        console.log('值没有改变，不更新')
        return false
    }
    return true
      
  }