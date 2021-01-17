import React, { createContext, useEffect } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  let [AdminUser, setAdminUser] = React.useState();
  useEffect(() => {
    let adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      console.Console.log(adminToken);
    }
  });
  return <div></div>;
};

export default AdminContextProvider;
