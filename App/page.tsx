import { About, BubbleBackground, Contact, Footer, Hero, Navbar, Roadmap, System, TokenInfo, Whitepaper } from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BubbleBackground />
      <Navbar />
      <Hero />
      <About />
      <System />
      <Roadmap />
      <Whitepaper />
      <Contact />
      <TokenInfo />
      <Footer />
    </main>
  );
}
