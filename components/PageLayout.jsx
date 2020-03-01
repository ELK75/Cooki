import Head from 'next/head'
import Navbar from './Navbar';


export default (props) => {
    return (
        <html lang="en">
            <Head>
                <title>Cooki</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet" />
            </Head>
            <body className='h-100'>
                <div className='h-100'>
                    <Navbar />
                    {props.children}
                </div>  
            </body>

            <style jsx>{`
                .h-100 {
                    height: 100%;
                }
        `}</style>
        </html>
    )
}