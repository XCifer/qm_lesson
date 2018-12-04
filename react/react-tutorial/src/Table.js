
// eslint-disable-next-line
import React,{ Component } from "react";

class Table extends React.Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jack</td>
                        <td>工程师</td>
                    </tr>
                    <tr>
                        <td>Tom</td>
                        <td>画家</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;