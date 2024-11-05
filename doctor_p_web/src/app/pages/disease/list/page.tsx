'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import drPET_Logo from '@/app/public/images/DrPET_Logo.svg';
import { useRouter } from 'next/navigation';
import axios from 'axios';
// axios.defaults.baseURL = 'http://158.247.250.204:8080';
axios.defaults.baseURL = 'http://158.247.222.166:8080';

interface Disease {
  name: string;
  description: { 'ko-KR': string };
}

const Page = () => {
  const router = useRouter();
  const [petCategory, setPetCategory] = useState('dog');
  const [diseaseList, setDiseaseList] = useState<Disease[] | null>(null);

  const getDiseaseListData = async () => {
    axios
      .get(`/disease?family=${petCategory}`)
      .then((res) => {
        setDiseaseList(res.data.diseases);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };
  useEffect(() => {
    getDiseaseListData();
  }, [petCategory]);

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex flex-col justify-center pt-8 px-[300px] space-y-16'>
        <div
          className='absolute left-0 top-0 ml-3 cursor-pointer flex items-center'
          onClick={() => router.push('/')}
        >
          <Image src={drPET_Logo} width={70} height={70} alt='DrPET_Logo' />
          <div className='font-gaeguRegular text-3xl'>Dr.PET</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex items-center space-x-2 border-[#B48282] border-b-4 '>
            <Image
              src={drPET_Logo}
              width={100}
              height={100}
              alt='닥터펫 로고'
              className='hover:cursor-pointer'
              onClick={() => router.push('/')}
            />
            <div className='text-4xl'>질병 리스트</div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-5 text-xl py-8'>
        <div
          className={`${[
            petCategory === 'dog' &&
              'text-[#23B0FF] font-gaeguBold drop-shadow-md',
          ]} hover:cursor-pointer duration-500`}
          onClick={() => setPetCategory('dog')}
        >
          강아지
        </div>
        <div
          className={`${[
            petCategory === 'cat' &&
              'text-[#23B0FF] font-gaeguBold drop-shadow-md',
          ]} hover:cursor-pointer duration-500`}
          onClick={() => setPetCategory('cat')}
        >
          고양이
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <table className='w-2/4 border-y-2 border-slate-500 table-fixed'>
          <thead>
            <tr className='border-y border-slate-600 bg-[#fcf6e6]'>
              <th className='border-r border-slate-600 py-1 w-1/6'>No.</th>
              <th className='border-l border-slate-600'>질병명</th>
            </tr>
          </thead>
          <tbody>
            {diseaseList &&
              diseaseList.map((e: Disease, i: number) => {
                return (
                  <tr
                    className='text-center border-b border-slate-300 hover:cursor-pointer hover:bg-[#f7f2e6] hover:font-gaeguBold'
                    key={i}
                    onClick={() => {
                      router.push(
                        `/pages/disease/info?family=${petCategory}&id=${e.name}`
                      );
                    }}
                  >
                    <td className='border-r border-slate-600'>{i + 1}</td>
                    <td className='border-l border-slate-600'>
                      {e.description['ko-KR']}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
