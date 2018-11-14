import React, {Component} from 'react';
import FilterButton from "./FilterButton";

export default class FilterBar extends Component {
    filters;
    datas;
    constructor(props) {
        super(props);
        this.filters = [];
        this.datas = this.props.initialData;
    }

    filtrate(filter) {
        this.datas = this.datas.filter(filter);
        this.props.update({
            data: this.datas
        });
    }

    filterBy(filter, name) {
        let fl = {name,filter};

        let index = this.filters.findIndex(filter => filter.name === name);
        if (index !== -1) {
            this.filters.splice(index, 1);
            this.reset();
            this.filters.forEach((item) => {
                return this.filtrate(item.filter);
            });
        } else {
            this.filters[this.filters.length] = fl;
            this.filtrate(filter);
        }
    }

    reset() {
        this.datas = this.props.initialData;
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