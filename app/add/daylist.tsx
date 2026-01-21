'use client'

import React,{useState} from "react";
import Image from "next/image";

type Props = {
  category: string;
  onBack: () => void;
  onComplete: () => void;
};

const SelectDate: React.FC<Props> = ({ category, onBack, onComplete }) => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");

  return (
    <div className="flex flex-col bg-white">
      <div className="self-stretch">
        <div className="self-stretch relative">
          <div className="flex flex-col items-start self-stretch bg-white pt-[55px]">
            <div className="flex justify-between items-center self-stretch mb-5 mx-[13px]">
              <span
                className="text-black text-sm cursor-pointer"
                onClick={onBack}
              >
                ←カテゴリ選択
              </span>

              <span className="text-black text-xl">{category}</span>

              <div className="w-[95px] h-[13px]" />
            </div>

            <span className="text-[#8E8E93] text-xl mb-[38px] ml-[13px]">
              内容を入力
            </span>

            <span className="text-[#6A6A6A] text-sm mb-[21px] ml-3.5">
              日付/締切
            </span>

            <div className="flex items-center self-stretch mb-[34px] ml-[11px] mr-6 gap-10">
              <div className="flex flex-1 flex-col items-center">
                <span className="text-black text-xl">
                  2026/1/22(木)　　v
                </span>
                <div className="self-stretch bg-[#AEAEB2] h-[1px]" />
              </div>

              <div className="flex flex-col shrink-0 items-start gap-0.5">
                <span className="text-black text-xl">
                  17:00　　　v
                </span>
                <div className="bg-[#AEAEB2] w-[132px] h-[1px]" />
              </div>
            </div>

            <span className="text-[#8E8E93] text-sm mb-[22px] ml-3">
              通知
            </span>

            <span className="text-black text-xl mb-[3px] ml-4">
              １日前　　　v
            </span>

            <div className="bg-[#AEAEB2] w-[140px] h-[1px] mb-[201px] ml-[11px]" />

            {/* カレンダー */}
            <div className="flex flex-col items-center self-stretch bg-white pt-4 mb-4 rounded-2xl border border-solid border-[#D9D9D9]">
              <div className="flex items-center self-stretch mx-4 gap-4">
                <Image
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yVmOXc9okk/6rgbz62g_expires_30_days.png"
                  alt="前の月"
                  width={36}
                  height={36}
                />

                <div className="flex flex-1 items-center gap-2">
                  <div className="flex flex-1 justify-between items-center bg-white pr-1.5 rounded-lg border border-solid border-[#D9D9D9]">
                    <input
                      placeholder="Sep"
                      value={input1}
                      onChange={(e) => setInput1(e.target.value)}
                      className="flex-1 text-[#1E1E1E] bg-transparent text-base py-1.5 pl-1.5 border-0 outline-none"
                    />
                    <Image
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yVmOXc9okk/jh0miek6_expires_30_days.png"
                      alt="月選択"
                      width={16}
                      height={16}
                    />
                  </div>

                  <div className="flex flex-1 justify-between items-center bg-white pr-1.5 rounded-lg border border-solid border-[#D9D9D9]">
                    <input
                      placeholder="2025"
                      value={input2}
                      onChange={(e) => setInput2(e.target.value)}
                      className="flex-1 text-[#1E1E1E] bg-transparent text-base py-1.5 pl-1.5 border-0 outline-none"
                    />
                    <Image
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yVmOXc9okk/4gz2q102_expires_30_days.png"
                      alt="年選択"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>

                <Image
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yVmOXc9okk/kkkz43jk_expires_30_days.png"
                  alt="次の月"
                  width={36}
                  height={36}
                />
              </div>
            </div>
          </div>

          <div className="self-stretch bg-[#AEAEB2] h-[1px] absolute top-[84px] right-[3px] left-[3px]" />
          <div className="self-stretch bg-[#AEAEB2] h-[1px] absolute top-[124px] right-[3px] left-[3px]" />

          <div className="flex flex-col items-start self-stretch bg-[#D9D9D9] absolute bottom-[347px] right-[1px] left-[1px] pt-3.5 pl-[23px]">
            <div className="flex items-center mb-[3px]">
              <span className="text-[#6A6A6A] text-base mr-[59px]">
                キャンセル
              </span>
              <span className="text-black text-base mr-[77px]">
                日付を選択
              </span>
              <span 
               onClick ={onComplete}
               className="text-[#0050FF] text-base"
              >
                完了
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;

