import { userStore, UseStoreProps } from "@/store/SessionStore";
import { SignInButton } from "./childs/SignInButton";
import { SignOutButton } from "./childs/SignOutButton";
import { UserProps } from "src/models/User";
import { UserBadge } from "src/core/user/UserBadge";
import Link from "next/link";

interface NavbarLinkProps {
    href: string;
    text: string;
}

const links: NavbarLinkProps[] = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
];

export const Navbar = () => {
    const { user } = userStore<UseStoreProps>((state) => state);

    return (
        <div className="p-4 flex items-center justify-between">
            <ul className="flex items-center space-x-8">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>
                            <a>{link.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center space-x-8">
                {user === null ? <SignInButton /> : <LoggedUser user={user} />}
            </ul>
        </div>
    );
};

const LoggedUser = ({ user }: { user: UserProps }) => {
    return (
        <li>
            <UserBadge user={user} />
            <ul>
                <SignOutButton />
            </ul>
        </li>
    );
};
