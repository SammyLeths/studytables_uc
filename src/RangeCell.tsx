import React from "react";
import { MapPinIcon } from "@heroicons/react/16/solid";

const RangeCell = () => {
  return (
    <td className="text-nowrap m-0 p-0 border border-slate-200">
      <a href="#" className="pl-3 pr-8 block focus:bg-slate-200">
        <div className="range">
          <div className="position border-b-2 border-gray-500">
            <MapPinIcon
              className={`size-6 text-blue-500 border-b-2 border-blue-500 pb-1 -mb-[2px] ml-${data.week_range.position}`}
            />
          </div>
          <div className="values flex justify-between">
            <span className="text-xs">{data.week_range.lower}</span>
            <span className="text-xs">{data.week_range.upper}</span>
          </div>
        </div>
      </a>
    </td>
  );
};

export default RangeCell;
