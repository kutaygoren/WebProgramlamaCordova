<template>
    <div class="page-content">
        <div class="katalog" id="kahhveEkipmanlar">
            <section class="urun-detay container">
                <ul class="breadcrumbs" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                    <li>
                        <a href="/">Ana Sayfa</a>
                    </li>
                    <span class="turuncu">&gt;</span>
                    <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                        <a href="kahve-demleme-ekipmanlari.html" itemprop="item"><span itemprop="name">Kahve Demleme
                                Ekipmanları</span></a>
                    </li>
                    <span class="turuncu">&gt;</span>
                    <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                            href="/chemex-kahve-ekipmanlari" itemprop="item"><span
                                itemprop="name">CHEMEX</span></a>
                        <meta itemprop="position" content="2">
                    </li>
                    <span class="turuncu">&gt;</span>
                    <li>AHŞAP TUTACAKLI 6 CUP</li>
                </ul>
                <!--Breadcrumbs Close-->
                <div class="row">
                    <div class="col-md-5" itemscope="itemscope" itemtype="http://schema.org/ImageObject">
                        <img class="ana-resim"
                            src="https://kahhvecom.imgix.net/urunler/47_1439898391_u6Z.jpg"
                            alt="Chemex Ahşap Tutacaklı 6 Cup">
                        <div class="thumb text-center">
                            <img class="thumb-resim" id="img28"
                                src="https://kahhvecom.imgix.net/urunler/47_1439898391_u6Z.jpg">
                            <img class="thumb-resim" id="img29"
                                src="https://kahhvecom.imgix.net/urunler/47_1439898414_17I.jpg">
                            <img class="thumb-resim" id="img30"
                                src="https://kahhvecom.imgix.net/urunler/47_1439898429_Vti.jpg">
                        </div>
                    </div>
                    <div class="col-md-7 bilgiler">
                        <h1 class="turuncu" itemprop="name">AHŞAP TUTACAKLI 6 CUP</h1>
                        <h2 class="kahve roboto light" itemprop="brand"><a
                                href="/chemex">CHEMEX</a></h2>
                        <div class="agirlik roboto light"></div>
                        <div style="display: none;" itemprop="aggregateRating" itemscope=""
                            itemtype="http://schema.org/AggregateRating">
                            <span itemprop="ratingValue">0</span>/5
                            <span itemprop="reviewCount">0</span>
                        </div>
                        <p class="fiyat kahve" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                            <span itemprop="price" content="379.99">379.99</span>
                            <span itemprop="priceCurrency" content="TRY">TL</span>
                        </p>
                        <div class="adet">
                            <div class="dropdown">
                                <div class="adet-ayarlama text-center">
                                    <span v-on:click="adetDown" class="back-kahve beyaz pointer">-</span>
                                    <span v-on:click="adetUp" class="back-kahve beyaz pointer">+</span>
                                </div>
                                <span class="kahve roboto">Adet:</span>
                                <span class="turuncu roboto">{{ adet }}</span>
                            </div>
                            <div>
                                <a v-on:click="kahhveSepeteEkle()" class="btn back-turuncu sepete-ekle">SEPETE EKLE</a>
                                <a class="pull-right turuncu pointer favori-ekle"
                                    style="font-size: 42px;padding-right: 10px;padding-top: 2px;"><i
                                        class="glyphicon glyphicon-heart-empty"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="aciklama container kahve roboto" itemprop="description">
                <p>Modern zamanın en başarılı tasarımlarından biri kabul edilen Chemex, tadına hayran kalacağınız bir
                    kahve deneyimi sunuyor. Mühendislik dehası laboratuvar camı sayesinde kahveniz aromasını yitirmiyor.
                    Hem oldukça şık bir dizayna hem de kolay bir kullanıma sahip bu araçla kendinize ve sevdiklerinize
                    orta yumuşaklıkta ve içimi kolay kahveler demleyebilirsiniz.</p>
                *Yaklaşık 880 mL hacme sahiptir.<br>
                *Yaklaşık 22 cm yüksekliğe ve 13 cm çapa sahiptir.<br>
                *Borosilikat cam teknolojisi ile kimyasalların camda kalmasını engeller.<br>
                *Chemex filtresi kullanılmalıdır.<br>
                *Cilalanmış ahşap tutacak ve deri kayışa sahiptir.<br>
                <br>
                Nasıl Kullanılır?<br>
                Modele uygun boyutta Chemex filtresini ürüne yerleştirin. Filtreyi sıcak suyla hafifçe ıslatıp suyu
                dökün. Uygun boyutta öğütülmüş kahveyi filtreye koyun ve her yerini sıcak suyla ıslatıp 30 saniye kadar
                bekleyin. Sonrasında dairesel hareketlerle her 6 gram kahve için 100 mL su ekleyin. Kahve tamamen
                süzüldüğünde servise hazır olacak.<br>
            </section>

            <section class="benzer-urunler back-gray urun-serit text-center voffset3">
                <!-- Sepete ekleme fonksiyonları olmadığından direkt siteden alınmıştır. -->
                <div class="container">
                    <h3 class="turuncu">BENZER ÜRÜNLER</h3>
                    <div class="benzer-urunler-listesi" style="min-height: 325px;">
                        <div class="col-md-3 col-xs-6">
                            <div class="urun">
                                <div class="urun-resmi" style="position: relative;"><a
                                        href="/chemex-set-kahve-demleme-ekipmanlari"><img
                                            src="https://kahhvecom.imgix.net/urunler/69_1569671022_3OC.jpg"></a>
                                </div><a href="/chemex-set-kahve-demleme-ekipmanlari">
                                    <div class="title text-center"><span class="inner-title">Chemex Tanışma Seti</span>
                                    </div>
                                </a><a href="/chemex">
                                    <div class="text-center marka roboto">Chemex</div>
                                </a>
                                <div class="text-center fiyat">
                                    <p>494.99 TL</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="urun">
                                <div class="urun-resmi" style="position: relative;"><a
                                        href="/chemex-beyaz-filtre-filtreler"><img
                                            src="https://kahhvecom.imgix.net/urunler/50_1440881161_NU3.jpg"></a>
                                </div><a href="/chemex-beyaz-filtre-filtreler">
                                    <div class="title text-center"><span class="inner-title">Beyaz Filtre 6-8 Cup</span>
                                    </div>
                                </a><a href="/chemex">
                                    <div class="text-center marka roboto">Chemex</div>
                                </a>
                                <div class="text-center fiyat">
                                    <p>74.99 TL</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="urun">
                                <div class="urun-resmi" style="position: relative;"><a
                                        href="/chemex-ahsap-tutacakli-3-cup-kahve-demleme-ekipmanlari"><img
                                            src="https://kahhvecom.imgix.net/urunler/138_1440706475_4ek.jpg"></a>
                                </div><a href="/chemex-ahsap-tutacakli-3-cup-kahve-demleme-ekipmanlari">
                                    <div class="title text-center"><span class="inner-title">Ahşap Tutacaklı 3
                                            Cup</span></div>
                                </a><a href="/chemex">
                                    <div class="text-center marka roboto">Chemex</div>
                                </a>
                                <div class="text-center fiyat">
                                    <p>339.99 TL</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="urun">
                                <div class="urun-resmi" style="position: relative;"><a
                                        href="/aeropress-kahve-demleme-ekipmanlari"><img
                                            src="https://kahhvecom.imgix.net/urunler/49_1565327535_Hjv.jpg"></a>
                                </div><a href="/aeropress-kahve-demleme-ekipmanlari">
                                    <div class="title text-center"><span class="inner-title">Aeropress</span></div>
                                </a><a href="/aeropress">
                                    <div class="text-center marka roboto">Aeropress</div>
                                </a>
                                <div class="text-center fiyat">
                                    <p>289.99 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="benzer-urunler urun-serit text-center voffset3" id="benzerurunler">
                <!-- Sepete ekleme fonksiyonları olmadığından direkt siteden alınmıştır. -->
                <div class="container">
                    <h3 class="turuncu">BİRLİKTE ALINANLAR</h3>
                    <div class="birlikte-alinanlar-listesi" style="min-height: 325px;">
                        <div class="col-md-3 col-xs-6">
                            <div class="urun">
                                <div class="urun-resmi" style="position: relative;"><a
                                        href="/hario-v60-02-filtre-kagidi-100-adet"><img
                                            src="https://kahhvecom.imgix.net/urunler/97_1566300500_rqa.jpg"></a>
                                </div><a href="/hario-v60-02-filtre-kagidi-100-adet">
                                    <div class="title text-center"><span class="inner-title">V60 02 Filtre Kağıdı 100
                                            Adet</span></div>
                                </a><a href="/hario">
                                    <div class="text-center marka roboto">Hario</div>
                                </a>
                                <div class="text-center fiyat">
                                    <p>39.99 TL</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="urun">
                                <div class="urun-resmi" style="position: relative;"><a
                                        href="/chemex-beyaz-filtre-filtreler"><img
                                            src="https://kahhvecom.imgix.net/urunler/50_1440881161_NU3.jpg"></a>
                                </div><a href="/chemex-beyaz-filtre-filtreler">
                                    <div class="title text-center"><span class="inner-title">Beyaz Filtre 6-8 Cup</span>
                                    </div>
                                </a><a href="/chemex">
                                    <div class="text-center marka roboto">Chemex</div>
                                </a>
                                <div class="text-center fiyat">
                                    <p>74.99 TL</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="urun">
                                <div class="urun-resmi" style="position: relative;"><a
                                        href="/aeropress-kahve-demleme-ekipmanlari"><img
                                            src="https://kahhvecom.imgix.net/urunler/49_1565327535_Hjv.jpg?auto=enhanced&amp;h=275&amp;ixlib=php-1.0.6&amp;lossless=1&amp;w=275&amp;s=d0a485369e58330ec5b43212cb60ce4e"></a>
                                </div><a href="/aeropress-kahve-demleme-ekipmanlari">
                                    <div class="title text-center"><span class="inner-title">Aeropress</span></div>
                                </a><a href="/aeropress">
                                    <div class="text-center marka roboto">Aeropress</div>
                                </a>
                                <div class="text-center fiyat">
                                    <p>289.99 TL</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="urun">
                                <div class="urun-resmi" style="position: relative;"><a
                                        href="/hario-kettle-buono-kahve-demleme-ekipmanlari"><img
                                            src="https://kahhvecom.imgix.net/urunler/95_1440933095_gr7.jpg?auto=enhanced&amp;h=275&amp;ixlib=php-1.0.6&amp;lossless=1&amp;w=275&amp;s=b6b0c7acb161d77b737fde5e2a99bf7e"></a>
                                </div><a href="/hario-kettle-buono-kahve-demleme-ekipmanlari">
                                    <div class="title text-center"><span class="inner-title">Kettle Buono 1.2 Lt</span>
                                    </div>
                                </a><a href="/hario">
                                    <div class="text-center marka roboto">Hario</div>
                                </a>
                                <div class="text-center fiyat">
                                    <p>309.99 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="urun-ilaveler">
                <!-- Yorumlar siteden örnek olarak alınmıştır. -->
                <ul class="text-center ust-kisim container-fluid no-padding back-kahve beyaz pointer" role="tablist">
                    <li role="presentation" class="col-md-6 yorumlar active">
                        <div href="#yorumlar" aria-controls="yorumlar" role="tab" data-toggle="tab">YORUMLAR</div>
                    </li>
                    <li role="presentation" class="col-md-6 soru-cevap">
                        <div href="#soru-cevap" aria-controls="soru-cevap" role="tab" data-toggle="tab">SORU CEVAP</div>
                    </li>
                </ul>
                <div class="tab-content voffset2 bulutlar">
                    <div role="tabpanel" class="tab-pane" id="soru-cevap">
                        <div class="container text-left roboto">
                            <div class="kahve"><strong>Soru:</strong></div>
                            <p class="kahve">Chemex ile demleme yapmak icin kahveyi hangi boyutta cektirmeliyim? French
                                presslik kullansam demlemede sıkıntı yasar mıyım ? Tesekkürler..</p>
                            <footer style="color: #a2a2a2; margin:20px 0;">
                                - Meryem Demir
                            </footer>
                            <div class="turuncu"><strong>Cevap:</strong></div>
                            <p class="turuncu">French Press'ten biraz daha ince kagit filtre'den biraz daha kalin olmasi
                                gerekiyor.</p>
                        </div>
                        <hr>

                        <div class="voffset3 text-center kahve roboto light">Ürün hakkında öğrenmek istediğiniz bir
                            sorunuz var ise bizimle <a style="color:#c65800 !important;" href="#" data-toggle="modal"
                                data-target="#yenisoru">paylaşabilirsiniz.</a></div>
                    </div>

                    <div role="tabpanel" class="tab-pane active" id="yorumlar">
                        <div itemprop="review" itemscope="" itemtype="http://schema.org/Review"
                            class="container text-left roboto siparis-yorum">
                            <div class="yorum-oy">
                                <span class="star " data-rate="1"></span>
                                <span class="star " data-rate="2"></span>
                                <span class="star " data-rate="3"></span>
                                <span class="star " data-rate="4"></span>
                                <span class="star " data-rate="5"></span>
                            </div>
                            <p class="kahve light" itemprop="reviewBody">Sipariş ettiğim günün sonrası harika bir
                                şekilde paketlenmiş olarak elime ulaştı. Kahhve.com’dan aldığım hiçbir ürünle ilgili
                                sıkıntı yaşamadım. İç rahat ettiren firma</p>
                            <footer style="color: #a2a2a2; margin:20px 0;" itemprop="author">
                                - ilayda
                            </footer>
                        </div>
                        <hr>

                        <div class="voffset3 text-center kahve roboto light">Yorum yapmak için <a
                                style="color:#c65800 !important;" href="login.html">üye girişi</a> yapmanız
                            gerekmektedir.</div>
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
    export default {
        data() {
            return {
                isLoading: true,
                adet: 1,
                cart: [],
                toplam: 0,
                urun: [
                    {
                        isAvailable: true,
                        markaurl: '/chemex',
                        sepette: 'Chemex Ahşap Tutacaklı 6 Cup',
                        image: 'https://kahhvecom.imgix.net/urunler/47_1439898391_u6Z.jpg',
                        url: 'chemex-ahsap-tutacakli-6-cup-kahve-demleme-ekipmanlari.html',
                        title: 'AHŞAP TUTACAKLI 6 CUP',
                        marka: 'CHEMEX',
                        fiyat: 379.99 
                    },
                ]
            }
        },
        
        created() {
            setTimeout(() => this.isLoading = false, 1000)
        },

        methods: {
            adetUp() {
                this.adet++
            },

            kahhveSepeteEkle() {
                this.isLoading = true;
				setTimeout(() => this.isLoading = false, 500);
                this.cart = JSON.parse(localStorage.getItem('sepettekiler' || []));
                this.toplam += JSON.parse(localStorage.getItem('toplam' || []));
                this.cart.push(this.urun[0]);
                this.toplam += this.urun[0].fiyat;
                localStorage.setItem('sepettekiler', JSON.stringify(this.cart));
                localStorage.setItem('toplam', JSON.stringify(this.toplam));
            },

            adetDown() {
                if (this.adet > 1) {
                    this.adet--
                }
            }
        }
    }
</script>