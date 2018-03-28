import React from 'react';
import Layout from './layout.default';
import {Wrapper} from './hello.style';

export default props => {
  return (
    <Layout title="Hello World">
      <Wrapper>
        Hello world!
      </Wrapper>
    </Layout>
  )

}