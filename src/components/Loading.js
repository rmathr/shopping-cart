import React from 'react';
import { Roller } from 'react-awesome-spinners';

const Loading = () => {
  return (
    <div className="w-full h-[90dvh] flex flex-row items-center justify-center">
      <p className="text-black text-3xl pr-6 font-bold">Loading</p>
      <Roller />
    </div>
  );
};

export default Loading;
