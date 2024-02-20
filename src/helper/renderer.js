import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from '../client/component/Home';

export default function (){
    const content =  renderToString(<Home />);

    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
}