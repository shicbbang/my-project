import React, { useEffect, useState } from "react";

/**
 * Header 컴포넌트
 * - 왼쪽: 앱 타이틀
 * - 오른쪽: 실시간 시계
 */
export default function Header() {
  // 현재 시간을 저장하는 상태
  const [time, setTime] = useState(new Date());

  // 컴포넌트 마운트 후 1초마다 시간 갱신
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // ✅ 새로운 Date 객체로 상태 갱신
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(timer);
  }, []);

  // 렌더링되는 UI 반환
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md">
      {/* 왼쪽: 프로젝트 타이틀 */}
      <h1 className="text-2xl font-bold tracking-wide">
        My Smart Assistant
      </h1>

      {/* 오른쪽: 현재 시각 (24시간제, 한국 로케일) */}
      <div className="text-lg font-mono">
        {time.toLocaleTimeString("ko-KR", { hour12: false })}
      </div>
    </header>
  );
}
