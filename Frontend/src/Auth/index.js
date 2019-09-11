export const login = () => {
  localStorage.setItem("loggedin", "yes");
  window.location.reload();
};
export const loggedIn = () => {
  const loggedin = localStorage.getItem("loggedin");
  if (loggedin === "yes") {
    return true;
  } else {
    return false;
  }
};

export const loggedOut = () => {
  localStorage.clear();
  window.location.reload();
};
