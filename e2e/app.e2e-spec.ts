import { LifedemoPage } from './app.po';

describe('lifedemo App', () => {
  let page: LifedemoPage;

  beforeEach(() => {
    page = new LifedemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
