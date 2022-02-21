import "./Option.css";
const Option = (props) => {
  const onChangeHandler = (event) => {
    props.onChange(event.target.value);
  };
  const checked = props.selectedValue === props.value;
  return (
    <div className={"option " + (checked ? "active" : " ")}>
      <label htmlFor={props.value}>
        {" "}
        <input
          type="radio"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={onChangeHandler}
          checked={checked}
        />
        {props.children}
      </label>
    </div>
  );
};

export default Option;
