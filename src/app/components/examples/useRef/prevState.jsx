import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const previousState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        previousState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider/>
            <p>Prev State: {previousState.current}</p>
            <p>Current State: {otherState}</p>
            <button className='btn btn-primary' onClick={toggleOtherState}>Toggle Other State</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
