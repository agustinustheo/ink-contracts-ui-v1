import React from 'react';
import {
  Homepage,
  Contract,
  InstantiateWithCode,
  InstantiateWithHash,
  AddContract,
} from '../pages';

export const routes = [
  {
    path: '/contract/:addr',
    component: Contract,
    exact: true,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/instantiate',
    component: AddContract,
    exact: true,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/instantiate/code',
    component: InstantiateWithCode,
    exact: true,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/instantiate/hash',
    component: InstantiateWithHash,
    exact: true,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/',
    component: Homepage,
    exact: true,
    fallback: <div> Loading... </div>,
  },
];
