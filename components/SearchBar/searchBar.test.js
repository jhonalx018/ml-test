import renderer from 'react-test-renderer';
import Search from './index';

describe('App', () => {
  it('renders without crashing SearchComponent', () => {
    const component = renderer.create(
      <Search />,
    );

    const tree = component.toJSON();

    expect(tree).toBeTruthy();
  });
});
