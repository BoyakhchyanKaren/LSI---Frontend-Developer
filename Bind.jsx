import React from 'react';

class Bind extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Karen Boyakhchyan',
            email: null,
        };
    }

    fetch = (newEmail) => {
        this.setState({ email: newEmail });
    };
    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>{this.state.email ? `Email: ${this.state.email}` : null}</h1>
                <button onClick={this.fetch.bind(this, 'karenboyakhchyan20@gmail.com')}>
                    Fetch Email
                </button>
            </div>
        );
    }
}
export default Bind;