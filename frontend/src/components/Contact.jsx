import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div>
      <h2>Contact Me</h2>

      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <p>Message: {message}</p>

      <p>Character Count: {message.length}</p>

      <button onClick={() => setShowHelp(!showHelp)}>
        Toggle Help
      </button>

      {showHelp && <p>Type your message above.</p>}
    </div>
  );
}

export default Contact;