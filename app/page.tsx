import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

async function Home() {
 const data =  await fetchAnime(1);

  return (
    <main className="p-16 py-16 md:px-6 sm:px-4 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid grid-cols-6 lg:grid-cols-5 md:!grid-cols-4 xs:!grid-cols-2 md:gap-6 sm:gap-4 gap-8">
        {data}
      </section>

      <LoadMore />
    </main>
  );
}

export default Home;
