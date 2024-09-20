import "./components/CreatorsSectionComponent.css";
import "./components/Header";
import Header from "./components/Header";
import Influencer from "./components/InfluencerComponent";
import Container_row from "./components/Container_row";
import OneContainer_row from "./components/Onecontainer_row";
import TwoContainer_row from "./components/Twocontainer_row"
import { dummyData } from "./components/dumy_data";
import Categories from "./components/Categories";
import Design_creater from "./components/Design_creater";
import Join_Card from "./components/Join_card";
import Spotlight_Item from "./components/SpotlightItem";
import Live_Campaigns from "./components/LiveCampaigns"
import Brandcomponent from "./components/Brand_component";
import WorkSectioncomponent from "./components/Work_Sectioncomponent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="maincomponentbox ">
      <Header/>
      <Influencer/>
      <Container_row data={dummyData[0]} data1={dummyData[1]} data2={dummyData[2]} data3={dummyData[3]}/>
      <Categories/>
      <TwoContainer_row data={dummyData[4]} data1={dummyData[5]} data2={dummyData[6]} data3={dummyData[7]}/>
      <Design_creater/>
      <OneContainer_row data={dummyData[8]} data1={dummyData[9]} data2={dummyData[10]} data3={dummyData[11]}/>
      <Join_Card/>
      <Spotlight_Item/>
      <Live_Campaigns/>
      <TwoContainer_row data={dummyData[12]} data1={dummyData[13]} data2={dummyData[14]} data3={dummyData[15]}/>
      <Brandcomponent/>
      <WorkSectioncomponent/>
      <Footer/>
    </div>
  );
};
export default App;












