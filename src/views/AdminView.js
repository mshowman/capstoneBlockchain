import React from 'react';
import Requests from '../components/Admin/Requests';

const AdminView = () => {
    const reqdata = [
        {
            requester: 'Me',
            date: '1-21-2020',
            description: 'Rule info here'
        },
        {
            requester: 'Me',
            date: '1-21-2020',
            description: 'Rule info here'
        },
        {
            requester: 'Me',
            date: '1-21-2020',
            description: 'Rule info here'
        },
        {
            requester: 'Me',
            date: '1-21-2020',
            description: 'Rule info here'
        },
    ];
    return (
        <div>
            <Requests requestsArray={reqdata}/>
            <div>This is the group form</div>
        </div>
    );
}

export default AdminView;