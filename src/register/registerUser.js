import regFormValidator from "./regFormValidator";
const registerUser = async (userData, statusFn) => {
  const validation_error = regFormValidator(userData);
  if (validation_error.length != 0) {
    statusFn({ isError: true, message: validation_error });
    return false;
  }
  try {
    const res = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.ok) {
      // statusFn({ isError: false, message: data?.content });
      statusFn({
        isError: false,
        message:
          "User registered successfully. You will be redirected to login page in 5 seconds.",
      });
      return true;
    } else {
      statusFn({ isError: true, message: data?.detail });
      return false;
    }
  } catch (err) {
    statusFn({
      isError: true,
      message: "An unexpted error has occured. Please try again later.",
    });
    return false;
  }
};

export default registerUser;
