import Intro from "@/components/intro";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <section className="bg-amber-300 p-8 rounded-lg">
        <Intro />
      </section>

      <section className="bg-amber-300 p-8 rounded-lg">
        <Intro />
      </section>
    </div>
  );
}
