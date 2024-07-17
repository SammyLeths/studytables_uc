import React from "react";

const TableCell = () => {
  return (
    <td className="text-nowrap m-0 p-0 border border-slate-200">
      <a
        href="#"
        className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200 text-blue-700 font-semibold"
      >
        {data.symbol}
      </a>
    </td>
  );
};

export default TableCell;
