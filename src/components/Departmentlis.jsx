
import { useState,useEffect } from "react";
//import { DataGrid } from '@mui/x-data-grid';
const customer_service = [
    
        {
          name: 'support',
          
        },
        {
          name: 'customer_success',
          
        },
      
   
  ];

const design=[
    
      
     
        {
          name: 'graphic_design',
          
        },
        {
          name: 'product_design',
          
        },
        {
            name: 'web_design',
            
          },
      
    
]

const Departmentlis = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [expanded, setExpanded] = useState(false)
    const [expanded1, setExpanded1] = useState(false)

  useEffect(() => {
    setUsers(design);
    setUser(customer_service)
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "design") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };
  const handleChange2 = (e) => {
    const { name, checked } = e.target;
    if (name === "customer_service") {
      let tempUser = user.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUser(tempUser);
    } else {
      let tempUser = user.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUser(tempUser);
    }
  };

  const handleClick=()=>{
    setExpanded(!expanded);
    
  }
  const handleClick1=()=>{
   
    setExpanded1(!expanded1)
  }


  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h3>Select Departments</h3>
        <div onClick={handleClick} className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="design"
           
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">design</label>
        </div>
        {
            expanded && (
                <div>
                {users.map((user, index) => (
                    <div className="form-check" key={index}>
                        <input
                        type="checkbox"
                        className="form-check-input"
                        name={user.name}
                        checked={user?.isChecked || false}
                        onChange={handleChange}
                        />
                        <label className="form-check-label ms-2">{user.name}</label>
                    </div>
                    ))}
                </div>
            )
        }
        
      </form>
      <br />
      <form className="form w-100">
      
        <div onClick={handleClick1} className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="customer_service"
           
            checked={!user.some((user) => user?.isChecked !== true)}
            onChange={handleChange2}
          />
          <label className="form-check-label ms-2">customer_service</label>
        </div>
        {
            expanded1 && (
                <div>
                {user.map((user, index) => (
                    <div className="form-check" key={index}>
                        <input
                        type="checkbox"
                        className="form-check-input"
                        name={user.name}
                        checked={user?.isChecked || false}
                        onChange={handleChange2}
                        />
                        <label className="form-check-label ms-2">{user.name}</label>
                    </div>
                    ))}
                </div>
            )
        }
        
      </form>
      
    </div>
  );
   
  
}

export default Departmentlis