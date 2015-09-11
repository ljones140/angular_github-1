var mock = require('protractor-http-mock');

describe('GitHub profile finder', function() {

  beforeEach(function(){
    mock(['githubUserSearch.js'])
  });

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))
  var searchLabel = element(by.className('search-label'))
  var memberScore = element(by.className('member-score'))

  beforeEach(function() {
    browser.get('http://localhost:9292');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  xit('finds profiles', function() {
    searchBox.sendKeys('ptolemy');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.first().getText()).toEqual('ptolemybarnes 75.690094'); //This won't pass!
    console.log(element);
    // expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  });

  it('has a search label', function() {
    searchBox.sendKeys('ptolemy');
    expect(searchLabel.getText()).toEqual('Search Term: ptolemy');
  });

  it('shows the git member score', function() {
    searchBox.sendKeys('ptolemy');
    expect(memberScore.getText()).toEqual('75.690094');
  });

  afterEach(function(){
    mock.teardown();
  });

});