import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

import { ListView } from 'Molecules';

const listTest: NextPage<any> = (props) => {
  useEffect(() => {
    // console.log(props);
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>List Test</title>
      </Head>
      <ListView item_list={props.data} with_imgs={false} />
    </>
  );
};

listTest.getInitialProps = async () => {
  const listData = await axios.get('http://localhost:3000/api/list');
  return {
    data: listData.data,
  };
};

export default listTest;
