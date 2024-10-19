import styled from "styled-components"
import "animate.css"

export default function About() {


    return (
        <>
            <Content className="animate__animated animate__bounceInLeft">
                <Head><p>ABOUT</p> <p>ABOUT</p> </Head>
                <div className="about">
                    Hi, my name is Muhammad Radya Iftikhar, but you can call me <b>Radya</b>. I'm a first-year university student with a growing passion for coding, especially in web development and IoT. I enjoy diving into projects that allow me to build creative solutions using technology. So far, I've developed skills in <u>HTML/CSS</u>, <u>JavaScript</u>, <u>Vue</u>, <u>React</u>, and <u>Node/Express.js</u>, and I love experimenting with these tools to create practical applications.
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
    width: fit-content;
    height: fit-content;
    font-weight: bolder;
    color: grey;
    position: relative;
    height: auto;
    padding-bottom: 30px;

    p:nth-child(1){
        /* position: absolute; */
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
    line-height: 1.8;

    &::-webkit-scrollbar{
        width: 10px;
    }
    
    &::-webkit-scrollbar-track{
        display: none;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 50px;
        background-color: white;
    }

    .about{
        width: 90%;
        height: auto;
        margin: 0 auto;
        padding: 5px 0;
    }
`