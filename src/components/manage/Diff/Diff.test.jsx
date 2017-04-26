import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Diff from './Diff';

const mockStore = configureStore();

describe('Diff', () => {
  it('renders a diff component', () => {
    const store = mockStore({
      history: {
        entries: [
          {
            time: '2017-04-19T14:09:36+02:00',
            version_id: 1,
            actor: { fullname: 'Web Admin' },
          },
          {
            time: '2017-04-19T14:09:35+02:00',
            version_id: 0,
            actor: { fullname: 'Web Admin' },
          },
        ],
      },
      content: {
        data: {
          title: 'Blog',
          '@type': 'Folder',
        },
      },
      schema: {
        schema: {
          fieldsets: [
            {
              fields: ['title'],
            },
          ],
          properties: {
            title: {
              title: 'Title',
              type: 'string',
            },
          },
        },
      },
      diff: {
        data: [
          {
            title: 'My old title',
          },
          {
            title: 'My new title,',
          },
        ],
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <Diff
          location={{ pathname: '/blog', query: { one: '0', two: '1 ' } }}
        />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});