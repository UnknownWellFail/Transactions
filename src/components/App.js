import React, {Component} from 'react';
import '../App.css';
import transactions from '../Transactions'
import FilterBar from "./FilterBar";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: transactions
        };
    }

    updateData(config) {
        this.setState(config);
    }

    render() {
        const transTemplate = this.state.data.map(function (item) {
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
                <table >
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
                <FilterBar initialData={transactions} data={this.state.data} update={this.updateData.bind(this)} />
            </div>
        );
    }
}

export default App;
