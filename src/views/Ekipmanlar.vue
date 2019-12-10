<template>
    <div id="ekipmanlar">
    <Header/>
    <EkipmanlarComp/>
    <KupaSayisi/>
    <Ozelliklerimiz/>
    <Blog/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import EkipmanlarComp from '../components/EkipmanlarComp.vue'
import KupaSayisi from '../components/KupaSayisi.vue'
import Ozelliklerimiz from '../components/Ozelliklerimiz.vue'
import Blog from '../components/Blog.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'ekipmanlar',
  components: {
    Header,
    EkipmanlarComp,
    KupaSayisi,
    Ozelliklerimiz,
    Blog,
    Footer
  }
}
</script>