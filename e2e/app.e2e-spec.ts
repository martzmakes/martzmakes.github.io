import { Martzcodes.Github.IoPage } from './app.po';

describe('martzcodes.github.io App', () => {
  let page: Martzcodes.Github.IoPage;

  beforeEach(() => {
    page = new Martzcodes.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mm works!');
  });
});
