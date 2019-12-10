<template>
    <div class="page-content">

        <div class="back-gray login-page bulutlar">

            <form class="container" id="giris" name="girisFormu">
                <section class="header text-center">
                    <div class="kahve adres-secimi">
                        <div class="ucan-yazi">
                            <span class="baslangic"></span>
                            <span class="yazi kahve">KAHHVE.COM GİRİŞ</span>
                            <span class="bitis"></span>
                        </div>
                    </div>
                </section>
                <div class="seperator"></div>
                <section class="inner-form">
                    <div class="voffset2">
                        <input v-model="mailAdresi" type="text" class="base-input" id="mail"
                            placeholder="Mail Adresiniz">
                    </div>
                    <div class="voffset2">
                        <input v-model="sifreAl" type="password" class="base-input" id="sifre" placeholder="Şifreniz">
                    </div>
                    <div class="turuncu">
                        <a href="/login/yenikullanici">Yeni Kullanıcı</a>
                        <a href="/login/yenisifre" class="pull-right">Şifremi Unuttum</a>
                    </div>
                </section>
                <div class="seperator"></div>
                <div class="voffset2">
                    <input v-on:click="girisYap" type="submit" class="btn back-turuncu" value="GİRİŞ YAP">
                    <a href="/login/fblogin" class="btn fb voffset2">FACEBOOK'LA GİRİŞ</a>
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
            mailAdresi: "",
            sifreAl: "",
        }
    },

    methods: {
        girisYap(){
          if ((this.mailAdresi === 'admin') && (this.sifreAl === 'admin')) {
            document.girisFormu.action = "/"
          }

          else {
            alert("Hatalı Giriş!")
          }
        }
    },

    created() {
        setTimeout(() => this.isLoading = false, 1000)
    }
}
</script>