import React from 'react';
import ComponentForm from './RegionsComponent';

export default {
  component: ComponentForm,
  title: 'Admin/Pattern Catalog/Create',
  decorators: [
    (storyFn: () => JSX.Element) => (
      <div>
           {storyFn()}
      </div>
    ),
  ],
};

export const CallOneTime = () => (
  <ComponentForm />
);

export const CallSecondTime = () => (
  <ComponentForm />
);
