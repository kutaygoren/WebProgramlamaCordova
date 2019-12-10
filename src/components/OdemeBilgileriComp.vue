<template>
    <div class="page-content">

        <div class="statik">
            <div class="back-kahve container-fluid text-center turuncu-bulutlar">
                <h1 class="beyaz"><span class="buyuk2">KAHHVE.COM<br><strong>ÖDEME BİLGİLERİ</strong></span></h1>
            </div>
            <div class="turuncu buyuk4 container text-center voffset3">
                <strong>Alması kolay, ödemesi daha da kolay!</strong>
            </div>

            <div class="buyuk2 container roboto voffset3 accordion panel-group" id="accordion">
                <div class="panel back-gray">
                    <div class="panel-heading pointer" data-toggle="collapse" data-parent="#accordion" href="#kredi">
                        <a class="turuncu"><i></i>Kredi / Banka Kartı</a>
                    </div>
                    <div id="kredi" class="collapse in">
                        <div class="kahve light roboto panel-body">
                            Kahhve.com'da tüm bankaların kredi / banka kartlarını kullanarak güvenle alışveriş
                            yapabilirsiniz. Ödeme işlemlerinde güvenliğinizi en yüksek seviyede tutmak için 3D güvenlik
                            sistemi kullanılmaktadır. Kredi Kartı bilgileriniz herhangi bir şekilde sitemizde
                            tutulmamaktadır.
                            <p class="voffset2"><strong>Kredi Kartı bilgileriniz herhangi bir şekilde sitemizde
                                    tutulmamaktadır.</strong></p>
                        </div>
                    </div>
                </div>
                <div class="panel back-gray">
                    <div class="panel-heading pointer" data-toggle="collapse" data-parent="#accordion" href="#havale">
                        <a class="turuncu"><i></i>Havale</a>
                    </div>
                    <div id="havale" class="collapse">
                        <div class="kahve light roboto panel-body">
                            Ödeme seçeneği olarak havale seçip sipariş verme işlemini tamamlayabilir ve sonrasında
                            havale / eft yaparak siparişinizin onaylanmasını sağlayabilirsiniz. İşlemleri hızlandırmak
                            için havale sırasında açıklama kısmına sipariş numaranızı yazabilir ve bilgilendirme maili
                            atabilirsiniz.
                            <div>
                                <p class="voffset3" style="font-size:14px;"><strong>Akbank Ayazpaşa Şubesi</strong><br>
                                    <strong>Alıcı İsmi:</strong> 5A GRUP MAĞAZACILIK BİLİŞİM<br>
                                    <strong>IBAN:</strong> TR98 0004 6002 7788 8000 1394 35</p>
                            </div>
                            <div>
                                <p class="voffset3" style="font-size:14px;"><strong>İşbankası Ataşehir
                                        Şubesi</strong><br>
                                    <strong>Alıcı İsmi:</strong> 5A GRUP MAĞAZACILIK BİLİŞİM<br>
                                    <strong>IBAN:</strong> TR18 0006 4000 0011 2260 4504 37</p>
                            </div>
                            <div>
                                <p class="voffset3" style="font-size:14px;"><strong>Yapıkredi İçerenköy
                                        Şubesi</strong><br>
                                    <strong>Alıcı İsmi:</strong> 5A GRUP MAĞAZACILIK BİLİŞİM<br>
                                    <strong>IBAN:</strong> TR66 0006 7010 0000 0056 3664 83</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel back-gray">
                    <div class="panel-heading pointer" data-toggle="collapse" data-parent="#accordion" href="#kapida">
                        <a class="turuncu"><i></i>Kapıda Ödeme</a>
                    </div>
                    <div id="kapida" class="collapse">
                        <div class="kahve light roboto panel-body">
                            Tercih etmeniz halinde, siparişinizin tutarını kargonuzu teslim aldığınız sırada nakit
                            olarak ya da kredi kartınızdan tek çekim şeklinde ödeyebilirsiniz. Kapıda ödeme masrafı ek
                            olarak 10.00 TL‘dir
                        </div>
                    </div>
                </div>
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
        }
    },

    created() {
        setTimeout(() => this.isLoading = false, 1000)
    }
}
</script>