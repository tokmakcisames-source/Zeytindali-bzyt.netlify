import { About, BubbleBackground, Contact, Footer, Hero, LaunchNotice, Manifesto, Navbar, Roadmap, System, TokenInfo, Transparency, Whitepaper } from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BubbleBackground />
      <LaunchNotice />
      <Navbar />
      <Hero />
      <About />
      <Manifesto />
      <System />
      <Transparency />
      <Roadmap />
      <Whitepaper />
      <Contact />
      <TokenInfo />
      <Footer />
    </main>
  );
}
