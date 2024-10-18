import { useState } from "react"
import styled from "styled-components"

export default function Menu() {

    const [leftSelect, setLeftSelect] = useState("1")
    const [rightSelect, setRightSelect] = useState("1")

    return (
        <>
            <Navbar>
                <div className="top">
                    <div className={`menu ${leftSelect === "1" ? 'left-selected' : ''}`} onClick={() => setLeftSelect("1")}></div>
                    <div className={`menu ${leftSelect === "2" ? 'left-selected' : ''}`} onClick={() => setLeftSelect("2")}></div>
                    <div className={`menu ${leftSelect === "3" ? 'left-selected' : ''}`} onClick={() => setLeftSelect("3")}></div>
                </div>
                <div className="bottom">
                <div className={`menu ${rightSelect === "1" ? 'right-selected' : ''}`} onClick={() => setRightSelect("1")}></div>
                    <div className={`menu ${rightSelect === "2" ? 'right-selected' : ''}`} onClick={() => setRightSelect("2")}></div>
                    <div className={`menu ${rightSelect === "3" ? 'right-selected' : ''}`} onClick={() => setRightSelect("3")}></div>
                </div>
            </Navbar>
        </>
    )
}

const Navbar = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 90%;

    .top{
        border-bottom: 1px solid white;
        width: 100%;
        height: 50%;
        display: flex;
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .top .menu{
        cursor: pointer;
        width: 40px;
        height: 40px;
    }
    
    .bottom{
        width: 100%;
        height: 50%;
        display: flex;
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .bottom .menu{
        cursor: pointer;
        width: 40px;
        height: 40px;
    }

    .left-selected{
        border-left: 1px solid white;
    }

    .right-selected{
        border-right: 1px solid white;
    }
`