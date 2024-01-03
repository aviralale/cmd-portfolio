import React from "react";
import CommandInterface from "./components/CommandInterface";

export default function App() {
  return (
    <div>
       <h1 className="text-3xl font-bold uppercase">Aviral Ale</h1>
       <p>Type "help" to list all the commands.</p>
      <CommandInterface />
      <br />
    </div>
  );
}
