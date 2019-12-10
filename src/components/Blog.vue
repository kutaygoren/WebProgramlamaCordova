<template>
    <section class="row uclu voffset3">
        <a href="/blog" class="col-md-4 col-sm-12 bolum orta">
            <div class="kultur">
                <h3>BLOG</h3>
                <p>Kahhveyle ilgili haberler,<br>bilgiler, teknikler, gelişmeler...</p>
            </div>
        </a>
        <div class="col-md-8 col-sm-12 bolum subscription-outer">
            <div class="subscription">
                <h3>İLK SİZ HABERDAR OLUN</h3>
                <p class="roboto kucuk1">Kahveyi o kadar seviyoruz ki, her geçen gün yepyeni bir kahveyi ve ekipmanı
                    ürün ailemize ekliyor, kahveyle ilgili güncel gelişmeleri keyifle araştırıyoruz. Sizi de haberdar
                    etmemizi isterseniz e-bültenimize üye olabilirsiniz.</p>
                <form class="mail-bulten" id="e-mail">
                    <input type="email" placeholder="mail adresini girin" class="mail">
                    <input v-on:click="mailAlert" type="submit" value="ÜYE OL" class="back-turuncu">
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        mailAlert(){
            alert("e-mail"); //TODO: kullanıcadan mail alınacak
        }
    }
}
</script>