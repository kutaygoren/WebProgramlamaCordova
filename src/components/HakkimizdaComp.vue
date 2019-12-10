<template>
	<div class="page-content">

		<div class="back-gray statik">
			<div class="container-fluid no-padding">
				<img src="https://kahhve.com/zeplin/img/bizkimiz.jpg" alt="KahhveCom Kimdir Resmi">
			</div>
			<div class="beyaz-bulutlar container buyuk2 text-center voffset3">
				<h2 class="turuncu buyuk4">Kahhve.com ekibi olarak nitelikli kahve çekirdekleri ile hazırlanmış kahveler
					içmeyi ve kaliteli demleme ekipmanları denemeyi çok seviyoruz.</h2>
				<p class="kahve voffset3 roboto">Dünyada yirmiden fazla ülke gezerek kahve kültürünü öğrendik.
					Kahhve.com olarak sizlere dünyanın en popüler kahve demleme ekipmanlarını ve aksesuarlarını
					getirmeyi hedefledik. Beraber çalıştığımız onlarca global kahve ekipmanı üreticisinin her bir
					ürününü sizlere sunmadan defalarca kendimiz denedik. Kendimiz beğenmediğimiz hiçbir kahve ya da
					ekipmanı sizlere sunmamaya özen gösterdik.
					<br><br>
					Üç yıllık serüvenimizde sizlere hep en iyi kahve çekirdeklerini en hızlı ve taze şekilde şekilde
					gönderdik.
					<br><br>
					“Kahveye Dair Herşey” mottomuz ile sizlere;
				</p>
				<ul class="no-style">
					<li class="turuncu roboto light"><i>en iyi kahveleri</i></li>
					<li class="turuncu roboto light"><i>en kalteli ekipman ve aksesuarları</i></li>
					<li class="turuncu roboto light"><i>kahve ile ilgili en doğru bilgileri</i></li>
				</ul>
				<p></p>
				<p class="kahve">Sunmaya devam edeceğiz… Şimdiden afiyet olsun!</p>
			</div>
			<div class="container">
				<div class="col-md-3 text-center">
					<img src="https://kahhve.com/img/layout/ender.jpg" alt="Ender AKGÜL">
					<h3 class="turuncu">Ender Akgül</h3>
					<h4 class="kahve roboto">Co-Founder</h4>
					<div class="row social turuncu buyuk3">
						<a rel="nofollow" target="_blank" href="https://www.facebook.com/akgulender"><i
								class="fa fa-facebook"></i></a>
						<a rel="nofollow" target="_blank" href="https://twitter.com/enderakgul"><i
								class="fa fa-twitter"></i></a>
						<a rel="nofollow" target="_blank" href="https://instagram.com/enderakgul"><i
								class="fa fa-instagram"></i></a>
						<a rel="nofollow" target="_blank" href="mailto:enderakgul@kahhve.com"><i
								class="fa fa-envelope"></i></a>
						<a rel="nofollow" target="_blank" href="https://www.linkedin.com/in/enderakgul/"><i
								class="fa fa-linkedin"></i></a>
					</div>
				</div>
				<div class="col-md-3 text-center">
					<img src="https://kahhve.com/img/layout/ismail.jpg" alt="İsmail Cihat Böğürcü">
					<h3 class="turuncu">İsmail Cihat Böğürcü</h3>
					<h4 class="kahve roboto">Co-Founder</h4>
					<div class="row social turuncu buyuk3">
						<a rel="nofollow" target="_blank" href="https://www.facebook.com/ismailcihat.bogurcu"><i
								class="fa fa-facebook"></i></a>
						<a rel="nofollow" target="_blank" href="https://twitter.com/yenisekme"><i
								class="fa fa-twitter"></i></a>
						<a rel="nofollow" target="_blank" href="https://instagram.com/yenisekme"><i
								class="fa fa-instagram"></i></a>
						<a rel="nofollow" target="_blank" href="mailto:cihatbogurcu@kahhve.com"><i
								class="fa fa-envelope"></i></a>
						<a rel="nofollow" target="_blank"
							href="https://www.linkedin.com/in/ismail-cihat-böğürcü-71759263/"><i
								class="fa fa-linkedin"></i></a>
					</div>
				</div>
				<div class="col-md-3 text-center">
					<img src="https://kahhve.com/img/layout/onur.jpg" alt="Onur Oral">
					<h3 class="turuncu">Onur Oral</h3>
					<h4 class="kahve roboto">Co-Founder</h4>
					<div class="row social turuncu buyuk3">
						<a rel="nofollow" target="_blank" href="https://www.facebook.com/onur.oral.96"><i
								class="fa fa-facebook"></i></a>
						<a rel="nofollow" target="_blank" href="https://twitter.com/onuroral86"><i
								class="fa fa-twitter"></i></a>
						<a rel="nofollow" target="_blank" href="https://www.instagram.com/onuroral86/"><i
								class="fa fa-instagram"></i></a>
						<a rel="nofollow" target="_blank" href="mailto:onuroral@kahhve.com"><i
								class="fa fa-envelope"></i></a>
						<a rel="nofollow" target="_blank" href="https://www.linkedin.com/in/onur-oral-18085938/"><i
								class="fa fa-linkedin"></i></a>
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