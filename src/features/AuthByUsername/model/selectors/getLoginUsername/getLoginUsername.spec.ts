import { StateSchema } from 'app/providers/StoreProvider';
import {
  getLoginUsername,
} from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginUsername.spec', () => {
  test('should return John', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'John',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('John');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
