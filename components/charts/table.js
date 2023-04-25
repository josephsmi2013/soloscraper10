import 'react-data-grid/lib/styles.css';
import { useState, useMemo } from 'react';
import DataGrid, {textEditor} from 'react-data-grid';


function getColumns(){
    return [
        {
            key: 'id',
            name: 'ID',
            width: 60,
            frozen: true,
            summaryFormatter({ row }) { return <> Total of {row.totalCount} records</>; },
        },          
        {
            key: 'title',
            name: 'Task',
            width: 120,
            editor: textEditor,
            summaryFormatter({ row }) { return <> Sum of {row.totalSum} records</>; },
        },
    ];
}

function createRows(){
    const rows = [];

    for (let i = 0; i < 5; i++) {
      rows.push({ id: i, title: `Task #${i + 1}` });        
    }

    return rows;
}


function rowKeyGetter(row) {
    return row.id;
  }


  function getComparator(sortColumn){
    switch (sortColumn) {

      case 'title':
        return (a, b) => {
          return a[sortColumn].localeCompare(b[sortColumn]);
        };

      case 'id':
        return (a, b) => {
          return a[sortColumn] - b[sortColumn];
        };

      default:
        throw new Error(`unsupported sortColumn: "${sortColumn}"`);
    }
  }


export default function Table() {
    const [rows, setRows] = useState(createRows);
    const [sortColumns, setSortColumns] = useState([]);  

    const columns = useMemo(() => getColumns());   
    
    const summaryRows = useMemo(() => {
        const summaryRow = {
          id: 'total_0',
          totalCount: rows.length,
          totalSum: rows.reduce(function (acc, obj) { return acc + obj.id; }, 0)
        };
        return [summaryRow];
      }, [rows]);    
    

    const sortedRows = useMemo(() => {
        if (sortColumns.length === 0) return rows;
    
        return [...rows].sort((a, b) => {
          for (const sort of sortColumns) {
            const comparator = getComparator(sort.columnKey);
            const compResult = comparator(a, b);
            if (compResult !== 0) {
              return sort.direction === 'ASC' ? compResult : -compResult;
            }
          }
          return 0;

        });

    }, [rows, sortColumns]);

    const gridElement = (
        <DataGrid
          rowKeyGetter={rowKeyGetter}
          columns={columns}
          rows={sortedRows}
          defaultColumnOptions={{ sortable: true, resizable: true }}
          onRowsChange={setRows}
          sortColumns={sortColumns}
          onSortColumnsChange={setSortColumns}
          bottomSummaryRows={summaryRows}
          className="fill-grid"
          direction={'ltr'}
        />
      );

    return (
        <div>{gridElement}</div>
    );
}