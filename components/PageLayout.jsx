import Head from 'next/head'
import {Layout} from 'antd';
const {Header, Content, Footer} = Layout;

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
                <Layout className='h-100'>
                    <Header className='header color-main'><h4 className='header-contents'>Cooki</h4></Header>
                    <Layout>
                        <Content>{props.children}</Content>
                    </Layout>
                    <Footer></Footer>
                </Layout>  
            </body>

            <style jsx>{`
                .h-100 {
                    height: 100%;
                }

                .header-contents {
                    color: white;
                    font-weight: 100;
                }
        `}</style>
        </html>
    )
}