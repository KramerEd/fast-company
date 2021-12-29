import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";

const Users = (props) => {
    return (
        <table className="table table-bordered border-dark">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Проффесия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Встретился, оценка</th>
                    <th scope="col">Избранное</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => (
                    <User
                        {...user}
                        key={user._id}
                        onDelete={() => props.onDelete(user._id)}
                        onBookmark={() => props.onBookmark(user._id)}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Users;
