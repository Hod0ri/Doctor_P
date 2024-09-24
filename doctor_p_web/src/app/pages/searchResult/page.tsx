'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dogEyeSample from '../../public/images/dogEyeSample.png';
import dogFootPrint from '../../public/images/dogFootPrint.svg';
import drPET_Logo from '../../public/images/DrPET_Logo.svg';
import { XCircleIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
axios.defaults.baseURL = 'http://158.247.250.204:8080';
const Page = () => {
  const getImages = async () => {
    axios
      .get(`/disease?family=cat`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };
  useEffect(() => {
    getImages();
  }, []);
  const router = useRouter();

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <Image
        src={drPET_Logo}
        width={70}
        height={70}
        alt='DrPET_Logo'
        className='absolute left-0 top-0 ml-3 cursor-pointer'
        onClick={() => router.push('/')}
      />
      <div className='flex flex-col items-center w-5/6 max-w-[850px] h-5/6 max-h-[560px] rounded-xl bg-[#FFD7A3] shadow-br-sm p-5'>
        <div className='flex justify-end w-full'>
          <XCircleIcon
            className=' w-[30px] h-[30px] cursor-pointer'
            onClick={() => router.push('/')}
          />
        </div>
        <div className='text-3xl pb-12 font-gaeguBold'>질병 검색 결과</div>
        <div className='flex space-x-10'>
          <div>
            <div className='flex flex-col w-[300px] h-[350px] rounded-lg'>
              <div className='w-full h-[50px] bg-[#D2A48F] flex justify-center items-center text-2xl rounded-t-lg'>
                검색 이미지
              </div>
              <Image
                src={dogEyeSample}
                alt='dogEyeSample'
                width={300}
                height={300}
              />
            </div>
            <div className='flex flex-col pt-2'>
              <div className='text-xl'>결막염</div>
              <div className='font-gaeguLight'>결막염은 각막에....</div>
            </div>
          </div>

          <div className='flex flex-col space-y-4 py-4 my-4 w-[380px] h-fit border-l-4 border-black'>
            <div className='w-[200px] h-[25px] pl-1 bg-[#B48282] flex items-center'>
              <div>안검내반증</div>
            </div>
            <div className='w-[250px] h-[25px] pl-1 bg-[#B48282] flex items-center'>
              <div>안검종양</div>
            </div>
            <div className='w-[200px] h-[25px] pl-1 bg-[#B48282] flex items-center'>
              <div>궤양성 결막염</div>
            </div>
            <div className='w-[330px] h-[25px] pl-1 bg-[#B48282] flex items-center justify-between'>
              <div>결막염</div>
              <Image
                src={dogFootPrint}
                width={25}
                height={25}
                alt='dogFootPrint'
              />
            </div>
            <div className='w-[260px] h-[25px] pl-1 bg-[#B48282] flex items-center'>
              <div>색소침착성 각막염</div>
            </div>
            <div className='w-[170px] h-[25px] pl-1 bg-[#B48282] flex items-center'>
              <div>핵경화</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
