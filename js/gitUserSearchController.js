githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    console.log(token)
    self.searchResult = searchResource.get(
      { q: self.searchTerm,
        access_token: token }
    );
  }
}]);