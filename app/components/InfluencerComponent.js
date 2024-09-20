import "./InfluencerComponent.css";
import Influencerone from "./Influnecer.js";
const Influencer =()=>{
    return(
        <>
            <div className="InfluencerBox">
                <div className="InfluencerCol">
                    <div className="imageBox">
                        <img src="waving-hand.svg" alt="Waving hand"/>
                    </div>      
                    <p className="paragraph">Simplifying Influencer Marketing For You!</p>
                    <p className="paragraph1">Explore creators across YouTube, Instagram &
                    Facebook to curate unique content for your brand</p>
                    <div className="dropdownBox">
                        <select className="appBox">
                            <option value="volvo">Facebook</option>
                            <option value="saab">Instagram</option>
                            <option value="mercedes">YouTube</option>
                            <option value="audi">Snapchat</option>
                        </select>
                        <select className="appBox">
                            <option value="volvo">Select Category</option>
                            <option value="saab">Foodies</option>
                            <option value="mercedes">Techies</option>
                            <option value="audi">Product</option>
                        </select>
                        <div className="botton">Search</div>
                    </div>
                    <div className="Text">Trusted by</div>
                    <div className="textBox">
                    <div className="textBox1">CHANEL</div>
                    <div className="textBox2">LOUIS VUITTON</div>
                    <div className="textBox3">PARDA</div>
                    <div className="textBox4">Calvin Klein</div>
                    <div className="textBox5">DENIM</div>
                    </div>
                </div>
                <div className="InfluencerCol1">
                    <Influencerone/>
                </div> 
            </div>
        </>
    )
}
export default Influencer;