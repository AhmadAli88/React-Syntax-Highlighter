import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UserInputCode = ({ userCode }) => (
  <SyntaxHighlighter language="javascript" style={coy}>
    {userCode}
  </SyntaxHighlighter>
);

export default UserInputCode;
