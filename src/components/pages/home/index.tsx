import React from 'react';
import HomeComponent from './home_component';

const Home: React.FC<any> = (props) => {
  return (
    <>
      <HomeComponent {...props} />
    </>
  );
};

export default Home;
