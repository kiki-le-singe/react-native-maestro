import React from "react";

const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

export function Provider(props) {
  const [user, setAuth] = React.useState(null);

  return (
    <AuthContext.Provider
      value={{
        signIn: (values) =>
          setAuth({
            name: "Foo",
            ...values,
          }),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
