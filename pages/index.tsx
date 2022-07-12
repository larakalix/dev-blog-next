/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { userStore, UseStoreProps } from "@/store/SessionStore";
import { HomeScreen } from "@/screen/HomeScreen";

const Home = ({ user }: { user: any }) => {
    const { setUser } = userStore<UseStoreProps>((state) => state);

    useEffect(() => {
        (() => {
            setUser(user);
        })();
    }, [user]);

    return <HomeScreen />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = await getSession(context);

    return {
        props: {
            user,
        },
    };
};

export default Home;
