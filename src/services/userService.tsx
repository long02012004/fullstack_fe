import axios from "axios";

const registerNewUser = (email, phone, username, password) => {
  return axios.post("http://127.0.0.1:8080/api/v1/register", {
    email,
    phone,
    username,
    password,
  });
};
export { registerNewUser };
