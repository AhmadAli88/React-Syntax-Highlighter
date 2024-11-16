import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ThemedSyntaxHighlighter = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const codeString = `
    console.log('Hello, Theme!');
  `;

  return (
    <div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Theme
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={isDarkMode ? twilight : tomorrow}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default ThemedSyntaxHighlighter;
