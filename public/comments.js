let commentData = [
    { id: 1, text: 'Great post!', postId: 1, userId: 1 },
    { id: 2, text: 'Thanks for sharing!', postId: 2, userId: 2 }
];

module.exports = { commentData };
function getComments() {
    return commentData;
}

module.exports = { getComments }; 

