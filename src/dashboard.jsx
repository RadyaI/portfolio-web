import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import Menu from "./components/menu";
import Cursor from "./components/cursor";

// Left
import Home from "./components/left/home";
import About from "./components/left/about";

export default function Dashboard() {

    const [leftSelect, setLeftSelect] = useState('1');
    const [rightSelect, setRightSelect] = useState('1');
    const handleLeftSelectChange = (newLeftSelect) => {
        setLeftSelect(newLeftSelect);
    };

    const handleRightSelectChange = (newRightSelect) => {
        setRightSelect(newRightSelect);
    };

    useEffect(() => {
        console.log(`
            ███████╗████████╗ ██████╗ ██████╗ 
            ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
            ███████╗   ██║   ██║   ██║██████╔╝
            ╚════██║   ██║   ██║   ██║██╔═══╝ 
            ███████║   ██║   ╚██████╔╝██║     
            ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     
            `);

        console.log("%cMau ngapain? udah ga usah! balik sana hush.", "color: red; font-size: 30px; font-weight: bold;");

    }, []);

    return (
        <>
            <Cursor></Cursor>
            <Container>
                <Menu
                    onLeftSelectChange={handleLeftSelectChange}
                    onRightSelectChange={handleRightSelectChange}
                />
                <Wrapper>
                    <Card1>
                        {leftSelect === "1" && (<Home />)}
                        {leftSelect === "2" && (<About />)}
                        {/* { leftSelect === "3" && (<Blog />)} */}
                    </Card1>
                    <Card2></Card2>
                </Wrapper>
            </Container>
        </>
    );
}

const bgAnimation = keyframes`
    0% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -5%); }
    20% { transform: translate(-10%, 5%); }
    30% { transform: translate(5%, -10%); }
    40% { transform: translate(-5%, 15%); }
    50% { transform: translate(-10%, 5%); }
    60% { transform: translate(15%, 0); }
    70% { transform: translate(0, 10%); }
    80% { transform: translate(-15%, 0); }
    90% { transform: translate(10%, 5%); }
    100% { transform: translate(5%, 0); }
`;

const Container = styled.div`
    height: 100dvh;
    position: relative;
    background-color: #111;
    overflow: hidden; 
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        width: 200%;
        height: 200vh;
        background: transparent url('https://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
        animation: ${bgAnimation} 0.2s infinite;
        opacity: 0.9; 
        visibility: visible;
        pointer-events: none; 
    }
`;

const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Card1 = styled.div`
    /* border: 1px solid lightgreen; */
    width: 45%;
    height: 90%;
`

const Card2 = styled.div`
    border: 1px solid lightgreen;
    width: 45%;
    height: 90%;
`