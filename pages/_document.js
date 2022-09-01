import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Footer, About } from '../components/shared';

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-100">
        <Head>
        </Head>
        <body className="d-flex flex-column h-100">
          <Main />
          <NextScript />
          <Footer />
          <About />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous" async />
        </body>
      </Html>
    )
  }
}

export default MyDocument