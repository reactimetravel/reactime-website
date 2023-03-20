import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Blogs from "./components/Blogs";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reactime</title>
      </Head>
      <NavBar />
      <LandingPage />
    </>
  );
};

export default Home;
