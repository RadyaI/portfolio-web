import styled from "styled-components"
import "animate.css"

export default function Contact() {
    return (
        <>
            <Content>
                <Head><p className="animate__animated animate__bounceInLeft">Contact</p> <p>Contact.</p> </Head>
                <div className="basic-info">
                    <div className="card">
                        <div className="title">TEMPORARY ADDRESS</div>
                        <div className="info">
                            <p>Malang, Indonesia</p>
                            <p>65139</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">EMAIL ADDRESS</div>
                        <div className="info">
                            <p>radyaiftikhar@gmail.com</p>
                            <p>radyaproject@gmail.com</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">MOBILE PHONE</div>
                        <div className="info">
                            <p>Call: +62 877-1621-2000</p>
                            <p>WhatsApp: +62 877-1621-2000</p>
                        </div>
                    </div>
                </div>
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
    padding-bottom: 10px;

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
    overflow: auto;
    overflow-x: hidden;

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

    .basic-info{
        width: 90%;
        height: auto;
        margin: 0 auto;
        padding: 10px 10px;
    }

    .basic-info .card{
        color: white;
        margin-top: 30px;
    }

    .basic-info .card .title{
        font-size: 25px;
    }

    .basic-info .card .info{
        margin-top: 10px;
    }

    .basic-info .card .info p{
        font-size: 13px;
    }
`