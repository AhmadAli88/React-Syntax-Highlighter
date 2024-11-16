import './App.css';
import CodeComparison from './components/Code Comparison/Code';
import StaticCodeExample from './components/Displaying Static Code Examples/Displaying';
import DynamicCodeExample from './components/Dynamically Rendering Code Snippets/Dynamically';
import HighlightLines from './components/Highlight Lines of Interest/Highlight';
import MarkdownWithCode from './components/Markdown Rendering with Syntax Highlighting/Markdown';
import UserInputCode from './components/Rendering User-Input Code Safely/Rendering';
import MultiLanguageCode from './components/Support for Multiple Languages/Support';
import ThemedSyntaxHighlighter from './components/Themed Syntax Highlighting/Themed';

function App() {
  const pythonCode = `
  def greet(name):
      print(f"Hello, {name}!")

  greet("World")
`;

const userCode = `
const add = (a, b) => a + b;
console.log(add(2, 3)); // Outputs 5
`;

const markdownContent = `
# Hello Markdown

Here is some JavaScript code:

\`\`\`javascript
const hello = "world";
console.log(hello);
\`\`\`
`;
  return (
    <div>
      <StaticCodeExample />
      <DynamicCodeExample code={pythonCode} />
      <UserInputCode userCode={userCode} />
      <CodeComparison />
      <MarkdownWithCode markdown={markdownContent} />
      <HighlightLines/>
      <ThemedSyntaxHighlighter/>
      <MultiLanguageCode/>
    </div>
  );
}

export default App;
