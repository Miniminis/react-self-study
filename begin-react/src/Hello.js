import React from "react";

function HelloWorld({ name, color}) {
    return (
        <div style={{ color }}>
            안녕하세요, { name } 
        </div>
    );
}

HelloWorld.defaultProps = {
    name: "No name",
    color : "blue"
}

export default HelloWorld;