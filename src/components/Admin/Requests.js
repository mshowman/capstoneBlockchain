import React from 'react';
import Request from './Request';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";

const Requests = ({requestsArray}) => {
    return requestsArray
        ? <TableContainer component={Paper}>
            <Table size="medium" aria-label="a medium-sized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Requester</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                {requestsArray.map(r => <Request requestData={r}/>)}
            </Table>
        </TableContainer>
        : <div>
            <h3>Good News!</h3>
            <div>No Requests at this time</div>
        </div>
}

export default Requests;