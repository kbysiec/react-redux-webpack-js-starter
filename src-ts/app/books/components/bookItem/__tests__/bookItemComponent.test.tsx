import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import BookItemComponent from '../BookItemComponent';

describe('books / bookItem / BookItemComponent', () => {
  let component: ShallowWrapper;
  let props;

  beforeEach(() => {
    props = {
      info: {
        title: 'Hello Poland!',
        description: 'Hello Poland description',
        imageLinks: {
          smallThumbnail: 'image-mock',
        },
      },
    };
    component = shallow(<BookItemComponent {...props} />);
  });
  test('should render', () => {
    expect(component.length).toEqual(1);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contains elements with book-item classes', () => {
    expect(component.find('li.book-item').length).toEqual(1);
    expect(component.find('div.book-item-thumbnail').length).toEqual(1);
    expect(component.find('div.book-item-details').length).toEqual(1);
    expect(component.find('div.book-item-title').length).toEqual(1);
    expect(component.find('div.book-item-description').length).toEqual(1);
    expect(component.find('div.book-item-clear').length).toEqual(1);
  });
});
