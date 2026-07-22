import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası — ecDashboard',
  description:
    'ecDashboard Android uygulamasının gizlilik politikası: hangi verilerin işlendiği, nasıl kullanıldığı ve kullanıcı hakları.',
}

const LAST_UPDATED = '22 Temmuz 2026'

export default function GizlilikPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeading
        title="Gizlilik Politikası"
        subtitle="ecDashboard Android uygulaması"
      />

      <p className="text-sm text-[var(--color-brand-500)] mb-10">
        Son güncelleme: {LAST_UPDATED}
      </p>

      <article className="prose prose-stone max-w-none prose-headings:text-[var(--color-brand-700)] prose-a:text-[var(--color-accent)] prose-strong:text-[var(--color-brand-700)] prose-blockquote:border-[var(--color-accent)]">
        <p>
          Bu gizlilik politikası, <strong>ecDashboard</strong> (&ldquo;uygulama&rdquo;)
          adlı Android uygulamasının kullanıcı verilerini nasıl işlediğini açıklar.
          Uygulama, yolculuk ve mola takibi yapan, Android Auto üzerinden yakındaki
          elektrikli araç şarj istasyonlarını ve kaydedilen mola noktalarını gösteren
          kişisel bir projedir. Uygulamayı kullanarak bu politikayı kabul etmiş olursunuz.
        </p>

        <h2>Özet</h2>
        <ul>
          <li>
            <strong>Hesap açılmaz</strong> ve kişisel kimlik bilgisi (ad, e-posta,
            telefon) toplanmaz.
          </li>
          <li>
            Tüm verileriniz <strong>yalnızca cihazınızda</strong> saklanır; bizim veya
            üçüncü tarafların sunucularına gönderilmez.
          </li>
          <li>
            Konum bilgisi <strong>yalnızca uygulama aktif olarak kullanılırken</strong>
            işlenir; arka plan konum izni istenmez ve kullanılmaz.
          </li>
        </ul>

        <h2>İşlenen Veriler</h2>

        <h3>Konum bilgisi</h3>
        <p>
          Uygulama, yaklaşık ve/veya kesin konumunuza yalnızca aşağıdaki durumlarda erişir:
        </p>
        <ul>
          <li>
            <strong>Yolculuk takibi açıkken:</strong> mesafe, hız, süre ve irtifa farkı gibi
            yolculuk istatistiklerini hesaplamak için.
          </li>
          <li>
            <strong>Araç (Android Auto) ekranı kullanılırken:</strong> yakındaki şarj
            istasyonlarını veya kaydettiğiniz mola noktalarını listelemek için.
          </li>
        </ul>
        <p>
          Konum verisi bu işlemler için cihazınızda işlenir. Yolculuk kaydı sırasında hesaplanan
          istatistikler cihazınızda saklanır; ham konum izleri sunucuya aktarılmaz.{' '}
          <strong>Arka plan konum izni (ACCESS_BACKGROUND_LOCATION) talep edilmez</strong>;
          uygulama yalnızca ön planda çalışırken ve konum servisi bildirimi görünürken konum alır.
        </p>

        <h3>Uygulama içinde oluşturduğunuz veriler</h3>
        <p>
          Yolculuk geçmişi, girdiğiniz batarya tüketim yüzdeleri, kaydettiğiniz mola noktaları,
          kategoriler ve uygulama ayarları <strong>yalnızca cihazınızın yerel depolamasında</strong>
          {' '}tutulur. Bu veriler hesabınızla ilişkilendirilmez ve dışarı aktarılmaz.
        </p>

        <h2>İnternet Kullanımı ve Üçüncü Taraf Servisler</h2>
        <p>
          Uygulama, yalnızca isteğe bağlı bazı özellikler için internet bağlantısı kullanır. Bu
          özellikleri kullandığınızda, ilgili servise teknik olarak gerekli asgari bilgi (örneğin
          arama yaptığınız bölgenin koordinatları) iletilir. Bu servislerin kendi gizlilik
          politikaları geçerlidir:
        </p>
        <ul>
          <li>
            <strong>OpenChargeMap</strong> — çevrimiçi şarj istasyonu verisi (yalnızca bu kaynak
            seçildiğinde).
          </li>
          <li>
            <strong>OpenStreetMap / Nominatim</strong> — konum arama ve şarj istasyonu verisi.
          </li>
          <li>
            <strong>Open-Meteo</strong> — tüketim tahmini için hava sıcaklığı ve rakım bilgisi.
          </li>
          <li>
            <strong>Google Android Auto</strong> — araç ekranı entegrasyonu ve bir mola noktasına
            navigasyon başlatmak için (Google Haritalar&rsquo;a devredilir).
          </li>
        </ul>
        <p>
          Şarj istasyonu için varsayılan kaynak, internet gerektirmeyen{' '}
          <strong>cihaz içi gömülü veritabanıdır</strong>. Bu servislere kişisel kimlik bilginiz veya
          yolculuk geçmişiniz gönderilmez.
        </p>

        <h2>İzinler</h2>
        <p>Uygulamanın talep ettiği izinler ve gerekçeleri:</p>
        <ul>
          <li>
            <strong>Konum (kesin/yaklaşık):</strong> yolculuk takibi ve yakındaki noktaların
            listelenmesi.
          </li>
          <li>
            <strong>Ön plan servisi (konum):</strong> yolculuk veya araç ekranı açıkken konumun
            kesintisiz alınabilmesi; kalıcı bir bildirimle gösterilir.
          </li>
          <li>
            <strong>Bildirimler:</strong> yolculuk durumu ve tüketim tahmini bildirimleri.
          </li>
          <li>
            <strong>İnternet / ağ durumu:</strong> yukarıda belirtilen isteğe bağlı çevrimiçi
            özellikler.
          </li>
        </ul>

        <h2>Veri Saklama ve Silme</h2>
        <p>
          Verileriniz yalnızca cihazınızda tutulduğundan, kontrol tamamen sizdedir.
          Uygulamayı kaldırdığınızda veya cihaz ayarlarından uygulama verilerini temizlediğinizde,
          uygulamaya ait tüm yerel veriler (yolculuk geçmişi, mola noktaları, ayarlar) kalıcı olarak
          silinir. Bizde saklanan bir kopyanız bulunmadığından, silme talebi için bize başvurmanıza
          gerek yoktur.
        </p>

        <h2>Çocukların Gizliliği</h2>
        <p>
          Uygulama çocuklara yönelik değildir ve bilerek 13 yaşından küçük kullanıcılardan veri
          toplamaz.
        </p>

        <h2>Değişiklikler</h2>
        <p>
          Bu politika zaman zaman güncellenebilir. Güncellemeler bu sayfada yayımlanır ve sayfanın
          üst kısmındaki &ldquo;Son güncelleme&rdquo; tarihi değiştirilir.
        </p>

        <h2>İletişim</h2>
        <p>
          Gizlilikle ilgili soru ve talepleriniz için:{' '}
          <a href="mailto:ecevahir@gmail.com">ecevahir@gmail.com</a>
        </p>
      </article>
    </div>
  )
}
