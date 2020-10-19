import  {useCallback, useState, useEffect} from 'react';


let user_info = "user_info"
export const useAuth = () => {
  const [access_token, setAccess_token] = useState(null); 
  const [refresh_token, setRefresh_token] = useState(null);

  const login = useCallback((aToken, rToken) => { 
    setAccess_token(aToken);
    setRefresh_token(rToken);

    localStorage.setItem(user_info , JSON.stringify ({
      access_token : aToken , refresh_token :rToken
    }))
  }, [])


  const logout = useCallback(() => { 
    setAccess_token(null);
    setRefresh_token(null);
    localStorage.removeItem(user_info)
  }, [])


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user_info"))

    if (data && data.access_token) {
      login(data.access_token,data.refresh_token)
    }
  }, [login]) 

  return {login, logout, refresh_token, access_token}
}
 