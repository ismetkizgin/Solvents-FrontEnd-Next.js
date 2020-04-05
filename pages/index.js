import Layout from '../components/_layout';
import Link from 'next/link';

function HomePage() {
  return (<Layout title='Anasayfa'>
    <ul>
      <li>
        <Link href="/">
          <a>Anasayfa</a>
        </Link>
      </li>
      <li>
        <Link href="/countdownsolverPage">
          <a>countdownsolver</a>
        </Link>
      </li>
      <li>
        <Link href="/wordsolverPage">
          <a>wordsolver</a>
        </Link>
      </li>
    </ul>
  </Layout>
  )
}

export default HomePage