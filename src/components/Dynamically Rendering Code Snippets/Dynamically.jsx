import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DynamicCodeExample = ({ code }) => {
  return (
    <SyntaxHighlighter language="python" style={okaidia}>
      {code}
    </SyntaxHighlighter>
  );
};

DynamicCodeExample.propTypes = {
    code: PropTypes.string.isRequired,
  };
export default DynamicCodeExample;
