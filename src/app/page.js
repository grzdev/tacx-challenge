import Image from "next/image";
import Logo from "../../design/images/logo.svg"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
    </main>
  );
}
