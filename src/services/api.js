import axios from "axios";

const connect = axios.create({
  baseURL: "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "dev-email-address": "dev-app-master@mail.com",
  },
});

export { connect };
