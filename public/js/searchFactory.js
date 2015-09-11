githubUserSearch.factory('Search', ['$http', function($http) {

  var gitHubAPI = $http({method: 'GET', url: '/key'})
  gitHubAPI.then(function(success) {
    self.key = success.data;
  });
  var queryUrl = 'https://api.github.com/search/users';


    return {
      query: function(searchTerm) {
        return $http({
          url: queryUrl,
          method: 'GET',
          params: {
            'q': searchTerm,
            'access_token': self.key.github_token
          }
        });
      }
    }
}]);