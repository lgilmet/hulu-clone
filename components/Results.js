import ResultDetail from "./ResultDetail";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="mx-7 mt-3 grid gap-4 grid-cols-2 sm:grid-cols-3">
      {results.map((result) => (
        <div className="relative group flex justify-center " key={result.id}>
          <div className="z-10 absolute top-12 opacity-0 group-active:opacity-100 group-hover:opacity-100 w-full h-full transition-all duration-200 group-hover:scale-125">
            <ResultDetail result={result} />
          </div>
          <div className="opacity-100 group-hover:opacity-50 transition-opacity duration-300">
            <Thumbnail key={result.id} result={result} />
          </div>
        </div>
      ))}
    </FlipMove>
  );
}

export default Results;
