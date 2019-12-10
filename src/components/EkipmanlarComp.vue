<template>
    <div class="page-content">

        <div class="katalog">
            <section class="baslik ekipmanlar">
                <div class="col-md-offset-1 col-md-8">
                    <h1 class="beyaz">KAHVE DEMLEME<br>EKİPMAN &amp; AKSESUARLAR</h1>
                    <h2 class="turuncu roboto">Taze kahve keyfiniz için ihtiyacınız olan her şey!</h2>
                    <div class="back-ekipman"></div>
                    <p class="beyaz roboto">Kahvenizin aromasını ve lezzettini en iyi şekilde bardağınıza getirecek
                        birbirinden özel ve nitelikli kahve demleme ekipmanlarını sizler için bir araya getirdik.
                        Chemex, Hario, Bialetti, Moka Pot, Aeropress, French Press ve kahve keyfinizi evinizde ve
                        ofisinizde yaşamanızı sağlayacak tüm ekipmanlara buradan ulaşabilirsiniz.</p>
                </div>
            </section>

            <section class="katalog" id="kahhveEkipmanlar">
                <div class="dropdown siralama">
                    <a href="#" class="dropdown-toggle buyuk1" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Sıralama<span class="caret"></span></a>
                    <ul class="dropdown-menu buyuk1">
                        <li><a v-on:click="altiliGosterim" href="#">6'lı Göster</a></li>
                        <li><a v-on:click="ucluGosterim" href="#">3'lü Göster</a></li>
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
                        <div class="sabit">
                            <h3 class="turuncu">EKİPMAN</h3>
                            <ul class="ekipman-icons kategori-filtreleri">
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-french-press"></i>
                                        <div>French Press</div>
                                    </a>
                                </li>
                                <li>
                                    <a v-on:click="bialettiSec" class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-moka-pot"></i>
                                        <div>Moka Pot</div>
                                    </a>
                                </li>
                                <li>
                                    <a v-on:click="chemexSec" class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-chemex"></i>
                                        <div>Chemex</div>
                                    </a>
                                </li>
                                <li>
                                    <a v-on:click="harioSec" class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-dripper"></i>
                                        <div>Hario</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-filtre"></i>
                                        <div>Filtre</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-tarti"></i>
                                        <div>Aksesuarlar</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-cold-drip"></i>
                                        <div>Soğuk Kahve</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-kettle"></i>
                                        <div>Kettle</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-mug"></i>
                                        <div>Mug</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-aeropress"></i>
                                        <div>Aeropress</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-kahve-makinesi"></i>
                                        <div>Kahve Makineleri</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-tamper"></i>
                                        <div>Barista Ekipmanlari</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-degirmen"></i>
                                        <div>Öğütücü</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-center inner kategori-filtresi ">
                                        <i class="icon icon-yedek-parcalar"></i>
                                        <div>Yedek Parça</div>
                                    </a>
                                </li>
                            </ul>

                            <h3 class="turuncu">MARKA</h3>
                            <ul class="marka-filtreleri">
                                <li><a v-on:click="hepsiniSec" class="kahve hepsini-gor pointer">Hepsini Gör</a></li>
                                <li><a v-on:click="bialettiSec" class="kahve marka-filtresi pointer">Bialetti(<span
                                            class="adet">3</span>)</a></li>
                                <li><a v-on:click="chemexSec" class="kahve marka-filtresi pointer">Chemex(<span
                                            class="adet">3</span>)</a></li>
                                <li><a v-on:click="harioSec" class="kahve marka-filtresi pointer">Hario(<span
                                            class="adet">5</span>)</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-9 urunler">
                        <div class="row urun-listesi">
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
                                    <li class="kahve">
                                        <a v-on:click="prevPage" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li class="kahve">
                                        <a v-on:click="nextPage" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
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
const chemexUrunlerURL = "https://api.myjson.com/bins/6vyt4"
const bialettiUrunlerURL = "https://api.myjson.com/bins/17uzh4"
const harioUrunlerURL = "https://api.myjson.com/bins/12i314"

    export default {
        data() {
            return {
                isLoading: true,
                cart: [],
                toplam: 0,
                hepsi: [],
                sayfa:[],
                itemPerPage: 6,
                a: 0,
                b: 6,
                adet: 1,
                chemexUrunler: [],
                bialettiUrunler: [],
                harioUrunler: []
            }
        },

        mounted() {
            fetch(chemexUrunlerURL)
			.then(response => response.json())
			.then(result => {
			this.chemexUrunler = result;
            });

            fetch(harioUrunlerURL)
			.then(response => response.json())
			.then(result => {
			this.harioUrunler = result;
            });
            
            fetch(bialettiUrunlerURL)
			.then(response => response.json())
			.then(result => {
            this.bialettiUrunler = result;
            this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
            this.sayfa = this.hepsi.slice(this.a,this.b);
            this.hepsi = this.sayfa;
            });
        },

        created(){
            setTimeout(() => this.isLoading = false, 1000)
            this.cart = JSON.parse(localStorage.getItem('sepettekiler' || [] ));
            this.toplam += JSON.parse(localStorage.getItem('toplam' || [] ));
        },

        methods: {
            kahhveSepeteEkle(index){
                this.isLoading = true;
				setTimeout(() => this.isLoading = false, 500);
                this.cart.push(this.hepsi[index]);
                this.toplam += this.hepsi[index].fiyat;
                localStorage.setItem('sepettekiler', JSON.stringify(this.cart));
                localStorage.setItem('toplam', JSON.stringify(this.toplam));
            },

            hepsiniSec(){
                this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
            },

            chemexSec(){
                this.hepsi = this.chemexUrunler;
            },

            harioSec(){
                this.hepsi = this.harioUrunler;
            },

            bialettiSec(){
                this.hepsi = this.bialettiUrunler;
            },

            artanFiyat(){
                this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1);
            },

            azalanFiyat(){
                this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1).reverse();
            },

            nextPage(){
                if (this.b < 12) {
                    this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
                    this.a += this.itemPerPage;
                    this.b += this.itemPerPage;
                    this.sayfa = this.hepsi.slice(this.a, this.b);
                    this.hepsi = this.sayfa;
                }
            },

            prevPage(){
                if (this.a > 0) {
                    this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
                    this.a -= this.itemPerPage;
                    this.b -= this.itemPerPage;
                    this.sayfa = this.hepsi.slice(this.a, this.b);
                    this.hepsi = this.sayfa;
                }
            },

            altiliGosterim() {
                this.b = 6;
                this.itemPerPage = 6;
                this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
                this.sayfa = this.hepsi.slice(this.a, this.b);
                    this.hepsi = this.sayfa;
            },

            ucluGosterim() {
                this.b = 3;
                this.itemPerPage = 3;
                this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
                this.sayfa = this.hepsi.slice(this.a, this.b);
                this.hepsi = this.sayfa;
            },


            adetUp(){
                this.adet++
            },

            adetDown(){
                if (this.adet > 1) {
                    this.adet--
            }
        },
    }
}
</script>