import { signIn } from "next-auth/react";

export const SignInButton = () => {
    return (
        <li>
            {/* <a href="/api/auth/signin">Sign In</a> */}
            <button onClick={() => signIn()}>Sign in</button>
        </li>
    );
};
