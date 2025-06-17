"use client";
import * as AnimationText from "@/components/TextAnimation";
import { noticeItems } from "@/demo/noticesData";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";

const NoticeList = () => {
  const [selectNotice, setSelectNotice] = useState({
    year: "25",
    description: "",
  });
  return (
    <>
      <div className="w-1/5">
        <AnimationText.Dynamic className="-mt-2.5 font-semibold leading-none">
          `{selectNotice.year}
        </AnimationText.Dynamic>
      </div>
      <div className="flex w-1/2 flex-col gap-5 text-[16px]">
        <div className="scrollbar-hidden h-20 overflow-y-scroll">
          {noticeItems.map((item) => {
            const year = format(new Date(item.createdAt), "yy");
            const createdAt = format(new Date(item.createdAt), "yyyy-MM-dd");
            return (
              <ul
                className="mb-2 flex items-start justify-between gap-3"
                key={item.sys.id}
                onMouseEnter={() => {
                  setSelectNotice({
                    year,
                    description: item.description,
                  });
                }}
              >
                {item.url ? (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <li className="underline">{item.title}</li>
                  </Link>
                ) : (
                  <li>{item.title}</li>
                )}
                <li className="whitespace-nowrap text-end">{createdAt}</li>
              </ul>
            );
          })}
        </div>
        <p>{selectNotice.description}</p>
      </div>
    </>
  );
};

export default NoticeList;
