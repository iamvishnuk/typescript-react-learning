import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: "vishnu",
                email: "vishnu@gmail.com",
            });
        }
    };
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null);
        }
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Name is {userContext?.user?.name}</div>
            <div>User Name is {userContext?.user?.email}</div>
        </div>
    );
};
