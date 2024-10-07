import { useState } from 'react';
import Layout from './component/layout/layout';
import { Button } from 'component/Common';
import { css } from '@emotion/react';
import { EditIcon } from 'component/res/images';

function App() {
  const [isLoading, setIsLoading] = useState(false);

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
    </Layout>
  );
}

export default App;
