const InputUsername = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, setData } = props;
  return (
    <>
      <input
        className="input-box-default"
        name="username"
        placeholder="Username"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      ></input>
    </>
  );
};
export default InputUsername;
