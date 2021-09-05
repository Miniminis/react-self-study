import React from "react";

function HelloWorld({ name, color, isSpecial}) {
    return (
        <div style={{ color }}>
            <span>{ isSpecial && <b>*</b>}</span>
            안녕하세요, { name } 
        </div>
    );
}

HelloWorld.defaultProps = {
    name: "No name",
    color : "blue"
}

export default HelloWorld;