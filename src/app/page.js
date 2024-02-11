import Image from "next/image";
import Logo from "../../design/images/logo.svg"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyEasyBank from "@/components/WhyEasyBank";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <section>
        <Navbar/>
      </section>

      <section>
        <Hero/>
      </section>

      <section>
        <WhyEasyBank/>
      </section>

      <section>
        <Articles/>
      </section>

      <section>
        <Footer/>
      </section>
    </main>
  );
}
