import React from "react";

const RectangleComponent = ({number , text}) => {
    return (
        <div className="flex flex-col text-center md:text-start gap-2">
            <p className="text-3xl text-white">{number}</p>
            <p className="text-gray-400">{text}</p>
        </div>
    );
};

export default RectangleComponent;
