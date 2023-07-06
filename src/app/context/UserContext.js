import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useState } from "react";

export const UserContextObj = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  console.log("user on context: ", user, pathname, user?.token?.length);

  if (!user?.token?.length && pathname !== "/") {
    return <h1>Not authenticated</h1>;
  }

  return (
    <UserContextObj.Provider value={{ user, setUser }}>
      {children}
    </UserContextObj.Provider>
  );
}

export default UserContext;
