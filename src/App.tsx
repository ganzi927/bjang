import { useState } from 'react';
import Layout from './component/layout/layout';
import { Button, OutlinedTextField } from 'component/Common';
import { css } from '@emotion/react';
import { EditIcon } from 'component/res/images';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  const onClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <Layout>
      <Button
        size="small"
        variant="primary"
        customCss={css`
          margin: 20px;
        `}
        isLoading={isLoading}
        onClick={onClick}
        icon={EditIcon}
      >
        test
      </Button>
      <OutlinedTextField
        label="test"
        required
        customCss={css`
          margin: 20px;
        `}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></OutlinedTextField>
    </Layout>
  );
}

export default App;
