import ResultDetail from "./ResultDetail";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  const hasNoResults =
    results &&
    Object.keys(results).length === 0 &&
    Object.getPrototypeOf(results) === Object.prototype;

  return (
    <div>
      {!hasNoResults ? (
        <FlipMove className="mx-7 mt-3 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {results.map((result) => (
            <div
              className="relative group flex justify-center "
              key={result.id}>
              <div className="z-10 absolute top-12 opacity-0 group-active:opacity-100 group-hover:opacity-100 w-full h-full transition-all duration-200 group-hover:scale-125 lg:group-hover:scale-105">
                <ResultDetail result={result} />
              </div>
              <div className="opacity-100 group-hover:opacity-50 transition-opacity duration-300">
                <Thumbnail key={result.id} result={result} />
              </div>
            </div>
          ))}
        </FlipMove>
      ) : (
        <div className="grid  gap-4 place-content-center h-48">
          <div>No content found. Check your connection.</div>
        </div>
      )}
    </div>
  );
}

export default Results;
