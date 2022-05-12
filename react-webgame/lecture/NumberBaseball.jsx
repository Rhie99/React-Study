import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    fruits = [
        { fruit: '사과', taste: '맛잇다' },
        { fruit: '배', taste: '맛잇다' },
        { fruit: '귤', taste: '맛잇다' },
        { fruit: '감', taste: '맛잇다' },
        { fruit: '밤', taste: '맛잇다' },
        { fruit: '수박', taste: '맛잇다' },
    ]

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => (
                        <Try value={v} index={i} key={v.fruit + v.taste} />
                    ))}
                </ul>
            </>  
        );
    }
}

export default NumberBaseball;