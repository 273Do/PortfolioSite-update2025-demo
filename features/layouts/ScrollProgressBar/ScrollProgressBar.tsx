"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgressBar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  // XXX: バグあり
  // パスが変更されたときにリセット
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally ignoring exhaustive deps for pathname
  useEffect(() => {
    setIsReady(false);

    // 既存のScrollTriggerを全て削除
    ScrollTrigger.killAll();

    // 少し遅延を入れてから再初期化
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      setIsReady(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  // ScrollTriggerの設定
  useGSAP(() => {
    if (!isReady) return;

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const pct = self.progress * 100;
        const bar = progressBarRef.current;
        if (bar) {
          bar.style.height = `${pct}%`;
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [isReady]);

  return (
    <div className="fixed top-9/20 left-4 z-200 h-18 w-1 rounded-2xl bg-muted mix-blend-difference">
      <div
        ref={progressBarRef}
        className="h-full rounded-2xl bg-foreground"
        style={{ height: "0%" }}
      />
    </div>
  );
};

export default ScrollProgressBar;
