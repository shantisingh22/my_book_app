
import "./Influencer.css";
const Influencerone = () => {
  return (
    <div className="influencer-container">
      <div className="followers-box">
          <div className="follower1">New Followers</div>
          <div className="follower2">1,34,002</div>
      </div>
      <div class="profile-container">
        <img src="img1.jpg" alt="Profile 1" class="profile"/>
        <img src="hrithik-roshan.png" alt="Profile 2" class="profile"/>
        <img src="images.jpeg" alt="Profile 3" class="profile"/>
        <img src="aarti-chabria.png" alt="Profile 4" class="profile"/>
        <img src="Kushaimage.jpg" alt="Profile 5" class="profile"/>
      </div>

      <div className="image-container">
        <div className="">
          <img src="Kushaimage.jpg" alt="influencer" className="influencer-image"/>
        </div>
        <div class="earn-text-container">
        <span>EARN</span>
        <span>EARN</span>
        <span>EARN</span>
        <span class="highlighted">EARN</span>
        <span>EARN</span>
      </div>
      <div class="earn-text-container1">
        <span>ENGA</span>
        <span>ENGA</span>
        <span>ENGA</span>
        <span class="highlighted">ENGA</span>
        <span>ENGA</span>
      </div>
      
        <div className="overlay-text">
          <span className="engage-text">ENGAGE</span>
          <span className="grow-text">GROW</span>
        </div>
      </div>
    
      <div className="growth-box">
        <div className="font">+48%</div>
        <img src="Image123.png" alt="growth-chart"/>
      </div>
    </div>
  );
};

export default Influencerone;
