const config = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "https://abdamin.com/api" // Replace with your production API URL
      : "http://localhost:3000/api",
};

export default config;
