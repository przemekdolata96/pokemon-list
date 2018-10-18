import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from '../components/Pagination/Pagination';

Enzyme.configure({
  adapter: new Adapter(),
});

test('renders without crashing', () => {
  const pagination = shallow(
    <Pagination
      lastPageNumber={8}
      currentPageNumber={1}
      maxPages={8}
      last={() => {}}
    />,
  );
  expect(pagination).toMatchSnapshot();
});
