<template>
    <footer v-if="isAvailable" class="urunserit back-gray">
        <a v-on:click="acKapa" class="btn text-center back-turuncu">Bilgileri Kapat</a>
        <div class="container" style="padding-bottom: 20px;">
            <div class="col-md-2 col-sm-6 col-xs-12 kahve" id="bilgiler-1">
                <h3 class="turuncu">KAHHVE.COM</h3>
                <ul>
                    <li :key="index" v-for="(bilgi, index) in bilgiler">
                        <router-link :to="bilgi.id" class="a">{{ bilgi.text }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-12 kahve" id="kategoriler-1">
                <h3 class="turuncu">KATEGORİLER</h3>
                <ul class="row">
                    <li v-for="(kategori, index) in kategoriler" :key="index">
                        <router-link :to="kategori.id" class="a">{{ kategori.text }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12 kahve" id="markalar-2">
                <h3 class="turuncu">MARKALAR</h3>
                <ul>
                    <li class="col-xs-6 no-padding" v-for="(marka, index) in markalar" :key="index">
                        <router-link :to="marka.id" class="a">{{ marka.text }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12 kahve">
                <h3 class="turuncu">İLETİŞİM</h3>
                <span class="turuncu">5A GRUP MAĞAZACILIK BİLİŞİM <br>TEKNOLOJİ VE DANIŞMANLIK A.Ş.</span>
                <br>
                Evren Sitesi E Blok İçerenköy / Ataşehir / İstanbul
                <br>
                <span class="turuncu">info@kahhve.com</span> 0 850 522 04 94
                <h3 class="turuncu">BİZİ TAKİP EDİN</h3>
                <ul class="social row">
                    <li><a href="https://www.facebook.com/kahhvecom" target="_blank" rel="nofollow"
                            class="facebook"></a></li>
                    <li><a href="https://twitter.com/kahhvecom" target="_blank" rel="nofollow" class="twitter"></a></li>
                    <li><a href="https://www.instagram.com/kahhvecom/" target="_blank" rel="nofollow"
                            class="instagram"></a></li>
                    <li><a href="https://www.youtube.com/user/kahhve" target="_blank" rel="nofollow"
                            class="youtube"></a></li>
                    <li><a href="https://pinterest.com/kahhvecom/" target="_blank" rel="nofollow" class="pinterest"></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container-fluid gray beyaz-alan">
            <div class="col-md-3 guvenli-alisveris">
                <div>İnternette Güvenli Alışveriş</div>
                <span class="comodo"></span>
            </div>
            <div class="col-md-6 kredi-kartlari"></div>
            <div class="footer-copyright text-center col-md-3">
                <div>© 2014 - 2019 kahhve.com Tüm hakları saklıdır.</div>
                <div>Çağrı Merkezi: 0 (850) 522 04 94 <span>-</span> info@kahhve.com</div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            isAvailable: true,
            bilgiler: [
                { id: '/bizkimiz', text: 'Hakkımızda' },
                { id: '/siparis/takip', text: 'Sipariş Takip' },
                { id: '/siparis-odeme-bilgileri', text: 'Ödeme Seçenekleri' },
                { id: '/sss', text: 'Sık Sorulan Sorular' },
                { id: '/gizlilik-politikasi', text: 'Gizlilik Politikası' },
                { id: '/yasal-uyari', text: 'Yasal Uyarı' },
                { id: '/mesafeli-satis-sozlesmesi', text: 'Mesafeli Satış Sözleşmesi' },
                { id: '/cayma-hakki', text: 'Cayma Hakkı' },
                ],

            kategoriler: [
                { id: '/kahveler', text: 'Kahveler' },
                { id: '/kapsul-kahveler', text: 'Kapsül Kahveler' },
                { id: '/ekipmanlar', text: 'Kahve Demleme Ekipmanları' },
                { id: '/moka-pot', text: 'Moka Pot' },
                { id: '/french-press', text: 'French Press' },
                { id: '/kahve-degirmenleri', text: 'Öğütücüler' },
                { id: '/filtreler', text: 'Filtreler' },
                { id: '/soguk-kahve', text: 'Soğuk Kahve' },
                { id: '/yedek-parcalar', text: 'Yedek Parçalar' },
                { id: '/aksesuarlar', text: 'Aksesuarlar' },
                { id: '/barista-ekipmanlari', text: 'Barista Ekipmanları' },
                { id: '/kettle', text: 'Kettle' },
                { id: '/chemex', text: 'Chemex' },
                { id: '/hario', text: 'Hario' },
                { id: '/bonavita', text: 'Bonavita' },
                { id: '/aeropress-ekipmanlari', text: 'Aeropress' },
                { id: '/kahve-icme-ekipmanlari', text: 'Termos&Mug' },
                ],

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

    methods: {
        acKapa(){
        if (this.isAvailable === true) {
            this.isAvailable = false;
        }
        else {
            this.isAvailable = true;
        }
        }  
    }
}
</script>