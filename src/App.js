import React from 'react';
import { Loader, Header, Navigation, Section, About, Contact, Education, Toolbox } from './components';
import showdown from 'showdown';
import { useApi } from './data/ApiContext';

export const markup = (text) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(text);
};

export const getDateString = (dateString) => {
  if (!dateString) return 'present';

  const dateSplit = dateString.split('-');
  return `${dateSplit[1]}/${dateSplit[0]}`;
};

function App() {
  const { isLoading } = useApi();

  return (
    <div className="App">
      {isLoading && <Loader />}
      <Navigation />
      <Header />
      <Section>
          <About />
      </Section>
      <Section>
          <Toolbox />
      </Section>
      {/*<Section>
          <Experience />
      </Section>*/}
      <Section>
          <Education />
      </Section>
      <Section>
          <Contact />
      </Section>
    </div>
  );
}

export default App;
