<template>
  <div class="Header">
    <header class="navbar navbar-default">

        <div class="container">
           <div class="navbar-header">
                <router-link to="/"><a class="logo" ><img src="https://kahhve.com/zeplin/img/logo_mini.png" alt="KahhveCom"/></a></router-link>
                <a class="turuncu icon-search visible-sm visible-xs visible-md" style="right: 170px;"></a>
                <a href="/kullanici/favorilerim" class="glyphicon glyphicon-heart-empty turuncu visible-sm visible-xs visible-md favori-icon" style="position: absolute;right: 105px;top: 10px;font-size: 40px;padding: 12px 15px 0 0;-webkit-text-stroke: 2.5px white;"></a>
                <a class="turuncu icon-profil visible-sm visible-xs visible-md profil-toggle" href="#"></a>
                <span class="sepet icon visible-sm visible-xs visible-md">
                    <i class="icon kahve icon-sepet"></i>
                    <router-link to="/sepet"><a class="turuncu sepete"></a></router-link>
                </span>
            </div>

            <div class="hidden-sm hidden-xs hidden-md navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav basliklar">
                    <li><router-link to="/kahveler" class="a">KAHHVELER</router-link></li>
                    <li><router-link to="/ekipmanlar" class="a">EKİPMAN & AKSESUARLAR</router-link></li>
                    <li><router-link to="/tanisma-setleri" class="a">TANIŞMA SETLERİ</router-link></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MARKALAR <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li class="col-md-6" v-for="(marka, index) in markalar" :key="index">
                              <router-link :to="marka.id" class="a">{{ marka.text }}</router-link>
                          </li>
                      </ul>
                    </li>
                    <li><a href="/blog" class="turuncu"><strong>KÜLTÜR</strong></a></li>
                    <li><a href="/sevgililer-gunu-ozel">HEDİYELİKLER</a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/login" class="a">GİRİŞ</router-link></li>
                    <li class="dropdown">
                        <a href="#" class="search icon-search turuncu dropdown-toggle" data-toggle="dropdown" role="button"></a>
                        <input v-model="aranacakKelime" type="text" class="form-control arama-kelimesi dropdown-menu" name="kelime" placeholder="Arama" autocomplete="off" v-on:keydown="aramaYap">
                    </li>
                    <li><a href="/kullanici/favorilerim" class="glyphicon glyphicon-heart-empty turuncu favori-icon" style="font-size: 32px;padding: 12px 15px 0 0;-webkit-text-stroke: 1.5px white;"></a></li>
                    <li class="header-sepet sepet text-left roboto">
                        <router-link to="/sepet"><i @mouseover="mouseOver" class="icon kahve icon-sepet"></i></router-link>
                        <router-link to="/sepet"><a href="/sepet" class="turuncu sepete"></a></router-link>
                        <template v-if="active">
                            <div class="pencere roboto" style="display: block;">
                            <ul class="list-unstyled kahve text-left">
                              <!-- ürünler buraya girilecek -->
                              <li :key = "index" v-for="(alinacaklar, index) in cart"><a :href="alinacaklar.url">{{alinacaklar.sepette}}</a><span class="pull-right">{{alinacaklar.fiyat}} TL</span></li>
                            </ul>
                            <div class="seperator"></div>
                            <div class="voffset2 kahve">
                                <strong>Toplam</strong>
                                <strong class="pull-right toplam buyuk2 turuncu">{{toplam}} TL</strong>
                            </div>
                                <div class="voffset5 text-right beyaz">
                                    <router-link to="/sepet"><a class="btn">SEPETE GİT</a></router-link>
                                    <a class="btn back-turuncu">ŞİPARİŞİ TAMAMLA</a>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="pencere roboto" style="display: none;">
                            <ul class="list-unstyled kahve text-left">
                            </ul>
                            <div class="seperator"></div>
                            <div class="voffset2 kahve">
                                <strong>Toplam</strong>
                                <strong class="pull-right toplam buyuk2 turuncu">0.00 TL</strong>
                            </div>
                                <div class="voffset5 text-right beyaz">
                                    <router-link to="/sepet"><a class="btn">SEPETE GİT</a></router-link>
                                    <a class="btn back-turuncu">ŞİPARİŞİ TAMAMLA</a>
                                </div>
                            </div>
                        </template>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: false,
        cart: [],
        toplam: 0.00,
        aranacakKelime: "",
        markalar: [
            { id: '/able', text: 'Able' },
            { id: '/aeropress', text: 'Aeropress' },
            { id: '/baratza', text: 'Baratza' },
            { id: '/bialetti', text: 'Bialetti' },
            { id: '/bodum', text: 'Bodum' },
            { id: '/bravilor bonamat', text: 'Bravilor Bonamat' },
            { id: '/caffe fresco', text: 'Caffe Fresco' },
            { id: '/caffe vergnano', text: 'Caffe Vergnano' },
            { id: '/cafflano', text: 'Cafflano' },
            { id: '/chemex', text: 'Chemex' },
            { id: '/coffee sapiens', text: 'Coffee Sapiens' },
            { id: '/coffeemamma', text: 'Coffeemamma' },
            { id: '/coffeerem', text: 'Coffeerem' },
            { id: '/cool beans', text: 'Cool Beans' },
            { id: '/hario', text: 'Hario' },
            { id: '/illy', text: 'Illy' },
            { id: '/kronotrop', text: 'Kronotrop' },
            { id: '/kruve', text: 'Kruve' },
            { id: '/overdose coffee', text: 'Overdose Coffee' },
            { id: '/petra', text: 'Petra' },
            { id: '/porlex', text: 'Porlex' },
            { id: '/shorts coffee', text: 'Shorts Coffee' },
            { id: '/sozen degirmenleri', text: 'Sozen Degirmenleri' },
            { id: '/staresso', text: 'Staresso' },
            { id: '/taft coffee', text: 'Taft Coffee' },
            { id: '/urban grind', text: 'Urban Grind' },
            { id: '/urban tools', text: 'Urban Tools' },
            { id: '/wacaco', text: 'Wacaco' },
            ]
    }
  },

  created(){
      this.cart = JSON.parse(localStorage.getItem('sepettekiler' || [] ));
      this.toplam = JSON.parse(localStorage.getItem('toplam' || [] ));
    },

  methods: {
        mouseOver(){
            this.active = !this.active;
            this.cart = JSON.parse(localStorage.getItem('sepettekiler' || [] ));
            this.toplam = JSON.parse(localStorage.getItem('toplam' || [] ));
        },
        aramaYap(){
            if(event.key === 'Enter'){
                window.location.replace('/arama?kelime=' + this.aranacakKelime);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
