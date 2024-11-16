import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HighlightLines = () => {
  const codeString = `
    const add = (a, b) => {
      console.log("Adding numbers"); // Highlight this
      return a + b;
    };
  `;

  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomDark}
      showLineNumbers
      wrapLines
      lineProps={(lineNumber) =>
        lineNumber === 2
          ? { style: { backgroundColor: 'rgba(255, 255, 0, 0.2)' } }
          : {}
      }
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default HighlightLines;
