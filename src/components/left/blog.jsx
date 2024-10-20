import { useState } from "react"
import styled from "styled-components"
import "animate.css"

export default function Blog() {

    const [blog, setBlog] = useState([
        {
            no: 1,
            title: "Apa Itu Fungsi dalam Bahasa C?",
            date: "Oct 5, 2024",
            read: "3 min read",
            link: "https://medium.com/@radyaiftikhar/apa-itu-fungsi-dalam-bahasa-c-42368d611ef3"
        },
        {
            no: 2,
            title: "Apa Itu Pointer dalam Bahasa C?",
            date: "Oct 5, 2024",
            read: "2 min read",
            link: "https://medium.com/@radyaiftikhar/apa-itu-pointers-dalam-bahasa-c-0519f8895b90"
        },
        {
            no: 3,
            title: "Cara Menghitung Selisih Tanggal Menggunakan JavaScript",
            date: "Aug 29, 2024",
            read: "3 min read",
            link: "https://medium.com/@radyaiftikhar/cara-menghitung-selisih-tanggal-menggunakan-javascript-e9355c444ed9"
        },
        {
            no: 4,
            title: "Node.js: Framework JavaScript atau Runtime JavaScript?",
            date: "Aug 29, 2024",
            read: "3 min read",
            link: "https://medium.com/@radyaiftikhar/node-js-framework-javascript-atau-runtime-javascript-e511828d8e7d"
        },
        {
            no: 5,
            title: "20 Ide Project Menggunakan React: Mulai dari Pemula Sampai Advance",
            date: "Aug 31, 2024",
            read: "4 min read",
            link: "https://medium.com/@radyaiftikhar/20-ide-project-menggunakan-react-mulai-dari-pemula-sampai-advance-0bde3f6392bc"
        },
    ])

    function DisplayBlog() {
        return blog.map((i, no) =>
                <div className="card" key={no}>
                    <a href={i.link} target="_blank"><p>{i.title}</p></a>
                    <small>{i.read} - {i.date}</small>
                </div>
        )
    }

    return (
        <>
            <Content>
                <Head><p className="animate__animated animate__bounceInLeft">Blog</p> <p>Blog.</p> </Head>
                <DisplayBlog></DisplayBlog>
            </Content>
        </>
    )
}

const Head = styled.div`
    user-select: none;
    width: 95%;
    height: auto;
    height: fit-content;
    font-weight: bolder;
    position: relative;
    padding-bottom: 30px;

    p:nth-child(1){
        color: grey;
        top: 0;
        left: 0;
        font-size: 60px;
    }
    
    p:nth-child(2){
        color: white;
        position: absolute;
        top: 15px;
        left: 10px;
        font-size: 70px;
    }
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
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

.card:nth-child(2){
    /* margin-top: 50px; */
}

.card{
    z-index: 10;
    background-color: #090909;
    color: white;
    margin: 0 auto;
    width: 90%;
    height: auto;
    padding: 25px 10px;
    margin-top: 15px;
    position: relative;
}

.card p{
    /* margin-bottom: 10px; */
}

.card small{
    color: grey;
}

a{
    text-decoration: none;
    color: white;
}

`