import { useEffect, useRef, useState } from "react";
import "./CommandInterface.css";

export default function CommandInterface() {
  const [commands, setCommands] = useState([]);
  const [command, setCommand] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setCommand(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newCommands = [...commands, command];
    setCommands(newCommands);

    switch (true) {
      case command === "":
        setResults([...results, "Please enter a command."]);
        break;

      case command.toLowerCase().startsWith("hello"):
        setResults([...results, "Hello! How can I help you?"]);
        break;

        case command.toLowerCase() === "help":
            setResults([
              ...results,
              "<b>help</b>&nbsp;&nbsp;<em>list all the commands</em><br/>" +
              "<b>hello</b>&nbsp;&nbsp;<em>greetings</em><br/>" +
              "<b>projects</b>&nbsp;&nbsp;<em>list all projects</em><br/>" +
              "<b>about</b>&nbsp;&nbsp;<em>information about the developer</em><br/>" +
              "<b>socials</b>&nbsp;&nbsp;<em>list social media links</em><br/>"
            ]);
            break;

      case command.toLowerCase() === "projects":
        setResults([...results, "Projects here:"]);
        break;

      case command.toLowerCase() === "about":
        setResults([...results, "Hi I am aviral"]);
        break;

      case command.toLowerCase() === "socials":
        setResults([...results, 
            `<a href="https://www.instagram.com/aviral.who_" target="_blank">Insta.</a><br/>`+
            `<a href="https://www.github.com/dedyspooky" target="_blank">Git.</a><br/>`+
            `<a href="https://www.linkedin.com/in/aviral-ale target="_blank"">LinkedIn.</a><br/>`
    ]);
        break;

      default:
        setResults([
          ...results,
          `${command} is not recognized as a valid command.`,
        ]);
        break;
    }
    setCommand("");
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="command-prompt">
        {commands.map((cmd, index) => (
          <div key={index}>
            <p>
              user<span className="text-red-500">@abiralale.com.np</span>
              <span className="text-blue-500">:~</span>
              <span className="text-green-500">$</span> {cmd}
            </p>
            <span dangerouslySetInnerHTML={{ __html: results[index] }} />
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex">
          <p>
            user<span className="text-red-500">@abiralale.com.np</span>
            <span className="text-blue-500">:~</span>
            <span className="text-green-500">$</span>
          </p>
          <input
            type="text"
            ref={inputRef}
            value={command}
            onChange={handleChange}
            className="bg-transparent command-ip"
          />
        </div>
        <button type="submit" hidden>
          Submit
        </button>
      </form>
    </>
  );
}
