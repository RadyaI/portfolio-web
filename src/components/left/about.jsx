import styled from "styled-components"
import "animate.css"

export default function About() {


    return (
        <>
            <Content>
                <Head>
                    <p className="animate__animated animate__bounceInLeft">About</p>
                    <p>About.</p>
                </Head>
                <div className="about">
                    Hi, my name is Muhammad Radya Iftikhar, but you can call me <b><a href="https://radya.fun" rel="noopener noreferrer"><u>Radya</u></a></b>. I'm a first-year university student with a growing passion for coding, especially in web development and IoT. I enjoy diving into projects that allow me to build creative solutions using technology. So far, I've developed skills in <u><a href="#">HTML/CSS</a></u>, <u><a href="#">JavaScript</a></u>, <u><a href="#">Vue</a></u>, <u><a href="#">React</a></u>, <u><a href="#">Firebase</a></u>, <u><a href="#">MySql</a></u>, and <u><a href="#">Node/Express.js</a></u>, and I love experimenting with these tools to create practical applications.
                    <br /><br />
                    Lately, I've been focusing on building personal web projects that simplify my daily life, like organizing my college assignments or managing my belongings through custom-made platforms. While I'm still exploring different aspects of the tech world, I'm excited about continuing to learn and improve my abilities as a developer.
                    <br /> <br />
                    When I'm not coding, you can usually find me watching movies, my favorite way to unwind and find inspiration outside of the coding world.
                </div>
            </Content>
        </>
    )
}

const Head = styled.div`
    user-select: none;
    width: 95%;
    height: fit-content;
    font-weight: bolder;
    position: relative;
    height: auto;
    padding-bottom: 30px;
    
    p:nth-child(1){
        /* position: absolute; */
        color: grey;
        top: 0;
        left: 0;
        font-size: 60px;
    }
    
    p:nth-child(2){
        color: white;
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 70px;
    }
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    overflow: auto;
    overflow-x: hidden;
    line-height: 1.8;
    direction: rtl;

    &::-webkit-scrollbar{
        width: 5px;
        /* display: none; */
    }
    
    &::-webkit-scrollbar-track{
        display: none;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 50px;
        background-color: white;
    }

    & > * {
        direction: ltr;
    }

    .about{
        width: 90%;
        height: auto;
        margin: 0 auto;
        padding: 5px 0;
        color: grey;
    }

    .about u, b{
        color: white;
    }

    a{
        text-decoration: none;
        color: white;
    }
`