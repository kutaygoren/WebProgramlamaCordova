<template>
    <div id="login">
    <Header/>
    <LoginComp/>
    <KupaSayisi/>
    <Ozelliklerimiz/>
    <Blog/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import LoginComp from '../components/LoginComp.vue'
import KupaSayisi from '../components/KupaSayisi.vue'
import Ozelliklerimiz from '../components/Ozelliklerimiz.vue'
import Blog from '../components/Blog.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'login',
  components: {
    Header,
    LoginComp,
    KupaSayisi,
    Ozelliklerimiz,
    Blog,
    Footer
  }
}
</script>