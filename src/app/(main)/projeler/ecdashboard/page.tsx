import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'ecDashboard — Test Kullanıcısı Rehberi',
  description:
    'ecDashboard Android Auto uygulamasının kapalı test programı: uygulama tanıtımı, test kullanıcısı olma adımları ve kullanım rehberi.',
}

export default function EcDashboardRehberPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <Link
        href="/projeler"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-brand-500)] hover:text-[var(--color-accent)] transition-colors mb-8"
      >
        <ArrowLeft size={15} />
        Projelere dön
      </Link>

      <SectionHeading
        title="ecDashboard — Test Kullanıcısı Rehberi"
        subtitle="Android Auto destekli yolculuk asistanı için kapalı test programı"
      />

      <div className="flex flex-wrap gap-1.5 mb-10">
        {['Android Auto', 'EV şarj istasyonları', 'Yolculuk takibi', 'Tüketim tahmini', 'Ücretsiz'].map(
          (t) => (
            <span
              key={t}
              className="text-xs bg-[var(--color-brand-100)] text-[var(--color-brand-700)] rounded-full px-2.5 py-0.5"
            >
              {t}
            </span>
          )
        )}
      </div>

      <article className="prose prose-stone max-w-none prose-headings:text-[var(--color-brand-700)] prose-a:text-[var(--color-accent)] prose-strong:text-[var(--color-brand-700)] prose-blockquote:border-[var(--color-accent)] prose-li:my-1">
        <p>
          <strong>ecDashboard</strong>, Android Auto destekli bir yolculuk asistanıdır: telefonda
          yolculuk ve mola takibi yapar, araç ekranında yakındaki elektrikli araç şarj istasyonlarını
          veya kaydettiğiniz mola noktalarını gösterir, geçmiş sürüşlerinizden öğrenerek batarya
          tüketimi tahmini üretir. Aşağıda uygulamanın kapalı test programına nasıl katılacağınızı ve
          uygulamayı nasıl kullanacağınızı bulabilirsiniz.
        </p>

        <h2>Kimler için ideal?</h2>
        <p>
          En iyi deneyim için <strong>elektrikli araç kullanan ve aracında Android Auto bulunan</strong>{' '}
          sürücüleri arıyoruz. Ancak Android Auto olmadan, yalnızca telefonla da yolculuk takibi
          özelliklerini test edebilirsiniz.
        </p>
        <ul>
          <li>
            <strong>Telefon:</strong> Android 6.0 veya üzeri, Google Play yüklü.
          </li>
          <li>
            <strong>Araç (isteğe bağlı):</strong> Android Auto destekli araç veya multimedya ünitesi.
          </li>
          <li>
            <strong>İzinler:</strong> Konum izni (yalnızca uygulama aktifken kullanılır) ve bildirim
            izni.
          </li>
        </ul>

        <h2>Nasıl test kullanıcısı olurum?</h2>
        <p>
          Uygulama Google Play üzerinden <strong>kapalı (internal) test</strong> olarak dağıtılıyor.
          Katılım üç adım:
        </p>
        <ol>
          <li>
            <strong>Google hesabınızın e-posta adresini bana iletin.</strong> Play test listesine
            eklemem gerekiyor. Adresi{' '}
            <a href="mailto:ecevahir@gmail.com">ecevahir@gmail.com</a> adresine gönderin.
          </li>
          <li>
            <strong>Size göndereceğim davet bağlantısını açıp testi kabul edin.</strong> Bağlantıdaki
            sayfada &ldquo;Test kullanıcısı ol / Become a tester&rdquo; seçeneğine dokunmanız yeterli.{' '}
            <em>(Davet bağlantısı yakında buraya eklenecek.)</em>
          </li>
          <li>
            <strong>Play Store&rsquo;dan ecDashboard&rsquo;u yükleyin.</strong> Kabul ettikten sonra
            uygulama Play Store&rsquo;da görünür; güncellemeler de otomatik olarak Play üzerinden gelir.
          </li>
        </ol>
        <blockquote>
          <strong>Önemli:</strong> Android Auto, Play dışından yüklenen uygulamaları araç ekranında
          göstermez. Bu yüzden kurulum mutlaka yukarıdaki Play test bağlantısı üzerinden yapılmalıdır
          — APK ile elden kurulum çalışmaz.
        </blockquote>

        <h2>Uygulamayı tanıyalım</h2>

        <h3>Telefonda: yolculuk ve mola takibi</h3>
        <p>
          Ana ekrandan <strong>&ldquo;Yolculuğu Başlat&rdquo;</strong> deyin; mesafe, sürüş süresi,
          mola süresi, ortalama/maksimum hız ve irtifa farkı canlı olarak işlenir. Mola verdiğinizde
          süre ayrı sayılır; bildirimden de kontrol edebilirsiniz.
        </p>

        <h3>Araç ekranında: şarj istasyonları ve mola noktaları</h3>
        <p>
          Android Auto&rsquo;da ecDashboard&rsquo;u açın: yakındaki şarj istasyonları harita üzerinde
          listelenir. Bir istasyona dokununca Google Haritalar ile navigasyon başlar. EV modunu
          kapatırsanız kendi kaydettiğiniz mola noktalarınız kategorilere göre listelenir.
        </p>

        <h3>EV tüketim tahmini</h3>
        <p>
          Her yolculuğun sonunda o sürüşte harcanan batarya yüzdesini girerseniz (yolculuk geçmişinden
          sonradan da düzenlenebilir), uygulama aracınızın gerçek tüketim karakterini öğrenir. Tahmin;
          mesafenin yanında <strong>tırmanış/iniş, dış hava sıcaklığı ve klima kullanımını</strong> da
          hesaba katar ve araç ekranı özetinde ve bildirimde gösterilir. Ne kadar çok yolculuğa tüketim
          girerseniz tahmin o kadar isabetli olur.
        </p>

        <h3>Şarj istasyonu kaynakları ve filtreler</h3>
        <ul>
          <li>
            <strong>Veri kaynağı:</strong> Varsayılan olarak internet gerektirmeyen gömülü veritabanı
            kullanılır; Ayarlar&rsquo;dan OpenChargeMap veya OpenStreetMap&rsquo;e geçebilirsiniz.
          </li>
          <li>
            <strong>Filtreler:</strong> Konnektör tipi (varsayılan CCS), minimum güç (kW), operatör,
            yalnızca müsait ve yalnızca ücretsiz istasyonlar.
          </li>
          <li>
            <strong>Otomatik yenileme:</strong> Araç ilerledikçe liste kendini günceller; yenileme
            mesafesi Ayarlar&rsquo;dan değiştirilebilir.
          </li>
        </ul>

        <h3>Mola noktası ekleme</h3>
        <ul>
          <li>
            <strong>Google Haritalar&rsquo;dan:</strong> Beğendiğiniz bir yeri Haritalar&rsquo;da açın
            → <strong>Paylaş</strong> → <strong>ecDashboard</strong>&rsquo;u seçin → kategorisini seçip
            kaydedin.
          </li>
          <li>
            <strong>Uygulama içinden:</strong> &ldquo;Konum Ara&rdquo; ekranında isim veya türe göre
            (restoran, benzinlik vb.) çevrenizde arama yapıp sonucu kaydedin.
          </li>
          <li>
            <strong>Kategoriler:</strong> Kendi kategorilerinizi oluşturabilir, araç ekranında
            kategoriye göre listeleyebilirsiniz.
          </li>
        </ul>

        <h2>İzinler ve gizlilik</h2>
        <ul>
          <li>
            Konum yalnızca <strong>yolculuk takibi açıkken veya araç ekranı kullanılırken</strong>
            alınır; arka plan konum izni istenmez.
          </li>
          <li>
            Tüm veriler <strong>cihazınızda</strong> tutulur — hesap açılmaz, sunucuya veri gönderilmez.
          </li>
          <li>
            İnternet yalnızca isteğe bağlı özelliklerde kullanılır: çevrimiçi istasyon kaynakları,
            konum arama, sıcaklık/rakım bilgisi.
          </li>
        </ul>
        <p>
          Ayrıntılar için{' '}
          <Link href="/gizlilik">gizlilik politikası</Link> sayfasına bakabilirsiniz.
        </p>

        <h2>Sizden ne bekliyoruz?</h2>
        <p>Serbestçe kullanın; özellikle şu konulardaki gözlemleriniz çok değerli:</p>
        <ul>
          <li>Kurulum sorunsuz tamamlandı mı, uygulama Android Auto ekranında göründü mü?</li>
          <li>Şarj istasyonu listesi bulunduğunuz bölgede doğru ve güncel mi?</li>
          <li>Tüketim tahmini birkaç yolculuktan sonra makul değerler veriyor mu?</li>
          <li>Yolculuk takibi açıkken telefonun batarya tüketimi rahatsız edici mi?</li>
          <li>Çökme, donma veya beklenmedik davranış — mümkünse ekran görüntüsüyle.</li>
        </ul>

        <h2>İletişim</h2>
        <p>
          Her türlü soru, hata bildirimi ve öneri için:{' '}
          <a href="mailto:ecevahir@gmail.com">ecevahir@gmail.com</a>. Katıldığınız için şimdiden
          teşekkürler!
        </p>
      </article>
    </div>
  )
}
