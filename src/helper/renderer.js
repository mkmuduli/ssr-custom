import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../client/App';
import serializeJavascript from 'serialize-javascript';


export default function (req, store){
    const content =  renderToString(
    <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
            <App />
        </StaticRouter>
    </Provider>);

    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serializeJavascript(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
}