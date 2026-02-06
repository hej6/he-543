// import Image from "next/image";
import Intro from "@/components/intro";

export default function Home() 
{
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-green-400 dark:bg-green-400 sm:items-start">
		    <section className="bg-amber-300">
          <Intro />
        </section>

        <section className="bg-amber-300">
          <Intro />
        </section>
      </main>
    </div>
  );
}
