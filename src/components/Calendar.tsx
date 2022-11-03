// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { styled } from '@mui/material';
// export const CustomPaper = styled(Paper)`
//   margin-bottom: 0px;
//   height: calc(100vh - 84px);
//   height: -moz-calc(100vh - 84px);
//   height: -o-calc(100vh - 84px);
//   height: -webkit-calc(100vh - 84px);
// `;
// export const CustomTableContainer = styled(TableContainer)<{ height?: string }>`
//   margin-bottom: 0px;
//   height: ${({ height }) => (height ? `calc(100vh - ${height})` : `calc(100vh - 84px)`)};
//   height: ${({ height }) => (height ? `-moz-calc(100vh - ${height})` : `-moz-calc(100vh - 84px)`)};
//   height: ${({ height }) => (height ? `-o-calc(100vh - ${height})` : `-o-calc(100vh - 84px)`)};
//   height: ${({ height }) => (height ? `-webkit-calc(100vh - ${height})` : `-webkit-calc(100vh - 84px)`)};
//   max-height: calc(100vh - 84px);
//   max-height: -moz-calc(100vh - 84px);
//   max-height: -o-calc(100vh - 84px);
//   max-height: -webkit-calc(100vh - 84px);
//   overflow-y: overlay;
//   overflow-x: overlay;
// `;
// export type CalendarProps = {
//   timeRange: Array<any>;
//   dateRange: Array<any>;
//   children?: React.ReactNode;
// };

// export default function StyledCalendar({
//   children,
//   timeRange,
//   dateRange,
// }: CalendarProps): JSX.Element {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <CustomPaper
//       sx={{
//         width: '100%',
//         background: 'transparent',
//         color: 'white',
//       }}>
//       <CustomTableContainer className="visible-scrollbar">
//         <Table style={{ width: 'auto' }} stickyHeader aria-label="sticky table">
//           <caption>A basic table example with a caption</caption>
//           <TableHead>
//             <TableRow>
//               <TableCell
//                 sx={{
//                   background: 'rgba(0, 0, 0)',
//                   color: 'white',
//                   borderBottom: 'unset',
//                   borderRight: '1px solid #3C406C',
//                   minWidth: '60px',
//                   width: '60px',
//                   maxWidth: '60px',
//                 }}
//                 key="date"
//                 align="center"></TableCell>
//               {dateRange.map((day) => (
//                 <>
//                   <TableCell
//                     sx={{
//                       background: 'rgba(0, 0, 0)',
//                       color: 'white',
//                       borderBottom: 'unset',
//                       borderRight: '1px solid #3C406C',
//                       minWidth: '157px',
//                       width: '157px',
//                       maxWidth: '157px !important',
//                     }}
//                     key="required"
//                     align="center">
//                     {day}
//                   </TableCell>
//                 </>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody sx={{ position: 'sticky' }}>
//             {timeRange.map((row: any, index) => {
//               return (
//                 <TableRow
//                   style={{ height: '70px' }}
//                   hover
//                   role="checkbox"
//                   tabIndex={-1}
//                   key={index}>
//                   <TableCell
//                     // colSpan={4}
//                     align="center"
//                     sx={{
//                       color: 'white',
//                       border: '1px solid #3C406C',
//                       borderBottom: 'unset',
//                       borderLeft: 'unset',
//                       minWidth: '60px',
//                       width: '60px',
//                       maxWidth: '60px',
//                     }}>
//                     {row}
//                   </TableCell>
//                   {dateRange.map((day) => (
//                     <TableCell
//                       // colSpan={4}
//                       align="center"
//                       sx={{
//                         color: 'white',
//                         border: '1px solid #3C406C',
//                         borderBottom: 'unset',
//                         minWidth: '157px',
//                         width: '157px',
//                         maxWidth: '157px !important',
//                       }}></TableCell>
//                   ))}
//                 </TableRow>
//               );
//             })}
//             {children}
//           </TableBody>
//         </Table>
//       </CustomTableContainer>
//     </CustomPaper>
//   );
// }