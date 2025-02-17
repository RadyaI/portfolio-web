import { useState } from "react"
import styled from "styled-components"
import "animate.css"

export default function Project() {

    const [projectData, setProjectData] = useState([
        {
            no: 1,
            title: "MoPinjam",
            desc: "MoPinjam is a web application for managing books and loan transactions in a library. It allows users to browse the collection, check book availability, and manage borrowing and returns, while administrators can track inventories and manage member accounts.",
            tech: "React",
            color: "#61DAFB",
            live_link: "https://perpus.radya.fun",
            repo_link: "https://github.com/RadyaI/MoPinjam",
            tag: ["React", "Firebase", "Library"],
        },
        {
            no: 2,
            title: "Face Detection",
            desc: "Face detection using Python that plays a sound when a face is detected.",
            tech: "Python",
            color: "#306998",
            live_link: "-",
            repo_link: "https://github.com/RadyaI/face-detection",
            tag: ["Python", "Open CV"],
        },
        {
            no: 3,
            title: "Student API",
            desc: "This API was created for learning purposes only. This API provides CRUD (Create, Read, Update, Delete) operations for the student entity.",
            tech: "Javascript",
            color: "#F7DF1E",
            live_link: "https://api.radya.fun",
            repo_link: "https://github.com/RadyaI/student-api-fastify",
            tag: ["Fastify", "api"],
        },
        {
            no: 4,
            title: "One Link",
            desc: "One Link is a website that helps you manage multiple links by combining them into a single link.",
            tech: "Vue",
            color: "#42B883",
            live_link: "https://onelink.radya.fun",
            repo_link: "https://github.com/RadyaI/onelink",
            tag: ["Nuxt", "javascript", "Firebase"],
        },
        {
            no: 5,
            title: "Ask AI",
            desc: "Website to ask AI anything, this website uses API from Groq and uses the llama3-8b-8192 model",
            tech: "Vue",
            color: "#42B883",
            live_link: "https://ask-ai.radya.fun",
            repo_link: "https://github.com/RadyaI/ask-ai",
            tag: ["Nuxt", "javascript", "groq"],
        },
        {
            no: 6,
            title: "Send Email",
            desc: "Api to send email",
            tech: "Typescript",
            color: "#3178C6",
            live_link: "https://sendemail.radya.fun",
            repo_link: "https://github.com/RadyaI/send-email",
            tag: ["Fastify", "Typescript", "api", "mailersend"],
        },
        {
            no: 7,
            title: "Encryption Decryption",
            desc: "Encryption Eecryption demo with CryptoJS",
            tech: "Javascript",
            color: "#F7DF1E",
            live_link: "https://demo-enkripsi.radya.fun",
            repo_link: "https://github.com/RadyaI/encryption-decryption",
            tag: ["Vue", "Crypto-Js", "Javascript"],
        },
        {
            no: 8,
            title: "Pengingat Tugas",
            desc: "This Discord bot is designed to help users manage their tasks by retrieving and displaying tasks scheduled for tomorrow or specific dates. Users can view a list of all their tasks and receive reminders for upcoming deadlines.",
            tech: "Javascript",
            color: "#F7DF1E",
            live_link: "-",
            repo_link: "https://github.com/RadyaI/pengingat-tugas",
            tag: ["Javascript", "Discordjs", "bot"],
        },
        {
            no: 9,
            title: "Cara bertanya kodingan error",
            desc: "Don't ask to ask!",
            tech: "React",
            color: "#61DAFB",
            live_link: "https://kodingankuerror.radya.fun",
            repo_link: "https://github.com/RadyaI/cara-bertanya",
            tag: ["Javascript", "Tailwind", "💢"],
        },
        {
            no: 10,
            title: "Online Polling",
            desc: "Polling application where users can create polls, invite other users to vote, and see results in real-time.",
            tech: "React",
            color: "#61DAFB",
            live_link: "https://polling.radya.fun",
            repo_link: "https://github.com/RadyaI/polling",
            tag: ["React", "Javascript", "Firebase"],
        },
        {
            no: 11,
            title: "Uareshort",
            desc: "A simple and efficient URL shortener built with Express, Prisma, and MySQL. Uareshort allows you to shorten long URLs, track analytics, and manage your links.",
            tech: "Typescript",
            color: "#00273f",
            live_link: "-",
            repo_link: "https://github.com/RadyaI/uareshort",
            tag: ["Express", "Typescript", "MYsql"],
        },
        {
            no: 12,
            title: "Yourlist api",
            desc: "TodoList API is a simple RESTful API for managing tasks, featuring CRUD operations, user authentication, and task categorization. Built with express.js for efficient task management.",
            tech: "Typescript",
            color: "#00273f",
            live_link: "-",
            repo_link: "https://github.com/RadyaI/yourlist-api",
            tag: ["Express", "Typescript", "MYsql"],
        },
        {
            no: 13,
            title: "User analytics api",
            desc: "User Analytics API is a simple RESTful API for managing user data and activities. It includes basic CRUD operations and simple analytics endpoints to track user engagement.",
            tech: "Typescript",
            color: "#00273f",
            live_link: "-",
            repo_link: "https://github.com/RadyaI/user-analytics-api",
            tag: ["Express", "Typescript", "MYsql"],
        },
    ])

    function DisplayProject() {
        return projectData.map((i, no) =>
            <div className="card" style={{borderBottom: `5px solid ${i.color}` }} key={no}>
                <h3>{i.title}</h3>
                <a href={i.live_link} target="_blank" rel="noopener noreferrer"><small>{i.live_link}</small></a><br />
                <a href={i.repo_link} target="_blank" rel="noopener noreferrer"><small>{i.repo_link}</small></a>
                <p className="desc">{i.desc}</p>
                <div className="tech">
                    <div className="color" style={{backgroundColor: i.color}}></div>
                    <p>{i.tech}</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <Content>
                <Head><p className="animate__animated animate__bounceInLeft">Project</p> <p>Project.</p> </Head>
                <DisplayProject />
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
    padding-bottom: 20px;

    p:nth-child(1){
        color: grey;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
    overflow-x: hidden;

    a{
        text-decoration: none;
        color: grey;
    }

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

    .card:nth-child(2){
        /* margin-top: 80px; */
    }

    .card{
        background-color: #090909;
        margin: 0 auto;
        width: 90%;
        height: auto;
        padding: 20px 20px;
        color: white;
    }

    .card .desc{
        margin-top: 10px;
    }

    .card .tech{
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 10px;
    }

    .card .tech .color{
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
`