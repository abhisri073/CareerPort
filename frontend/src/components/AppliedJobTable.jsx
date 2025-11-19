import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>
            List of your applied jobs
        </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2].map((item,index)=>(
                    <TableRow key={index}>
                        <TableCell>07-10-2025</TableCell>
                        <TableCell>Backend Developer</TableCell>
                        <TableCell>Microsoft</TableCell>
                        <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
