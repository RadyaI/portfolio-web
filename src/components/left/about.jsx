import styled from "styled-components"
import "animate.css"

import foto from '../../assets/foto2.jpg'
import { useState } from "react"

export default function About() {

    const [listEdu, setListEdu] = useState([
        {
            no: 1,
            title: "SMK Telkom Malang",
            time: "2021 - 2024",
        },
        {
            no: 2,
            title: "Universitas Muhammadiyah Malang",
            time: "2024 - 2028",
        },
    ])

    function EduDisplay() {
        const dis = listEdu.map((i, no) =>
            <div key={no} className="card">
                <p>{i.title}</p>
                <small>{i.time}</small>
            </div>
        )

        return dis
    }

    return (
        <>
            <Content>
                <Head>
                    <p className="animate__animated animate__bounceInLeft">About</p>
                    <p>About.</p>
                </Head>
                <div className="foto">
                    <div className="img-container">
                        <img src={foto} alt="Foto" />
                    </div>
                </div>
                <div className="about">
                    Hi, my name is Muhammad Radya Iftikhar, but you can call me <b><a href="https://my.radya.fun" rel="noopener noreferrer"><u>Radya
                    </u></a></b>. I'm a second-year Informatics student with a growing passion for coding, especially in DATA and backend. I enjoy diving into projects that allow me to build creative solutions using technology. So far, I've developed skills in <u><a href="#">JavaScript/Typescript</a></u>, <u><a href="#">Vue</a></u>, <u><a href="#">React</a></u>, <u><a href="#">Next</a></u>, <u><a href="#">Firebase</a></u>, <u><a href="#">MySql</a></u>, and <u><a href="#">Node/Express.js</a></u>, and I love experimenting with these tools to create practical applications.
                    <br /><br />
                    Lately, I've been focusing on building personal web projects that simplify my daily life, like organizing my college assignments or managing my belongings through custom-made platforms. While I'm still exploring different aspects of the tech world, I'm excited about continuing to learn and improve my abilities as a developer.
                    <br /> <br />
                    When I'm not coding, you can usually find me watching movies, my favorite way to unwind and find inspiration outside of the coding things.
                </div>
                <div className="foto">
                    <div className="img-container">
                        <img src={foto} alt="Foto" />
                    </div>
                </div>
                <div className="edu-title">Education</div>
                <Edu>
                    <EduDisplay></EduDisplay>
                </Edu>
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

    .foto:nth-child(2){
        width: 90%;
        height: auto;
        padding-bottom: 25px;
        margin: 0 auto;
    }

    .foto:nth-child(4){
        display: none;
    }

    .foto:nth-child(2) .img-container{
        width: 100px;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .foto:nth-child(2) .img-container img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .about{
        width: 90%;
        height: auto;
        margin: 0 auto;
        padding: 5px 0;
        color: grey;
        text-align: justify;
    }

    .about u, b{
        color: white;
    }

    a{
        text-decoration: none;
        color: white;
    }

    .edu-title{
        width: 90%;
        font-size: 20px;
        font-weight: bold;
        margin: 0 auto;
        margin-top: 20px;
    }

    @media only screen and (max-width: 700px){
        .foto:nth-child(2){
            display: none;
        }

        .foto:nth-child(4){
            display: block;
            width: 90%;
            height: auto;
            padding-top: 25px;
            margin: 0 auto;
        }

        .foto:nth-child(4) .img-container{
            width: 100px;
            height: 100px;
            border-radius: 10px;
            overflow: hidden;
        }
    
        .foto:nth-child(4) .img-container img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

const Edu = styled.div`
    width: 80%;
    height: auto;
    margin-right: auto;
    
    .card{
        padding: 10px 15px;
        margin-right: auto;
        margin-left: 17px;
        margin-bottom: 10px;
        background-color: #090909;
        margin-top: 10px;
    }

    @media only screen and (max-width:700px){
        width: 90%;
    }
`