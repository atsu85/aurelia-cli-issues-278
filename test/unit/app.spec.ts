import {App} from '../../xxx/yyy/app';

describe('the app', () => {
  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });
});
