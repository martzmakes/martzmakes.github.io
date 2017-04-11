import { browser, element, by } from 'protractor';

export class Martzcodes.Github.IoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mm-root h1')).getText();
  }
}
