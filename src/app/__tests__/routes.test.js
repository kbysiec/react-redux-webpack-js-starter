import routes, { homeComponentImport, bookContainerImport } from '../routes';

describe('app / routes ', () => {
  test('should home and books routes be defined', () => {
    const [HOME, BOOKS] = routes;
    expect(HOME).toBeDefined();
    expect(BOOKS).toBeDefined();
  });

  test('should HomeComponent be imported ', () => {
    jest.mock('../home/HomeComponent', () => () => 'home');
    expect(homeComponentImport()).toBeDefined();

    return homeComponentImport().then(result => {
      const HomeComponent = result.default();
      expect(HomeComponent).toEqual('home');
    });
  });

  test('should BookListContainer be imported ', () => {
    jest.mock('../books/BookListContainer', () => () => 'books');
    expect(bookContainerImport()).toBeDefined();

    return bookContainerImport().then(result => {
      const BookListContainer = result.default();
      expect(BookListContainer).toEqual('books');
    });
  });
});
