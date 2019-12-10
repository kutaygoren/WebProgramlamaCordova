<template>
    <div class="page-content" v-if="toplam === 0">

        <div class="sepet-page back-gray">

            <div class="container">
                <section class="header row">
                    <div class="col-md-6">
                        <h1 class="turuncu"><i class="icon icon-sepet"></i>SEPETİNİZ</h1>
                        <p class="kahve roboto">Sepetinizde ürün bulunmamaktadır.</p>
                    </div>
                    <div class="col-md-6"></div>
                </section>
            </div>
        </div>
    </div>

    <div class="page-content" v-else>

        <div class="sepet-page back-gray">

            <div class="container">
                <section class="ana header row">
                    <div class="col-md-12">
                        <h1 class="turuncu"><i class="icon icon-sepet"></i>SEPETİNİZ</h1>
                        <span class="turuncu buyuk2 roboto">Siparişinizi hemen tamamlayabilirseniz ürünleriniz bugün
                            kargoda. <a data-toggle="popover" data-trigger="focus" data-placement="bottom" title=""
                                data-content="Stoklarımız anlık olarak sitemizde güncellenmektedir. Bu sayede gelen siparişleri hemen hazırlayıp gönderebiliyoruz."
                                data-original-title="Kargolanma Zamanı" tabindex="0">
                                <span class="glyphicon glyphicon-info-sign"></span>
                            </a>
                        </span>
                    </div>
                </section>
                <div class="seperator"></div>
                <section class="sepet-urunler">
                    <div style="margin-top: 30px;" v-for="(item, index) in cart" :key="index">
                        <div class="sepet-urun">
                            <a :href="item.url"><img :src="item.image"></a>
                            <div class="detay">
                                <a :href="item.url">
                                    <div class="turuncu urun-ismi">{{ item.title }}</div>
                                </a>
                                <a :href="item.markaurl">
                                    <div class="kahve roboto marka">{{ item.marka }}</div>
                                </a>
                                <div style="min-height: 35px; margin-bottom: 40px;">
                                    <div class="dropdown ea-select secenek">
                                        <a data-toggle="popover" data-trigger="focus" data-placement="bottom" title=""
                                            data-content="Kahvelerimiz çekirdek olarak elimizde bulunmaktadır. Siparişiniz sonrası demleme yapacağınız ekipmana göre öğütme yapılacaktır. Bu yüzden hangi ekipman ile demleme yapacağınızı belirtmeniz gerekmektedir. Eğer öğütmeyi kendiniz yapmayı planlıyorsanız seçenek olarak çekirdek seçmeniz yeterli olacaktır."
                                            data-original-title="Öğütme Boyutu Nedir?" tabindex="0"
                                            style="top: 4px;position: absolute;font-size: 20px;right: 25px;color: #c25800;">
                                            <span class="glyphicon glyphicon-question-sign"></span>
                                        </a>
                                        <button class="dropdown-toggle" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="true">
                                            <span class="text text-left">Kahve Öğütme Boyutu</span>
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="adet">
                                            <li><a>French Press</a></li>
                                            <li><a>Chemex</a></li>
                                            <li><a>Metal Filtre</a></li>
                                            <li><a>Kağıt Filtre</a></li>
                                            <li><a>Hario</a></li>
                                            <li><a>Aeropress</a></li>
                                            <li><a>Moka Pot</a></li>
                                            <li><a>Espresso</a></li>
                                            <li><a>Soğuk Demleme</a></li>
                                            <li><a>Çekirdek</a></li>
                                            <li><a>Syphon</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown ea-select adet">
                                        <button class="dropdown-toggle" type="button" id="adet" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="true">
                                            <span class="text text-left">1</span>
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="adet">
                                            <li><a>1 Adet</a></li>
                                            <li><a>2 Adet</a></li>
                                            <li><a>3 Adet</a></li>
                                            <li><a>4 Adet</a></li>
                                            <li><a>5 Adet</a></li>
                                            <li><a>6 Adet</a></li>
                                            <li><a>7 Adet</a></li>
                                            <li><a>8 Adet</a></li>
                                            <li><a>9 Adet</a></li>
                                            <li><a>10 Adet</a></li>
                                            <li><a>11 Adet</a></li>
                                            <li><a>12 Adet</a></li>
                                            <li><a>13 Adet</a></li>
                                            <li><a>14 Adet</a></li>
                                            <li><a>15 Adet</a></li>
                                            <li><a>16 Adet</a></li>
                                            <li><a>17 Adet</a></li>
                                            <li><a>18 Adet</a></li>
                                            <li><a>19 Adet</a></li>
                                            <li><a>20 Adet</a></li>
                                            <li><a>21 Adet</a></li>
                                            <li><a>22 Adet</a></li>
                                            <li><a>23 Adet</a></li>
                                            <li><a>24 Adet</a></li>
                                            <li><a>25 Adet</a></li>
                                        </ul>
                                    </div>
                                    <div class="ea-close roboto light kahve text-center"><a
                                            v-on:click="sepettenSil(index)" href="#">×</a></div>
                                </div>
                                <div class="fiyat kahve"><span>{{ item.fiyat }}</span> TL</div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="seperator"></div>
                <div class="kargo-ucreti">
                    <div class="turuncu ucret">
                        <span class="roboto">Kargo Ücreti:</span>
                        <span v-if="toplam > 100" class="kahve">ÜCRETSİZ</span>
                        <span v-else class="fiyat kahve" style="padding-left: 10px;position: relative;">
                            <span>5.99</span> TL
                        </span>
                    </div>
                    <div class="ucan-yazi pull-right"><span class="baslangic"></span><span class="yazi kahve">100 TL
                            ÜZERİNE KARGO BİZDEN!</span><span class="bitis"></span></div>
                </div>
                <div class="seperator"></div>
                <div class="promosyon">
                    <form method="post" action="/sepet/promosyon">
                        <input type="text" name="promosyon" placeholder="Promosyon kodunuz varsa giriniz">
                        <input type="submit" value="KULLAN" class="btn">
                    </form>
                </div>
                <div class="seperator"></div>
                <form class="toplam" action="/sepet/notkaydet" method="POST">
                    <div class="pull-left not">
                        <textarea placeholder="Sipariş Notunuz" name="siparis_notu"></textarea>
                        <a href="/sepet/hediyeekle" class="kahve buyuk1 voffset2">
                            <i class="icon-checkbox"></i>
                            <span class="yazi">Siparişimin <span class="turuncu">hediye paketi</span> olarak
                                gönderilmesini istiyorum.<span class="turuncu"> (7.99 <span
                                        class="kucuk2">TL</span>)</span></span>
                        </a>
                    </div>
                    <div class="pull-left">
                        <div class="toplam-yazi turuncu">TOPLAM</div>
                        <div class="toplam-fiyat kahve"><span>{{ toplam }}</span> TL</div>
                    </div>
                    <div class="pull-right">
                        <button type="submit" class="btn">SİPARİŞ VER</button>
                    </div>
                </form>
            </div>
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
                cart: [],
                toplam: 0,
            }
        },

        created() {
            setTimeout(() => this.isLoading = false, 1000);
            this.cart = JSON.parse(localStorage.getItem('sepettekiler' || [] ));
            this.toplam += JSON.parse(localStorage.getItem('toplam' || [] ));
        },

        methods: {
            sepettenSil(index)
            {
                this.toplam -= this.cart[index].fiyat;
                this.cart.splice(index, 1);
                localStorage.setItem('sepettekiler', JSON.stringify(this.cart));
                localStorage.setItem('toplam', JSON.stringify(this.toplam));
            }
        }
    }
</script>