<template>
    <div id="mokapot">
    <Header/>
    <MokaPotComp/>
    <KupaSayisi/>
    <Ozelliklerimiz/>
    <Blog/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MokaPotComp from '../components/MokaPotComp.vue'
import KupaSayisi from '../components/KupaSayisi.vue'
import Ozelliklerimiz from '../components/Ozelliklerimiz.vue'
import Blog from '../components/Blog.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'mokapot',
  components: {
    Header,
    MokaPotComp,
    KupaSayisi,
    Ozelliklerimiz,
    Blog,
    Footer
  }
}
</script>