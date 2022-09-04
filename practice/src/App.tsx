import React, { useState } from "react";
import "./App.css";

const users: { name: string; id: number }[] = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];
interface funcProps {
  setValue: (params: string) => any;
}

function Child({ setValue }: funcProps) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("Changed!")}>Change Parent Value</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [value, setValue] = useState<string>(
    "I need to be updated from my child"
  );

  return (
    <div className="App">
      <div className="display">
        <div>TypeScript is cool!</div>
      </div>
      <div className="count">
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <h3>{count}</h3>
      </div>
      <div className="array">
        <h3>User names</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div className="hide">
        <button onClick={() => setToggle(!toggle)}>Hide Element Below</button>
        {toggle && <div>Toggle Challenge</div>}
      </div>
      <div className="binding">
        <input
          type="text"
          placeholder="Enter Text"
          onChange={(e) => setText(e.target.value)}
        />
        <p>{text}</p>
      </div>
      <div className="disableButton">
        <h3>Disable Button Challenge</h3>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button disabled={input ? false : true}>Submit</button>
      </div>
      <div className="callback">
        <h3>Update Parent State Challenge</h3>
        <div className="wrapper">
          <div>Parent</div>
          <div className="box-wrapper">{value}</div>
        </div>
        <div className="wrapper">
          <Child setValue={setValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
