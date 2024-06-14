let userData = [
    { id: 1, name: 'Nora Ela', email: 'nora.ela@example.com', password: 'password123' },
    { id: 2, name: 'Nora Doe', email: 'nora.doe@example.com', password: 'password123' }
];

module.exports = { userData };

function getUsers() {
    return userData;
}

module.exports = { getUsers };


