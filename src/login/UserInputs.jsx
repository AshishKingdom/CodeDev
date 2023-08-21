/* eslint-disable react/prop-types */
const UserInputs = ({ userData, setUserData }) => {
  return (
    <>
      <input
        name="username"
        placeholder="Username"
        className="input-box-default"
        required
        onChange={(e) =>
          setUserData({ ...userData, [e.target.name]: e.target.value })
        }
      />
      <input
        name="password"
        placeholder="Password"
        className="input-box-default"
        type="password"
        required
        onChange={(e) =>
          setUserData({ ...userData, [e.target.name]: e.target.value })
        }
      />
    </>
  );
};

export default UserInputs;
