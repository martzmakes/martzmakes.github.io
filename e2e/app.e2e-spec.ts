import { Entrocode.Github.IoPage } from './app.po';

describe('entrocode.github.io App', () => {
  let page: Entrocode.Github.IoPage;

  beforeEach(() => {
    page = new Entrocode.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
