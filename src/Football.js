import React, { Component } from 'react';

class Football extends Component {
    shoot = (text) =>
    {
        alert(text);
    }
    render() {
        return (
            <div>
                <button onClick={this.shoot.bind(this, 'μ!!!!!!!!!!')}>μμΈμ!</button>
            </div>
        );
    }
}

export default Football;