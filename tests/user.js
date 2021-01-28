import { Buffer } from 'buffer';

import test from 'ava';

import User from '../src/user.js';

// mock window
global.window = { atob: (base64) => Buffer.from(base64, 'base64').toString('ascii') };

test('should parse token in ctor', (t) => {
  //
  // {
  // "sub": "1234567890",
  // "name": "John Doe",
  // "iat": 1516239022,
  // "exp": 1000
  // }
  //
  const tokenResponse = {
    access_token:
      'header.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjEwMDB9.secret',
  };
  const user = new User({}, tokenResponse, '');

  t.is(user.token.expires_at, 1000000);
});
