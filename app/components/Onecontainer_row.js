import "./CreatorsSectionComponent.css";
import Container_col from "./Container_col";
const oneContainer_row = ({ data, data1, data2, data3 }) => {
  return (
    <div className="createrboxone">
        <div className="creators-sectionrow1">
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
export default oneContainer_row;

