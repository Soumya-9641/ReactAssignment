import { useEffect,useState,useContext } from "react";
import { UserContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Departmentlis from "../components/Departmentlis";

  
const Renderdata = () => {
   const navigate=useNavigate();
   
  const { userDetails } = useContext(UserContext);
    const [rows, setRows] = useState([]);
    useEffect(() => {
      // Check if userDetails exist in context, if not, navigate back to the FirstPage
      if (!userDetails) {
        // Add your error message here
        alert('Please enter your details on the First Page before accessing the Second Page.');
        //history.push('/');
        navigate("/")
      }
    }, [userDetails,navigate]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((data) => {
            const formattedRows = data.map((item) => ({
              id: item.id,
              
              title: item.title,
              body: item.body,
            }));
            setRows(formattedRows);
          })
          .catch((error) => console.log(error));
      }, []);

      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
       
        { field: 'title', headerName: 'title', width: 500 },
        { field: 'body', headerName: 'body', width: 500 },
      ];
    

    
  return (
    <>

  
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
        <Departmentlis/>
  </>

  )
}

export default Renderdata