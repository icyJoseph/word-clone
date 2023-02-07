import React from "react";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { rangeWithId } from "../../utils";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {rangeWithId(NUM_OF_GUESSES_ALLOWED).map(({ index, id }) => {
        return <Guess key={id} guess={results[index]} />;
      })}
    </div>
  );
}

export default GuessResults;
