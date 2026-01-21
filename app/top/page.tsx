'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TodoList: React.FC = () => {
  const [input1, setInput1] = useState<string>("");

  return (
    <div className="flex flex-col bg-white">
      <div className="self-stretch pl-1 pr-[37px]">
        <div className="self-stretch relative">
          <div className="flex flex-col items-start self-stretch bg-white pt-11">
            <span className="text-black text-2xl font-bold mb-6 ml-[26px]">
              {"ToDo一覧"}
            </span>

            <div className="flex flex-col items-start self-stretch bg-[#EFF2FA] pt-3.5 mb-[39px] mx-3 rounded-[20px] border-2 border-solid border-[#69A9E1]">
              <div className="flex items-center mb-[7px] ml-3.5 gap-6">
                <Image
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yVmOXc9okk/3zsbf0q9_expires_30_days.png"
                  alt="課題"
                  width={24}
                  height={21}
                  className="object-fill"
                />
                <span className="text-black text-base">
                  {"課題"}
                </span>
              </div>

              <div className="self-stretch bg-[#808080] h-[1px] mb-[18px] mx-[9px]" />

              <div
                className="flex items-center self-stretch bg-white mb-[84px] ml-[9px] mr-[22px] rounded-[10px]"
                style={{ boxShadow: "0px 4px 4px #00000026" }}
              >
                <div className="flex flex-col shrink-0 items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yVmOXc9okk/fj5dn4ny_expires_30_days.png')] bg-cover bg-center py-3.5 ml-3 mr-[34px]">
                  <span className="text-black text-[15px]">
                    {"12/10"}
                  </span>
                </div>

                <input
                  placeholder="計算論レポート"
                  value={input1}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInput1(e.target.value)
                  }
                  className="flex-1 self-stretch text-black bg-transparent text-lg py-5 mr-1 border-0"
                />
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch bg-[#EFF2FA] pt-[11px] pr-[9px] mb-[39px] mx-3 rounded-[20px] border-2 border-solid border-[#0088FF]">
              <div className="flex items-center mb-[7px] ml-[17px] gap-7">
                <Image
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yVmOXc9okk/ht4sekpm_expires_30_days.png"
                  alt="バイト"
                  width={24}
                  height={22}
                  className="object-fill"
                />
                <span className="text-black text-lg">
                  {"バイト"}
                </span>
              </div>

              <div className="self-stretch bg-[#808080] h-[1px] mb-[92px] ml-[9px]" />
            </div>

            <div className="flex flex-col items-start self-stretch bg-[#EFF2FA] pt-3 mb-52 mx-3 rounded-[20px] border-2 border-solid border-[#0088FF]">
              <div className="flex items-center mb-[3px] ml-[17px] gap-7">
                <Image
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yVmOXc9okk/nejde8em_expires_30_days.png"
                  alt="サークル"
                  width={24}
                  height={24}
                  className="object-fill"
                />
                <span className="text-black text-lg">
                  {"サークル"}
                </span>
              </div>

              <div className="self-stretch bg-[#808080] h-[1px] mb-[93px] mx-1.5" />
            </div>
          </div>

          <Link href="/add" className="flex flex-col items-center self-stretch bg-[#69A9E2] absolute bottom-2 right-[-4px] left-[-4px] py-[18px]">
            <span className="text-white text-[32px]">
              {"ToDoの追加"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
