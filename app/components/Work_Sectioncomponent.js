import "./Work_Sectioncomponent.css";
const WorkSectioncomponent =()=>{
    return(
        <div className="WorkSectioncomponent">
             <section class="how-it-works">
                <div className="headingh2">How it works</div>
                <div className="iconsBox">
                    <div class="icon1">
                        <img src="search.png" alt="Search" className="imgicon"/>
                    </div>
                    <div className="iconsbox">
                        <div className="iconsBox2"></div>
                        <div className="iconsBox2234"></div>
                        <div className="iconsBox1"></div>
                    </div>
                    <div class="icon">
                        <img src="hand.png" alt="Share" className="imgicon"/>
                    </div>
                    <div className="iconsbox">
                        <div className="iconsBox1"></div>
                        <div className="iconsBox2234"></div>
                        <div className="iconsBox12"></div>
                    </div>
                    <div class="icon">
                        <img src="cube.png" alt="Pay" className="imgicon"/>
                    </div>
                </div>
                <div class="steps">
                    <div class="step">
                        <h3>Search</h3>
                        <p>Search through thousands of creators for free and find the one best suited for the campaign.</p>
                    </div>
                    <div class="step">
                        <h3>Share & Review</h3>
                        <p>Search through thousands of creators for free and find the one best suited for the campaign.</p>
                    </div>
                    <div class="step">
                        <h3>Pay Securely</h3>
                        <p>Search through thousands of creators for free and find the one best suited for the campaign.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default WorkSectioncomponent;