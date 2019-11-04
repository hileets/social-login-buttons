import { newE2EPage } from '@stencil/core/testing';

describe('google-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<google-login></google-login>');

    const element = await page.find('google-login');
    expect(element).toHaveClass('hydrated');
  });
});
