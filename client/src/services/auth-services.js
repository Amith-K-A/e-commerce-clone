import axios from "axios";

const register = (email, password) => {
  return axios.post("/signup", {
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post("/signIn", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

const auth = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default auth;