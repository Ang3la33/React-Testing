import React from "react";

const Users = ({users}) => {
    
    const filteredUsers = users.filter(user => user.startsWith('B'));

    return(
        <div>
            <h1>Users starting with letter B</h1>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;