import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Dropdown from "../Rule/Dropdown";

const useStyles = makeStyles({
    container: {
        width: '45%',
    },
    span: {
        width: '40%',
        display: 'inline-flex',
        flexDirection: 'column',
        padding: '0 5px',
        textAlign: 'center'
    },
    buttons: {
        width: '5%',
        display: 'inline-flex',
        flexDirection: 'column',
    },
    dropdown: {
        width: 300,
        margin: '40px 75px',
        paddingTop: 30
    },
    label: {
        width: 300,
        marginLeft: 70,
        paddingTop: 30
    }
});

const ManageGroups = () => {
    const groups = ['Admin', 'Rule Setter', 'User'];
    const [selectedGroup, setSelectedGroup] = useState();
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Dropdown
                label={'Manage a Group'}
                selected={selectedGroup}
                saveState={() => setSelectedGroup()}
                content={groups}
                labelStyles={classes.label}
                dropdownStyles={classes.dropdown}
            />
            <div>
                <span className={classes.span}>Unselected</span>
                <span className={classes.buttons}>
                    <button>{'>'}</button>
                    <button>{'<'}</button>
                </span>
                <span className={classes.span}>Selected</span>
            </div>
        </Paper>
    );
};

export default ManageGroups;