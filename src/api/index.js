import axios from "axios";

export const token = (data) =>
  axios.post(
    "https://gitee.com/oauth/token?grant_type=password&&client_id=c4b149e7caed520c8a0fc0b0e4a5a8332a50a6f1ccb809268bdac092282654a6&&client_secrect=50fe2bb9eebbfa5163ecdc8a5df77acc2ea615d8d70508366505a68460054c13&&scope=projects ",
    data
  );
