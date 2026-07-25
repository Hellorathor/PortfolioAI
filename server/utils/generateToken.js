import jwt from "jsonwebtoken";

const generateToken = (
  userId,
  secret = process.env.MY_SECRETE_KEY,
  expiresIn = "10d"
) => {
  return jwt.sign(
    { id: userId },
    secret,
    { expiresIn }
  );
};

export default generateToken;
