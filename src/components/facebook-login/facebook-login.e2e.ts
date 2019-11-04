import { newE2EPage } from '@stencil/core/testing';

describe('facebook-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<facebook-login></facebook-login>');

    const element = await page.find('facebook-login');
    expect(element).toHaveClass('hydrated');
  });
});
