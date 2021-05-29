import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import CardItem from './index';

const mockData = {
  data: [
    {
      id: 'MLA910514337',
      title: 'Cortadora De Pelo Y Afeitadora Multigroomer Philips Series 7000 Mg7715 100v/240v',
      price: {
        currency: 'ARS',
        amount: 6299,
        decimals: '2',
      },
      picture: '/',
      condition: 'new',
      free_shipping: false,
    },
  ],
};

describe('card Item component', () => {
  it('renders without crashing CardItemComponent', () => {
    const component = renderer.create(<CardItem />);
    const tree = component.toJSON();

    expect(tree).toBeFalsy();
  });
});

describe('card Item component', () => {
  it('renders with data without crashing CardItemComponent', () => {
    const component = render(<CardItem data={mockData.data} />);

    expect(component).toBeTruthy();
  });
});
