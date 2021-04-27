import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Head from 'next/head';
import { FunctionComponent } from 'react';

type BaseLayoutProps = {
  children;
};

export const BaseLayout: FunctionComponent<BaseLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>Multi Open API</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Header style={{ color: 'white' }}>
          Multi Open API
        </Header>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};
