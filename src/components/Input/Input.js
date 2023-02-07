import React from "react";
import { WORD_LENGTH } from "../../constants";

function Input({ value, handleChange, handleSubmit, disabled }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={handleChange}
        required
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        pattern={`.{${WORD_LENGTH}}`}
        title="Use 5 characters"
        disabled={disabled}
        autoComplete="off"
      />
    </form>
  );
}

export default Input;
