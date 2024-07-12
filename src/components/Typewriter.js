// components/Typewriter.js
import { useEffect, useState } from "react";

const Typewriter = () => {
  const words = ["Python Developer", "Backend Engineer"];
  const [text, setText] = useState("");
  let i = 0; // current word index
  let j = 0; // current letter index
  let isDeleting = false; // flag to determine if deleting

  useEffect(() => {
    const type = () => {
      const currentWord = words[i];
      setText(currentWord.substring(0, j + 1));

      if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000); // delay before deleting
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 500); // delay before typing new word
      } else {
        setTimeout(
          () => {
            j = isDeleting ? j - 1 : j + 1;
            type();
          },
          isDeleting ? 50 : 150,
        ); // typing speed
      }
    };

    type(); // start typing effect
  }, []);

  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden
    sm:py-0"
    >
      <h1 id="typewriter" className="text-4xl font-bold">
        {text}
        <span className="animate-blink">|</span>
      </h1>
    </div>
  );
};

export default Typewriter;
