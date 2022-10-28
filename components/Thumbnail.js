import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const hasImage = result.poster_path?.length || result.backdrop_path?.length;

  return (
    <div ref={ref} className="h-full">
      {hasImage ? (
        <Image
          layout="responsive"
          src={`${BASE_URL}${result.poster_path || result.backdrop_path}`}
          width={200}
          height={300}
          alt="Poster art"
        />
      ) : (
        <div className="w-52 h-full p-4 bg-zinc-800 ">
          {result.title || result.name}
        </div>
      )}
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";
// or use // eslint-disable-next-line react/display-name before
// this is because using forwardRef makes the component unrecognizable to eslint

export default Thumbnail;
