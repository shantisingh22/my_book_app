import "./CreatorsSectionComponent.css";
import Container_col from "./Container_col";
const Container_row = ({ data, data1, data2, data3 }) => {
  return (
    <div className="createrbox">
        <div className="creators-sectionrow">
            <div className="headingbox">
                <h2>{data.title1}</h2>
                <div className="viewbox">{data.ViewAll}</div>
            </div>
            <div className="heading">{data.title2}</div>
            <div className="creatorscol">
                <Container_col data={data} />
                <Container_col data={data1} />
                <Container_col data={data2} />
                <Container_col data={data3} />
            </div>
        </div>
    </div>
  );
};
export default Container_row;

