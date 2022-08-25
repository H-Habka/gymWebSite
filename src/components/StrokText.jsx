import React from "react";

const StrokText = ({ content }) => {
    return (
        <span
            style={{ WebkitTextStroke: "1px white" }}
            className="text-transparent"
        >
            {content}
        </span>
    );
};

export default StrokText;
