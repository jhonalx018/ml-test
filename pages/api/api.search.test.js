/* eslint-disable global-require */
import search from './search';

jest.mock('../../utils/requester', () => {
  const { SearchMock } = require('../../mock');

  return () => new Promise((resolve) => resolve({ data: { ...SearchMock } }));
});

describe('get parsed data fron controller | API SEARCH', () => {
  it('get data from ml api then ok', async () => {
    const req = {
      query: {
        q: 'camisa',
        limit: 1,
      },
      method: 'get',
    };

    const response = await search(req, {
      send: (param) => param,
    });

    expect(response.categories.length).toEqual(2);
    expect(response.items.length).toEqual(1);
  });
});
