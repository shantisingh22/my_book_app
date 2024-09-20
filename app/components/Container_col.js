import "./CreatorsSectionComponent.css";

const Container_col = ({ data }) => {
  return (
    <div className="creatorscol">
        <div className="creator-card">
            <img src={data.image} alt="creator" />
            <div className="textcreater">
                <div className="box">
                    <p>{data.name1}</p>
                    <div className="ghj">{data.name2}</div>
                </div>
                <div className="box">
                    <p>{data.followers1}</p>
                    <div className="ghj">{data.followers2}</div>
                </div>
            </div>
            <hr></hr>
            <div className="AppDiv">
                <div className="AppDiv1">
                    <img src={data.image1} alt="instagram"className="AppDiv11"/>
                </div>
                <div className="AppDiv1">
                    <img src={data.image2} alt="you tupe" className="AppDiv11"/>
                </div>
                <div className="AppDiv1">
                    <img src={data.image3} alt="facebook" className="AppDiv11"/>
                </div>
                <button>Compare</button>
            </div>
        </div>
    </div>
  );
};
export default Container_col;



