import React from 'react'
import "./Home.css"
import clock from "./clock.svg"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='Home'>
            <div className="video">
                {/* <video className='video-main' src="https://40parables-assets.s3.amazonaws.com/peter_g_are_you_dissillusioned.mp4" typeof='video/mp4'/> */}
                <img className='thumbnail' src="https://pg2.bleat.church/static/media/video-thumbnail.13eef1ac7a1363fbf538.png" alt="Thumbnail" />
            </div>
            <div className="info">
                <h1>Disillusioned,
                    <br />
                    Cynical, or Hopfull?
                </h1>
                <h2>
                    Disillusionment in ministry is inevitable, but its outcome is not. Where are you on the journey from idealism to enduring hope?
                </h2>
                <div className="completIn">
                    <Link to="/Question" className='Questionbtn'>GET STARTED</Link>
                    <div className="time3">
                    <img src={clock} alt="" width={20} />
                    <p>3 Min</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
