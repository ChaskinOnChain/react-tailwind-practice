import React, { useState } from "react"
import Employee from "../components/Employee"
import { v4 as uuidv4 } from "uuid"
import AddEmployee from "../components/AddEmployee"
import Header from "../components/Header"

function Exmployees() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Caleb",
            role: "dev",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            name: "Caleb",
            role: "dev",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            name: "Caleb",
            role: "dev",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            name: "Caleb",
            role: "dev",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 5,
            name: "Caleb",
            role: "dev",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 6,
            name: "Caleb",
            role: "dev",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ])

    function handleName(id, newName) {
        setEmployees((prevEmployeeObject) => {
            return prevEmployeeObject.map((employeeObject) => {
                if (employeeObject.id === id) {
                    return { ...employeeObject, name: newName }
                } else {
                    return employeeObject
                }
            })
        })
    }

    function handleChange(id, inputValueName, inputValueRole) {
        setEmployees((prevEmployeeObject) => {
            return prevEmployeeObject.map((employeeObject) => {
                if (employeeObject.id === id) {
                    if (inputValueName === "" && inputValueRole) {
                        return { ...employeeObject, role: inputValueRole }
                    } else if (inputValueRole === "" && inputValueName) {
                        return { ...employeeObject, name: inputValueName }
                    } else {
                        return { ...employeeObject, name: inputValueName, role: inputValueRole }
                    }
                } else {
                    return employeeObject
                }
            })
        })
    }

    function addChange(inputValueName, inputValueRole, imageUrl) {
        const newID = employees.length + 1
        setEmployees((prevEmployeeObject) => {
            return [
                ...prevEmployeeObject,
                {
                    id: newID,
                    name: inputValueName,
                    role: inputValueRole,
                    img: imageUrl,
                },
            ]
        })
    }

    const showEmployees = true
    return (
        <div className="">
            {showEmployees ? (
                <>
                    <div className="flex flex-wrap justify-center">
                        {employees.map((employee) => {
                            return (
                                <Employee
                                    key={uuidv4()}
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    handleChange={handleChange}
                                />
                            )
                        })}
                    </div>
                    <AddEmployee addChange={addChange} />
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    )
}

export default Exmployees
