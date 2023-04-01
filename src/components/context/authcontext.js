import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();
let value=false;
export const AuthContextProvider = ({ children }) => {
  
  const navigate = useNavigate();
  const [isuserAuthenticated,authenticated]=useState(value)

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, [isuserAuthenticated]);

  // check if the user is logged in.
  const checkUserLoggedIn = async () => {
         if(isuserAuthenticated){
           navigate('/home')
         }
         else{
            navigate('/')

         }

  }

return (
    <AuthContext.Provider value={{ authenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;