import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MultiLanguageCode = () => {
  const javaCode = `
    public class HelloWorld {
      public static void main(String[] args) {
        System.out.println("Hello, World!");
      }
    }
  `;

  const htmlCode = `
    <!DOCTYPE html>
    <html>
      <head><title>Hello</title></head>
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>
  `;

  return (
    <div>
      <h3>Java Code</h3>
      <SyntaxHighlighter language="java" style={dracula}>
        {javaCode}
      </SyntaxHighlighter>

      <h3>HTML Code</h3>
      <SyntaxHighlighter language="html" style={dracula}>
        {htmlCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default MultiLanguageCode;
