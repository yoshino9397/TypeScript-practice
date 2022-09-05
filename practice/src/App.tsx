import React, { useEffect, useState } from "react";
import "./app.css";

const users: { name: string; id: number }[] = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

interface funcProps {
  setValue: (params: string) => any;
}
interface childProps {
  children: JSX.Element;
}

function Child({ setValue }: funcProps) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("Changed!")}>Change Parent Value</button>
    </>
  );
}

function Child2() {
  return <div>This is children content</div>;
}
function Parent({ children }: childProps) {
  return (
    <>
      <div>
        <h3>Parent Component</h3>
        {children}
      </div>
    </>
  );
}
const url = "https://jsonplaceholder.typicode.com/users/1";
// interface IUser {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
// }

function App() {
  const [count, setCount] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [value, setValue] = useState<string>(
    "I need to be updated from my child"
  );
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [userData, setUserData] = useState({
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const calculate = () => {
    setTotal(number1 + number2);
  };

  const fetch = async (url: RequestInfo): Promise<any> => {
    const resp = await fetch(url);
    const respData = await resp.json();
    setUserData(respData);
  };

  useEffect(() => {
    fetch(url);
  }, []);

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
      <div className="parent">
        <Parent>
          <Child2 />
        </Parent>
      </div>
      <div className="sum">
        <h2>Adding Two Numbers</h2>
        <input
          placeholder="First Number"
          type="number"
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
          placeholder="Second Number"
          type="number"
          onChange={(e) => setNumber2(+e.target.value)}
        />
        <button onClick={calculate}>Add Two Numbers</button>
        <p>Total:{total}</p>
      </div>
      <div className="fetch">
        <h2>User Data</h2>
        <p>
          <strong>Name: </strong> {userData.name}
        </p>
        <p>
          <strong>Website: </strong>
          {userData.website}
        </p>
        <p>
          <strong>Email: </strong>
          {userData.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {userData.phone}
        </p>
      </div>
    </div>
  );
}

export default App;
