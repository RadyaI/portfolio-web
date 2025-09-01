import styled, { keyframes } from "styled-components"
import 'animate.css'

export default function Home() {
    return (
        <>
            <Content>
                {/* <Head><p>HOME</p> <p>HOME</p> </Head> */}
                <div className="center">
                    <div className="name">
                        <div className="part1 animate__animated animate__bounceInLeft">I AM</div>
                        <div className="part2">RADYA IF</div>
                        <div className="part3">In This Economy? <span className="coret">A FULLSTACK DEVELOPER</span></div>
                        <div className="part4">Ngoding apa aja dah</div>
                    </div>
                    <div className="media">
                        <div className="list"><a href="https://instagram.com/radyaif" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></div>
                        <div className="list"><a href="https://www.linkedin.com/in/radyaa/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></div>
                        <div className="list"><a href="https://github.com/RadyaI" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></div>
                    </div>
                </div>
                <Element></Element>
            </Content>
        </>
    )
}

// const Head = styled.div`
//     width: fit-content;
//     height: fit-content;
//     position: absolute;
//     top: 0;
//     left: 0;
//     font-weight: bolder;
//     color: grey;

//     p:nth-child(1){
//         position: absolute;
//         top: 0;
//         left: 0;
//         font-size: 40px;
//     }

//     p:nth-child(2){
//         color: white;
//         position: absolute;
//         top: 10px;
//         left: 10px;
//         font-size: 50px;
//     }
// `

const Content = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .center{
        width: fit-content;
        height: fit-content;
    }

    .coret{
        text-decoration: line-through;
    }

    .name{
        margin-bottom: 10px;
    }

    .name .part1{
        font-size: 10px;
    }
    
    .name .part2{
        font-weight: bolder;
        font-size: 70px;
    }

    .name .part3{

    }
    
    .name .part4{
        font-size: 15px;
        text-align: right;
    }
    
    .media{
        width: 100%;
        height: 60px;
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
    }

    .media i{
        font-size: 20px;
        /* cursor: pointer; */
    }

    a{
        text-decoration: none;
        color: white;
    }

`

const ElementAnimate = keyframes`
    0%{transform: translateY(-20px) rotate(45deg);}
    50%{transform: translateY(0) rotate(45deg);}
    100%{transform: translateY(-20px) rotate(45deg);}
`

const Element = styled.div`
    background-color: white;
    position: absolute;
    bottom: 30px;
    right: 70px;
    width: 30px;    
    height: 30px;
    filter: blur(8px);
    animation: ${ElementAnimate} 2s linear infinite;
`