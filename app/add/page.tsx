'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SelectCategory from "./category";
import SelectDate from "./daylist";

type Screen = "category" | "date";

export default function Page() {
  const router = useRouter();

  const [screen, setScreen] = useState<Screen>("category");
  const [category, setCategory] = useState<string>("");

  // 🔹 登録完了時の処理（子から呼ばれる）
  const handleComplete = () => {
    // 本来はここで Supabase / API に保存
    // await saveTodo({ category, date, time, remind });

    // 登録後に /top へ
    router.push("/top");
  };

  return (
    <>
      {screen === "category" && (
        <SelectCategory
          onSelect={(selectedCategory: string) => {
            setCategory(selectedCategory);
            setScreen("date");
          }}
        />
      )}

      {screen === "date" && (
        <SelectDate
          category={category}
          onBack={() => setScreen("category")}
          onComplete={handleComplete}
        />
      )}
    </>
  );
}