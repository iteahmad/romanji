import "./Converter.css";
import ConvertionOptions from "./ConvertionOptions";
import SourceInput from "./SourceInput";
import TargetOutput from "./TargetOutput";

const Converter = () => {
  return (
    <div className="col-container">
      <ConvertionOptions />
      <SourceInput />
      <TargetOutput />
    </div>
  );
};

export default Converter;
