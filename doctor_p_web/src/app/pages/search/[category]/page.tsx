'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import dogEyeSample from '../../../public/images/dogEyeSample.png';
import searchImage from '../../../public/images/Dr.PET_searchImage.svg';
import drPET_Logo from '../../../public/images/DrPET_Logo.svg';
import {
  ExclamationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import axios from 'axios';
import { useData, useImageContext } from '@/app/context/DataContext';
axios.defaults.baseURL = 'http://158.247.250.204:8080';

const Page = () => {
  const router = useRouter();
  const param = useParams<{ category: string }>();
  const [imageFile, setImageFile] = useState(undefined);
  const [isSpoilerClicked, setIsSpoilerClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { setData } = useData();
  const { setImageData } = useImageContext();
  const handleDragEnter = () => setIsActive(true);
  const handleDragLeave = () => setIsActive(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result as string); // 이미지 데이터를 컨텍스트에 저장
      };
      reader.readAsDataURL(e);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const hadleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setImageFile(droppedFile);
      handleImageChange(droppedFile);
      setIsActive(false);
    }
  };

  const renderImageFile = () => {
    // if (!imageFile) return null;
    if (imageFile && imageFile.type.startsWith('image/')) {
      return (
        <div className='flex flex-col justify-between w-full h-full'>
          <div className='flex items-center space-x-3'>
            <Image
              className='flex flex-col rounded-lg '
              src={URL.createObjectURL(imageFile)}
              alt='dropped image File'
              width={100}
              height={100}
            />

            <div className='truncate line-clamp-1'>
              <div className='flex'>
                <p className='font-gaeguBold'>파일명 : &nbsp;</p>
                <p>"{imageFile.name}"</p>
              </div>
              <div className='flex'>
                <p className='font-gaeguBold'>파일 사이즈 :&nbsp;</p>
                <p>"{imageFile.size}"</p>
              </div>
              <div className='flex'>
                <p className='font-gaeguBold'>파일 타입 :&nbsp;</p>
                <p>"{imageFile.type}"</p>
              </div>
            </div>
          </div>
          <div className='flex justify-end space-x-4'>
            <div
              className='px-3 py-1 rounded-md bg-red-500 hover:bg-red-600  text-white shadow-br-sm cursor-pointer hover'
              onClick={() => setImageFile(undefined)}
            >
              초기화
            </div>
            <div
              className='px-3 py-1 rounded-md bg-gray-700 hover:bg-black  text-white shadow-br-sm cursor-pointer hover'
              onClick={posetImages}
            >
              검색
            </div>
          </div>
        </div>
      );
    }
  };
  const posetImages = async () => {
    const formData = new FormData();
    formData.append('image', imageFile as never);
    formData.append('family', param.category);
    axios
      .post('/search', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        setData(res.data);
        router.push('/pages/searchResult');
      })
      .catch((err) => {
        console.log('image : ', imageFile, 'error: ', err);
      });
  };

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

          <div className='space-y-2'>
            <div className='flex items-center flex-col w-[380px] h-[320px] bg-[#D2A48F] rounded-lg'>
              <div className='flex py-3 text-2xl'>이미지 검색</div>
              {/* 이미지 검색 박스 */}
              <label
                htmlFor='imageDropBox'
                className={`z-40 flex items-start space-x-3 w-[340px] h-[240px] rounded-lg border-2 border-dashed px-5 py-5 ${
                  isActive
                    ? 'bg-[#896161] border-[#8a8a8ac5]'
                    : ' bg-[#B48282] border-[#d2d1d1c5]'
                }`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={hadleDrop}
              >
                {imageFile && renderImageFile()}
                {!imageFile && (
                  <>
                    <Image
                      src={searchImage}
                      width={50}
                      height={50}
                      alt='searchIamge'
                      onDragLeave={() => {
                        setIsActive(true);
                      }}
                      onDragOver={handleDragOver}
                    />

                    <div>
                      <div className='text-[#C1C1C1] text-lg'>
                        여기에 이미지를 드래그하거나
                      </div>
                      <label htmlFor='imageSearchBox'>
                        <div className='text-[#97ACF7] underline text-lg cursor-pointer'>
                          파일을 업로드하세요.
                        </div>
                      </label>
                      <input
                        id='imageSearchBox'
                        type='file'
                        multiple={false}
                        className='hidden'
                        value={imageFile}
                        onChange={(e) => {
                          setImageFile(e?.target?.files[0]);
                          handleImageChange(e?.target?.files[0]);
                        }}
                      />
                    </div>
                  </>
                )}
              </label>
            </div>
            <div
              className='font-gaeguBold text-lg hover:cursor-pointer hover:drop-shadow-md'
              onClick={() => router.push('/pages/disease/list')}
            >
              질병 리스트 보러가기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
