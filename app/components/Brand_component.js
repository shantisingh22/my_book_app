import "./Brand_component.css";
const Brandcomponent = () => {
    return (
        <div className="brandcontainer">
            <section className="brands">
                <h2>Associated Brands</h2>
                <div className="brand">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                <div className="brands-logos">
                    <img src="Spotify-Logo.svg" alt="Spotify" className="Spotify-Logo"/>
                    <img src="google-76659_.png" alt="Google" className="image-Logobox2" />
                    <div className="stripebox">stripe</div>
                    <img src="youtube-logo.png" alt="YouTube"  className="image-Logobox1"/>
                    <img src="microsoft-logo-4.png" alt="Microsoft"  className="image-Logobox3" />
                </div>
                <div className="brands-logos1">
                    <img src="medium-logo.png" alt="Medium"className="image-Logobox4" />
                    <img src="zoom-video-1.png" alt="Zoom"  className="image-Logobox"/>
                    <img src="Uber-Logo.png" alt="Uber" className="image-Logobox" />
                    <img src="Grab-Logo.png" alt="Grab" className="image-Logobox"/>
                </div>
            </section>
        </div>
    );
};

export default Brandcomponent;