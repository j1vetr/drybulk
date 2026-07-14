import React from 'react';
import { LegalNavbar } from '@/components/LegalNavbar';
import { Footer } from '@/components/Footer';

export default function Kvkk() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground">
      <LegalNavbar />
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">KVKK Aydınlatma Metni</h1>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-3xl pt-6 pb-1">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to Drybulk Pioneer
        </a>
      </div>
      <main className="container mx-auto px-6 md:px-12 pt-8 pb-16 max-w-3xl prose prose-slate">
        <p className="text-muted-foreground text-sm mb-8">Son güncelleme: Temmuz 2026</p>

        <h2>1. Veri Sorumlusu</h2>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla <strong>Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti.</strong> tarafından işlenmektedir.</p>

        <p><strong>Adres:</strong> Kosuyolu Mah. Cenap Şahabettin Sokak No:90, 34718 Kadıköy / İstanbul, Türkiye<br />
        <strong>E-posta:</strong> <a href="mailto:info@dbpioneer.com">info@dbpioneer.com</a><br />
        <strong>Telefon:</strong> +90 216 545 09 45</p>

        <h2>2. İşlenen Kişisel Veriler ve İşleme Amaçları</h2>
        <p>Aşağıdaki kişisel verileriniz, belirtilen amaçlarla işlenebilecektir:</p>
        <ul>
          <li><strong>İletişim bilgileri</strong> (ad, soyad, e-posta, telefon, şirket): İş görüşmeleri yürütmek, teklife yanıt vermek ve ticari ilişkileri yönetmek amacıyla.</li>
          <li><strong>Web sitesi kullanım verileri</strong> (IP adresi, tarayıcı bilgisi): Web sitemizin güvenliğini ve performansını sağlamak amacıyla.</li>
        </ul>

        <h2>3. Kişisel Verilerin Aktarımı</h2>
        <p>Kişisel verileriniz; yasal yükümlülüklerimiz kapsamında yetkili kamu kurum ve kuruluşlarına, iş süreçlerimizi destekleyen hizmet sağlayıcılara aktarılabilir. Kişisel verileriniz üçüncü taraflara satılmamaktadır.</p>

        <h2>4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
        <p>Kişisel verileriniz; web sitemiz üzerindeki iletişim formu ve doğrudan yazışmalar yoluyla toplanmaktadır. İşlemenin hukuki sebepleri; açık rızanız, sözleşmenin ifası ve meşru menfaattir.</p>

        <h2>5. Haklarınız</h2>
        <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını öğrenme ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
          <li>Silinmesini veya yok edilmesini isteme</li>
          <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
          <li>Hukuka aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
        </ul>
        <p>Haklarınızı kullanmak için <a href="mailto:info@dbpioneer.com">info@dbpioneer.com</a> adresine yazılı olarak başvurabilirsiniz.</p>
      </main>
      <Footer />
    </div>
  );
}
