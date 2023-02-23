import React, { useState } from "react";

const Problem1 = () => {
    const [show, setShow] = useState("");
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [completed, setCompleted] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, { name, status }]);
        setName("");
        setStatus("");
    };

    const handleFilter = (status) => {
        setShow(status);
        if (status == "completed" || status == "active") {
            setCompleted(
                tasks.filter((task) => {
                return task.status === status;
                })
            );
        }

        else {
            tasks.sort((a, b) => {
                if (a.status === "active" && b.status !== "active") return -1;
                    if (
                        a.status === "completed" &&
                        b.status !== "active" &&
                        b.status !== "completed"
                    )
                        return -1;
                return 1;
            });

            setCompleted(tasks);
        }
            setIsClicked(true);
    };

  

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                
                <div className="col-6 ">
                    <form
                        onSubmit={handleSubmit}
                        className="row gy-2 gx-3 align-items-center mb-4"
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(event) => {
                                setName(event.target.value);
                                setIsClicked(false);
                                setShow("")
                                }}
                                className="form-control"
                            />
                        </div>

                        <div className="col-auto">
                            <input
                                type="text"
                                placeholder="Status"
                                value={status}
                                onChange={(event) => {
                                setStatus(event.target.value);
                                setIsClicked(false);
                                setShow("")
                                }}
                                className="form-control"
                            />
                        </div>

                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "all" && "active"}`}
                                type="button"
                                onClick={() => handleFilter("all")}
                            >
                                All
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "active" && "active"}`}
                                type="button"
                                onClick={() => handleFilter("active")}
                                value="active"
                            >
                                Active
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "completed" && "active"}`}
                                type="button"
                                onClick={() => handleFilter("completed")}
                                value="completed"
                            >
                                Completed
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content"></div>

                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {!isClicked &&
                                tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                
                                </tr>
                                ))}
                                
                            {isClicked &&
                                completed.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;