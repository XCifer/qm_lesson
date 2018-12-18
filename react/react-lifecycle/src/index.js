import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// React.createElement()

class LifeCycle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      str: 'Hello',
      name: '没有账号'
    }
    setTimeout(() => {
        console.log('a')
        this.setState({
            str:'hello!'
        }        )
    }, 1000);
    // this.init();
  }
  componentDidMount () {
    console.log('组件已经挂载了');
    // UI ready  最快看到壳子， 接着再
    // 取数据， 不会阻塞界面 
    fetch('https://api.github.com/users/shunwuyu')
      .then(data => data.json())
      .then(data => {
        this.setState({
          name: data.name
        })
      })
      
  }
  componentWillMount(){
      console.log('will mount')
  }
  componentDidUpdate(){
      console.log("updated")
  }
  componentWillUpdate(){
      console.log('will update')
  }
  componentWillUnmount(){
      console.log('will unmount')
  }
  componentWillReceiveProps(){
      console.log("props")
  }
//   nextProps新接受的,但不是页面上已有的
  shouldComponentUpdate(nextProps){
      console.log(nextProps)
    if (nextProps.num === this.props.num){
        console.log('值没有改变，不更新')
        return false
    }
    return true
      
  }
  render(){
    return(
        <div>
            <div>{this.state.name}</div>
            <span>
                <span>
                    <h1>{this.state.str}</h1>
                    <h2>{parseInt(this.props.num)}</h2>
                </span>
            </span>
        </div>
    )
  }
}

class App extends React.Component {
    constructor(props){
        super(props);
        setTimeout(() => {
            this.setState({
                num:3
            })
        }, 4000);
        setTimeout(()=>{
            this.setState({
                showLifeCycle:false
            })
        },10000)
    }
  state = {
    num:2 ,
    showLifeCycle:true
  }
  render () {
    if(!this.state.showLifeCycle)
      return <div>jsdaldjaljdqwj</div>
    return(
        <LifeCycle num={this.state.num} />
        )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
