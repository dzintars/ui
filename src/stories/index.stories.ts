import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';
import '../components/ui-pill';
import '../components/ui-card';

storiesOf('Elements|Elements', module)
  .addDecorator(withKnobs)
 
  .add(
    'Headers',
    () => html`
      <h1>Top header</h1>
    `,
  )
  .add(
    'UI Pill',
    () => html`
      <ui-pill>Apollo 440</ui-pill>
    `,
  )
  .add(
    'UI Card',
    () => html`
      <ui-card>Apollo 440</ui-card>
    `,
  );