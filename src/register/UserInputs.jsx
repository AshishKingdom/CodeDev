/* eslint-disable react/prop-types */
const UserInputs = ({ userData, setUserData }) => {
  return (
    <>
      <div style={{ width: "100%", display: "flex", boxSizing: "border-box" }}>
        <input
          name="first_name"
          placeholder="First Name"
          className="input-box-default"
          style={{ width: "50%" }}
          required
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />
        <input
          name="last_name"
          placeholder="Last Name"
          className="input-box-default"
          style={{ width: "50%" }}
          required
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />
      </div>

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
        name="email"
        placeholder="Email Address"
        className="input-box-default"
        type="email"
        required
        onChange={(e) =>
          setUserData({ ...userData, [e.target.name]: e.target.value })
        }
      />
      <div style={{ width: "100%", display: "flex" }}>
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
        <input
          name="cnf_password"
          placeholder="Confirm Password"
          className="input-box-default"
          type="password"
          required
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />
      </div>
      <input
        name="college"
        placeholder="Your College Name"
        className="input-box-default"
        required
        onChange={(e) =>
          setUserData({ ...userData, [e.target.name]: e.target.value })
        }
      />
    </>
  );
};

export default UserInputs;
