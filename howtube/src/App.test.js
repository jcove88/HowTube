import React from "react";
import { render, unmountComponentAtNode, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils'

import App from './App';
import { Categories } from "./Categories";

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
test(`finds video link`, async () => {
  expect.assertions(1);
  try {
    await ddb.get({TableName: 'Tester', Key: {id: '2'}});
  } catch (e) {
    expect(e.message).toBe(`Couldn't find link!`);
  }
});

// Youtube API Search
const mockYouTubeAPISearch = jest.fn(function(q, duration, safeSearch) {
  if (q && duration)
    return {response: "legos video under 5 min"};
  if (q && safeSearch)
    return {response: "safe legos video"};
  if (q)
    return {response: "legos video"}
});
it('calls YT Search using only keyword'), async () => {
  const {Item} = await mockYouTubeAPISearch("legos").promise();

  expect(Item).toEqual({
    response: "legos video"
  });
};
it('calls YT Search using keyword and duration'), async () => {
  const {Item} = await mockYouTubeAPISearch("legos", "5 min").promise();

  expect(Item).toEqual({
    response: "legos video under 5 min"
  });
};
it('calls YT Search using keyword and safeSearch'), async () => {
  const {Item} = await mockYouTubeAPISearch("legos", null, "true").promise();

  expect(Item).toEqual({
    response: "safe legos video"
  });
};


//test the landing page renders with no categories selected
it('has no categories selected', async () => { 
  act(() => {
    render(<Categories />, container)
  });
  expect(container.getElementById("filterDiv")).not.toBeVisible();
})

//test the category has been selected
it('has category selection', async () => { 
  const { getByTestId } = render(<Categories/>);
  const testResponse = art
  const selectedCategory = getByTestId("selectedCategoryDiv");
  await selectCategory(testResponse);
  expect(selectedCategory.toBeVisible());
})

//test the search button is disabled without input
it('has no text in search field', async () => { 
  const { getByTestId } = render(<App/>);
  const search = getByTestId("searchBar");
  const blankInput = "";
  const button = getByTestId("searchButton")
  await fireEvent.change(search, { target: { value: blankInput } });
  expect(button.toHaveAttribute('disabled'));
})

//test the search bar changes to show input 
it('has input for search', async () => { 
  const { getByTestId } = render(<App/>);
  const search = getByTestId("searchBar");
  const inputWord = "legos";
  await fireEvent.change(search, { target: { value: inputWord } });
  expect(search.innerHTML).toBe(inputWord);
})

//categories returns the correct result
it('returns category', ()=>{
  const wrapper = <App/>;
  var category = wrapper.getElementById('art');
  
})