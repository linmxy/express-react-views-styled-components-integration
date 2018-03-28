import React from 'react';
import {renderToString} from 'react-dom/server'
import {injectGlobal, ServerStyleSheet} from 'styled-components'

injectGlobal`
    html, body {
    background-color: white;
    width: 100%;
    min-height: 100vh;
  }
  
  body {
    overflow: auto;
    overflow-x: hidden;
    background: rgb(224, 224, 224);
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', 'Titillium Web', 'Open Sans', 'Raleway', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }
`;

export default class extends React.Component {
  renderPage(styleElements) {
    return (
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200, 300,400,500,600,700" rel="stylesheet"/>
        <title>{this.props.title}</title>
        {styleElements}
      </head>
      <body>
      {this.props.children}
      </body>
      </html>
    )
  }

  render() {
    const sheet = new ServerStyleSheet();
    renderToString(sheet.collectStyles(this.renderPage()));
    return this.renderPage(sheet.getStyleElement());
  }
}