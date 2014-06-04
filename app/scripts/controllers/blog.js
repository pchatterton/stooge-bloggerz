'use strict';

angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, Blog, Author) {
    $scope.theFilter = {};
    $scope.blogPosts = Blog.getPosts();
    $scope.authors = Author.getAuthors();

    $scope.filterData = function(index) {
      $scope.theFilter.author = $scope.authors[index];
    }

    $scope.insertPosts = function() {
      var name = $scope.post.name;
      var title = $scope.post.title;
      var post = $scope.post.body;
      Blog.insertPosts(title, body, name);
      $scope.post.name = '';
      $scope.post.title = '';
      $scope.post.body = '';

    }
  });
