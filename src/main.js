import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import AnaSayfa from './views/AnaSayfa.vue'
import Sepet from './views/Sepet.vue'
import Login from './views/Login.vue'
import Kahveler from './views/Kahveler.vue'
import Ekipmanlar from './views/Ekipmanlar.vue'
import TanismaSetleri from './views/TanismaSetleri.vue'
import Chemex6 from './views/Chemex6.vue'
import MokaPot from './views/MokaPot.vue'
import Hakkimizda from './views/Hakkimizda.vue'
import SiparisTakip from './views/SiparisTakip.vue'
import OdemeBilgileri from './views/OdemeBilgileri.vue'
import GizlilikPolitikalari from './views/GizlilikPolitikalari.vue'

const router = new VueRouter(
  {
    routes: [
      { path: '/', component: AnaSayfa, meta: {title: 'Kahve, Kahve Çeşitleri, Kahve Demleme Ekipmanları | KahhveCom'}},
      { path: '/sepet', component: Sepet, meta: {title: 'Kahve, Kahve Çeşitleri, Kahve Demleme Ekipmanları | KahhveCom'}},
      { path: '/login', component: Login, meta: {title: 'Kahve, Kahve Çeşitleri, Kahve Demleme Ekipmanları | KahhveCom'}},
      { path: '/kahveler', component: Kahveler, meta: {title: 'Kahve Çeşitleri | KahhveCom'}},
      { path: '/ekipmanlar', component: Ekipmanlar, meta: {title: 'Kahve Demleme Ekipmanları | KahhveCom'}},
      { path: '/tanisma-setleri', component: TanismaSetleri, meta: {title: 'Kahve Ekipmanları Tanışma Setleri | KahhveCom'}},
      { path: '/chemex-ahsap-tutacakli-6-cup-kahve-demleme-ekipmanlari', component: Chemex6, meta: {title: 'Chemex Ahşap Tutacaklı 6 Cup | KahhveCom'}},
      { path: '/bialetti-moka-pot-alpini-3-cup-kahve-demleme-ekipmanlari', component: MokaPot, meta: {title: 'Bialetti Moka Pot Alpina 3 Cup | KahhveCom'}},
      { path: '/bizkimiz', component: Hakkimizda, meta: { title: 'KahhveCom Ekibi Kimdir | KahhveCom'}},
      { path: '/siparis/takip', component: SiparisTakip, meta: { title: 'Kahve, Kahve Çeşitleri, Kahve Demleme Ekipmanları | KahhveCom'}},
      { path: '/siparis-odeme-bilgileri', component: OdemeBilgileri, meta: { title: 'Ödeme Bilgileri | KahhveCom'}},
      { path: '/gizlilik-politikasi', component: GizlilikPolitikalari, meta: { title: 'Gizlilik Politikası | KahhveCom'}}
    ]
  }
)

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')