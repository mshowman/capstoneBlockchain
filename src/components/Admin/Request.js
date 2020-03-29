import React from 'react';
import {makeStyles, TableCell, TableRow, Button} from "@material-ui/core";

const useStyles = makeStyles({
   buttons: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'space-between',
       '& button': {
           marginTop: 5
       }
   }
});

const Request = ({requestData, index, updateRequestList}) => {

    if (!requestData) throw new Error('Missing key data');

    const { requester, date, description } = requestData;
    const classes = useStyles();

    return (
       <TableRow>
           <TableCell>{requester}</TableCell>
           <TableCell>{date}</TableCell>
           <TableCell>{description}</TableCell>
           <TableCell className={classes.buttons}>
               <Button variant="contained" color="primary" onClick={() => updateRequestList(index)}>Accept</Button>
               <Button variant="contained" color="secondary" onClick={() => updateRequestList(index)}>Decline</Button>
           </TableCell>
       </TableRow>
    );
}

export default Request;