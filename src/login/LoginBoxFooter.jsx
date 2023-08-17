import { Link } from "react-router-dom";

const LoginBoxFooter = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            Don&apos;t have an account? <Link to="/register">Register Now</Link>
          </li>
          <li>
            Don&apos;t remember your password? <Link to="/reset-password">Reset Password</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginBoxFooter;
