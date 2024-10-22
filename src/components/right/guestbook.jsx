import { useEffect, useState } from "react"
import styled from "styled-components"
import Cookies from "js-cookie"

import { auth, db } from "../../config/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { addDoc, collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore"

export default function Guestbook() {

    const [isi, setIsi] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [messageData, setMessageData] = useState([])

    const [alert, setAlert] = useState(false);
    const [terkirim, setTerkirim] = useState(false);
    const [empty, setEmpty] = useState(false);

    async function Login() {
        try {
            const provider = new GoogleAuthProvider()
            const user = await signInWithPopup(auth, provider)

            console.log(user.user.providerData[0])

            Cookies.set("loginData", JSON.stringify(user.user.providerData[0]))
            Cookies.set("isLoggedIn", true)

            setIsLoggedIn(true)

        } catch (error) {
            console.log(error)
        }
    }

    function handleForm(e) {
        try {
            if (e.key === "Enter") {
                setAlert(true);
                setTimeout(() => {
                    setAlert(false)
                }, 1200);
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function sendMsg() {
        try {

            if (isi === "") {
                setEmpty(true)
                setTimeout(() => {
                    setEmpty(false)
                }, 1200);
            } else {
                await addDoc(collection(db, "guestbook"), {
                    time: Timestamp.now().toMillis(),
                    name: JSON.parse(Cookies.get("loginData")).displayName,
                    email: JSON.parse(Cookies.get("loginData")).email,
                    photoURL: JSON.parse(Cookies.get("loginData")).photoURL,
                    msg: isi,
                })

                setTerkirim(true)
                setTimeout(() => {
                    setTerkirim(false)
                }, 1200);
                setIsi("")
            }

        } catch (error) {
            console.log(error)
        }
    }

    async function getMessage() {
        try {
            onSnapshot(query(collection(db, "guestbook"), orderBy('time', 'asc')), (snapshot) => {
                const tempData = []
                snapshot.forEach((data) => {
                    tempData.push({ ...data.data(), id: data.id })
                })
                setMessageData(tempData)
            })

        } catch (error) {
            console.log(error)
        }
    }

    function DisplayMessage() {
        return messageData.map((i, no) =>
            <div className="card">
                <p>{i.name} </p>: <p>{i.msg}</p>
            </div>
        )
    }

    useEffect(() => {
        getMessage()
        setIsLoggedIn(Cookies.get("isLoggedIn") == "true" || false)
    }, [])

    return (
        <>
            <Content>
                <Head>
                    <p className="animate__animated animate__bounceInLeft">Guest Book</p>
                    <p>Guest Book.</p>
                </Head>

                {!isLoggedIn && (<small className="welcome">Welcome! Please <a href="#" onClick={() => Login()}>sign in</a> to leave a message.</small>)}
                {alert && (<Alert><small>Klik submit untuk mengirim</small></Alert>)}
                {terkirim && (<Terkirim><small>Success.</small></Terkirim>)}
                {empty && (<Empty><small>Cannot empty!</small></Empty>)}

                <Form>
                    <div className="info">
                        {!isLoggedIn ? <input type="text" placeholder="Your message..." className="name-info" disabled value={isi} onChange={(e) => setIsi(e.target.value)} /> : <input type="text" placeholder="Your message..." className="name-info" value={isi} onChange={(e) => setIsi(e.target.value)} onKeyUp={(e) => handleForm(e)} />}
                        <button onClick={() => sendMsg()}>SUBMIT</button>
                    </div>
                </Form>

                <Message>
                    <DisplayMessage></DisplayMessage>
                </Message>

            </Content>
        </>
    )
}

const Alert = styled.div`
    border-left: 5px solid orange;
    color: white;
    width: 90%;
    margin-left: 10px;
    background-color: #cd6343ba;
    padding: 10px 10px;
    font-size: 18px;
`

const Terkirim = styled.div`
    border-left: 5px solid #185f18a1;
    color: white;
    background-color: #5ad35a8b;
    width: 90%;
    margin-left: 10px;
    padding: 10px 10px;
    font-size: 18px;
`

const Empty = styled.div`
    border-left: 5px solid yellow;
    color: white;
    width: 90%;
    margin-left: 10px;
    background-color: #d3bf5a89;
    padding: 10px 10px;
    font-size: 18px;
`

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
    position: relative;
    overflow: auto;
    overflow-x: hidden;

    
    a{
        text-decoration: underline;
        color: lightblue;
    }
    
    .welcome{
        margin-left: 10px;
        color: white;
    }
`

const Form = styled.div`
width: 90%;
height: 70px;
margin-left: 10px;

small{
    color: white;
}

a{
    text-decoration: underline;
    color: lightblue;
}

.info{
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    gap: 20px;
}

.info .name-info{
    background-color: #212121;
    color: white;
    border: none;
    font-size: 15px;
    outline: none;
    padding: 5px 15px;
    width: 100%;
    height: 30px;
}

.info .name-info:focus{
    border: 1px solid white;
}

.info button{
    background-color: #212121;
    color: white;
    border: none;
    padding: 10px 20px;
}

.info button:hover{
    border: 1px solid white;
}
`

const Message = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 10px;

    .card{
        background-color: #212121;
        width: 100%;
        height: 100%;
        padding: 10px 10px;
        display: flex;
    }

    .card p:nth-child(1){
        width: 160px;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
    }

    .card p:nth-child(2){
        width: 60%;
        overflow-x: hidden;
        text-overflow: ellipsis;
        margin-left: 5px;
    }
`