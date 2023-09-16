import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { LoginSchema } from 'features/AuthByUsername';

describe('loginSlice.spec', () => {
  test('test setting username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'John' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('Johnny'),
    )).toEqual({ username: 'Johnny' });
  });

  test('test setting password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123456'),
    )).toEqual({ password: '123456' });
  });
});
