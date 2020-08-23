import React from 'react'

export default function About() {
    return(
        <div className="about">
            <h1 className="aboutTitle mb-5">About The Dev Team</h1>
            <div className="aboutPage">
                <div className="member">
                    <h3>Josh Danao</h3>
                    <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U011SC6GRMK-b7744c409e1e-512" />
                    <h5>Frontend Development</h5>
                </div>
                <div className="member">
                    <h3>Minh Nguyen</h3>
                    <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U013SS45XPW-6b458202f6f4-512" />
                    <h5>Backend Development</h5>
                </div>
                <div className="member">
                    <h3>Nick Hvattum</h3>
                    <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U0141JELV4Y-710a221b9c63-512" />
                    <h5>Frontend Development</h5>
                </div>
                <div className="member">
                    <h3>Zack Barovsky</h3>
                    <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-UV0CS3TQF-6394ecdb9322-512" />
                    <h5>Project Manager, Git Master, Backend Developement</h5>
                </div>
                <div className="member">
                    <h3>Salman Malik</h3>
                    <img className="aboutImg" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22228641_10213074701375363_901385773467128542_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=iUeA3vXuTCEAX9zqdjc&_nc_ht=scontent-sea1-1.xx&oh=370a8d3282a216e050594e123e8f1bb8&oe=5F662CE9" />
                    <h5>The Secret Weapon</h5>
                </div>
            </div>
        </div>

    )
}