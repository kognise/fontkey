import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          
          <link rel='shortcut icon' href='https://fontkey.kognise.dev/static/favicon.ico' />
          <link rel='icon' href='https://fontkey.kognise.dev/static/favicon.ico' />
          <meta name='google-site-verification' content='v-qtllaNacMaKlD-CTU35KY7U-R44qkJkARH6sW3tsY' />

          <meta name='robots' content='index,follow' />
          <meta name='googlebot' content='index,follow' />

          <meta name='theme-color' content='#228BE6' />
          <meta name='keywords' content='fontkey,fonts,design,development,discover,random,modern' />
          <meta name='description' content='FontKey is a new way to find fonts. Quickly cycle through random choices until you find what you like, and easily share with coworkers and friends. Get code for your website in a click.' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@kognise' />
          <meta name='twitter:description' content='FontKey is a new way to find fonts. Quickly cycle through random choices until you find what you like, and easily share with coworkers and friends. Get code for your website in a click.' />
          <meta name='twitter:image' content='https://fontkey.kognise.dev/static/media.png' />

          <meta property='og:type' content='website' />
          <meta property='og:description' content='FontKey is a new way to find fonts. Quickly cycle through random choices until you find what you like, and easily share with coworkers and friends. Get code for your website in a click.' />
          <meta property='og:image' content='https://fontkey.kognise.dev/static/media.png' />
          <meta property='og:image:alt' content='FontKey: A modern way of finding fonts.' />
          <meta property='og:image:width' content='1500' />
          <meta property='og:image:height' content='500' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:site_name' content='FontKey' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}