import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'
import Product from './product/Product'
import styles from './Bootcamps.module.css'

const Bootcamps = () => {
  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <h1>Start your career with us, now!</h1>
        <Product name='Full Stack Junior'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse venenatis gravida rutrum. Nam fermentum lacinia arcu ac ultricies. 
        Morbi sagittis velit in mi venenatis suscipit. In hendrerit lectus eget nisl porta sodales in eu nibh. 
        Donec condimentum sollicitudin pharetra. Praesent sodales sodales nisl, rutrum consequat ante rutrum a. 
        Suspendisse est sem, vehicula vel eleifend eget, fermentum ac turpis. Aliquam erat volutpat. 
        Integer ultricies lorem lectus, a tincidunt massa vulputate mollis. 
        Nulla facilisi. Donec turpis urna, iaculis posuere congue vel, volutpat non neque. Suspendisse potenti. 
        Integer in odio ut libero tristique ullamcorper ac quis justo.' />

        <Product name='Full Stack Junior'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse venenatis gravida rutrum. Nam fermentum lacinia arcu ac ultricies. 
        Morbi sagittis velit in mi venenatis suscipit. In hendrerit lectus eget nisl porta sodales in eu nibh. 
        Donec condimentum sollicitudin pharetra. Praesent sodales sodales nisl, rutrum consequat ante rutrum a. 
        Suspendisse est sem, vehicula vel eleifend eget, fermentum ac turpis. Aliquam erat volutpat. 
        Integer ultricies lorem lectus, a tincidunt massa vulputate mollis. 
        Nulla facilisi. Donec turpis urna, iaculis posuere congue vel, volutpat non neque. Suspendisse potenti. 
        Integer in odio ut libero tristique ullamcorper ac quis justo.' />


        <Product name='Full Stack Junior'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse venenatis gravida rutrum. Nam fermentum lacinia arcu ac ultricies. 
        Morbi sagittis velit in mi venenatis suscipit. In hendrerit lectus eget nisl porta sodales in eu nibh. 
        Donec condimentum sollicitudin pharetra. Praesent sodales sodales nisl, rutrum consequat ante rutrum a. 
        Suspendisse est sem, vehicula vel eleifend eget, fermentum ac turpis. Aliquam erat volutpat. 
        Integer ultricies lorem lectus, a tincidunt massa vulputate mollis. 
        Nulla facilisi. Donec turpis urna, iaculis posuere congue vel, volutpat non neque. Suspendisse potenti. 
        Integer in odio ut libero tristique ullamcorper ac quis justo.' />

        <Product name='Full Stack Junior'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse venenatis gravida rutrum. Nam fermentum lacinia arcu ac ultricies. 
        Morbi sagittis velit in mi venenatis suscipit. In hendrerit lectus eget nisl porta sodales in eu nibh. 
        Donec condimentum sollicitudin pharetra. Praesent sodales sodales nisl, rutrum consequat ante rutrum a. 
        Suspendisse est sem, vehicula vel eleifend eget, fermentum ac turpis. Aliquam erat volutpat. 
        Integer ultricies lorem lectus, a tincidunt massa vulputate mollis. 
        Nulla facilisi. Donec turpis urna, iaculis posuere congue vel, volutpat non neque. Suspendisse potenti. 
        Integer in odio ut libero tristique ullamcorper ac quis justo.' />
        <Product name='Full Stack Junior'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse venenatis gravida rutrum. Nam fermentum lacinia arcu ac ultricies. 
        Morbi sagittis velit in mi venenatis suscipit. In hendrerit lectus eget nisl porta sodales in eu nibh. 
        Donec condimentum sollicitudin pharetra. Praesent sodales sodales nisl, rutrum consequat ante rutrum a. 
        Suspendisse est sem, vehicula vel eleifend eget, fermentum ac turpis. Aliquam erat volutpat. 
        Integer ultricies lorem lectus, a tincidunt massa vulputate mollis. 
        Nulla facilisi. Donec turpis urna, iaculis posuere congue vel, volutpat non neque. Suspendisse potenti. 
        Integer in odio ut libero tristique ullamcorper ac quis justo.' />

      </section>


      <Footer />
    </>
  )
}

export default Bootcamps