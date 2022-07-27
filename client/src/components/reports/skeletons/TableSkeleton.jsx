import React from 'react'

const TableSkeleton = () => {
  return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col animate-pulse">
          <div className="text-xs text-white uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400 h-10"></div>
          <div className="flex flex-col px-2 gap-6 p-4">
              <div className="flex gap-2">
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
              </div>
              <div className="flex gap-2">
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
              </div>
              <div className="flex gap-2">
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
              </div>
              <div className="flex gap-2">
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
              </div>
              <div className="flex gap-2">
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-5 w-full bg-slate-200 rounded-md"></div>
              </div>
          </div>
      </div>
  );
}

export default TableSkeleton;