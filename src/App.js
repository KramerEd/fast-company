import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import api from "./api/index";

import Users from "./components/users";
function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (_id) => {
        const newUsers = users.filter((user) => user._id !== _id);
        setUsers(newUsers);
    };
    const handleToggleBookmark = (_id) => {
        const newUsers = users.map((user) => {
            if (user._id === _id) {
                user.bookmark = !user.bookmark;
            }
            return user;
        });
        setUsers(newUsers);
    };

    return users.length ? (
        <>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelete}
                onBookmark={handleToggleBookmark}
            />
        </>
    ) : (
        <SearchStatus length={users.length} />
    );
}

export default App;
