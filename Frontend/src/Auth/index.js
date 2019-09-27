import jwt from "jsonwebtoken";

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
export const getProfile = () => {               
  const token = localStorage.getItem("token");//decoding
  if (token) {
    const decoded = jwt.decode(token);
    return decoded;
  }
};
/* Decoding the token and return it
decoding is happening inside the front end so we have to install the jwt and import it.
import the function containing decoded data which ever component we need it.here .we tried to
display name in the profile bar from the user.
export getprofile() =>index.js (in messaging)
*/