import { NgmusikPage } from './app.po';

describe('ngmusik App', function() {
  let page: NgmusikPage;

  beforeEach(() => {
    page = new NgmusikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
