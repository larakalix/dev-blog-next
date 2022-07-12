import { signOut } from "next-auth/react";

export const SignOutButton = () => {
    return (
        <li>
            {/* <a href="/api/auth/signout">Sign Out</a> */}
            <button onClick={() => signOut()}>Logout</button>
        </li>
    );
};
