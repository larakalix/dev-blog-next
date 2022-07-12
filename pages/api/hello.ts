// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type Response = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    const session = await getSession({ req });
    if (!session) return res.status(403).json({ message: "Not logged in" });

    res.status(200).json({ message: session.user?.name! });
}
