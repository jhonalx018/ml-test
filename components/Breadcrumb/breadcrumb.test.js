import 'jsdom-global/register';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BreadCrumb from './index';

describe('App', () => {
  it('renders without crashing BreadCrumbComponent', () => {
    const component = renderer.create(
      <BreadCrumb data={[]} />,
    );

    const tree = component.toJSON();

    expect(tree).toBeTruthy();
  });
});

describe('App', () => {
  it('renders with data without crashing BreadCrumbComponent', () => {
    const component = shallow(<BreadCrumb data={['test']} />);

    expect(component.find('.breadcrumb__link').get(0)).toBeTruthy();
  });

  it('renders without data crashing BreadCrumbComponent', () => {
    const component = shallow(<BreadCrumb data={[]} />);

    expect(component.find('.breadcrumb__link').get(0)).toBeFalsy();
  });
});
