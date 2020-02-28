import Layout from '../components/PageLayout';

import { Button, Carousel } from 'antd';

const Home = () => (
  <Layout>
    <div className="container">
      <h1 className="welcome font-100 mt2">Welcome to Cooki.</h1>
      <h3 className="font-100">Cooki is the best way to find the recipes that best suit your needs.</h3>
      <div className="w-100">
        <div className="w-50 mx-auto">
          <Carousel className="align-center" autoplay>
          <div>
            <img src='/assets/1.jpg' height={500} className="mx-auto"/>
          </div>
          <div>
            <img src='/assets/2.jpg' height={500} className="mx-auto"/>
          </div>
          <div>
            <img src='/assets/3.jpg' height={500} className="mx-auto"/>
          </div>
          <div>
            <img src='/assets/4.jpg' height={500} className="mx-auto"/>
          </div>
        </Carousel>
        </div>
      </div>
      <Button type="primary mt2">Log In or Sign Up</Button>
    </div>

    <style jsx>{`
      .welcome {
        margin-bottom: 0;
      }

      .container {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default Home
