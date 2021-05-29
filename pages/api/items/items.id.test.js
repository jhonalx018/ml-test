import items from './[id]';

jest.mock('../../../utils/requester', () => () => new Promise((resolve) => resolve({ data: { } })));

describe('get parsed data fron controller | ITEM get', () => {
  it('get data from ml api then ok', async () => {
    const req = {
      query: {
        id: 1,
      },
      method: 'get',
    };

    const response = await items(req, {
      send: (param) => param,
    });

    expect(response).toHaveProperty('item');
  });
});
