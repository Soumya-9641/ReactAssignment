import  { useState } from 'react';
import PropTypes from 'prop-types';
const Department = ({ name, subDepartments, selected=[], onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    onSelect(name);
  };

  const allSubDepartmentsSelected = subDepartments.every(
    (subDepartment) => selected.includes(subDepartment)
  );
  const isParentSelected = selected.includes(name);
  const handleSubDepartmentSelect = (subDepartmentName) => {
    onSelect(subDepartmentName);

    // If all sub-departments are selected, select the parent department as well
    if (allSubDepartmentsSelected) {
      onSelect(name);
    }
  };

  return (
    <div>
      <div onClick={toggleExpand}>
        <input type="checkbox" checked={isParentSelected} onChange={handleSelect} />
        {name}
      </div>
      {expanded && (
        <div style={{ marginLeft: 20 }}>
          {subDepartments.map((subDepartment) => (
            <Department
              key={subDepartment.name}
              name={subDepartment.name}
              subDepartments={subDepartment.subDepartments}
              selected={selected}
              onSelect={handleSubDepartmentSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Department.propTypes = {
    name: PropTypes.string.isRequired,
    subDepartments: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        subDepartments: PropTypes.array.isRequired,
      })
    ).isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

export default Department;