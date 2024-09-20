import React from "react";
import "./LiveCampaigns.css";

const Live_Campaigns = () => {
    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Live Campaigns</h2>
            <div className="carousel">
                <main id="carousel">
                    <div className="item">
                        <img src="rain-clouds-png-27.png" alt="img1" />
                    </div>
                    <div className="item">
                        <img src="Monte-Pindo-view.png" alt="img2" />
                    </div>
                    <div className="item">
                        <img src="sliderimage.png" alt="img3" />
                    </div>
                    <div className="item">
                        <img src="flower-49054.jpg" alt="img4" />
                    </div>
                    <div className="item">
                        <img src="Monte-Pindo-view.png" alt="img5" />
                    </div>
                </main>
            </div>
            <div className="radiobox">
                <div className="radiobox1">
                    <div className="curcaldiv">&lt;</div>
                    <input type="radio" className="position" />
                    <input type="radio" className="position" />
                    <input type="radio" className="position" />
                    <input type="radio" className="position" />
                    <input type="radio" className="position" />
                    <div className="curcaldiv1">&gt;</div>
                </div>
            </div>
        </div>
    );
};

export default Live_Campaigns;
