import { NgFundamentalsPage } from './app.po';

describe('ng-fundamentals App', function() {
  let page: NgFundamentalsPage;

  beforeEach(() => {
    page = new NgFundamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
