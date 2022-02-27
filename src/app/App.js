import React, { useState, useEffect } from "react";
import Users from "./layouts/users";
import api from "./api";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import User from "./components/user";

function App() {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.default.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route
                    path="/users/:userId"
                    render={(props) => <User users={users} {...props} />}
                />
                <Route
                    path="/users"
                    render={(props) => (
                        <Users
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                            users={users}
                            {...props}
                        />
                    )}
                />
            </Switch>
        </>
    );
}

export default App;
