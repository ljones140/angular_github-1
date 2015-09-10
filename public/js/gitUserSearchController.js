githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  // self.doSearch = function() {
  //   self.searchResult = searchResource.get(
  //     { access_token: token, q: self.searchTerm }
  //   );

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
  }
}]);