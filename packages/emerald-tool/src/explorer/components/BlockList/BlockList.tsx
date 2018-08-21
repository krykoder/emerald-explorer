import * as React from 'react';
import { Link } from 'react-router-dom';
import { BlockWithoutTxData } from 'emerald-js';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export interface BlockListProps {
  blocks: Array<BlockWithoutTxData>;
}

function BlockList({ blocks }: BlockListProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Hash</TableCell>
          <TableCell>Timestamp</TableCell>
          <TableCell>Txs</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {blocks.map(b => {
          return (
              <TableRow key={b.number!}>
                <TableCell component="th" scope="row">{b.number}</TableCell>
                <TableCell><Link to={`/block/${b.hash}`}>{b.hash}</Link></TableCell>
                <TableCell>{b.timestamp}</TableCell>
                <TableCell>{b.transactions.length}</TableCell>
              </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default BlockList;
