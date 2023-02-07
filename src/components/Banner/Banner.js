import React from "react";

export const STATUS = {
  WIN: "win",
  LOSE: "lose",
  PENDING: "pending",
};

function Banner({ status, attempts, answer, children }) {
  switch (status) {
    case STATUS.WIN:
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{attempts} guesses</strong>.
          </p>

          {children}
        </div>
      );
    case STATUS.LOSE:
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>

          {children}
        </div>
      );
    case STATUS.PENDING:
    default:
      return null;
  }
}

export default Banner;
