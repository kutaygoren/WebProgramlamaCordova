<template>
    <div class="page-content">

        <div class="katalog">
            <section class="baslik ekipmanlar">
                <div class="col-md-offset-1 col-md-8">
                    <h1 class="beyaz">KAHVE TANIŞMA SETLERI</h1>
                    <h2 class="turuncu roboto">Kahve Ekipmanları Tanışma Setleri</h2>
                    <div class="back-ekipman"></div>
                    <p class="beyaz roboto">Kahve Demleme Ekipmanlarını kullanmak için ihtiyacınız olan ekipman ve
                        aksesuarları yanında 5 çeşit 50gr kahve ile bir arada alabileceğiniz setler oluşturduk. </p>
                </div>
            </section>

            <section class="katalog" id="kahhveTanisma">
                <div class="dropdown siralama">
                    <a href="#" class="dropdown-toggle buyuk1" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Sıralama<span class="caret"></span></a>
                    <ul class="dropdown-menu buyuk1">
                        <li><a v-on:click="azalanFiyat" href="#">Fiyat Azalan</a></li>
                        <li><a v-on:click="artanFiyat" href="#">Fiyat Artan</a></li>
                        <li><a href="#">Akıllı Sıralama</a></li>
                        <!-- Sayfada olduğundan dolayı eklendi. Herhangi bir fonksiyonu yoktur. -->
                        <li><a href="#">Benzer Ürünler</a></li>
                        <!-- Sayfada olduğundan dolayı eklendi. Herhangi bir fonksiyonu yoktur. -->
                    </ul>
                </div>

                <div class="row no-padding">
                    <div class="col-md-3 filtreler hidden-xs">
                        <h3 class="turuncu">MARKA</h3>
                        <ul>
                            <li><a v-on:click="aeropressSec" class="kahve marka-filtresi pointer">Aeropress(<span
                                        class="adet">2</span>)</a></li>
                            <li><a v-on:click="bialettiSec" class="kahve marka-filtresi pointer">Bialetti(<span
                                        class="adet">3</span>)</a></li>
                            <li><a v-on:click="harioSec" class="kahve marka-filtresi pointer">Hario(<span
                                        class="adet">4</span>)</a></li>
                            <li><a v-on:click="kahhveSec" class="kahve marka-filtresi pointer">KahhveCom(<span
                                        class="adet">1</span>)</a></li>
                        </ul>
                    </div>

                    <div class="col-md-9 urun-listesi">
                        <div class="row">
                            <div class="col-md-4 col-xs-6" v-for="(item, index) in hepsi" :key="index">
                                <div v-if="item.isAvailable === true" class="urun">
                                    <a class="resim">
                                        <i class="icon icon-sepet back-turuncu beyaz katalog-sepete-ekle"
                                            v-on:click="kahhveSepeteEkle(index)"></i>
                                        <img class="" :src="item.image">
                                    </a>
                                    <router-link :to="item.url" class="a">
                                        <div class="title text-center">
                                            <span class="inner-title">{{ item.title }}</span>
                                        </div>
                                    </router-link>
                                    <router-link :to="item.markaurl" class="a">
                                        <div class="text-center marka roboto">{{ item.marka }}</div>
                                    </router-link>
                                    <div class="text-center fiyat">
                                        <p>{{ item.fiyat }} TL</p>
                                    </div>
                                </div>
                                <div v-else class="urun">
                                    <a class="resim">
                                        <span class="stokta-yok back-turuncu beyaz">STOKTA YOK</span>
                                        <img class="" :src="item.image">
                                    </a>
                                    <router-link :to="item.url" class="a">
                                        <div class="title text-center">
                                            <span class="inner-title">{{ item.title }}</span>
                                        </div>
                                    </router-link>
                                    <router-link :to="item.markaurl" class="a">
                                        <div class="text-center marka roboto">{{ item.marka }}</div>
                                    </router-link>
                                    <div class="text-center fiyat">
                                        <p>{{ item.fiyat }} TL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <nav aria-label="Page navigation" class="navigation">
                                <ul class="pagination">
                                    <li class="turuncu"><a>1</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div v-if="isLoading" class="yukleniyor" style="display: block;">
              <div class="zeplin"></div>
        </div>

        <div v-else class="yukleniyor" style="display: none;">
              <div class="zeplin"></div>
        </div>
    </div>
</template>

<script>
const kahhvesetlerURL = "https://api.myjson.com/bins/uaavs"
const bialettiSetlerURL = "https://api.myjson.com/bins/dm5y0"
const aeropressSetlerURL = "https://api.myjson.com/bins/8up3s"
const harioSetlerURL = "https://api.myjson.com/bins/9g4pk"

    export default {
        data() {
            return {
                isLoading: true,
                cart: [],
                toplam: 0,
                kahhvesetler: [],
                bialettiSetler: [],
                aeropressSetler: [],
                harioSetler: [],
                
                hepsi: [],
            }
        },

        mounted(){
            fetch(bialettiSetlerURL)
			.then(response => response.json())
			.then(result => {
			this.bialettiSetler = result;
            });

            fetch(aeropressSetlerURL)
			.then(response => response.json())
			.then(result => {
			this.aeropressSetler = result;
            });

            fetch(harioSetlerURL)
			.then(response => response.json())
			.then(result => {
			this.harioSetler = result;
            });

            fetch(kahhvesetlerURL)
			.then(response => response.json())
			.then(result => {
            this.kahhvesetler = result;
            this.hepsi = this.kahhvesetler.concat(this.bialettiSetler, this.harioSetler, this.aeropressSetler);
            });
        },

        created() {
            setTimeout(() => this.isLoading = false, 1000);
            this.cart = JSON.parse(localStorage.getItem('sepettekiler' || []));
            this.toplam += JSON.parse(localStorage.getItem('toplam' || []));
        },

        methods: {
            kahhveSepeteEkle(index) {
                this.isLoading = true;
				setTimeout(() => this.isLoading = false, 500);
                this.cart.push(this.hepsi[index]);
                this.toplam += this.hepsi[index].fiyat;
                localStorage.setItem('sepettekiler', JSON.stringify(this.cart));
                localStorage.setItem('toplam', JSON.stringify(this.toplam));
            },

            aeropressSec() {
                this.hepsi = this.aeropressSetler;
            },

            harioSec() {
                this.hepsi = this.harioSetler;
            },

            bialettiSec() {
                this.hepsi = this.bialettiSetler;
            },

            kahhveSec() {
                this.hepsi = this.kahhvesetler;
            },

            artanFiyat() {
                this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1);
            },

            azalanFiyat() {
                this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1).reverse();
            }
        }
    }
</script>