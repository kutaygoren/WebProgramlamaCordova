<template>
    <div id="tanismaSetleri">
    <Header/>
    <TanismaSetleriComp/>
    <KupaSayisi/>
    <Ozelliklerimiz/>
    <Blog/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import TanismaSetleriComp from '../components/TanismaSetleriComp.vue'
import KupaSayisi from '../components/KupaSayisi.vue'
import Ozelliklerimiz from '../components/Ozelliklerimiz.vue'
import Blog from '../components/Blog.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'tanismaSetleri',
  components: {
    Header,
    TanismaSetleriComp,
    KupaSayisi,
    Ozelliklerimiz,
    Blog,
    Footer
  }
}
</script>
