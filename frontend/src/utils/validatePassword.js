export const validatePassword = (password) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return "Password must have at least 8 characters.";
  }
  if (!hasUppercase) {
    return "Password must include at least one uppercase letter.";
  }
  if (!hasSpecialChar) {
    return "Password must include at least one special character.";
  }
  return null;
};
