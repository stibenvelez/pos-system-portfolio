import React from 'react'

export const Table = ({children}) => {
  return (
      <div className="overflow-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {children}
          </table>
      </div>
  );
}

export const Row = ({ children }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {children}
        </tr>
    );
};

export const Thead = ({ children }) => {
    return (
        <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
            {children}
        </thead>
    );
};