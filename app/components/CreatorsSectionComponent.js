import "./CreatorsSectionComponent.css"
const CreatorsSection = ({name,image,follower,Creators,ViewAll}) => {
    return (
        <div className="createrbox">
        <div className="creators-section">
            <div className="headingbox">
                <h2>{Creators}</h2>
                <div className="viewbox">{ViewAll}</div>
            </div>
            <div className="heading2">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
            <div className="creators">
                <div className="creator-card">
                    <img src={image} alt="Creator 1"/>
                    <div className="textcreater">
                        <div className="box">
                            <p>{name}</p>
                            <div className="ghj">Tanmay Bhatt</div>
                        </div>
                        <div className="box">
                            <p>1.9M</p>
                            <div className="ghj">{follower}</div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="AppDiv">
                        <div className="AppDiv1">
                            <img src="instagram icon .png" alt="instagram"/>
                        </div>
                        <div className="AppDiv2">
                            <img src="youtube_icon.png" alt="you tupe"/>
                        </div>
                        <div className="AppDiv3">
                        <img src="facebook.png" alt="facebook"/>
                        </div>
                        <button>Compare</button>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    );
}
export default CreatorsSection;





// import "./CreatorsSectionComponent.css"
// const CreatorsSection = () => {
//     return (
//         <div className="createrbox">
//         <div className="creators-section">
//             <div className="headingbox">
//                 <h2>The OG Creators</h2>
//                 <div className="viewbox">View All</div>
//             </div>
//             <div className="heading">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
//             <div className="creators">
//                 <div className="creator-card">
//                     <img src="https://media.licdn.com/dms/image/v2/C5603AQHZeTq-uFbeiA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517425755167?e=2147483647&v=beta&t=uQVNmow8VUM32aI41tTuMf8RBnW31acyxCXfw9ipp1c" alt="Creator 1"/>
//                     <div className="textcreater">
//                         <div className="box">
//                             <p>Tanmay Bhatt</p>
//                             <div className="ghj">Tanmay Bhatt</div>
//                         </div>
//                         <div className="box">
//                             <p>1.9M</p>
//                             <div className="ghj">Followers</div>
//                         </div>
//                     </div>
//                     <hr></hr>
//                     <div className="AppDiv">
//                         <div className="AppDiv1">
//                             <img src="instagram icon .png" alt="instagram"/>
//                         </div>
//                         <div className="AppDiv2">
//                             <img src="youtube_icon.png" alt="you tupe"/>
//                         </div>
//                         <div className="AppDiv3">
//                         <img src="facebook.png" alt="facebook"/>
//                         </div>
//                         <button>Compare</button>
//                     </div>
                   
//                 </div>

//                 <div className="creator-card">
//                     <img src="https://media.assettype.com/indulgexpress%2Fimport%2F2022%2F7%2F24%2Foriginal%2FKushaKapila_1.jpg?w=768&auto=format%2Ccompress&fit=max" alt="Creator 2"/>
//                     <div className="textcreater">
//                         <div className="box">
//                             <p>Kusha Kapila</p>
//                             <div className="ghj">Kusha Kapila</div>
//                         </div>
//                         <div className="box">
//                             <p>3.7M</p>
//                             <div className="ghj">Followers</div>
//                         </div>
//                     </div>
//                     <hr></hr>
//                     <div className="AppDiv">
//                         <div className="AppDiv1">
//                             <img src="instagram icon .png" alt="instagram"/>
//                         </div>
//                         <div className="AppDiv2">
//                             <img src="youtube_icon.png" alt="you tupe"/>
//                         </div>
//                         <div className="AppDiv3">
//                         <img src="facebook.png" alt="facebook"/>
//                         </div>
//                         <button>Compare</button>
//                     </div>
//                 </div>

//                 <div className="creator-card">
//                     <img src="https://nettv4u.com/fileman/Uploads/top-10-young-comedians-of-india-who-are-popular-on-internet/rohan.png" alt="Creator 3" />
//                     <div className="textcreater">
//                         <div className="box">
//                             <p>Rohan Joshi</p>
//                             <div className="ghj">Rohan Joshi</div>
//                         </div>
//                         <div className="box">
//                             <p>597K</p>
//                             <div className="ghj">Followers</div>
//                         </div>
//                     </div>
//                     <hr></hr>
//                     <div className="AppDiv">
//                         <div className="AppDiv1">
//                             <img src="instagram icon .png" alt="instagram"/>
//                         </div>
//                         <div className="AppDiv2">
//                             <img src="youtube_icon.png" alt="you tupe"/>
//                         </div>
//                         <div className="AppDiv3">
//                         <img src="facebook.png" alt="facebook"/>
//                         </div>
//                         <button>Compare</button>
//                     </div>
//                 </div>


//                 <div className="creator-card">
//                     <img src="https://thevocalnews.com/static/c1e/client/108938/uploaded/e87ddda9f690e16c1f40d43abc14da9c.jpg?width=730&height=420&resizemode=4" alt="Creator 3" />
//                     <div className="textcreater">
//                         <div className="box">
//                             <p>Bhuvan Bam</p>
//                             <div className="ghj">Bhuvan Bam</div>
//                         </div>
//                         <div className="box">
//                             <p>19.9M</p>
//                             <div className="ghj">Followers</div>
//                         </div>
//                     </div>
//                     <hr></hr>
//                     <div className="AppDiv">
//                         <div className="AppDiv1">
//                             <img src="instagram icon .png" alt="instagram"/>
//                         </div>
//                         <div className="AppDiv2">
//                             <img src="youtube_icon.png" alt="you tupe"/>
//                         </div>
//                         <div className="AppDiv3">
//                         <img src="facebook.png" alt="facebook"/>
//                         </div>
//                         <button>Compare</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// }
// export default CreatorsSection;
