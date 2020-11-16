import React from "react";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import TestRenderer from "react-test-renderer";
import {LoginForm} from "../LoginForm";
import {loginUser} from '../../stateManagement/actions/userActions'

const mockProps = { 
  toggleLogin: () => console.log('login Toggled'),
  loginUser: () => loginUser()
}

it("renders loginForm correctly", () => {

  const tree = TestRenderer.create(<LoginForm {...mockProps}  />).toJSON();
  expect(tree).toMatchSnapshot()
})

const TestLogin = async (user) => {
  const res = await loginUser(user)
  return res;
}

test('Test correct login', async () => {
  const User = { email: "aiglinski@icloud.com",
  password: "SomePassword123" };
  // const data = await TestLogin(User);
  await expect(TestLogin(User)).resolves.toBe('Andrew Iglinski');
});