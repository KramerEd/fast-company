import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import api from "../api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    let [count, setCount] = useState(api.users.fetchAll().length);

    const deleteUser = () => {
        setCount(count - 1);
        users.shift();
    };

    const renderUsers = () => {
        return (
            <table className="table table-bordered border-dark">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Проффесия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Встретился, оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) =>
                        user.bookmark ? (
                            console.log(user)
                        ) : (
                            <tr key={user._id}>
                                <th scope="row">{user.name}</th>
                                <td>{user.profession.name}</td>
                                <td>
                                    {user.qualities.map((qual) => (
                                        <span
                                            key={qual._id}
                                            className={
                                                "mx-1 badge bg-" + qual.color
                                            }
                                        >
                                            {qual.name}
                                        </span>
                                    ))}
                                </td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate} / 5</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={deleteUser}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        );
    };
    const renderUserList = () => {
        return (
            <>
                <h1>{renderBadge()}</h1>
                {count ? renderUsers() : ""}
            </>
        );
    };

    const renderBadge = () => {
        if (count <= 0) {
            return (
                <span className="badge bg-danger">
                    Никто сегодня с тобой не тусанет
                </span>
            );
        } else if (count <= 4) {
            return (
                <span className="badge bg-primary">
                    {count} человeка тусанут с тобой сегодня
                </span>
            );
        } else {
            return (
                <span className="badge bg-primary">
                    {count} человек тусанет с тобой сегодня
                </span>
            );
        }
    };
    return <>{renderUserList()}</>;
};

export default Users;
