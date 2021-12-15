import React from 'react'

function Datalist({ bgColor, submitData, handleDelete, handleUpdate }) {
    return (
        <>
            <table>
                <thead>
                    <tr className={`${bgColor}_dark`}>
                        <th>#Sr</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Bio</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        submitData && submitData.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td><a href={`mailto:${item.email}`} className={`text_${bgColor}`}>{item.email}</a></td>
                                <td>{item.bio}</td>
                                <td>
                                    <span className={`text_${bgColor}`} style={{ cursor: 'pointer' }} onClick={()=>{handleUpdate(item, index)}}>U</span>
                                    <span className={`text_${bgColor}`} style={{ cursor: 'pointer', marginLeft: '25px' }} onClick={()=>{handleDelete(item, index)}}>D</span>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Datalist
