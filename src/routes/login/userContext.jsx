import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
      setUser(null);
  };

  return (
      <UserContext.Provider value={{ user, setUser, logout }}>
          {children}
      </UserContext.Provider>
  );
};


export function useUser() {
  return useContext(UserContext);
}
