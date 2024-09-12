import apiClient from "../config/axiosConfig";

export const handleSignUpApi = async (email, OTP, password) => {
  try {
    if (!email || !password || !OTP) {
      alert("Email, password and otp are required");
      return false;
    }

    console.log(email, " ", OTP, " ", password);

    const result = await apiClient.post("/api/auth/signUpVerify", {
      email,
      otp: OTP,
      password,
    });

    const data = result.data;
    console.log("result object in hanlesingup api--", result);
    console.log("data boject in handlesigup api -->", data);
    if (result.status === 200) {
      console.log("singup api Ranking--token", data.token);
      localStorage.setItem("Ranking-token", data.token);
      alert("successfully Registered!");
      return true;
    } else {
      alert(data.message || "Registration failed");
      return false;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong during signup";
    alert(errorMessage);
    console.log("Error message:", errorMessage);
    return false;
  }
};

export const sentOtpApi = async (email) => {
  try {
    console.log("sentOtpapi-->", email);

    if (!email) {
      alert("Email is required");
      return false;
    }

    const result = await apiClient.post("/api/auth/signup", {
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
