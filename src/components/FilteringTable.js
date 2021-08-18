import React, { useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';

import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS, GROUP_COLUMNS } from './columns';

import './table.css';
import GlobalFilter from './GlobalFilter';

export default function FilteringTable() {
  const columns = useMemo(() => GROUP_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { globaFilter } = state;

  return (
    <>
      <GlobalFilter filter={globaFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        {/* <thead>
        <tr>
          <th>Расписание на первую неделю обучения</th>
        </tr>
      </thead> */}
        <thead
          // style={{ position: 'fixed' }}
          className='nav'
        >
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroups) => (
            <tr {...footerGroups.getFooterGroupProps()}>
              {footerGroups.headers.map((column) => (
                <td
                  style={{ backgroundColor: '#04aa6d' }}
                  {...column.getFooterProps()}
                >
                  {column.render('Footer')}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
}
