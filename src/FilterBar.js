import React, {Component} from 'react';

export default class FilterBar extends Component {
    filters;

    constructor(props) {
        super(props);
        this.filters = [];
    }

    filt(filter, data) {
        const {update} = this.props;
        const sorted = data.filter(filter);
        update({
            data: sorted
        });
    }

    filterBy(filter, name) {

        let fl = {};

        fl.name = name;
        fl.filter = filter;
        let index = this.filters.findIndex(x => x.name === name);
        if (index !== -1) {
            this.filters.splice(index, 1);
            this.reset();
            this.filters.every((item) => {
                return this.filt(item.filter, this.props.initialData);
            });

        } else {
            this.filters[this.filters.length] = fl;
            this.filt(filter, this.props.data);
        }

    }

    reset() {
        this.props.update({
            data: this.props.initialData
        });
    }

    resetFilters() {
        this.filters.splice(0, this.filters.length);
        this.reset();
    }



    render() {
        return (
            <div className="filterbar">
                <button onClick={() => this.filterBy(function (trans) {
                    return trans.type === 'income';
                }, 'income')}>
                    Income
                </button>

                <button onClick={() => this.filterBy(function (trans) {
                    return trans.type === 'consumption';
                }, 'consumption')}>
                    Consumption
                </button>
                <button
                    onClick={() => this.filterBy(trans => new Date(trans.date).getMonth() === new Date().getMonth(), 'date')}>
                    Last month
                </button>
                <button onClick={() => this.filterBy(trans => trans.value > 1000, 'value')}>
                    Value > 1000
                </button>

                <button onClick={this.resetFilters.bind(this)}>
                    Reset
                </button>
            </div>
        );
    }
}