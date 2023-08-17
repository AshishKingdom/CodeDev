const tryLogin = (username, password, errFn ,navigate) => {
  const formData = new URLSearchParams();

  formData.append("username", username);
  formData.append("password", password);

  localStorage.removeItem("token");
  localStorage.removeItem("usr");

  fetch("http://127.0.0.1:8000/login", {
    method: "POST",
    body: formData,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        return res.json().then((data) => {
          localStorage.setItem("token", data?.access_token);
          localStorage.setItem("usr", username);
          errFn("");
          navigate('/');
        });
      } else if (res.status == 400) {
        res.json().then((data) => {
          errFn(data?.detail);
        });
      } else {
        errFn("An unexpected error has occcured. Please try again later.");
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default tryLogin;
