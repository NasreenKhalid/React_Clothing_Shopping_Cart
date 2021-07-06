import React from 'react'
import { tasks } from '../tableData'
import './Table.css'

export const Table = () => {
    return (
<div className="container">
    <h2>Final Output</h2>
    <table>
    <thead>
    <tr className="header">
        <th>No</th>
        <th>Plot</th>
        <th>Level</th>
        <th>Location</th>
        <th>Apartment Partitioning</th>
        <th>Commence Stage 1 Fit Out</th>
        <th>Install SVP / RWP</th>
    </tr>
    </thead>
    <tbody>
    {tasks.map((task,idx)=>{
            return    <tr key={idx}>
                    <td>{idx +1}</td>
                    <td>{task.plot}</td>
                    <td>{task.level}</td>
                    <td>{task.location}</td>
                    <td>{task.taskName === 'Apartment Partitioning' ? task.complete : ''}</td>
                    <td>{task.taskName === 'Commence Stage 1 Fit Out' ? task.complete : ''}</td>
                    <td>{task.taskName === 'Install SVP / RWP' ? task.complete : ''}</td>
                </tr>
})}
               </tbody>
            </table>
        </div>
    )
}
