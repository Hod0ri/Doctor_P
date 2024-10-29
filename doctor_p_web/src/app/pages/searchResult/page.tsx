'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import dogFootPrint from '../../public/images/dogFootPrint.svg';
import drPET_Logo from '../../public/images/DrPET_Logo.svg';
import { XCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useData } from '@/app/context/DataContext';
import Link from 'next/link';
import { useImageContext } from '@/app/context/DataContext';
axios.defaults.baseURL = 'http://158.247.250.204:8080';

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data } = useData();
  const { imageData } = useImageContext();

  useEffect(() => {
    const isReload = sessionStorage.getItem('isReloaded');
    if (!data) {
      router.replace('/');
    }
    if (pathname === '/restricted-page') {
      router.replace('/');
    }
    if (isReload) {
      // 새로고침된 경우 메인 페이지로 리다이렉트
      sessionStorage.removeItem('isReloaded');
      router.replace('/');
    } else {
      // 새로고침이 아닌 첫 진입 시, 리로드 상태를 설정
      sessionStorage.setItem('isReloaded', 'true');
    }
  }, [router, pathname]);
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div
        className='absolute left-0 top-0 ml-3 cursor-pointer flex items-center'
        onClick={() => router.push('/')}
      >
        <Image src={drPET_Logo} width={70} height={70} alt='DrPET_Logo' />
        <div className='font-gaeguRegular text-3xl'>Dr.PET</div>
      </div>

      <div className='flex flex-col items-center w-5/6 max-w-[850px] h-5/6 max-h-[560px] rounded-xl bg-[#FFD7A3] shadow-br-sm p-5'>
        <div className='flex justify-end w-full'>
          <XCircleIcon
            className=' w-[30px] h-[30px] cursor-pointer'
            onClick={() => router.push('/')}
          />
        </div>
        <div className='text-3xl pb-12 font-gaeguBold'>질병 검색 결과</div>
        <div className='flex flex-col '>
          <div className='flex space-x-10'>
            <div>
              <div className='flex flex-col w-[300px] h-[350px] rounded-lg'>
                <div className='w-full h-[50px] bg-[#D2A48F] flex justify-center items-center text-2xl rounded-t-2xl'>
                  검색 이미지
                </div>
                {imageData ? (
                  <div className='relative w-[300px] h-[300px]'>
                    <Image
                      src={imageData}
                      alt="pet's Eye"
                      fill
                      className='rounded-b-2xl'
                    />
                  </div>
                ) : (
                  <p>no image</p>
                )}
                <div
                  className='font-gaeguBold text-lg hover:cursor-pointer hover:drop-shadow-md p-2'
                  onClick={() => router.push('/pages/disease/list')}
                >
                  질병 리스트 보러가기
                </div>
              </div>
              {/* <div className='flex flex-col pt-2'>
                <div className='text-xl'>
                  {data.doubt[0].description['ko-KR']}
                </div>
                <div className='font-gaeguLight'>
                  <div className='text-xl'>
                    {data.doubt[0].description['overview']}
                  </div>
                </div>
              </div> */}
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-col space-y-4 py-4 my-4 w-[380px] h-fit border-l-4 border-black'>
                {data
                  ? data.doubt.map((e: any, i: number) => {
                      const width = `${Math.round(
                        300 * parseFloat(e.percent)
                      )}px`;
                      if (i <= 5) {
                        if (i === 0) {
                          return (
                            <div
                              style={{ width: `${width}` }}
                              className='h-[25px] pl-1 bg-[#B48282] flex items-center justify-between'
                              key={i}
                            >
                              <p className='shrink-0'>
                                {e.description['ko-KR']}
                              </p>
                              <Image
                                src={dogFootPrint}
                                width={25}
                                height={25}
                                alt='dogFootPrint'
                                className='pr-1'
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div
                              style={{ width: `${width}` }}
                              className='h-[25px] pl-1 bg-[#B48282] flex items-center'
                              key={i}
                            >
                              <p className='shrink-0'>
                                {e.description['ko-KR']}
                              </p>
                            </div>
                          );
                        }
                      }
                    })
                  : router.replace('/')}
              </div>
              <div className='flex flex-col pt-2'>
                <div className='flex items-center space-x-5'>
                  <div className='text-2xl'>
                    {data.doubt[0].description['ko-KR']}
                  </div>

                  <Link
                    className='flex text-gray-600 text-xl font-gaeguLight items-center space-x-1 hover:cursor-pointer'
                    href={`/pages/disease/info?family=${data.family}&id=${data.doubt[0].id}`}
                  >
                    <PlusCircleIcon className='w-5 h-5' />

                    <div>더보기</div>
                  </Link>
                </div>
                <div className='font-gaeguLight'>
                  <div className='text-xl'>
                    {data.doubt[0].description['overview']}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
