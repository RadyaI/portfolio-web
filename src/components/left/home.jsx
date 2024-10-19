import styled from "styled-components"

export default function Home() {
    return (
        <>
            <Content>
                <div className="center">
                    <div className="name">
                        <div className="part1">I AM</div>
                        <div className="part2">RADYA IF</div>
                        <div className="part3">A FULLSTACK DEVELOPER</div>
                    </div>
                    <div className="media">
                        <div className="list"><a href="https://instagram.com/radyaif" target="_blank"><i class="fa-brands fa-instagram"></i></a></div>
                        <div className="list"><a href="https://linkedin.com/in/muhammad-radya-iftikhar" target="_blank"><i class="fa-brands fa-linkedin"></i></a></div>
                        <div className="list"><a href="https://github.com/RadyaI" target="_blank"><i class="fa-brands fa-github"></i></a></div>
                    </div>
                </div>
                <Element></Element>
            </Content>
        </>
    )
}

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
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: white;
    }

`

const Element = styled.div`
    position: absolute;
    bottom: 30px;
    right: 70px;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    filter: blur(10px);
    background-color: white;
`