describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;
  var fakeSearch;
  var q, scope;

  beforeEach(function() {
    module(function($provide) {
      fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);
      $provide.factory('Search', function() {
        return fakeSearch;
      });
    });
  });

  beforeEach(inject(function($q, $rootScope, $controller) {
    scope = $rootScope;
    ctrl = $controller('GitUserSearchController');
    q = $q;
  }));


  describe('when searching for a user', function() {

    it('initialises with an empty search result and term', function() {
      expect(ctrl.searchResult).toBeUndefined();
      expect(ctrl.searchTerm).toBeUndefined();
    });

    var gitHubSearchResponse = {
      "items" : [
        {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
        }
      ]
    };

    beforeEach(function() {
      fakeSearch.query.and.returnValue(q.when({ data: gitHubSearchResponse }));
    });

    it('displays search results', function() {
      ctrl.searchTerm = 'tansaku';
      ctrl.doSearch();
      scope.$apply();
      expect(ctrl.searchResult.items).toEqual(gitHubSearchResponse.items);
    });
  });
});
