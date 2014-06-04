'use strict';

angular.module('stoogeBloggerzApp')
  .service('Author', function Author(Blog) {
    var authors = []
    var data = Blog.getPosts();
    var hash = {};
    for(var i = 0; i < data.length; i++) {
      if(!(data[i].author in hash)) {
        authors.push(data[i].author);
        hash[data[i].author] = true;
      };

    };

    this.getAuthors = function() {

      return authors;
    };
/*
    var posts = Blog.getPosts();
    var hash = {};
    var authors = [];

    this.getAuthors = function() {
      debugger;
      for(var i = 0; i<posts.length; i++) {
        if(!posts[i].author in hash) {
          authors.push(posts[i].author);
          hash[posts[i].author] = true;
          return authors;
        };
        return
      };
    };*/
  });
