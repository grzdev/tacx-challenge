import Image from "next/image";
import Logo from "../../design/images/logo.svg"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyEasyBank from "@/components/WhyEasyBank";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>EasyBank</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section>
        <Navbar/>
      </section>

      <section>
        <Hero/>
      </section>

      <section>
        <WhyEasyBank/>
      </section>

      {/* <section>
        <Articles/>
      </section>

      <section>
        <Footer/>
      </section> */}
    </main>
  );
}
