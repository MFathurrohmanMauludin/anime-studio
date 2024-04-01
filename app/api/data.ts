interface Props{
    page: number;
    limit: number;
    order: string;
    statusAiring: string;
}

export const shikimoriAPI = ({page, limit, order, statusAiring}: Props) => {
    return `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=${order}&status=${statusAiring}`;
}