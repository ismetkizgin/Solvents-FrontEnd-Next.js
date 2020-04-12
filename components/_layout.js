import '../public/css/styles.css';
import Head from 'next/head';

function Layout(props) {
    return <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <title>{props.title}</title>
        </Head>
        <div className="container-fluid">
            {props.children}
        </div>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    </div>
}

export default Layout