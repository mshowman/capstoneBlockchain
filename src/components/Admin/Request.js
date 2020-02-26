import React from 'react';
import {makeStyles, TableCell, TableRow} from "@material-ui/core";

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

const Request = ({requestData}) => {

    if (!requestData) throw new Error('Missing key data');

    const { requester, date, description } = requestData;
    const classes = useStyles();

    return (
       <TableRow>
           <TableCell>{requester}</TableCell>
           <TableCell>{date}</TableCell>
           <TableCell>{description}</TableCell>
           <TableCell className={classes.buttons}><button>Accept</button><button>Decline</button></TableCell>
       </TableRow>
    );
}

export default Request;