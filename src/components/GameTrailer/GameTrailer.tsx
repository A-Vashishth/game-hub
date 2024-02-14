import useFetchTrailer from "../../hooks/useFetchTrailer";

interface IGameTrailerProps {
  gameId: number;
}

function GameTrailer({ gameId }: Readonly<IGameTrailerProps>) {
  const { data: trailers_, error } = useFetchTrailer(gameId);
  if (error) throw error;
  if (trailers_?.results[0]) {
    return (
      <video
        src={trailers_?.results[0]?.data[480]}
        poster={trailers_?.results[0]?.preview}
        controls
      >
        GameTrailer
      </video>
    );
  } else {
    return null;
  }
}

export default GameTrailer;
