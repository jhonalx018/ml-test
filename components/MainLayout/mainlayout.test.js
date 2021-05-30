import renderer from 'react-test-renderer';
import Layout from './index';

describe('card Item component', () => {
  it('renders without crashing LayoutComponent', () => {
    const component = renderer.create(<Layout><div /></Layout>);
    const tree = component.toJSON();

    expect(tree).toBeTruthy();
    expect(tree.type).toEqual('div');
  });
});
