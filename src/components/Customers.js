import React, { useEffect, useState } from "react"
import { json, Link } from "react-router-dom"
import { baseUrl } from "../shared"
import AddCustomer from "./AddCustomer"

export default function Customers() {
    const [customers, setCustomers] = useState()
    const [show, setShow] = useState(false)

    function toggleShow() {
        setShow(!show)
    }

    useEffect(() => {
        fetch(`${baseUrl}/api/customers/`)
            .then((res) => res.json())
            .then((data) => {
                setCustomers(data.customers)
            })
    }, [])

    function newCustomer(name, industry) {
        const data = { name: name, industry: industry }
        fetch(`${baseUrl}/api/customers/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Something went wrong!")
                }
                return res.json()
            })
            .then((data) => {
                toggleShow()
                setCustomers([...customers, data.customer])
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <h1>Here are our customers:</h1>
            <ul>
                {customers
                    ? customers.map((customer) => {
                          return (
                              <li key={customer.id}>
                                  <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
                              </li>
                          )
                      })
                    : null}
            </ul>
            <AddCustomer newCustomer={newCustomer} show={show} toggleShow={toggleShow} />
        </>
    )
}
