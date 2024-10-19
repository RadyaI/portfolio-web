import { useState } from "react"
import styled from "styled-components"

import Loader from "./loader"

export default function Menu({ onLeftSelectChange, onRightSelectChange }) {

    const [leftSelect, setLeftSelect] = useState("1");
    const [rightSelect, setRightSelect] = useState("1");

    const [isLoad, setIsLoad] = useState(false)

    const handleLeftSelect = (newValue) => {
        setLeftSelect(newValue);
        onLeftSelectChange(newValue);

        setIsLoad(true)
        setTimeout(() => {
            setIsLoad(false)
        }, 800);

    };

    const handleRightSelect = (newValue) => {
        setRightSelect(newValue);
        onRightSelectChange(newValue);

        setIsLoad(true)
        setTimeout(() => {
            setIsLoad(false)
        }, 800);

    };

    return (
        <>
            {isLoad && (<Loader></Loader>)}
            <Navbar>
                <div className="top">
                    <div className={`menu ${leftSelect === "1" ? 'left-selected' : ''}`}
                        onClick={() => handleLeftSelect("1")}>
                        <i className="fa-solid fa-home"></i> <p>Home</p>
                    </div>
                    <div className={`menu ${leftSelect === "2" ? 'left-selected' : ''}`}
                        onClick={() => handleLeftSelect("2")}>
                        <i className="fa-regular fa-user"></i> <p>About</p>
                    </div>
                    <div className={`menu ${leftSelect === "3" ? 'left-selected' : ''}`}
                        onClick={() => handleLeftSelect("3")}>
                        <i className="fa-solid fa-globe"></i> <p>Blog</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className={`menu ${rightSelect === "1" ? 'right-selected' : ''}`}
                        onClick={() => handleRightSelect("1")}>
                        <i className="fa-solid fa-list-check"></i> <p>Project</p>
                    </div>
                    <div className={`menu ${rightSelect === "2" ? 'right-selected' : ''}`}
                        onClick={() => handleRightSelect("2")}>
                        <i className="fa-regular fa-envelope"></i> <p>Contact</p>
                    </div>
                    <div className={`menu ${rightSelect === "3" ? 'right-selected' : ''}`}
                        onClick={() => handleRightSelect("3")}>
                        <i className="fa-solid fa-book"></i> <p>Guestbook</p>
                    </div>
                </div>
            </Navbar>
        </>
    );
}


const Navbar = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75px;
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
        /* cursor: pointer; */
        width: 90%;
        height: 40px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .top .menu p {
        font-size: 10px;
    }

    .top .menu i {
        font-size: 20px;
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
        /* cursor: pointer; */
        width: 90%;
        height: 40px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        font-size: 14px;
    }

    .bottom .menu p {
        font-size: 10px;
    }

    .bottom  .menu i {
        font-size: 20px;
    }

    .left-selected{
        border-left: 2px solid white;
    }

    .right-selected{
        border-right: 2px solid white;
    }
`