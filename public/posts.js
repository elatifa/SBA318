let postData = [
    { id: 1, title: 'Post 1', content: 'This is the content of post 1', userId: 1 },
    { id: 2, title: 'Post 2', content: 'This is the content of post 2', userId: 2 }
];

module.exports = { postData };
function getPosts() {
    return postData;
}

module.exports = { getPosts }; 