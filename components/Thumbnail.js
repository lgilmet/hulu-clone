import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  console.log(result);
  return (
    <div ref={ref}>
      <Image
        layout="responsive"
        className="object-cover z-0 bg-black"
        src={`${BASE_URL}${result.poster_path || result.backdrop_path}`}
        width={200}
        height={300}
        alt="poster"
      />
    </div>
  );
});

Thumbnail.displayName = "Thumbnail"; // or use // eslint-disable-next-line react/display-name before

export default Thumbnail;
