<template>
  <div class="about">
    <section class="about-section">
      <h1>Welcome to our Pokemon page!</h1>
      <p>Here, you'll find all sorts of information about the
      fascinating world of Pokemon. From the very first generation to the latest games and
      spin-offs, we aim to provide comprehensive coverage of everything Pokemon-related.</p>

      <p>Our homepage features an interactive display where you can learn about the different
      types of Pokemon and view their images. We've even included a special feature that
      allows you to see the Shiny mode of your favorite Pokemon when you hover over them!</p>

      <p>We're passionate about Pokemon and we hope to share that passion with you through this
      website. Whether you're a longtime fan or just getting started, we hope you'll find 
      something to enjoy and learn here. So take a look around, catch 'em all, and have fun!</p>
      <img src="../assets/aboutPoke.png" alt="imagen pokemon">
    </section>
    <Footer />
  </div>
  
</template>

<script>
import Footer from '../components/Footer'

export default {
  components: {
    Footer
  }
}
</script>
<style lang="scss" scoped>
.about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 58px);

    .about-section {
      width: 100%;
      img {
      padding-top: 20px;
      }
      p {
          font-size: 10px;
          font-weight: 400;
      }
      img {
          @include background-image(100%, auto, 1)
      }
      @include tablet {
        p {
          font-size: 24px;
      }

      }

    }
    
      

}
</style>
