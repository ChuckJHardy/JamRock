import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#2196F3" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="google-site-verification" content="iXEe4TmQGYeUuwNdezJxnx_1dTs2snFO-qkdws7-Xow" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}