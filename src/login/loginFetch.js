const tryLogin = async (userData, setErrFn) => {
  const apiURL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

  const formData = new URLSearchParams();

  const username = userData?.username ?? "";
  const password = userData?.password ?? "";

  formData.append("username", username);
  formData.append("password", password);

  localStorage.removeItem("token");
  localStorage.removeItem("usr");
  try {
    const res = await fetch(apiURL + "/login", {
      method: "POST",
      body: formData,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("user", username);
      localStorage.setItem("token", data?.access_token);
      return true;
    } else {
      setErrFn(data?.detail);
      return false;
    }
  } catch (err) {
    setErrFn("An unexpected error has occured. Please try again later.");
    return false;
  }
};

export default tryLogin;
