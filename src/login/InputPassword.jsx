const InputPassword = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, setData } = props;
  return (
    <>
      <input
        className="input-box-default"
        name="password"
        placeholder="Password"
        type="password"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        required
      ></input>
    </>
  );
};

export default InputPassword;
