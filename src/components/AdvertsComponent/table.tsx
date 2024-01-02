import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  Pagination,
  getPaginationRowModel,
  PaginationState,
} from "@tanstack/react-table";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// Define your Advert type based on your data structure
type Advert = {
  position: number;
  position_on_page: number;
  article: number;
  url: string;
  image: string;
  advert_id: number;
  cpm: number;
  subject: {
    id: number;
    name: string;
  };
  delivery_time: number;
};

const columnHelper = createColumnHelper<Advert>();

const columns = [
  columnHelper.accessor("position", {
    header: "Position",
  }),
  columnHelper.accessor("image", {
    cell: (info) => (
      <Image
        src={info.getValue()}
        alt=""
        style={{ width: "50px", height: "50px" }}
      />
    ),
    header: "Image",
  }),
  columnHelper.accessor("article", {
    header: "Article",
  }),
  columnHelper.accessor("position_on_page", {
    header: "Position On Page",
  }),
  columnHelper.accessor("cpm", {
    header: "CPM",
  }),
  columnHelper.accessor("subject.name", {
    header: "Category",
  }),

  columnHelper.accessor("delivery_time", {
    header: "Delivery Time (hours)",
  }),
  // ... more columns ...
];

const BasicTableComponent = ({ data }: { data: Advert[] }) => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  const range = table.getPageCount() > 5 ? 5 : table.getPageCount();

  return (
    <div className="p-2 container mx-auto mt-10 px-6 py-6 rounded-2xl bg-white shadow-custom">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center space-x-2 my-4">
        {Array.from({ length: range }, (_, i) => i).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => table.setPageIndex(pageNum)}
            className={`w-12 h-12 rounded px-2 py-2 ${
              table.getState().pagination.pageIndex === pageNum
                ? "bg-white text-black border-gray-400 border-2" // Active page button
                : "bg-gray-100 border-gray-400 border-2 text-gray-700 hover:bg-gray-100" // Inactive page button
            }`}
            aria-current={
              table.getState().pagination.pageIndex === pageNum
                ? "page"
                : undefined
            }
          >
            {pageNum + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BasicTableComponent;
