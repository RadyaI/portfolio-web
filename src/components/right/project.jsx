import { useState } from "react"
import styled from "styled-components"
import "animate.css"

export default function Project() {

    const [projectData, setProjectData] = useState([
        {
            no: 1,
            title: "Portfolio Web",
            desc: "Yes, this is the website you are currently viewing.",
            tech: "React",
            color: "#61DAFB",
            live_link: "https://radya.vercel.app",
            repo_link: "https://github.com/RadyaI/portfolio-web",
            tag: ["React", "Firebase", "Tailwind"],
        },
        {
            no: 2,
            title: "whoschat",
            desc: "An anonymous chatroom you can create, share, and delete anytime.",
            tech: "Nextjs",
            color: "#0070F3",
            live_link: "https://whoschat.vercel.app/",
            repo_link: "https://github.com/RadyaI/whoschat",
            tag: ["Nextjs", "Firebase", "anonim-chat"],
        },
        {
            no: 3,
            title: "Student API",
            desc: "This API was created for learning purposes only. This API provides CRUD (Create, Read, Update, Delete) operations for the student entity.",
            tech: "Javascript",
            color: "#F7DF1E",
            live_link: "https://radya-api.vercel.app/student",
            repo_link: "https://github.com/RadyaI/student-api-fastify",
            tag: ["Fastify", "api"],
        },
        {
            no: 4,
            title: "Send Email",
            desc: "Api to send email",
            tech: "Typescript",
            color: "#3178C6",
            live_link: "https://send4email.vercel.app/",
            repo_link: "https://github.com/RadyaI/send-email",
            tag: ["Fastify", "Typescript", "api", "mailersend"],
        },
        {
            no: 5,
            title: "Encryption Decryption",
            desc: "Encryption Eecryption demo with CryptoJS",
            tech: "Javascript",
            color: "#F7DF1E",
            live_link: "https://demo-enkripsi.radya.fun",
            repo_link: "https://github.com/RadyaI/encryption-decryption",
            tag: ["Vue", "Crypto-Js", "Javascript"],
        },
        {
            no: 6,
            title: "Cara bertanya kodingan error",
            desc: "Don't ask to ask!",
            tech: "React",
            color: "#61DAFB",
            live_link: "https://kodingankuerror.vercel.app/",
            repo_link: "https://github.com/RadyaI/cara-bertanya",
            tag: ["Javascript", "Tailwind", "💢"],
        },
        {
            no: 7,
            title: "Online Polling",
            desc: "Polling application where users can create polls, invite other users to vote, and see results in real-time.",
            tech: "React",
            color: "#61DAFB",
            live_link: "https://onlinepoll.vercel.app/",
            repo_link: "https://github.com/RadyaI/polling",
            tag: ["React", "Javascript", "Firebase"],
        },
        {
            no: 8,
            title: "Uareshort",
            desc: "A simple and efficient URL shortener built with Express, Prisma, and MySQL. Uareshort allows you to shorten long URLs, track analytics, and manage your links.",
            tech: "Typescript",
            color: "#00273f",
            live_link: "https://usrt.vercel.app/",
            repo_link: "https://github.com/RadyaI/uareshort",
            tag: ["Express", "Typescript", "MYsql"],
        },
        {
            no: 9,
            title: "Yourlist api",
            desc: "TodoList API is a simple RESTful API for managing tasks, featuring CRUD operations, user authentication, and task categorization. Built with express.js for efficient task management.",
            tech: "Typescript",
            color: "#00273f",
            live_link: "-",
            repo_link: "https://github.com/RadyaI/yourlist-api",
            tag: ["Express", "Typescript", "MYsql"],
        },
        {
            no: 10,
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
            <div className="card" style={{ borderBottom: `5px solid ${i.color}` }} key={no}>
                <h3>{i.title}</h3>
                <a href={i.live_link} target="_blank" rel="noopener noreferrer">
                    <small>{i.live_link}</small>
                </a><br />
                <a href={i.repo_link} target="_blank" rel="noopener noreferrer">
                    <small>{i.repo_link}</small>
                </a>
                <p className="desc">{i.desc}</p>
                <div className="tech">
                    <div className="color" style={{ backgroundColor: i.color }}></div>
                    <p>{i.tech}</p>
                </div>
                <div className="tags">
                    {i.tag.map((t, idx) => (
                        <span className="tag" key={idx}>{t}</span>
                    ))}
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

.card {
    background-color: #090909;
    margin: 0 auto;
    width: 90%;
    height: auto;
    padding: 20px 20px;
    color: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.6);
}

.card .desc {
    margin-top: 10px;
    line-height: 1.5;
    font-size: 0.95rem;
    color: #ddd;
}

.card .tech {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 10px;
}

.card .tech .color {
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

/* Tambahan buat tag */
.card .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
}

.card .tag {
    background-color: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    color: #fff;
    transition: background 0.2s ease, transform 0.2s ease;
}

.card .tag:hover {
    background-color: rgba(255,255,255,0.2);
    transform: scale(1.05);
}

`