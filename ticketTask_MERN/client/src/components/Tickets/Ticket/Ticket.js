import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';

import { getTickets } from '../../../actions/tickets';
import DeleteTicket from './DeleteTicket';
import EditTicket from './EditTicket';


const columns = [
    {field: '_id', headerName: 'ID', width: '90', hide: true},
    {field: 'emp_id', headerName: 'User_Id', width: '90'},
    {field: 'usrname', headerName: 'User Name', width: '100'},
    {field: 'ticket_desc', headerName: 'ticket_desc', width: '220'},
    {field: 'created_At', headerName: 'Created At', width: '130'},
    {field: 'updated_At', headerName: 'Updated At', width: '150'},
    {field: 'deleted_At', headerName: 'Deleted At', width: '100'},
    {
        field: 'Edit',
        renderCell: (cellValues) => {
            return(
               <EditTicket cellValues={cellValues} />
            );
        }
    },
    {
        field: 'Delete',
        renderCell: (cellValues) => {
            return(
                <DeleteTicket cellValues={cellValues} />
            );
        }
    }
]


const Ticket = ({ ticket }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTickets())
    },[dispatch])
    // const classes = useStyles();
    const tickets = useSelector((tickets)=> tickets);
    console.log(ticket)

    return(
        <DataGrid sx={{ m: 2,
            boxShadow: 3,
            border: 3,
            borderColor: 'primary.light','& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
        }, }}
                columns={columns}
                rows={tickets.tickets}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                getRowId={row => row._id}
                disableSelectionOnClick
                autoHeight
                
                >
            </DataGrid >
    )
}

export default Ticket;