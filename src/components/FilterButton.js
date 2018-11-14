import React, {Component} from 'react';

class FilterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {color: 'red'}
    }

    handleClick() {
        if (this.state.color === 'red') {
            this.setState({color: 'green'});
        } else {
            this.setState({color: 'red'});
        }
        const {action} = this.props;
        action(this.props.func, this.props.name);
    }

    render() {
        return (
            <button style={this.state} onClick={() => this.handleClick()}>{this.props.name}</button>
        );
    }
}

export default FilterButton;