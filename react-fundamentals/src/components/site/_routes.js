import React from 'react';
import Home from './Home';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from '../ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo';
import LifeCycleCodepen from '../concepts/LifeCycleCodepen';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import Resources from './Resources';

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      main: () => <FunctionalComponentDemo />
    },
    {
      path: '/JSXRules',
      exact: true,
      main: () => <JSXRules />
    },
    {
      path: '/classcomponent',
      exact: true,
      main: () => <ClassComponentDemo />
    },
    {
      path: '/propsdemo',
      exact: true,
      main: () => <PropsDemo />
    },
    {
      path: '/lifecyclecodepen',
      exact: true,
      main: () => <LifeCycleCodepen />
    },
    {
      path: '/timer',
      exact: true,
      main: () => <TimePiecesApp />
    },
    {
      path: '/reactconceptlist',
      exact: true,
      main: () => <ReactConceptsApp />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
  },
]