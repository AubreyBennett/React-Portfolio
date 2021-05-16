import React from 'react';

function Portfolio() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card" style={{ width: "100%" }}>
                        <img src="https://pbs.twimg.com/media/D4DDhd5XsAUJJYm.jpg" className="card-img-top" alt="Responsive" />
                        <div className="card-b">
                            <h5 className="card-title" style= {{textAlign: "center" }}>Pass Me The Aux</h5>
                            <p className="card-text" style= {{textAlign: "center" }}>Music App that allows you to lookup an artist and a song by
                            that artist and then provides you with the lyrics to that song and similar songs produced by the artist.
                            </p>
                            <a href="https://github.com/jpecheverryp/pass-me-the-aux" className="card-link">Github link</a>
                            <a href="https://jpecheverryp.github.io/pass-me-the-aux/" className="card-link">Application link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card" style={{ width: "100%" }}>
                        <img src="https://pbs.twimg.com/media/D4DDhd5XsAUJJYm.jpg" className="card-img-top" alt="Responsive" />
                        <div className="card-b">
                            <h5 className="card-title" style= {{textAlign: "center" }}>Workday Scheduler</h5>
                            <p className="card-text" style= {{textAlign: "center" }}>Daily planner that will help you manage your time
                            effectively.</p>
                            <a href="https://github.com/AubreyBennett/Workday-scheduler" className="card-link">Github link</a>
                            <a href="https://aubreybennett.github.io/Workday-scheduler/" className="card-link">Application link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card" style={{ width: "100%" }}>
                        <img src="https://pbs.twimg.com/media/D4DDhd5XsAUJJYm.jpg" className="card-img-top" alt="Responsive" />
                        <div className="card-b">
                            <h5 className="card-title" style= {{textAlign: "center" }}>Password Generator</h5>
                            <p className="card-text" style= {{textAlign: "center" }}>Generates random passwords with the characters you
                            desire.</p>
                            <a href="https://github.com/AubreyBennett/Password-Generator" className="card-link" >Github link</a>
                            <a href="https://aubreybennett.github.io/Password-Generator/" className="card-link">Application link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;