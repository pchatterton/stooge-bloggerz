'use strict';

angular.module('stoogeBloggerzApp')
  .service('Blog', function Blog() {
        var posts = [
              { title: 'Moe says...', body: '"Why I oughta..."', author: 'Moe'},
              { title: 'Curly says...', body: '"Nyuk Nyuk Nyuk!"', author: 'Curly'},
              { title: 'Moe says...', body: '"You nitwit!"', author: 'Moe'},
              { title: 'Larry says...', body: '"What\'s the idea?"', author: 'Larry'},
              { title: 'Paul says...', body: '"What\'s the ok?"', author: 'Paul'},
            ]

  this.getPosts = function() {
    return posts;
  };

  this.insertPosts = function(new_title, new_body, new_author) {
    alert(title + body + author)
    posts.push({
            title: new_title,
            body: new_body,
            author: new_author
        });

  }

  });
