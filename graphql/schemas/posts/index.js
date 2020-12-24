const fs = require('fs');
const path = require('path');
const PostService = require('../../api/posts');
const {errorHandler} = '../../api/utils';

const getPostsWithAuthors = cb => 
    async (parent, args, ctx, info) => {
        const posts = await cb(args, parent)
            .catch(errorHandler)
             
            console.log('arg: ', args);
            console.log('parent: ',parent)
         console.log('posts: ', posts);
        if(!posts.length) return []
        
        const authors = await PostService.getPostsAuthors(
            [...new Set(posts.map(({author_id}) => author_id))]
        )

        const authorMap = authors.reduce((map, author) => {
            map[author.id] = `${author.first_name} ${author.last_name}`
            return map
        }, {})

        return posts.map(({categories, author_id, ...rest}, index) => ({
            categories: categories.split(','),
            author: authorMap[author_id],
            ...rest
        }))
}

module.exports = {
    resolvers: {
        Query: {
            getPostsByType: getPostsWithAuthors(
                async ({type}) => await PostService.getPosts(type)
            ),
            getPostsByCategories: getPostsWithAuthors(
                async ({cat_ids}) => await PostService.getPosts('default', cat_ids)
            )
        }
    },
    
    schema: fs.readFileSync(
        path.resolve(
            __dirname, 
            './posts-schema.graphql'
        )
    ).toString()
}