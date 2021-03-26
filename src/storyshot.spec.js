import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

const reactTestingLibrarySerializer = {
  print: (val, serialize, indent) => serialize(val.container.firstChild),
  test: val => val && val.hasOwnProperty('container'),
};

// needed to test components using Modal
ReactDOM.createPortal = jest.fn(element => element);

initStoryshots({
  integrityOptions: { cwd: __dirname },
  renderer: render,
  snapshotSerializers: [reactTestingLibrarySerializer],
  test: multiSnapshotWithOptions(),
});
