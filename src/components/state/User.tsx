import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
};

export const User = () => {
    const [user, setUser] = useState<null | AuthUser>(null);
    const handleLogin = () => {
        setUser({
            name: "vishnu",
            email: "vishnu@gmail.com",
        });
    };
    const handleLogout = () => {
        setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>User name is {user?.name}</h2>
            <h2>User email is {user?.email}</h2>
        </div>
    );
};
