import React, { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import NotFound from "../components/NotFound"
import { baseUrl } from "../shared"

export default function Customer() {
    const { id } = useParams()
    const [customer, setCustomer] = useState()
    const [tempCustomer, setTempCustomer] = useState()
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate()
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        fetch(`${baseUrl}/api/customers/${id}`)
            .then((res) => {
                if (res.status === 404) {
                    setNotFound(true)
                }
                return res.json()
            })
            .then((data) => {
                setCustomer(data.customer)
                setTempCustomer(data.customer)
            })
    }, [])

    function updateCustomer() {
        fetch(`${baseUrl}/api/customers/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tempCustomer),
        })
            .then((res) => res.json())
            .then((data) => {
                setCustomer(data.customer)
                setChanged(false)
            })
            .catch()
    }

    return (
        <>
            {notFound ? <NotFound /> : ""}
            {customer ? (
                <div>
                    <p className="m-2 block px-2"> {tempCustomer.id}</p>
                    <input
                        className="m-2 block px-2"
                        type="text"
                        value={tempCustomer.name}
                        onChange={(e) => {
                            setChanged(true)
                            setTempCustomer({ ...tempCustomer, name: e.target.value })
                        }}
                    />
                    <input
                        className="m-2 block px-2"
                        type="text"
                        value={tempCustomer.industry}
                        onChange={(e) => {
                            setChanged(true)
                            setTempCustomer({ ...tempCustomer, industry: e.target.value })
                        }}
                    />
                    {changed ? (
                        <>
                            <button
                                onClick={(e) => {
                                    setTempCustomer({ ...customer })
                                    setChanged(false)
                                }}
                            >
                                Cancel
                            </button>
                            <button onClick={updateCustomer}>Save</button>
                        </>
                    ) : null}
                </div>
            ) : null}
            <button
                onClick={() => {
                    fetch(`${baseUrl}/api/customers/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => {
                            if (!res.ok) {
                                throw new Error("Something went wrong")
                            }
                            navigate("/customers")
                        })
                        .catch((e) => console.log(e))
                }}
            >
                Delete
            </button>
            <br />
            <Link to="/customers">Go Back</Link>
        </>
    )
}
