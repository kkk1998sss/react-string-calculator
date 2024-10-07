import React, { useState } from "react";
import './StringCalculator.css'; // For custom styles

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState<string>(""); // To store input values
  const [result, setResult] = useState<string>(""); // To display result

  // Function to handle button click for numbers and operators
  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to calculate the result using eval (simple approach for arithmetic expressions)
  const calculateResult = () => {
    try {
      const evalResult = eval(input); // Evaluates the string expression
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to clear the display
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  // Function to handle key press from the keyboard
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if ((/\d|\.|\+|\-|\*|\//).test(key)) {
      // If it's a valid character (numbers and operators), add it to input
      setInput((prevInput) => prevInput + key);
    } else if (key === 'Enter') {
      // If 'Enter' key is pressed, calculate the result
      calculateResult();
    } else if (key === 'Backspace') {
      // Handle backspace to remove the last character
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  return (
    <div className="calculator-container">
      <h2>String Calculator</h2>
      <div className="display">
        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
          onKeyDown={handleKeyPress} // Listen for key press events
        />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearInput} className="button clear">C</button>
        <button onClick={() => handleButtonClick("/")} className="button">/</button>
        <button onClick={() => handleButtonClick("*")} className="button">*</button>

        <button onClick={() => handleButtonClick("7")} className="button">7</button>
        <button onClick={() => handleButtonClick("8")} className="button">8</button>
        <button onClick={() => handleButtonClick("9")} className="button">9</button>
        <button onClick={() => handleButtonClick("-")} className="button">-</button>

        <button onClick={() => handleButtonClick("4")} className="button">4</button>
        <button onClick={() => handleButtonClick("5")} className="button">5</button>
        <button onClick={() => handleButtonClick("6")} className="button">6</button>
        <button onClick={() => handleButtonClick("+")} className="button plus">+</button>

        <button onClick={() => handleButtonClick("1")} className="button">1</button>
        <button onClick={() => handleButtonClick("2")} className="button">2</button>
        <button onClick={() => handleButtonClick("3")} className="button">3</button>

        <button onClick={() => handleButtonClick("0")} className="button zero">0</button>
        <button onClick={() => handleButtonClick(".")} className="button">.</button>
        <button onClick={calculateResult} className="button equals">=</button>
      </div>
    </div>
  );
};

export default StringCalculator;
