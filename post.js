let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' },
    ],
    isLive: true
};

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
let post2 = new Post('Tit','Corpo', 'Io');
console.log(post2);