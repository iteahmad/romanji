import "./ConvertionOptions.css";
import Option from "./Option";
import { setMode, converterSelector } from "../store/covnerter/converter.slice";
import { useDispatch, useSelector } from "react-redux";

const ConvertionOptions = () => {
  const dispatch = useDispatch();
  const state = useSelector(converterSelector);

  const onOptionChangedHandler = (value) => {
    dispatch(setMode(value));
  };

  return (
    <div className="control">
      <Option
        id="2roman"
        name="control"
        value="latin2roman"
        onChange={onOptionChangedHandler}
        selectedValue={state.mode}
      >
        Latin to Roman
      </Option>

      <Option
        id="2latin"
        name="control"
        value="roman2latin"
        onChange={onOptionChangedHandler}
        selectedValue={state.mode}
      >
        Roman to Latin
      </Option>
    </div>
  );
};

export default ConvertionOptions;
