import { GithubLogin } from './github-login';

describe('github-login', () => {
  it('builds', () => {
    expect(new GithubLogin()).toBeTruthy();
  });
});
