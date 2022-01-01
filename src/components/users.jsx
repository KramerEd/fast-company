import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
const Users = (props) => {
    const count = props.users.length;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const pageSize = 4;

    const [currentPage, setCurrentPage] = useState(1);
    const userCrop = paginate(props.users, currentPage, pageSize);

    return (
        <>
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
                    {userCrop.map((user) => (
                        <User
                            {...user}
                            key={user._id}
                            onDelete={() => props.onDelete(user._id)}
                            onBookmark={() => props.onBookmark(user._id)}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Users;
