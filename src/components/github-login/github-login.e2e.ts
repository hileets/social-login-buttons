import { newE2EPage } from '@stencil/core/testing';

describe('github-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<github-login></github-login>');

    const element = await page.find('github-login');
    expect(element).toHaveClass('hydrated');
  });
});
