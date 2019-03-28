import { lazy } from 'react';

export const homeComponentImport = () => import('./home/HomeComponent');
export const bookContainerImport = () => import('./books/BookListContainer');

const HomeComponent = lazy(homeComponentImport);
export const BookListContainer = lazy(bookContainerImport);

export const HOME = {
  path: '/',
  label: 'Home',
  component: HomeComponent,
};

export const BOOKS = {
  path: '/books',
  label: 'Books',
  component: BookListContainer,
};

export const DEFAULT_ROUTE = HOME.path;

const routes = [HOME, BOOKS];

export default routes;
