'use client'; // 클라이언트 컴포넌트로 설정
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import drPET_Logo from '@/app/public/images/DrPET_Logo.svg';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
axios.defaults.baseURL = 'http://158.247.222.166:8080';

export const dynamic = 'force-dynamic';

interface DiseaseData {
  description: {
    'ko-KR': string;
    overview: string;
    full_desc: string;
    reason: string;
  };
}

const DiseaseDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [family, setFamily] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [diseaseData, setDiseaseData] = useState<DiseaseData | null>(null);
  const [isSpoilerClicked, setIsSpoilerClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDiseaseData = async () => {
    const familyParam = searchParams.get('family');
    const idParam = searchParams.get('id');

    if (familyParam && idParam) {
      setFamily(familyParam);
      setId(idParam);
      axios
        .get(`/disease/info?family=${familyParam}&id=${idParam}`)
        .then((res) => {
          setDiseaseData(res.data);
        })
        .catch((err) => {
          console.log('error: ', err);
          setError('데이터를 가져오는 데 실패했습니다.');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDiseaseData();
  }, [searchParams]);

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {diseaseData ? (
        <div className='flex flex-col justify-center py-8 px-[300px] space-y-16'>
          <div
            className='absolute left-0 top-0 ml-3 cursor-pointer flex items-center'
            onClick={() => router.push('/')}
          >
            <Image src={drPET_Logo} width={70} height={70} alt='DrPET_Logo' />
            <div className='font-gaeguRegular text-3xl'>Dr.PET</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center space-x-2'>
              <Image
                src={drPET_Logo}
                width={100}
                height={100}
                alt='닥터펫 로고'
                className='hover:cursor-pointer'
                onClick={() => router.push('/')}
              />
              <div className='text-4xl'>질병 상세 정보</div>
            </div>
            <div className='text-3xl border-[#B48282] border-t-4 pt-5'>
              {diseaseData.description['ko-KR']}
            </div>
            <div className='text-xl'>[ {id} ]</div>
          </div>
          <div className='flex flex-col justify-start text-2xl space-y-8'>
            <div className='flex justify-start items-center space-x-2 '>
              <div className='flex font-gaeguBold border-2 border-[#121212] w-fit px-3 rounded-md '>
                요약
              </div>
              <div>{diseaseData.description.overview}</div>
            </div>
            <div>
              <div className='text-3xl font-gaeguBold'>정의</div>
              <div>{diseaseData.description['full_desc']}</div>
            </div>
            <div className='w-full flex justify-center'>
              <div className='relative'>
                <div
                  className={`absolute backdrop-blur-xl bg-white/30 w-[400px] h-[400px] rounded-lg flex justify-center items-center ${
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
                  src={`https://github.com/Hod0ri/Doctor_P/blob/image/images/${id}_${family}.jpg?raw=true`}
                  width={400}
                  height={400}
                  alt='질병사진'
                  className='rounded-xl'
                />
              </div>
            </div>
            <div>
              <div className='text-3xl font-gaeguBold'>원인</div>
              <div>{diseaseData.description['reason']}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>요청하신 데이터가 없습니다.</div>
      )}
    </div>
  );
};
export default DiseaseDetail;
