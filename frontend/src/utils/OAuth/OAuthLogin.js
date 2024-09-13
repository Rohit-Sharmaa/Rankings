import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase.js";
import apiClient from "../../config/axiosConfig.js";

export const GoogleLoginkApi = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const result = await signInWithPopup(auth, provider);
    const name = result.user.displayName;
    const email = result.user.email;
    console.log(name + " " + email);

    const res = await apiClient.post("/api/auth/googleLogin", {
      name,
      email,
    });

    const data = res.data;
    console.log(data);

    if (res.status === 200) {
      localStorage.setItem("Ranking-token", data.token);
      alert("Logged in successfully!");
      return true;
    } else {
      alert(data.message || "User does not exist or login failed");
      return false;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong during Google login";
    alert(errorMessage);
    console.log("Error message:", errorMessage);
    return false;
  }
};