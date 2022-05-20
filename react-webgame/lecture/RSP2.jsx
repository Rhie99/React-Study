import React, { useState, useRef, useEffect } from "react";

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => {    //componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님)
        interval.current = setInterval(changeHand, 100);
        return () => {    //componentWillUnmount 역할
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보)
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위)
        }
    };

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('비겼어~');
        } else if ([-1, 2].includes(diff)) {
                setResult("이겨써~");
                setScore((prevScore) => prevScore + 1);
            } else {
                setResult("졌어여~");
                setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 2000)
    };

    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
            <div>
                <button id="rock" className="btn" onClick={onClickBtn("바위")}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn("가위")}>가위</button>
                <button id="papaer" className="btn" onClick={onClickBtn("보")}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    )
}


    // componentDidMount() {    // 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청 많이 함
    //     this.interval = setInterval(this.changeHand, 100);
    // }

    // componentWillUnmount() {    // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 함
    //     clearInterval(this.interval);
    // }


export default RSP;