import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import spinner from '../../../../images/spinner.gif';
import './ServiceTable.css';

const ServiceTable = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-harbor-40880.herokuapp.com/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
    })

    const handleStatusChange = (e, id) => {
        const updatedStatus = e.target.value;
        const updateData = { id, updatedStatus };

        fetch(`https://aqueous-harbor-40880.herokuapp.com/updateStatus`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Status update successful")
                } else {
                    alert("Status update unsuccessful")
                }
            })
    }

    return (
        <>
            <h1 className='text-center my-2'>Service List</h1>
            <Table hover size="sm" responsive>
                <thead className='table-header'>
                    <tr className="table-row">
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Logo</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {!allData.length && <img className='d-block mx-auto' src={spinner} alt="" />}
                    {
                        allData.map(data => (
                            <tr className="table-row" key={data._id} id={data._id}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.category}</td>
                                <td> <img className="m-auto rounded-circle" src={`data:image/png;base64,${data.image.img}`} alt="" width="30" /> </td>
                                <td>
                                    <select onChange={(e) => handleStatusChange(e, data._id)}>
                                        {
                                            data.status === 'Pending' &&
                                            <>
                                                <option value="Pending" defaultValue className='text-danger' >Pending</option>
                                                <option value="Ongoing" className='text-warning'>Ongoing</option>
                                                <option value="Done" className='text-success' >Done</option>
                                            </>
                                        }
                                        {
                                            data.status === 'Ongoing' &&
                                            <>
                                                <option value="Ongoing" defaultValue className='text-warning' >Ongoing</option>
                                                <option value="Done" className='text-success'>Done</option>
                                                <option value="Pending" className='text-danger' >Pending</option>
                                            </>
                                        }
                                        {
                                            data.status === 'Done' &&
                                            <>
                                                <option value="Done" defaultValue className='text-success'>Done</option>
                                                <option value="Ongoing" className='text-warning'>Ongoing</option>
                                                <option value="Pending" className='text-danger' >Pending</option>
                                            </>
                                        }
                                    </select>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
};

export default ServiceTable;