import 'react-data-grid/lib/styles.css';
import { useState, useMemo } from 'react';
import DataGrid, {textEditor} from 'react-data-grid';
import { Flex } from '@chakra-ui/react';


function getColumns(){
  return [
    {
      key: 'loan_id',
      name: 'ID',
      width: 60,
      frozen: true,
      summaryFormatter({ row }) { return <> {row.rowCount} rows</>; },
    }, 
    {
      key: 'requester_name',
      name: 'Name',
      width: 120,
      frozen: true,
    }, 
    {
      key: 'requester_score',
      name: 'Score',
      width: 60,
    },
    {
      key: 'requester_loans_repaid',
      name: 'Repaid',
      width: 120,
    },
    {
      key: 'loan_amount',
      name: 'Amount',
      width: 120,
      summaryFormatter({ row }) { return <> ${row.loanAmount} </>; },
    },             
    {
      key: 'loan_lender_tip',
      name: 'Tip',
      width: 120,
      summaryFormatter({ row }) { return <> ${row.loanTip} </>; },
    },
    {
      key: 'loan_due_date',
      name: 'Due',
      width: 120,
    },
    {
      key: 'loan_reason',
      name: 'Reason',
      width: 120,
    },                               
  ];
}



function rowKeyGetter(row) {
    return row.loan_id;
  }


  function getComparator(sortColumn){
    switch (sortColumn) {
      
      case 'loan_id':
      case 'requester_score':   
      case 'requester_loans_repaid':             
      case 'loan_amount':      
      case 'loan_lender_tip':    
      case 'loan_due_date':              
        return (a, b) => {
          return a[sortColumn] - b[sortColumn];
        };

      case 'requester_name':        
      case 'loan_reason':
        return (a, b) => {
          return a[sortColumn].localeCompare(b[sortColumn]);
        };

      default:
        throw new Error(`unsupported sortColumn: "${sortColumn}"`);
    }
  }


export default function Table({loans:rows}) {
    const gridStyle = { minHeight: '100%' }
    const [sortColumns, setSortColumns] = useState([]);  

    const columns = useMemo(() => getColumns());   
    
    const summaryRows = useMemo(() => {
        const summaryRow = {
          loan_id: 'total_0',
          rowCount: rows.length,
          loanAmount: rows.reduce(function (acc, obj) { return acc + Number(obj.loan_amount.replace(/[^0-9.-]+/g,""));; }, 0),
          loanTip: rows.reduce(function (acc, obj) { return acc + Number(obj.loan_lender_tip.replace(/[^0-9.-]+/g,""));; }, 0)
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
          style={gridStyle}
          defaultColumnOptions={{ sortable: true, resizable: true }}
          sortColumns={sortColumns}
          onSortColumnsChange={setSortColumns}
          bottomSummaryRows={summaryRows}
          direction={'ltr'}
        />
      );

    return (
        <Flex flexGrow={1} justifyContent={'flex-end'}>{gridElement}</Flex>
    );
}