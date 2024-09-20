import "./Design_creater.css";
const Design_creater = () => {
    return (
        <div className="containerDiv">
            <div className="left-section">
                <h2>Meet</h2>
                <h1>The Design Creator</h1>
                <a href="#" className="read-more">Read more ↗</a>
                <div className="arrow">→</div>
            </div>

            <div className="right-section">
                <h1>Aman K.</h1>
                <div className="imagecontnt">
                    <img src="one.jpeg" alt="Profile11" className="imagediv"/>
                    <h3>Design Creator</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini.</p>
                <div className="profile-pictures">
                    <img src="two.avif" alt="Profile 1" className="profilebox" />
                    <img src="123.avif" alt="Profile 2" className="profilebox" />
                    <img src="threeimg.png" alt="Profile 3" className="profilebox" />
                    <img src="fourimg.png" alt="Profile 4" className="profilebox" />
                    <img src="456.avif" alt="Profile 5" className="profilebox" />
                    <img src="789.jpg" alt="Profile 6" className="profilebox" />
                </div>
            </div>
        </div>
    );
}
export default Design_creater;
