import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const StaticCodeExample = () => {
  const codeString = `
    const greet = (name) => {
      console.log(\`Hello, \${name}!\`);
    };
    greet('World');
  `;

  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default StaticCodeExample;
