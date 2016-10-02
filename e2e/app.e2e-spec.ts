import { RestbootPage } from './app.po';

describe('restboot App', function() {
  let page: RestbootPage;

  beforeEach(() => {
    page = new RestbootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
