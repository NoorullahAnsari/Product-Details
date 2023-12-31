import Homepage from "@/components/Homepage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Tech</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  );
}
