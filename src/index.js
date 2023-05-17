import React from 'react';
import * as ReactDOM from 'react-dom/client';       /*REACT version 18*/
// import ReactDOM from 'react-dom/client';
// import { Provider } from '@context/AppContext';
import App from './routes/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    // <Provider>
      <React.StrictMode>
          <App tab="home" />
      </React.StrictMode>
    // {/* </Provider> */}
);

