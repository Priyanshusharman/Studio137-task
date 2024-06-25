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
                <img className='playbtn' src="data:image/png;base64,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"/>
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
