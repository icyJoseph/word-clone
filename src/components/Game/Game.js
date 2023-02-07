import React from "react";

import Banner, { STATUS } from "../Banner/Banner";
import GuessResults from "../GuessResults";
import Input from "../Input";

import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";

const emptyGuess = Array.from({ length: WORD_LENGTH }, () => ({
  letter: "",
  status: "",
}));

const isWinner = (result) => result.every(({ status }) => status === "correct");

const getInitialState = () => Array(NUM_OF_GUESSES_ALLOWED).fill(emptyGuess);

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guess, setGuess] = React.useState("");
  const [results, setResults] = React.useState(getInitialState);
  const [status, setStatus] = React.useState(STATUS.PENDING);

  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGuess("");
    setResults(getInitialState);
    setStatus(STATUS.PENDING);
  };

  const handleGuess = (event) => {
    const { value } = event.target;
    setGuess(value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guess.length !== WORD_LENGTH) return;

    const update = results.slice(0);
    const indexToUpdate = update.findIndex((res) => res === emptyGuess);

    update[indexToUpdate] = checkGuess(guess, answer);

    setResults(update);
    setGuess("");

    if (isWinner(update[indexToUpdate])) {
      return setStatus(STATUS.WIN);
    }

    if (indexToUpdate === results.length - 1) {
      return setStatus(STATUS.LOSE);
    }
  };

  const attempts = results.filter((result) => result !== emptyGuess).length;

  return (
    <>
      <GuessResults results={results} />

      <Input
        value={guess}
        disabled={status !== "pending"}
        handleChange={handleGuess}
        handleSubmit={handleSubmit}
      />

      <Banner status={status} answer={answer} attempts={attempts}>
        <button onClick={restartGame} className="play-again">
          Play again
        </button>
      </Banner>
    </>
  );
}

export default Game;
