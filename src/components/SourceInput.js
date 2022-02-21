import { useDispatch, useSelector } from "react-redux";
import {
  validateLatinNumeral,
  validateRomanNumeral,
} from "../helpers/inputValidation";
import {
  converterSelector,
  convertToLatin,
  convertToRoman,
} from "../store/covnerter/converter.slice";
import "./SourceInput.css";

const SourceInput = (props) => {
  const state = useSelector(converterSelector);
  const dispatch = useDispatch();

  const onTextChangedHandler = (event) => {
    const value = event.target.value;
    if (state.mode === "latin2roman") {
      if (validateLatinNumeral(value)) {
        dispatch(convertToRoman.action(value));
      } else {
        dispatch(convertToRoman.rejected("Invalid Number"));
      }
    } else {
      if (validateRomanNumeral(value)) {
        dispatch(convertToLatin.action(value));
      } else {
        dispatch(convertToLatin.rejected("Invalid Roman"));
      }
    }
  };

  let placeholder = "Write any latin number";

  if (state.mode === "roman2latin") {
    placeholder = "Write any roman number";
  }

  return (
    <div className="source-box">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onTextChangedHandler}
      />
    </div>
  );
};

export default SourceInput;
