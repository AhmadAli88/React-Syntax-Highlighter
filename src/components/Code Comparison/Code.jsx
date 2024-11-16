import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeComparison = () => {
  const oldCode = `
    const add = (a, b) => {
      return a + b;
    };
  `;
  const newCode = `
    const add = (a, b) => a + b;
  `;

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <h3>Old Code</h3>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {oldCode}
        </SyntaxHighlighter>
      </div>
      <div>
        <h3>New Code</h3>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {newCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeComparison;
