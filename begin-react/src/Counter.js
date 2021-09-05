import React, {useState} from "react";

function Count() {    
    const [number, setNumber] = useState(0);        //비구조할당으로 배열값을 한번에 받음

    const onIncrease = () => {
        // setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1);    //함수형 업데이트. 성능향상에 좋다.
    }; 

    const onDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>

    );
}

export default Count;