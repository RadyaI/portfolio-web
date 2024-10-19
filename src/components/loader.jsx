import styled, { keyframes } from "styled-components"

export default function Loader() {
    return (
        <>
            <Load></Load>
        </>
    )
}

const Animation = keyframes`
    0%{width: 0%;}
    50%{width: 50%;}
    100%{width: 100%;}
`

const Load = styled.div`
    position: absolute;
    background-color: white;
    top: 0;
    width: 100%;
    height: 1px;
    animation: ${Animation} 0.8s;
`