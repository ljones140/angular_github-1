// sepcify dependencies as a sting in array and it will get passed into the function. reason for string is minification.

githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  // self.doSearch = function() {
  //   self.searchResult = searchResource.get(
  //     { access_token: token, q: self.searchTerm }
  //   );

  self.doSearch = function() {
    if (self.searchTerm) {
      Search.query(self.searchTerm)  //returns a promise
        .then(function(response) {
          self.searchResult = response.data;
        });
    }
  }
}]);