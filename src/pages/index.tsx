import Head from "next/head";
import Hero from "~/components/Hero";
import NavBar from "~/components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Content-Brief</title>
        <meta name="description" content="AI summarizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-[#eeeeee] bg-[#222831] min-h-screen w-full flex flex-col items-center">
        <NavBar />
        <Hero />
      </main>
    </>
  );
}
