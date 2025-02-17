import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import "./i18n";
import store from './redux/store';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
