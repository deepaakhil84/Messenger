export const login = token => {
  localStorage.setItem("token", token);
  window.location.reload();
};

export const loggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const loggedOut = () => {
  localStorage.clear();
  window.location.reload();
};
