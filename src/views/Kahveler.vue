<template>
    <div id="kahveler">
    <Header/>
    <KahvelerComp/>
    <KupaSayisi/>
    <Ozelliklerimiz/>
    <Blog/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import KahvelerComp from '../components/KahvelerComp.vue'
import KupaSayisi from '../components/KupaSayisi.vue'
import Ozelliklerimiz from '../components/Ozelliklerimiz.vue'
import Blog from '../components/Blog.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'kahveler',
  components: {
    Header,
    KahvelerComp,
    KupaSayisi,
    Ozelliklerimiz,
    Blog,
    Footer
  }
}
</script>
