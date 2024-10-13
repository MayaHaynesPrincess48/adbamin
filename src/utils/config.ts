const config = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "https://abdamin.onrender.com" // Replace with your production API URL
      : "http://localhost:3000",
};

export default config;
