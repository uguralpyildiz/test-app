import React, { useState } from "react";

const WeatherDisplay = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="app">
      <div className="todo-container">
        <input
          type="text"
          placeholder="Not yaz..."
          onChange={handleInputChange}
          value={inputValue}
        />
        <button onClick={handleAddTodo}>Submit</button>
      </div>
      <div className="list-container">
        <div className="list-c">
          {todos.map((todo, index) => (
            <div key={index} className="list">{todo}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
