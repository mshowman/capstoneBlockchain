import React from 'react';
import {TableCell, TableRow} from "@material-ui/core";

const Request = ({requestData}) => {

    if (!requestData) throw new Error('Missing key data');

    const { requester, date, description } = requestData;

    return (
       <TableRow>
           <TableCell>{requester}</TableCell>
           <TableCell>{date}</TableCell>
           <TableCell>{description}</TableCell>
           <TableCell><button>Accept</button><button>Decline</button></TableCell>
       </TableRow>
    );
}

export default Request;