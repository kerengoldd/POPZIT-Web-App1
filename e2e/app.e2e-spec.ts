import { APPPOPZITPage } from './app.po';

describe('app-popzit App', () => {
  let page: APPPOPZITPage;

  beforeEach(() => {
    page = new APPPOPZITPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
