import React, {Component} from 'react';
import FilterButton from "./FilterButton";

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

        let fl = {name,filter};

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

    handleFilter(func,name){
        this.filterBy(func, name);
    }

    render() {
        return (
            <div className="filterbar">
                <FilterButton action={this.handleFilter.bind(this)} func = {(trans)=>{return trans.type === 'income'}} name = "Income"/>
                <FilterButton action={this.handleFilter.bind(this)} func = {(trans)=>{return trans.type === 'consumption'}} name = "Consumption"/>
                <FilterButton action={this.handleFilter.bind(this)} func = {(trans)=>{return new Date(trans.date).getMonth() === new Date().getMonth()}} name = "Last month"/>
                <FilterButton action={this.handleFilter.bind(this)} func = {(trans)=>{return trans.value > 1000}} name = "Value > 1000"/>
            </div>
        );
    }
}