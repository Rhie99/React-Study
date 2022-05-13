import React, { PureComponent } from "react";

class Test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };

    onClick = () => {
        this.setState({
            array: [{ inside: [3] }],
        });
    };

    render() {
        console.log("렌더링", this.state);
        return (
            <>
                <button onClick={this.onClick}>클릭</button>
            </>
        )
    }
}

export default Test;