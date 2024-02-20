import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthService } from "src/config/dataService/authService";
import { ApiRoutes } from "src/utility/apiRoutes";
import { setItem } from "src/utility/localStorageControl";

interface IUserLogin {
  grant_type: string;
  username: string;
  password: string;
}

export const useAuthStore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const optional_header = {
    account: 1,
  };
  const history = useHistory();

  const start_login = async (data: IUserLogin) => {
    setIsLoading(true);
    try {
      const response = await AuthService.post<any>(
        ApiRoutes.createAPIRoute(ApiRoutes.auth.authLogin),
        data,
        optional_header
      );
      const { token, user } = response.data;
      setIsLoading(false);
      if (response.status == 201) {
        setItem("access_token", token.accessToken);
        setItem("user", user);
        history.push("/inicio");
      }
    } catch (error) {
      console.log("Ha surgido un error. Porfavor intentelo de nuevo");
    }
  };

  return { start_login, isLoading };
};
