import React, {useState, useRef} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname: ''
    });

    const nameInput = useRef();
    const {name, nickname} = inputs; 

    const onChange = (e) => {
        const {name, value} = e.target;      //여러개의 input name 속성들을 받아서 일괄적으로 객체 업데이트 처리

        setInputs({
            ...inputs,                      //객체 업데이트 시에는 1회 복사 후, 값 업데이트 진행해야함
            [name] : value
        });
    };

    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        });
        nameInput.current.focus();      //ref 이용해서 요소 가져온 뒤 조작가능
    }

    return (
        <div>
            <input 
                placeholder="이름" 
                onChange={onChange} 
                name="name"
                value={name} 
                ref={nameInput} />
            <input 
                placeholder="닉네임" 
                onChange={onChange} 
                name="nickname"
                value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;