'use client';
import Image from 'next/image';
import drPetLogo from './public/images/DrPET_Logo.svg';
import dogBotton from './public/images/Dr.PET_dogBotton.svg';
import catBotton from './public/images/Dr.PET_catBotton.svg';
import chatBotton from './public/images/Dr.PET_chat.svg';
import chatDr from './public/images/chatDr.svg';
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
      <div className='relative flex justify-center w-full h-full'>
        <Image
          className='w-fit h-fit'
          src={drPetLogo}
          width={600}
          height={600}
          alt='Doctor.PET logo'
          priority
        />
        <div className='flex absolute top-[400px] space-x-[50px]'>
          <Link
            className='flex justify-center items-center w-[130px] h-[130px] rounded-full bg-[#F7D7D7] shadow-br-sm hover:cursor-pointer'
            href={`/pages/search/dog`}
          >
            <Image
              className='h-fit hover:w-[100px] hover:h-[100px]'
              src={dogBotton}
              alt='dogBotton'
              width={90}
              height={90}
            />
          </Link>
          <Link
            className='flex justify-center items-center w-[130px] h-[130px] rounded-full bg-[#C9EAFD] shadow-br-sm hover:cursor-pointer'
            href={`/pages/search/cat`}
          >
            <Image
              className='h-fit hover:w-[100px] hover:h-[100px]'
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
              <div className='text-xl'>Chat Dr.</div>
            </div>
            <XCircleIcon
              className='w-6 h-6 hover:cursor-pointer text-[#867373]'
              onClick={() => setIsChatClicked(!isChatClicked)}
            ></XCircleIcon>
          </div>
          <div className='w-full h-full px-3 py-5 space-y-5'>
            <div className='flex space-x-2 mr-6'>
              <div className='shrink-0'>
                <Image
                  src={chatDr}
                  width={40}
                  height={40}
                  alt='chatDr'
                  className='p-1 rounded-full bg-[#fefaf0] shadow-br-xs'
                />
              </div>
              <div className='rounded-xl p-2 bg-[#F4F4F4] shadow-br-xs'>
                Chat Dr.입니다. 궁금하신 내용을 말씀해주세요.
              </div>
            </div>
            <div className='flex space-x-2 ml-6'>
              <div className='rounded-xl p-2 bg-[#7ED1FF] shadow-br-xs'>
                chatgpt api 요청 비용으로 인해 챗봇 서비스 이용이 불가합니다.
              </div>
              <div className='shrink-0'>
                {/* <UserCircleIcon className='w-[50px] h-[50px] text-gray-200' /> */}
                <Image
                  src={catBotton}
                  width={40}
                  height={40}
                  alt='catBotton'
                  className='p-1 rounded-full bg-[#C9EAFD] shadow-br-xs'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center px-5 space-x-2 w-full h-[50px] relative bottom-[50px] rounded-b-3xl bg-[#FFD7A3] shadow-br-sm'>
            <input
              className='bg-[#FFD7A3] w-full h-fit text-lg'
              placeholder='Send a message...'
            ></input>
            <ChatBubbleLeftRightIcon className='w-6 h-6 hover:cursor-pointer text-[#867373]'></ChatBubbleLeftRightIcon>
          </div>
        </div>
      )}
    </div>
  );
}
