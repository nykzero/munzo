import { MunzoPage } from './app.po';

describe('munzo App', () => {
  let page: MunzoPage;

  beforeEach(() => {
    page = new MunzoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
