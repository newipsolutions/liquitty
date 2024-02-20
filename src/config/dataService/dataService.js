import { getItem } from "src/utility/localStorageControl";

export const call_center_endpoint =
  process.env.REACT_APP_API_NIS_ADMIN_CALLCENTER;
export const auth_endpoint = process.env.REACT_APP_API_AUTH_ENDPOINT;

export const authHeader = () => ({
  Authorization: `Bearer ${getItem("access_token")}`,
});
