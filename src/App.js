import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';



const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.gyanibooks.com/library/get_dummy_notes/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <TableContainer component={Paper}>
      <Table border="7">
        <TableHead bgcolor="seablue" >
          <TableRow >
            <TableCell >ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((note) => (
            <TableRow key={note.id}>
              <TableCell bgcolor="pink" >{note.id}</TableCell>
              <TableCell bgcolor="pink">{note.user}</TableCell>
              <TableCell bgcolor="pink">{note.title}</TableCell>
              <TableCell bgcolor="pink">{note.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyComponent;