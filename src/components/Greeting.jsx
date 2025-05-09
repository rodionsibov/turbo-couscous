import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="mb-3">
      <h3 class="text-pink-500 text-lg">{greeting}! Thank you for visiting!</h3>

      <button
        class="p-3 cursor-pointer rounded-md hover:bg-sky-500 bg-sky-700 text-white mt-4 mb-8 "
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
