import React, { useRef, useState } from "react";

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작해');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef(); 

    const onClickScreen = () => {
        if (state === "waiting") {
            setState("ready");
            setMessage("기다려~");
            timeout.current = setTimeout(() => {
                setState("now");
                setMessage("지금 클릭해~")
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
        } else if (state === "ready") { // 성급하게 클릭함
            clearTimeout(timeout.current);
            setState("waiting");
            setMessage("좀 기다려~");
        } else if (state === "now") { // 반응속도 체크
            endTime.current = new Date();
            setState("waiting");
            setMessage("클릭해서 시작해~");
            setResult((prevResult) => {
                return [...prevResult.result, endTime - startTime];
            });
        };
    }

    const onReset = () => {
        setResult([]);
    }

    
    const renderAverage = () => {
        return result.length === 0
        ? null
        : <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>취소</button>
        </>
    };

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >{message}</div>
            {renderAverage()}
        </>
    )
}

export default ResponseCheck;