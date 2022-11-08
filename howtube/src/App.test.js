import React from "react";
import { render, unmountComponentAtNode, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils'

import App from './App';

const sum = require('./sum');
module.exports = {
  tables: [
    {
      TableName: `Tester`,
      KeySchema: [{AttributeName: 'id', KeyType: 'HASH'}],
      AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'}],
      ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},
    },
    // etc
  ],
};
const {DocumentClient} = require('aws-sdk/clients/dynamodb');

const isTest = process.env.JEST_WORKER_ID;
const config = {
  convertEmptyValues: true,
  ...(isTest && {
    endpoint: 'localhost:8000',
    sslEnabled: false,
    region: 'local-env',
  }),
};

const ddb = new DocumentClient(config);

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//test the welcome message is rendered correctly
it("renders with or without name", () => {
  var userName = "";
  act(() => {
    render(<Welcome />, container)
  });
  expect(container.textContent).toBe("Welcome to Howtube");

  var userName = "Bob";
  act(() => {
    render(<Welcome />, container)
  });
  expect(container.textContent).toBe("Welcome Bob");
})

//tests that the profile picture is rendered correctly
it ("renders correct profile picture", () => {
  var url = "https://lh3.googleusercontent.com/a/ALm5wu2F-0B_kcVGE64eeDbnUlMEijvhTBqpuoXu2aTW=s96-c";
  act(() => {
    render(<ProfilePic/>);
    const picture = document.querySelector("img");
  });
  expect(picture.src).toContain(url);
})

//test that the sign in with google button appears after signing out
it("handleSignOut", () => {
  const wrapper = <App/>;
  handleSignOut(e);
  expect(wrapper.getElementById("signInDiv")).toBeVisible();
})

//test that the sign in button disappears after signing in
var testResponse = eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0NTEzNDVmYWQwODEwMWJmYjM0NWNmNjQyYTJkYTkyNjdiOWViZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2Njc3MTE2ODEsImF1ZCI6IjEwMDU5OTI3NTUzODQtcW8zcWx1cjRlZWQ5ZWFlcDlhcXIwcTNjaGx0cTM4a24uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDA4MTM2OTU5NjcxMjM4NjMzNjMiLCJoZCI6InNjdS5lZHUiLCJlbWFpbCI6Im1saW0yQHNjdS5lZHUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMTAwNTk5Mjc1NTM4NC1xbzNxbHVyNGVlZDllYWVwOWFxcjBxM2NobHRxMzhrbi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJNaWNoZWxsZSBMaW0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MkYtMEJfa2NWR0U2NGVlRGJuVWxNRWlqdmhUQnFwdW9YdTJhVFc9czk2LWMiLCJnaXZlbl9uYW1lIjoiTWljaGVsbGUiLCJmYW1pbHlfbmFtZSI6IkxpbSIsImlhdCI6MTY2NzcxMTk4MSwiZXhwIjoxNjY3NzE1NTgxLCJqdGkiOiJlY2JmMTcxYzVhZjZhZjkxMDA2OGU4MDRlN2I1MzZkNzZjYjY3MjIxIn0.lbIlss_J0g6-PLWNcCT4haWVwhjUlA7Cs-G7N4sOrCoujQzYCkc42KtU7u0Ixjln1wD3K2aQwOxmdd1hkaovrE38A4q7cNeU2Hxg_oA1Id7iiH4OqOkQ1EWsgjAP2VSHZmANBeFQCQr6O8sEMKOna4KTkrG_AkYATkPbToXV500v00BeZZcH3MprkMDY7YJdnYj-rgD-I7ULmcK9TvXwZ_Z4L1SRK5ls_RbBrRN7pdSucBAsn9CcFKMVugYSk2vKPolqTFU0OMr8HBzLpvuxGYCLnvJ_NdO_yaJt7BhJYgQ3tYlknZ9kH1TaikG2YkCcJMbqhESK1ugsGfbiIsUelw;
it("handleSignIn", () => {
  const wrapper = <App/>;
  handleCallbackResponse(testResponse);
  expect(wrapper.getElementById("signInDiv")).not.toBeVisible();
})

//test that the handle sign out function is called when the sign out 

it('should insert item into table', async () => {
  await ddb
    .put({TableName: 'Tester', Item: {id: '1', hello: 'world'}})
    .promise();

  const {Item} = await ddb.get({TableName: 'files', Key: {id: '1'}}).promise();

  expect(Item).toEqual({
    id: '1',
    hello: 'world',
  });
});
test(`Can't find item`, async () => {
  expect.assertions(1);
  try {
    await ddb.get('id', 'test');
  } catch (e) {
    expect(e.message).toBe(`Couldn't find test!`);
  }
});
test(`DynamoDB doesn't work`, async () => {
  awsSdkPromiseResponse.mockReturnValueOnce(Promise.reject(new Error('some error')));
  expect.assertions(1);
  try {
    await getPet('id', 'test');
  } catch (e) {
    expect(e.message).toBe(`some error`);
  }
});

it('contains a video link'), async () => {
  await ddb
  .put({TableName: 'Tester', Item: {id: '2', link: 'www.youtube.com/watch?v=vFwD51mt5ww'}})
  .promise();
  const {Item} = await ddb.get({TableName: 'files', Key: {id: '2'}}).promise();

  expect(Item).toEqual({
    id: '2',
    link: 'www.youtube.com/watch?v=vFwD51mt5ww',
  });
};
