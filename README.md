# A-Backend-API-for-Blog-app-node-js-

my personal project of creating a blog, i guess i start from creating backend service for my blog.
the purpose of this project is to learn backend programming and to finish a roadmap from https://github.com/kamranahmedse/developer-roadmap

## Progress

### 16/12/2018

    - Learn creating relations between model with sequelize
    - Creating comment model & migration
    - GET  : api/posts/ now included with comments

## API

    - GET  : api/posts/             Get all post
    - POST : api/posts/             Create a post
    - GET  : api/posts/:id          Get a spesific post by id
    - POST : api/:id/update         Update a post by id
    - POST : api/:id/delete         Delete a post by id
    - GET  : api/posts/:id/comments Get all comments belong to a post ( do i even need this ?)
    - POST : api/posts/:id/comments Create a comment for spesific post

### Note

#### Cant use PUT or DELETE method

my server does not allowed me to use PUT or DELETE method, for now i just use POST method to do update and delete.

#### Can we use class for controller ?

i am thinking of using class in controller instead, but i still not grasp the concept of callback function.

#### Should i create a comments controller ?

shoud i create a comments controller for managing comments resource or just manage it with postscontroller.
the way i see it we never want to get a collection of all comment , we only want a comments when we asking for a post.
