const {
  getFullname,
  isPalindrome,
  getCircumfrence,
  getArea,
} = require('./index');

test('Fullname of Deepak and Singh is Deepak Singh', () => {
  expect(getFullname('Deepak', 'Singh')).toBe('Deepak Singh');
});

test('Fullname of Sandeep and Singh is Deepak Singh', () => {
  expect(getFullname('Sandeep', 'Singh')).toBe('Sandeep Singh');
});

test('Fullname of Sandeep and Singh is not Ankit Singh', () => {
  expect(getFullname('Sandeep', 'Singh')).not.toBe('Ankit Singh');
});

test('asdfgfdsa is a palidrome', () => {
  expect(isPalindrome('asdfgfdsa')).toBe(true);
})

test('asdfgfsdsa is not a palidrome', () => {
  expect(isPalindrome('asdfgfsdsa')).toBe(false);
})

