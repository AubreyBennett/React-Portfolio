import React from 'react';


function Project({ img, title, description, githublink, applink }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={img} className="card-img-top" alt="Responsive" />
                            <div className="card-b">
                                <h5 className="card-title" style={{ textAlign: "center" }}>{title}</h5>
                                <p className="card-text" style={{ textAlign: "center" }}>{description}
                                </p>
                                <a href={githublink} className="card-link">Github link</a>
                                <a href={applink}
                                    className="card-link">Application link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project