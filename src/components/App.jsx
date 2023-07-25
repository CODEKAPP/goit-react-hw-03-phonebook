// App.jsx
import React from 'react';
import { DivContainer } from './Contacts/Styles/DivStyles';
import Contacts from './Contacts/Contacts';
import { Toaster } from 'react-hot-toast';

class App extends React.Component {
  render() {
    return (
      <section>
        <DivContainer>
          <Contacts />
        </DivContainer>
        <Toaster /> {/* Agrega el componente Toaster */}
      </section>
    );
  }
}

export default App;
