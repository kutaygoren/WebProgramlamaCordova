<template>
    <div class="page-content">

        <div class="back-gray login-page bulutlar">

            <form class="container" method="post">
                <input type="hidden">
                <section class="header text-center row">
                    <div class="kahve adres-secimi col-md-12">
                        <div class="ucan-yazi">
                            <span class="baslangic"></span>
                            <span class="yazi kahve">SİPARİŞ TAKİP</span>
                            <span class="bitis"></span>
                        </div>
                    </div>
                </section>
                <div class="seperator"></div>
                <section class="inner-form">
                    <div class="voffset2">
                        <input v-model="siparisNo" type="text" class="base-input" name="siparis_id" id="siparis_id"
                            placeholder="Sipariş Numarası">
                    </div>
                </section>
                <div class="voffset2">
                    <input v-on:click="siparisNoAl" class="btn back-turuncu" value="GÖNDER">
                </div>
            </form>
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
            siparisNo: "",
        }
    },

    methods: {
      siparisNoAl() {
                if (this.siparisNo === '1234') {
                alert("Siparişiniz Yolda")
            }

            else {
                alert("Sipariş Numarası Bulunamadı")
          }
      }  
    },

    created() {
        setTimeout(() => this.isLoading = false, 1000)
    }
}
</script>