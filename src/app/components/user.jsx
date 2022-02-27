import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import PropTypes from "prop-types";
const User = ({ match }) => {
    const params = match.params;
    console.log(params);
    const [user, setUser] = useState();
    useEffect(() => {
        API.users.default.getById("67rdca3eeb7f6fgeed471815").then((data) => {
            setUser(data);
        });
    });
    return (
        <>
            {user && (
                <>
                    <h1>{user.name}</h1>
                    <h2>Проффессия: {user.profession.name}</h2>
                    <div>
                        {user.qualities.map((item) => {
                            return (
                                <div
                                    key={item.name}
                                    className={"badge bg-" + item.color}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                    <h3>completedMeetings: {user.completedMeetings}</h3>
                    <h3>Rate: {user.rate}</h3>
                    <Link to="/users">
                        <button>Все пользователи</button>
                    </Link>
                </>
            )}
        </>
    );
};

User.propTypes = {
    match: PropTypes.object
};

export default User;
