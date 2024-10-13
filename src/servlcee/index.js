import request from "../api/index";

export const token = (data) => request.post("/oauth/token", data);
export const CodeRepositories = (data) => request.post("api/v5/user/repos", data);
export const GetAllRepositories = (data) =>
  request.get(
    `https://gitee.com/api/v5/user/repos?access_token=${data.access_token}&visibility=${data.visibility}&q=${data.q}`,
    data
  );
