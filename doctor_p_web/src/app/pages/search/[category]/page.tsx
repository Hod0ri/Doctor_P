'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import dogEyeSample from '../../../public/images/dogEyeSample.png';
import searchImage from '../../../public/images/Dr.PET_searchImage.svg';
import drPET_Logo from '../../../public/images/DrPET_Logo.svg';
import {
  ExclamationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const Page = () => {
  const router = useRouter();
  const [imageFile, setImageFile] = useState(null);
  const [isSpoilerClicked, setIsSpoilerClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleDragEnter = () => setIsActive(true);
  const handleDragLeave = () => setIsActive(false);
  const handleDragOver = (e: any) => {
    e.preventDefault();
  };
  const hadleDrop = (e: any) => {
    e.preventDefault();
    console.log('file 전송');
    // const file = e.dataTransfer.files[0];
    // readImage(file);
    setIsActive(false);
  };

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
        <div className='text-3xl pb-12 font-gaeguBold'>동물 질병 검색</div>
        <div className='flex space-x-10'>
          <div>
            <div className='relative flex flex-col w-[300px] h-[350px] rounded-lg'>
              <div className='w-full h-[50px] bg-[#D2A48F] flex justify-center items-center text-2xl rounded-t-lg'>
                사진 예시
              </div>
              <div
                className={`absolute top-[50px] backdrop-blur-xl bg-white/30 w-[300px] h-[300px] rounded-b-lg flex justify-center items-center ${
                  isSpoilerClicked ? 'hidden' : ''
                }`}
              >
                <div
                  className='bg-gray-700 text-white rounded-full p-2 px-4 hover:bg-black cursor-pointer'
                  onClick={() => setIsSpoilerClicked(true)}
                >
                  스포일러
                </div>
              </div>
              <Image
                src={dogEyeSample}
                alt='dogEyeSample'
                width={300}
                height={300}
              />
            </div>
            <div className='flex items-center space-x-1 pt-2'>
              <ExclamationCircleIcon className='w-[20px] h-[20px] text-[#878787]' />
              <div className='text-[#878787]'>
                동물의 눈이 나오게 정확히 찍어주세요.
              </div>
            </div>
          </div>

          <div className='flex items-center flex-col w-[380px] h-[320px] bg-[#D2A48F] rounded-lg'>
            <div className='flex py-3 text-2xl'>이미지 검색</div>
            {/* 이미지 검색 박스 */}

            <label
              className={`flex items-start space-x-3 w-[340px] h-[240px] bg-[#B48282] rounded-lg border-2 border-dashed border-[#d2d1d1c5] px-5 py-10 ${
                isActive ? 'bg-[#896161] border-[#8a8a8ac5]' : ''
              }`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={hadleDrop}
            >
              <Image
                src={searchImage}
                width={50}
                height={50}
                alt='searchIamge'
              />
              <div>
                <div className='text-[#C1C1C1] text-lg'>
                  여기에 이미지를 드래그하거나
                </div>
                <label htmlFor='file'>
                  <div className='text-[#97ACF7] underline text-lg cursor-pointer'>
                    파일을 업로드하세요.
                  </div>
                </label>
                <input type='file' id='file' className='hidden'></input>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
