import React from "react";

function HelloWorld(prop) {
    return (
        <div style={{ color : prop.color}}>
            안녕하세요, {prop.name} 
        </div>
    );
}

HelloWorld.defaultProps = {
    name: "No name",
    color : "blue"
}

export default HelloWorld;