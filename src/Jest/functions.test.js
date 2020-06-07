const functions = require('./functions');

test('User fetched name should be Leanne Graham',  () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
  })
})
