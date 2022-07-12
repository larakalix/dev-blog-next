/* eslint-disable @next/next/no-img-element */
import { UserProps } from "src/models/User";

interface Props {
    user: UserProps;
    showName?: boolean;
}

export const UserBadge = ({ user: { user }, showName = false }: Props) => {
    return (
        <div>
            <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full border border-slate-100 p-1"
            />
            {showName && <p>{user.name}</p>}
        </div>
    );
};
