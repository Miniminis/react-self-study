import React, { createContext, useContext, useState } from "react";

const MyContext = createContext('defaultContext');

function Child () {
    const text = useContext(MyContext);
    return <div>안녕하세요, { text }</div>
}

function Parent() {
    return <Child />
}

function GrandParent() {
    return <Parent />
}

function ContextApi() {
    const [value, setValue] = useState(true);
    return (
    <MyContext.Provider value = { value ? 'React!' : 'Java' }>
        <GrandParent />
        <button onClick={() => setValue(!value)}>Click Me!</button>
    </MyContext.Provider>
    )
}

export default ContextApi;