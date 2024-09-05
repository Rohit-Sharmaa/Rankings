import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase";

function OAuthLogin() {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const name = result.user.displayName;
      const email = result.user.email;
      console.log(name + " " + email);
      const res = await fetch("http://localhost:5000/api/auth/googleLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("User exists:", data.message);
        console.log("JWT Token:", data.token);
        localStorage.setItem("Ranking-token", data.token);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleClick}>Continue with google login</button>
    </div>
  );
}

export default OAuthLogin;
