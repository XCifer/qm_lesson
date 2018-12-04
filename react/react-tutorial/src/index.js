import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import './index.css'

const heading = <h1 className="site-heading">Hello,React</h1>
// const Table = ()=>{
//     return(
//         <table>
//             <tr>
//                 <td>1</td>
//                 <td>2</td>
//                 <td>3</td>
//             </tr>
//         </table>
//     )
// }
class App extends Component{
    render(){
        return(
            <div className="App container">
                {heading}
                <h1>Hello,React!</h1>
                <Table className="table table-striped"/>
            </div>
        )
        
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));