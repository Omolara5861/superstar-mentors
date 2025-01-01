import React from "react";

// Use a generic constraint to ensure T can only be an object with string keys.
type Column<T extends Record<string, any>> = {
    header: string;
    accessor: keyof T;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type TableProps<T extends Record<string, any>> = {
    data: T[];
    columns: Column<T>[];
};

function Table<T extends Record<string, any>>({ data, columns }: TableProps<T>) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="text-left px-6 py-3 text-sm font-semibold text-gray-700 border-b"
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-6 py-4 text-sm text-gray-600 border-b"
                                >
                                    {column.render
                                        ? column.render(row[column.accessor] as T[keyof T], row)
                                        : row[column.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;