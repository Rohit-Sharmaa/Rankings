import apiClient from "../config/axiosConfig";

export const handleResetPasswordApi = async (email, OTP, password) => {
  try {
    console.log("rester pass word-->", email, OTP, password);

    if (!email || !OTP || !password) {
      alert("Email , otp & password are required");
      return false;
    }

    const result = await apiClient.post("/api/auth/resetPassword", {
      email,
      otp: OTP,
      password,
    });

    const data = result.data;

    if (result.status === 200) {
      alert("Password reset succesfully");
      return true;
    } else {
      alert(data.message || "Something went wrong");
      return false;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    alert(errorMessage);
    console.log("Error message:", errorMessage);
    return false;
  }
};
