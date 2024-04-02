/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { shikimoriAPI } from "./api/data";

export const fetchAnime = async (page: number) => {  

    const anime = {
      page: page,
      limit: 12,
      order: 'ranked',
      statusAiring: 'released'
    }

    const response = await fetch(shikimoriAPI({...anime}));
    const data = await response.json();

    return data.map((item: AnimeProp, index: any) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
}