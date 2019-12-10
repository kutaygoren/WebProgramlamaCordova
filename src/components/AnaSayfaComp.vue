<template>
	<div class="page-content">
		<section class="banner">
			<div class="row no-margin">
				<div id="banner-carousel" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner" role="listbox">
						<div class="item banner3">
							<a href="/" class="img beyaz">
								<div class="ucan-yazi turuncu">
									<span class="baslangic"></span>
									<span class="yazi turuncu">HIZLI KARGO</span>
									<span class='bitis'></span>
								</div>
								<div class="top1 voffset2">AYNI GÜN KARGO</div>
								<p class="top3 roboto light voffset2">Haftaiçi 16.00'a kadar gelen siparişleri aynı gün
									içinde kargoya teslim ediyoruz.</p>
							</a>
						</div>
						<div class="item banner1">
							<a href="/caffe-fresco-all-day-blend-kahveler" class="img beyaz">
								<div class="ucan-yazi turuncu">
									<span class="baslangic"></span>
									<span class="yazi turuncu">HAFTANIN ÜRÜNÜ</span>
									<span class='bitis'></span>
								</div>
								<div class="top1 voffset2">ALL DAY BLEND</div>
								<div class="top2 roboto light turuncu">CAFFE FRESCO</div>
								<p class="top3 roboto light voffset2">Sadece Kolombiya çekirdeklerini içerir, yumuşak ve
									pürüzsüz aromaya sahiptir. Günün her saati keyifle içebilirsiniz.</p>
							</a>
						</div>
						<div class="item banner2 active">
							<a href="/urban-grind" class="img beyaz">
								<div class="ucan-yazi turuncu">
									<span class="baslangic"></span>
									<span class="yazi turuncu">HAFTANIN ÜRÜNÜ</span>
									<span class='bitis'></span>
								</div>
								<div class="top1 voffset2">KİLOLUK KAHVE</div>
								<div class="top2 roboto light turuncu">URBAN GRIND</div>
								<p class="top3 roboto light voffset2">Kahvenizi keyifle içebilmeniz için özel tasarlanan
									porselen kupalarımız kısa bir süre için Urban Grind kiloluk kahvelerle hediye.</p>
							</a>
						</div>
					</div>
					<a class="left carousel-control" href="#banner-carousel" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left"></span>
					</a>
					<a class="right carousel-control" href="#banner-carousel" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right"></span>
					</a>
				</div>
			</div>
		</section>

		<section class="urunserit tanisma container">
			<div class="row">
				<h2 class="text-center turuncu">POPÜLER TANIŞMA SETLERİ</h2>

				<div class="col-md-3 col-xs-6" :key="index" v-for="(item, index) in setler">
					<div class="urun">
						<a class="resim">
							<!-- TODO: bug düzelt-->
							<i class="icon icon-sepet back-turuncu beyaz katalog-sepete-ekle"
								v-on:click="sepeteEkle(index)"></i>
							<img class="beklemede" :src="item.image">
						</a>
						<a :href="item.url">
							<div class="title text-center">
								<span class="inner-title">{{ item.title }}</span>
							</div>
						</a>
						<a :href="item.markaurl">
							<div class="text-center marka roboto">{{ item.marka }}</div>
						</a>
						<div class="text-center fiyat">
							<p>{{ item.fiyat }} TL</p>
						</div>
					</div>
				</div>
			</div>
			<router-link to="/tanisma-setleri" class="btn text-center back-turuncu">TÜMÜNÜ GÖR</router-link>
		</section>

		<div class="back-gray">
			<section class="markalarimiz container">
				<div class="row">
					<h2 class="text-center kahve" style="font-size: 36px; font-weight: 700;">POPÜLER MARKALAR</h2>
					<a href="/chemex" class="col-xs-4 col-sm-2"><img src="https://kahhve.com/img/markalar/png/chemex.png"></a>
					<a href="/bialetti" class="col-xs-4 col-sm-2"><img src="https://kahhve.com/img/markalar/png/bialetti.png"></a>
					<a href="/hario" class="col-xs-4 col-sm-2"><img src="https://kahhve.com/img/markalar/png/hario.png"></a>
					<a href="/bodum" class="col-xs-4 col-sm-2"><img src="https://kahhve.com/img/markalar/png/bodum.png"></a> 
					<a href="/aeropress" class="col-xs-4 col-sm-2"><img src="https://kahhve.com/img/markalar/png/aeropress.png"></a>
					<a href="/cool-beans" class="col-xs-4 col-sm-2"><img src="https://kahhve.com/img/markalar/png/coolbeans.png"></a>
				</div> <a href="/markalarimiz" class="btn text-center">BÜTÜN MARKALARIMIZ</a>
			</section>
		</div>

		<section class="information beyaz">
			<div class="col-md-8 img">
				<div class="pull-right inner">
					<h2 class="text-center turuncu">“KAHVEYE DAİR HER ŞEY”</h2>
					<div class="text-center roboto voffset2">Kahhve.com olarak evinizde ve ofisinizde iyi bir kahve
						yapabilmek için gerekli olan her şeyi sizin için bir araya getirdik!</div>
					<p class="text-center roboto light voffset2">Taze kavrulmuş ve hemen kargoya verilen size özel
						kahveniz, kahvenizi hazırlayabilmeniz için gerekli küçük büyük her türlü ekipman, filtreler,
						değirmenler, kahvenizi mükemmelleştirmek için tarifler tüyolar ve daha niceleri Kahhve.com’da.
					</p>
				</div>
			</div>
			<div class="col-md-4 sag-bolum">
				<h2 class="text-center turuncu">OFİS KAHHVE ABONELİĞİ</h2>
				<div class="text-center voffset2">Ofisiniz beş kişi de olsa yüz kişi de olsa dilediğiniz kadar taze
					kahve dilediğiniz zaman kapınızda.</div>
				<p class="text-center roboto light voffset2">Ofisinizde hangi makinayı, hangi kahveyi kullanmanız
					gerektiğine karar veremiyor, ofisinizin kahve tedariğini kaliteli ve düzenli bir şekilde organize
					etmek istiyorsanız size yardımcı olmaktan memnuniyet duyarız.</p>
				<p class="text-center roboto light voffset2"><a href="mailto:ofis@kahhve.com"
						class="turuncu">ofis@kahhve.com</a> adresine yazın veya 0533 392 5679 telefonundan bize ulaşın
					ve hemen sizinle kahve çözümünüzü hayata geçirelim.</p>
			</div>
		</section>

		<section class="urunserit kahveler container">
			<div class="row">
				<h2 class="text-center turuncu">POPÜLER KAHHVELER</h2>
				<div class="col-md-3 col-xs-6" :key="index" v-for="(item, index) in popKahveler">
					<div class="urun">
						<a class="resim">
							<i class="icon icon-sepet back-turuncu beyaz katalog-sepete-ekle"
								v-on:click="sepeteEkle(index)"></i>
							<img class="beklemede" :src="item.image">
						</a>
						<a :href="item.url">
							<div class="title text-center">
								<span class="inner-title">{{ item.title }}</span>
							</div>
						</a>
						<a :href="item.markaurl">
							<div class="text-center marka roboto">{{ item.marka }}</div>
						</a>
						<div class="text-center fiyat">
							<p>{{ item.fiyat }} TL</p>
						</div>
					</div>
				</div>
			</div>
			<router-link to="/kahveler" class="btn text-center back-turuncu">TÜMÜNÜ GÖR</router-link>
		</section>

		<div class="back-gray">
			<section class="urunserit container">
				<div class="row">
					<h2 class="text-center">POPÜLER EKİPMAN & AKSESUARLAR</h2>
					<div class="col-md-3 col-xs-6" :key="index" v-for="(item, index) in popEkipmanlar">
						<div class="urun">
							<a class="resim">
								<i class="icon icon-sepet back-turuncu beyaz katalog-sepete-ekle"
									v-on:click="sepeteEkle(index)"></i>
								<img class="beklemede" :src="item.image">
							</a>
							<a :href="item.url">
								<div class="title text-center">
									<span class="inner-title">{{ item.title }}</span>
								</div>
							</a>
							<a href="/hario">
								<div class="text-center marka roboto">{{ item.marka }}</div>
							</a>
							<div class="text-center fiyat">
								<p>{{ item.fiyat }} TL</p>
							</div>
						</div>
					</div>
				</div>
				<router-link to="/ekipmanlar" class="btn text-center back-turuncu">TÜMÜNÜ GÖR</router-link>
			</section>
		</div>

		<div>
			<section class="urunserit container">
				<div class="row">
					<h2 class="text-center turuncu">GÜNCEL BLOG YAZILARI</h2>
					<div class="col-md-4 col-xs-12">
						<div class="urun">
							<a href="/blog/genel-bilgi/hamilelik-ve-kahve-tuketimi/">
								<img class="beklemede" src="https://kahhve.com/blog/wp-content/uploads/2019/04/85B4EC45-26AC-4691-829C-184752FA2D4A-300x300.jpg">
							</a>
							<a href="/blog/genel-bilgi/hamilelik-ve-kahve-tuketimi/">
								<div class="title text-center">
									<span class="inner-title buyuk1">HAMİLELİK VE KAHVE TÜKETİMİ</span>
								</div>
							</a>
						</div>
					</div>
					<div class="col-md-4 col-xs-12">
						<div class="urun">
							<a href="/blog/kahve/filtre-kahve-ve-kalori/">
								<img class="beklemede" src="https://kahhve.com/blog/wp-content/uploads/2019/03/BC605DE3-FEFB-45BC-89FB-A50B2FAA3713-300x300.jpg"
									alt="Filtre Kahve ve Kalori">
							</a>
							<a href="/blog/kahve/filtre-kahve-ve-kalori/">
								<div class="title text-center">
									<span class="inner-title buyuk1">FİLTRE KAHVE VE KALORİ</span>
								</div>
							</a>
						</div>
					</div>
					<div class="col-md-4 col-xs-12">
						<div class="urun">
							<a href="/blog/kahve/kahve-kavurma/">
								<img class="beklemede" src="https://kahhve.com/blog/wp-content/uploads/2019/02/147E3CA6-3A3A-411D-A26F-9F7F9005220C-300x300.jpg"
									alt="Kahve Kavurma">
							</a>
							<a href="/blog/kahve/kahve-kavurma/">
								<div class="title text-center">
									<span class="inner-title buyuk1">KAHVE KAVURMA</span>
								</div>
							</a>
						</div>
					</div>
				</div>
				<a href="/blog" class="btn text-center back-turuncu">TÜMÜNÜ GÖR</a>
			</section>
		</div>

		<div v-if="isLoading" class="yukleniyor-ana" style="display: block;">
              <div class="zeplin"></div>
        </div>

		<div v-else class="yukleniyor-ana" style="display: none;">
              <div class="zeplin"></div>
        </div>

		<div v-if="isLoadingS" class="yukleniyor" style="display: block;">
              <div class="zeplin"></div>
        </div>

		<div v-else class="yukleniyor" style="display: none;">
              <div class="zeplin"></div>
        </div>
	</div>
</template>

<script>
const popKahvelerURL = "https://api.myjson.com/bins/h2h94"
const popEkipmanlarURL = "https://api.myjson.com/bins/nm8wo"
const setlerURL = "https://api.myjson.com/bins/106hrs"

	export default {
		data() {
			return {
				isLoading: true,
				isLoadingS: true,
				active: false,
				cart: [],
				toplam: 0.00,
				popKahveler: [],
				popEkipmanlar: [],
				setler: []
			}
		},

		mounted() {
			fetch(popKahvelerURL)
			.then(response => response.json())
			.then(result => {
			this.popKahveler = result;
			});

			fetch(popEkipmanlarURL)
			.then(response => response.json())
			.then(result => {
			this.popEkipmanlar = result;
			});

			fetch(setlerURL)
			.then(response => response.json())
			.then(result => {
			this.setler = result;
			});
		},

		created() {
			setTimeout(() => this.isLoading = false, 1000)
			setTimeout(() => this.isLoadingS = false, 2000)
			this.cart = JSON.parse(localStorage.getItem('sepettekiler' || []));
			this.toplam = JSON.parse(localStorage.getItem('toplam' || []));
		},

		methods: {
			sepeteEkle(index) {
				this.isLoadingS = true;
				setTimeout(() => this.isLoadingS = false, 500);
				this.cart.push(this.setler[index]);
				this.toplam += this.setler[index].fiyat;
				localStorage.setItem('sepettekiler', JSON.stringify(this.cart));
				localStorage.setItem('toplam', JSON.stringify(this.toplam));
			}
		}
	}
</script>