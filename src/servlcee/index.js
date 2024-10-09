import request from "../api/index";

export const token = (data) => request.post("/oauth/token", data);
