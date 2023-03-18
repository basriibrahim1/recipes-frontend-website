import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './storages/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        //  kita me-render komponen App dengan membungkusnya dalam Provider dan menyediakan store sebagai properti. Ini memastikan bahwa seluruh komponen yang ada di dalam App memiliki akses ke state yang disimpan pada store.
        <Provider store={store}>
                <App />
        </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
