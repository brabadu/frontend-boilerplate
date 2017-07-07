import React from 'react';

/* Action creators */

function addName(name) {
    return {
        type: 'ADD_NAME',
        name
    };
}

/* Reducer */

const initState = {
    name: 'Fedor',
    nameHistory: [],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {
                name: action.name,
                nameHistory: state.nameHistory.concat(state.name)
            };

        default:
            return state;
    };
}

/* Component */

import { connect } from 'react-redux';

class GreeterComponent extends React.Component {

    addName() {
        if (!this.input.value.trim()) {
            return;
        }
        this.props.dispatch(addName(this.input.value));
        this.input.value = '';
    }

    render() {
        return <div>
            <h3>
                Hello, {this.props.name}
            </h3>

            <div>
                <input ref={(node) => this.input = node} />
                <button onClick={() => this.addName()}>Add</button>
                <br />
                History: {this.props.nameHistory.join(', ')}
            </div>

        </div>;
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        nameHistory: state.nameHistory,
    };
}

export const Greeter = connect(mapStateToProps)(GreeterComponent);
