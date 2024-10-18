import styled from "styled-components"

export default function Menu() {
    return (
        <>
            <Navbar></Navbar>
        </>
    )
}

const Navbar = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 400px;
    border: 1px solid white;
`