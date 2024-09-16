import apiClient from "../config/axiosConfig";

export const handleLoginApi = async (
  email,
  password,
  dispatch,
  signInStart,
  signInFailure,
  signInSuccess,
  showLoading,
  hideLoading
) => {
  try {
    dispatch(signInStart());
    dispatch(showLoading());
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    const result = await apiClient.post("/api/auth/login", {
      email,
      password,
    });

    const data = result.data;
    dispatch(hideLoading());
    if (result.status === 200) {
      console.log("User exists:", data.message);
      console.log("JWT Token:", data.token);

      // alert("Logged in successfully!");
      localStorage.setItem("Ranking-token", data.token);
      dispatch(signInSuccess(result.data));
      return true;
    } else {
      // alert(data.message || "Something went wrong");
      dispatch(signInFailure(data.message));
      return false;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    // alert(errorMessage);
    console.log("Error message:", errorMessage);
    dispatch(hideLoading());
    dispatch(signInFailure(error));
    return false;
  }
};
