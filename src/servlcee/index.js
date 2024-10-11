import request from "../api/index";

export const token = (data) => request.post("/oauth/token", data);
export const CodeRepositories = (data) =>
  request.post("api/v5/user/repos", data);
export const GetAllRepositories = () => request.post("/api/v5/users/", data);
