import React, {Component} from 'react';
import './App.css';
import {transactions} from './Transactions'

class App extends Component {
    render() {
        const transTemplate = transactions.map(function (item) {
            return (
                <tr key={item.id}>
                    <td >{item.id}</td>
                    <td>{item.value}</td>
                    <td>{item.type}</td>
                    <td>{item.date}</td>
                </tr>
            )
        });
        return (
            <div className="trans">
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>value</th>
                        <th>type</th>
                        <th>date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transTemplate}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
