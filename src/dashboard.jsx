import styled, { keyframes } from "styled-components";
import Menu from "./components/menu";

export default function Dashboard() {
    return (
        <>
            <Container>
                <Menu />
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
    height: 100vh;
    position: relative;
    background-color: #111;
    overflow: hidden; 

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
