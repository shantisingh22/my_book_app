import "./Footer.css";
const Footer =() =>{
    return(
        <>
            <div className="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>BookMyCollab</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                        <div class="social-icons">
                            <img src="instagram icon .png" alt="Instagram" class="social-icons1"/>
                            <img src="twitter-xxl.png" alt="Twitter" class="social-icons1"/>
                            <img src="icons8-linkedin-30.png" alt="LinkedIn" class="social-icons1"/>
                            <img src="email-12-xxl.png" alt="Twitter" class="social-icons1"/>
                        </div>
                    </div>
                    <div class="footer-section1">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>
                    <div class="footer-section1">
                        <h3>Join us</h3>
                        <ul>
                            <li><a href="#">Join as a brand</a></li>
                            <li><a href="#">Join as a creator</a></li>
                            <li><a href="#">Find creator</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom1">
                        <p>No Upfront Payment </p>
                        <p>Verified Creators </p>
                        <p>Inbuilt Messengers</p> 
                        <p>Secure and Timely Payment</p>
                    </div>
                </div>
                <div className="BookMyCollabheading">
                    <div className="BookMyCollabheading1">© Copyright • All Rights Reserved </div>
                    <div className="BookMyCollabheading1">BookMyCollab 2024</div>
                </div>
            </div>
        </>
    )
}
export default Footer;