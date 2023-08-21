const regFormValidator = (form) => {
  const patt1 = /\w{1,20}/;
  const patt2 = /[A-Za-z]{1,20}/;
  const patt3 = /\w+@\w+\.\w+/;
  const patt4 = /[a-zA-Z]+/;
  if (!(form?.username ?? "").match(patt1)) {
    return "Username should be between 1-20 characters long having alphanumeric character. Only special symbol allowed is underscore.";
  }
  if (
    !(form?.first_name ?? "").match(patt2) ||
    !(form?.last_name ?? "").match(patt2)
  ) {
    return "First name and last name can only contains alphabets. Maximum length of each is 20.";
  }
  if (!(form?.email ?? "").match(patt3)) {
    return "Please enter a valid email address";
  }
  const pass = form?.password ?? "";
  const cnf_pass = form?.cnf_password ?? "";
  if (pass.length < 8 || pass.length > 20) {
    return "Password should be between 8-20 characters long";
  }
  if (pass != cnf_pass) {
    return "Passwords do not match";
  }
  if (!(form?.college ?? "").match(patt4)) {
    return "College name should only have alphabets.";
  }
  return "";
};

export default regFormValidator;
