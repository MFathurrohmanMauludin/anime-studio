import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

async function Home() {
 const data =  await fetchAnime(1);

  return (
    <main className="p-16 py-16 sm:px-8 xs:px-4 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-10">
        {data}
      </section>

      <LoadMore />
    </main>
  );
}

export default Home;
