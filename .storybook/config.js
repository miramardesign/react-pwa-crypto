import { configure } from '@storybook/react';
import '../src/index.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.css'

const req = require.context('../src', true, /\.stories.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);