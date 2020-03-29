import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import RequestContainer from "../../containers/Request/RequestContainer";

const useStyles = makeStyles({
  container: {
    width: "50%",
    marginRight: 20
  }
});

const Requests = ({ requestList }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table size="medium" aria-label="a medium-sized table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Requester</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestList.length > 0 ? (
              requestList.map((r, index) => (
              <RequestContainer
                requestData={r}
                index={index}
                key={`request-${index}`}
              />
            ))
          ) : (
            <TableRow>
              <TableCell>
                <h3>Good News!</h3>
                <div>No Requests at this time</div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Requests;
