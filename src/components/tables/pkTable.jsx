import React from 'react'
import { Link } from 'react-router-dom'
import tableStyles from './tableStyles'

const TablePK = ({ tableArray }) => {


    if (tableArray === undefined || tableArray.length === 0) return 'loading...'

    const objKeys = Object.keys(tableArray[0])

    return (
        <table className={tableStyles.table}>
            <thead className={tableStyles.thead}>
                <tr>
                    {objKeys.map((keey, i) => (
                        <th key={i} className={tableStyles.th}>
                            {keey}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className={tableStyles.tbody}>
                {tableArray.map((row) => {
                    return (
                        <tr className={tableStyles.tr}>
                            {objKeys.map((keyOne) => (
                               
                                    <td className={tableStyles.td}>
                                        {row[keyOne]}
                                    </td>
                           
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TablePK

// export const Table = ({ cols, rows }) => {
// 	return (
// 		<StyledTable>
// 			<thead>
// 				{cols?.map((col) => (
// 					<th>{col.label}</th>
// 				))}
// 			</thead>
// 			<tbody>
// 				{rows?.map((row, i) => {
// 					return (
// 						<tr key={i}>
// 							{cols.map((c, j) => (
// 								<td key={j}>{row[c.label]}</td>
// 							))}
// 						</tr>
// 					);
// 				})}
// 			</tbody>
// 		</StyledTable>
// 	);
// };
