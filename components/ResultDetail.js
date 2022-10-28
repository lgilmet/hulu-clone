import Image from "next/image";

function ResultDetail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="relative  h-60 w-full ">
      <Image
        layout="responsive"
        className="object-cover h-full z-0"
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        width={600}
        height={500}
        alt="Movie background image"
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-10 bg-gradient-to-t from-[#06202ae2]" />
        <div className="bg-[#06202ae2] max-h-40 px-3 pb-2">
          <h2>{result.title || result.name}</h2>
          <p className="line-clamp-3 text-sm lg:text-base">{result.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultDetail;
