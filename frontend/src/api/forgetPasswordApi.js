import apiClient from "../config/axiosConfig";

export const forgetPasswordApi = async (email) => {
  try {
    console.log("sentOtpapi-->", email);

    if (!email) {
      alert("Email is required");
      return false;
    }

    const result = await apiClient.post("/api/auth/forgetPassword", {
      email,
    });

    const data = result.data;

    if (result.status === 200) {
      alert("OTP sent to your email");
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
