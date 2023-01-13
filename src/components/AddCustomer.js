import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"

export default function AddCustomer(props) {
    const [inputValueName, setInputValueName] = useState("")
    const [inputValueIndustry, setInputValueIndustry] = useState("")
    const [show, setShow] = useState(props.show)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <button
                onClick={props.toggleShow}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-auto block m-2"
            >
                + Add Customer
            </button>

            <Modal show={props.show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        id="editmodal"
                        className="w-full max-w-sm"
                        onSubmit={(e) => {
                            e.preventDefault()
                            props.newCustomer(inputValueName, inputValueIndustry)
                            setInputValueName("")
                            setInputValueIndustry("")
                            handleClose("")
                        }}
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    placeholder="Computing"
                                    value={inputValueName}
                                    onChange={(e) => setInputValueName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="industry"
                                >
                                    Industry
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="industry"
                                    type="text"
                                    placeholder="Google"
                                    value={inputValueIndustry}
                                    onChange={(e) => setInputValueIndustry(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={props.toggleShow}
                    >
                        Close
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        form="editmodal"
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
