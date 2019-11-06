import { newE2EPage } from '@stencil/core/testing';

describe('my-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-app></my-app>');

    const element = await page.find('my-app');
    expect(element).toHaveClass('hydrated');
  });
});
