import { useState } from "react";

const Panel = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      label: "Dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10 0q-.825 0-1.412-.587T13 19v-5q0-.825.588-1.412T15 12h4q.825 0 1.413.588T21 14v5q0 .825-.587 1.413T19 21zm0-11q-.825 0-1.412-.587T13 8V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v3q0 .825-.587 1.413T19 10z"/>
        </svg>
      ),
    },
    {
      label: "Income",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6zm1 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
        </svg>
      ),
    },
    {
      label: "Expenses",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="rotate-180">
          <path fill="currentColor" d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6zm1 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
        </svg>
      ),
    },
    {
      label: "Employees",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M2 20v-2.8q0-.85.425-1.562T3.6 14.55q1.5-.75 3.113-1.15T10 13q.625 0 1.25.088t1.25.212v1.575q-1.125.55-1.812 1.45T10 18.675V20zm10 0v-1.4q0-.6.313-1.112t.887-.738q.9-.375 1.863-.562T17 16t1.938.188t1.862.562q.575.225.888.738T22 18.6V20zm5-5q-1.05 0-1.775-.725T14.5 12.5t.725-1.775T17 10t1.775.725t.725 1.775t-.725 1.775T17 15m-7-3q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12"/>
        </svg>
      ),
    },
    {
      label: "Reports",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zm7 6V3.5L18.5 9H14c-.55 0-1-.45-1-1"/>
        </svg>
      ),
    },
  ];

  return (
    <div>
      <div className="panel text-white w-[17%] h-[100vh] flex flex-col fixed left-0  bg-[#171717] p-6 pt-20 gap-2">

        {items.map((item, index) => (
          <div key={index} onClick={() => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index) } className={`p-2 px-5 rounded-3xl cursor-pointer hover:scale-[1.01] duration-[0.2s] flex gap-2 ${activeIndex === index ? "bg-[#808080a4]" : "bg-[#8080805d]"}`}>
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Panel;
