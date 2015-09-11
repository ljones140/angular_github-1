describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));// loads the angular module

  var ctrl;
  var fakeSearch;
  var q, scope;

  beforeEach(function() {
    module(function($provide) {
      fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);
      $provide.factory('Search', function() {
        return fakeSearch;
        //alt to the above would be module( { USerInfo: fakeUserInfo })
      });
    });
  });

//inject is almost like include in Ruby - its just giving or providing things for the following function

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

    var items = [
        {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
        }
      ]
    };

    beforeEach(function() {
      fakeSearch.query.and.returnValue(q.when({ data: gitHubSearchResponse })); // returns a fake promise
    });

    it('displays search results', function() {
      ctrl.searchTerm = 'tansaku';
      ctrl.doSearch();
      scope.$apply();// $digest is alternative that would work.. ? works
      expect(ctrl.searchResult.items).toEqual(gitHubSearchResponse.items);
    });
  });
});
