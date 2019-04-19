/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';

// import { Button } from './mv-bulma-button/src/main'

// Vue.component(name, value)
import Vue from 'vue'
import * as components from './mv-bulma/src/main'

// In the global registration
for (const [key, value] of Object.entries(components)) {
  const name = value.name || `mv-${key.toLowerCase()}`
  console.log(name, value)
  Vue.component(name, value)
}


storiesOf('Button', module).add('Button', () => ({
  components: { Welcome },
  template: '<div><mv-button>hello world</mv-button> <mv-button color="link">Link</mv-button> <mv-button color="info">Info</mv-button> <mv-button color="success">Success</mv-button> </div>',
  methods: { action: linkTo('MyButton') },
}));

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('MyButton', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
