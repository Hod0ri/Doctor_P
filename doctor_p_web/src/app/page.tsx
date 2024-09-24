'use client';
import Image from 'next/image';
import drPetLogo from './public/images/DrPET_Logo.svg';
import dogBotton from './public/images/Dr.PET_dogBotton.svg';
import catBotton from './public/images/Dr.PET_catBotton.svg';
import chatBotton from './public/images/Dr.PET_chat.svg';
import { useState } from 'react';
import {
  XCircleIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  const [isChatClicked, setIsChatClicked] = useState(false);
  return (
    <div className='flex justify-center w-full h-screen'>
      <div className='relative flex justify-center w-full h-full border border-red-200'>
        <Image
          // className='ml-[20px] mr-[5px]'
          className='w-fit h-fit'
          src={drPetLogo}
          width={600}
          height={600}
          // fill
          alt='Doctor.PET logo'
          // sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
        />
        <div className='flex absolute top-[400px] space-x-[50px]'>
          <Link
            className='flex justify-center items-center w-[130px] h-[130px] rounded-full bg-[#F7D7D7] shadow-br-sm hover:cursor-pointer'
            href='/pages/searchDog'
          >
            <Image
              className='h-fit'
              src={dogBotton}
              alt='dogBotton'
              width={90}
              height={90}
            />
          </Link>
          <Link
            className='flex justify-center items-center w-[130px] h-[130px] rounded-full bg-[#C9EAFD] shadow-br-sm hover:cursor-pointer'
            href='/pages/searchCat'
          >
            <Image
              className='h-fit'
              src={catBotton}
              alt='dogBotton'
              width={90}
              height={90}
            />
          </Link>
        </div>
      </div>
      <div
        className={`flex justify-center items-center absolute bottom-14 right-14 w-[60px] h-[60px] bg-[#DAEEF2] rounded-full hover:cursor-pointer ${
          isChatClicked ? '' : 'shadow-br-sm '
        }`}
        onClick={() => setIsChatClicked(!isChatClicked)}
      >
        <Image
          className='h-fit'
          src={chatBotton}
          alt='chatBotton'
          width={40}
          height={40}
        />
      </div>
      {isChatClicked && (
        <div className='absolute right-14 bottom-14 w-[350px] h-5/6 rounded-3xl bg-white shadow-br-sm pb-[50px]'>
          <div className='flex items-center justify-between px-5 w-full h-[50px] rounded-t-3xl bg-[#FFD7A3]'>
            <div className='flex space-x-2 items-center'>
              <div className='w-5 h-5 rounded-full bg-[#93EF97]'></div>
              <div>Chat Dr.</div>
            </div>
            <XCircleIcon
              className='w-6 h-6 hover:cursor-pointer text-[#867373]'
              onClick={() => setIsChatClicked(!isChatClicked)}
            ></XCircleIcon>
          </div>
          <div className='w-full h-full'>챗박스</div>
          <div className='flex items-center px-5 space-x-2 w-full h-[50px] relative bottom-[50px] rounded-b-3xl bg-[#FFD7A3] shadow-br-sm'>
            <input
              className='bg-[#FFD7A3] w-full h-fit'
              placeholder='Send a message...'
            ></input>
            <ChatBubbleLeftRightIcon className='w-6 h-6 hover:cursor-pointer text-[#867373]'></ChatBubbleLeftRightIcon>
          </div>
        </div>
      )}
    </div>
  );
}