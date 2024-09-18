import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase.js";
import apiClient from "../../config/axiosConfig.js";
import { toast } from "react-toastify";

export const GoogleSignUpApi = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const result = await signInWithPopup(auth, provider);
    const name = result.user.displayName;
    const email = result.user.email;
    console.log(name + " " + email);
    const res = await apiClient.post(
      "/api/auth/googleSignup",
      {
        name,
        email,
      }
    );

    const data = res.data;
    if (res.status === 200) {
      console.log("User exists:", data.message);
      console.log("JWT Token:", data.token);
      localStorage.setItem("Ranking-token", data.token);
    toast.success("Logged in successfully!");
      return true;
    } else {
      toast.error(data.message || "User does not exist or login failed");
      return false;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong during Google login";
    toast.error(errorMessage);
    console.log("Error message:", errorMessage);
    return false;
  }
};
