import { headerList } from "@/static/static";
import Link from "next/link";

export const HeaderList = () => {
  return (
    <ul className="flex flex-col border-none text-[18px] leading-[150%] font-light text-white md:flex-row">
      {headerList?.map((item, index) => (
        <li key={index} className="group relative">
          {/* Main Item */}
          <div className="flex cursor-pointer items-center justify-between p-3 hover:bg-gray-100 hover:text-black">
            <Link href={item.path || "#"}>
              <span>{item.title}</span>
            </Link>
            {/* {item.subItems.length > 0 && (
              <span className="transform transition group-hover:rotate-180">
                {" "}
                v
              </span>
            )} */}
          </div>

          {/* Submenu (appears on hover) */}
          {item.subItems.length > 0 && (
            <ul className="absolute left-0 z-10 mt-1 hidden w-full rounded-md bg-transparent shadow-xl group-hover:block">
              {item.subItems.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="cursor-pointer p-3 hover:bg-gray-50 hover:text-black"
                >
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
