const homeJson = require('../data/home');

module.exports = {
    author: () => {

        return { title: 'Author' }
    },
    blogDetail: () => {

        return { title: 'Blog detail' }
    },
    category: (req, res) => {
        console.log(req.params)
        return { title: 'Cateogry' }
    },
    search: (req, res) => {
        console.log(req.params)

        return { title: 'Search' }
    },
    index: (req, res) => {
        
        let { featured, highlight, posts } = homeJson;

        let featured1 = featured?.[0] || null;
        featured = featured.splice(1)

        let highlight1 = highlight?.[0] || null;
        highlight = highlight.splice(1)

        let post1 = posts.slice(0,3)
        let post2 = posts.slice(3, 7)
        posts = posts.splice(7)


        return { title: 'Home title',...homeJson, featured1, featured, highlight, highlight1, post1, post2, posts }
    },
    contact: () => {


        return { title: 'Contact' }
    }
}