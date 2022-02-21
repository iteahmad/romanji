import { useSelector } from "react-redux";
import { converterSelector } from "../store/covnerter/converter.slice";
import "./TargetOutput.css";

const TargetOutput = () => {
  const state = useSelector(converterSelector);

  const isLoading = state.isLoading;
  const showError = state.hasError;
  let content = "";
  let showPlaceHolder = true;
  let placeHolder = "result";

  if (isLoading) {
    placeHolder = "Loading ..";
  } else {
    if (showError) {
      placeHolder =
        state.errorMessage || "Did you really wrote a valid number ?";
    } else {
      if (state.mode === "latin2roman" && state.romanNumber !== "") {
        content = state.romanNumber;
        showPlaceHolder = false;
      }

      if (state.mode === "roman2latin" && state.latinNumber !== 0) {
        content = state.latinNumber;
        showPlaceHolder = false;
      }
    }
  }

  return (
    <div className="output-box ">
      {showPlaceHolder && (
        <span className={"output-placeHolder " + (showError ? " error" : " ")}>
          {placeHolder}
        </span>
      )}
      {!showPlaceHolder && <span className="result">{content}</span>}
    </div>
  );
};

export default TargetOutput;
