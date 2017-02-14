import { VehicleDetailPage } from './app.po';

describe('vehicle-detail App', function() {
  let page: VehicleDetailPage;

  beforeEach(() => {
    page = new VehicleDetailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
