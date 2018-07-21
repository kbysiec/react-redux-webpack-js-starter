import React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import BookListComponent, {
  BookListComponentProps,
} from '../BookListComponent';

describe('books / BookListComponent', () => {
  let component: ShallowWrapper | ReactWrapper;
  let props: BookListComponentProps;

  beforeEach(() => {
    props = {
      isLoading: false,
      books: [
        {
          id: '1asv',
          volumeInfo: {
            title: 'Title',
            description: 'Description',
            imageLinks: {
              smallThumbnail: 'thumbnail',
            },
          },
        },
      ],
      error: null,
      getData: jest.fn(),
    };
  });

  test('should render', () => {
    component = shallow(<BookListComponent {...props} />);
    expect(component.length).toEqual(1);
  });

  test('should contains element with div with "counter" class', () => {
    component = shallow(<BookListComponent {...props} />);
    expect(component.find('ul.book-list').length).toEqual(1);
  });

  test('should render loader if isLoading prop equals true', () => {
    props = { ...props, isLoading: true };
    component = shallow(<BookListComponent {...props} />);
    expect(component.find('div.book-loader').length).toEqual(1);
    expect(component.find('div.book-loader').text()).toEqual(
      'Data is loading...',
    );
  });

  test('should componentDidMount be called', () => {
    const componentDidMountSpy = jest.spyOn(
      BookListComponent.prototype,
      'componentDidMount',
    );
    component = mount(<BookListComponent {...props} />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    componentDidMountSpy.mockClear();
  });

  test('should renderBookItems be called', () => {
    const renderBookItemsSpy = jest.spyOn(
      BookListComponent.prototype,
      'renderBookItems',
    );
    component = mount(<BookListComponent {...props} />);
    expect(renderBookItemsSpy).toHaveBeenCalledTimes(1);
    renderBookItemsSpy.mockClear();
  });

  test('should match snapshot', () => {
    component = shallow(<BookListComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
