import Layout from '../components/_layout';
import Link from 'next/link';

function HomePage() {
  return (
    <Layout title='Anasayfa'>
      <div className="container">
        <div className="pagecenter">
          <h1>ÇÖZÜCÜLER</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 d-flex justify-content-center">
              <Link href="/kelimecozucu"><a className="button d-flex justify-content-center align-items-center">KELİME ÇÖZÜCÜ</a></Link>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <Link href="/sayicozucu"><a className="button d-flex justify-content-center align-items-center">SAYI ÇÖZÜCÜ</a></Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage