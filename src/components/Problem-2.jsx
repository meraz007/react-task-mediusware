import React, { useState } from "react";
import { useEffect } from "react";

const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
    const [usContacts, setUsContacts] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://contact.mediusware.com/api/contacts/")
        .then((res) => res.json())
        .then((data) => setContacts(data.results));
    }, []);

    useEffect(() => {
        fetch("https://contact.mediusware.com/api/country-contacts/United States/")
        .then((res) => res.json())
        .then((data) => setUsContacts(data.results));
    }, []);

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const handleData = (contact) => {
        setData(contact);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const handleChanges = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClear = () => {
        setChecked(false);
        setSearchTerm("");
        console.log("Hello")
    };

    const filteredData = contacts.filter((contact) =>
        contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const filteredData1 = usContacts.filter((contact) =>
        contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#allContacts"
                        type="button"
                        onClick={handleClear}
                    >
                        All Contacts
                    </button>
                    <div
                        className="modal fade"
                        id="allContacts"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Modal A
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setChecked(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3 d-flex justify-content-evenly">
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#allContacts"
                                        >
                                            All Contacts
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-outline-warning"
                                            data-bs-toggle="modal"
                                            data-bs-target="#usContacts"
                                            onClick={handleClear}
                                        >
                                            US Contacts
                                        </button>
                                        <button
                                            type="button"
                                            className="btn "
                                            data-bs-dismiss="modal"
                                            style={{
                                            background: "white",
                                            border: "1px solid #46139f",
                                            color: "dark",
                                            }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={handleChange}
                                            />{" "}
                                            Only Even
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Search"
                                            value={searchTerm}
                                            onChange={handleChanges}
                                            className="ms-5 border-1 px-2"
                                        />
                                    </div>

                                    <div className="text-center mt-2">
                                        {filteredData.map((contact) => (
                                        <div key={contact.id}>
                                            {checked && contact.id % 2 == 0 && (
                                                <div
                                                    style={{
                                                        border: "1px solid gray",
                                                        padding: "5px",
                                                        cursor: "pointer",
                                                    }}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#contact"
                                                    onClick={() => handleData(contact)}
                                                >
                                                    {
                                                        <span className="d-flex justify-content-between">
                                                        <span>{contact.id}.</span>
                                                        <span>{contact.phone}</span>
                                                        </span>
                                                    }
                                                </div>
                                            )}
                                            {!checked && (
                                                <div
                                                    style={{
                                                        border: "1px solid gray",
                                                        padding: "5px",
                                                        cursor: "pointer",
                                                    }}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#contact"
                                                    onClick={() => handleData(contact)}
                                                >
                                                {
                                                    <span className="d-flex justify-content-between">
                                                    <span>{contact.id}.</span>
                                                    <span>{contact.phone}</span>
                                                    </span>
                                                }
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="contact"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal C
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-toggle="modal"
                            data-bs-target="#allContacts"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="mb-3">
                            <h1 htmlFor="message-text" className="col-form-label">
                                Id : {data.id}
                            </h1>
                            
                            <h1 htmlFor="message-text" className="col-form-label">
                                Phone : {data.phone}
                            </h1>
                            </div>
                        </form> 
                        </div>
                    </div>
                    </div>
                </div>
                <button
                    className="btn btn-lg btn-outline-warning"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#usContacts"
                    onClick={handleClear}
                >
                    US Contacts
                </button>
                <div
                    className="modal fade"
                    id="usContacts"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Modal B
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClear}
                        ></button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="mb-3 d-flex justify-content-evenly">
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#allContacts"
                                onClick={handleClear}
                            >
                                All Contacts
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#usContacts"
                            >
                                US Contacts
                            </button>
                            <button
                                type="button"
                                className="btn "
                                data-bs-dismiss="modal"
                                style={{
                                background: "white",
                                border: "1px solid #46139f",
                                color: "dark",
                                }}
                            >
                                Close
                            </button>
                            </div>
                            <div className="d-flex justify-content-between">
                            <div>
                                <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleChange}
                                />{" "}
                                Only Even
                            </div>

                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleChanges}
                                className="ms-5 border-1 px-2"
                            />
                            </div>
                            <div className="text-center mt-3">
                            {filteredData1.map((contact) => (
                                <div key={contact.id}>
                                {checked && contact.id % 2 == 0 && (
                                    <div
                                    style={{
                                        border: "1px solid gray",
                                        padding: "5px",
                                        cursor: "pointer",
                                    }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#usContact"
                                    onClick={() => handleData(contact)}
                                    >
                                    {
                                        <span className="d-flex justify-content-between">
                                            <span>{contact.id}.</span>
                                            <span>{contact.phone}</span>
                                        </span>
                                    }
                                    </div>
                                )}
                                {!checked && (
                                    <div
                                        style={{
                                            border: "1px solid gray",
                                            padding: "5px",
                                            cursor: "pointer",
                                        }}
                                        data-bs-toggle="modal"
                                        data-bs-target="#usContact"
                                        onClick={() => handleData(contact)}
                                    >
                                    {
                                        <span className="d-flex justify-content-between">
                                            <span>{contact.id}.</span>
                                            <span>{contact.phone}</span>
                                        </span>
                                    }
                                    </div>
                                )}
                                </div>
                            ))}
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div
                    className="modal fade"
                    id="usContact"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal C
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-toggle="modal"
                            data-bs-target="#usContacts"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="mb-3">
                            <h1 htmlFor="message-text" className="col-form-label">
                                Id : {data.id}
                            </h1>
                            
                            <h1 htmlFor="message-text" className="col-form-label">
                                Phone : {data.phone}
                            </h1>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;