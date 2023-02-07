import React from "react";
import { WORD_LENGTH } from "../../constants";
import { rangeWithId } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {rangeWithId(WORD_LENGTH).map(({ index, id }) => {
        const { letter, status } = guess[index];

        return (
          <span key={id} className={`cell ${status}`.trim()}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
