import { useState, useContext, createContext } from "react";

const UserContext = createContext();
const SetUsersContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const useSetUsers = () => {
  return useContext(SetUsersContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={users}>
      <SetUsersContext.Provider value={setUsers}>
        {children}
      </SetUsersContext.Provider>
    </UserContext.Provider>
  );
};
