import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Carbz Labs" key="title"/>
        <meta property="og:description" content="Carbonable Labs " key="description"/>
        <meta
          property="og:image"
          content="https://carbonable.io/assets/images/social/social.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
