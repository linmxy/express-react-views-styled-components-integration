### Project 

styled components is great, and express react views great too. this project's purpose is to demo how to use them together.

##layout view:
we can inject the css in layout view like this:

    export default class extends React.Component {
      renderPage(styleElements) {
        return (
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
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
    
and then use the layout in pages like this:
    
    import React from 'react';
    import Layout from './layout.default';
    import {Wrapper} from './hello.style';
    
    export default props => {
      return (
        <Layout title="SMX RSVP">
          <Wrapper>
            Hello world!
          </Wrapper>
        </Layout>
      )
    }