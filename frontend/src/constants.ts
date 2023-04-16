export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/careers/"
    : "https://codeleap-pi.vercel.app/api/careers/";
