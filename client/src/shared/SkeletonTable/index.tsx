import React, { FC, Fragment } from "react";
import { Table, Row } from "../../components/ui/Table";

type SkeletonTableType = {
    rows?: number;
    columns?: number;
    paddingYRows?: number;
};

const SkeletonTable: FC<SkeletonTableType> = ({
    rows = 4,
    columns = 2,
    paddingYRows=2
}) => {
    const ArrayRows = Array.from({ length: rows }, (_, index) => index);
    const ArrayColumns = Array.from({ length: columns }, (_, index) => index);

    return (
        <div className="animate-pulse">
            <Table>
                <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-left">
                        {ArrayColumns.map((_, index) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                <div className="w-full h-3 bg-gray-200/50 rounded-md my-1"></div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {ArrayRows.map((_, index) => (
                        <Row key={index}>
                            {ArrayColumns.map((_, index) => (
                                <Fragment key={index}>
                                    <th
                                        scope="row"
                                        className={`${'py-'+paddingYRows} px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap`}
                                    >
                                        <div className="w-full h-3 bg-gray-200 rounded-md my-1"></div>
                                    </th>
                                </Fragment>
                            ))}
                        </Row>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default SkeletonTable;
