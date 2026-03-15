<div align="center">

```
██╗  ██╗██╗   ██╗██████╗  ██████╗ ██╗   ██╗
██║ ██╔╝██║   ██║██╔══██╗██╔════╝ ██║   ██║
█████╔╝ ██║   ██║██████╔╝██║  ███╗██║   ██║
██╔═██╗ ██║   ██║██╔══██╗██║   ██║██║   ██║
██║  ██╗╚██████╔╝██║  ██║╚██████╔╝╚██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝
```

**Kurgu** — AI asistanlarına teknik talep yazma sürecini kurgulayan masaüstü uygulama.

*Her prompt bir anlatıdır. Kurgu, o anlatıyı doğru parçalara ayırır.*

---

[![React](https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/Lisans-MIT-yellow?style=flat-square)](LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Windows-x64-0078D4?style=flat-square&logo=windows&logoColor=white)](https://github.com/releases)
[![Sürüm](https://img.shields.io/badge/Sürüm-0.1.0-e2c97e?style=flat-square)]()

<br/>

> *"Yarım saatte yazdığın talep ile 5 dakikada yazdığın talep arasındaki fark,*
> *aldığın çıktıda net olarak görünür."*

</div>

---

## Neden Kurgu Var?

Claude, GPT veya Gemini ile karmaşık teknik projeler geliştirirken aynı sorunla karşılaşıyorsunuz:

- Projeyi her seferinde sıfırdan açıklamak
- Kritik detayları (formüller, parametreler, kütüphaneler) atlamak
- Hangi AI'ın hangi format için daha iyi tepki verdiğini bilememek
- Aynı türde projelerde tekrar eden bölümleri her seferinde yeniden yazmak

**Kurgu** bu sürtünmeyi ortadan kaldırır. 5 adımlı yapılandırılmış form, akıllı alan önerileri ve canlı önizleme ile dakikalar içinde kaliteli, yapılandırılmış teknik talepler oluşturursunuz — ve bunları SQLite veritabanında kalıcı olarak saklarsınız.

---

## Arayüz

```
┌──────────────────────────────────────────────────────────────────────┐
│  ⚡ Kurgu                              📚 Kütüphane  🔗 Paylaş       │
├──────────────────────────────────────────────────────────────────────┤
│  📝 Form    │    📋 Geçmiş    │    📊 İstatistikler                  │
├─────────────────────────────────────┬────────────────────────────────┤
│                                     │  Kalite Skoru          87      │
│  ①──②──③──④──⑤     Adım 1 / 5   │  ████████████████░░  /100      │
│                                     │                                │
│  1️⃣ Temel Bilgiler                  │  ✓ Proje Adı      +15         │
│  ──────────────────────             │  ✓ Alan           +10         │
│  💡 Elektrik alanı tespit edildi    │  ✓ Amaç           +20         │
│  ↗ Önerileri Otomatik Uygula        │  ✓ Formüller      +15         │
│                                     │  ✓ Parametreler   +10         │
│  Proje Adı ● Zorunlu                │  ✓ Grafikler      +10         │
│  ┌───────────────────────────────┐  │  — Etkileşim      —           │
│  │ RC Devre Frekans Analizi      │  │  — Ek Notlar      —           │
│  └───────────────────────────────┘  │                                │
│                                     │  Canlı Önizleme [TR▾][claude▾]│
│  Alan / Konu ● Zorunlu              │  ┌─────────────────────────┐  │
│  ┌───────────────────────────────┐  │  │ React + Vite projesi     │  │
│  │ Elektrik                      │  │  │ olarak şunu yap:         │  │
│  └───────────────────────────────┘  │  │                          │  │
│                                     │  │ PROJE ADI: RC Devre...   │  │
│  Amaç ● Zorunlu                     │  │ ALAN: Elektrik           │  │
│  ┌───────────────────────────────┐  │  │ AMAÇ:                    │  │
│  │ RC devrenin kesim frekansını  │  │  │   İnteraktif analiz...   │  │
│  │ interaktif olarak göster      │  │  └─────────────────────────┘  │
│  └───────────────────────────────┘  │                                │
│                                     │  🚀 Kurgula & Kaydet           │
│  ← Önceki       Sonraki →           │  📋 Kopyala                    │
│                                     │  ↗ Claude.ai'ya Gönder         │
└─────────────────────────────────────┴────────────────────────────────┘
```

---

## Özellikler

### Form & Akıllı Öneri Sistemi

- **5 Adımlı Sihirbaz** — Temel bilgiler → Formüller → Görsel & Etkileşim → Tasarım & Teknik → Son dokunuşlar
- **Alan Tespiti** — Elektrik, fizik, matematik, finans, biyoloji, istatistik alanlarını regex ile otomatik tanır; ilgili formül ve parametre önerilerini hazır getirir
- **Kalite Skoru** — 8 kriter üzerinden 0–100 arası anlık skor; doldurulan her alan skoru gerçek zamanlı günceller
- **Çoklu AI Desteği** — Claude, GPT, Gemini için farklı prefix ve ton yapılandırması
- **Dil Seçici** — TR / EN talep metni üretimi

### Çıktı & Dağıtım

- **Canlı Önizleme** — Form değiştikçe anlık talep metni güncellenir
- **Tek Tıkla Gönder** — Talebi panoya kopyalar ve Claude.ai'yı yeni sekmede açar
- **Paylaşım Linki** — Form state'ini Base64 kodlayarak tek URL'ye sıkıştırır; alıcı formu dolu olarak görür
- **A/B Test Modu** — Kısa (odaklı) ve uzun (detaylı) versiyonları yan yana karşılaştır, birini seç

### Bellek & Kalıcılık

- **Versiyonlu Kütüphane** — Şablonları `v1`, `final`, `revize` gibi etiketlerle çoklu versiyonda sakla
- **Geri Bildirim** — 👍 / 👎 ile talepleri değerlendir; istatistiklerde başarı oranını takip et

### İstatistikler

- En çok kullanılan alanlar
- AI tercih dağılımı
- Kalite skoru histogramı
- A/B test seçim istatistikleri

---

## Mimari

```
kurgu/
│
├── Frontend  ─────────────────────────────────────────────────────
   ├── index.html              HTML kabuk
   ├── vite.config.js          Vite 5 yapılandırması
   ├── package.json            JS bağımlılıkları
   └── src/
       ├── main.jsx            React 18 giriş noktası
       ├── index.css           Global dark theme stilleri
       ├── App.jsx             Tüm uygulama
          ├── DOMAINS         Alan bazlı öneri konfigürasyonu
          ├── SCORE_CFG       Kalite skoru kriterleri
          ├── buildPrompt()   Çok dilli, çok modelli prompt üretici
          ├── Btn/Chip/Field  Yeniden kullanılabilir bileşenler
          ├── ScoreCard       Canlı kalite göstergesi
          ├── Modal           Overlay bileşeni
          ├── useToast        Bildirim hook'u
          └── StatsBar        Frekans grafiği
       

```

### Veri Akışı

```
Kullanıcı Form Girer
        │
        ▼
 App.jsx (React state)
        │  buildPrompt(form)
        ▼
 Canlı Önizleme güncellenir
        │
        │  [Kurgula & Kaydet butonuna tıklar]
        ▼
```

---

## Teknoloji Yığını

| Katman | Teknoloji | Versiyon | Neden? |
|--------|-----------|----------|--------|
| **UI Framework** | React | 18.2 | Bileşen tabanlı yapı, reaktif state |
| **Build Tool** | Vite | 5.0 | Hızlı HMR, ESM-native |
| **Tarih** | chrono | 0.4 | ISO 8601 tarih üretimi |
| **Dizin** | dirs | 4.0 | `%APPDATA%` platform-bağımsız tespiti |
| **Stil** | Inline CSS (S objesi) | — | Sıfır CSS framework bağımlılığı |

---

### Kaynaktan Derleme

#### Ön Gereksinimler

| Araç | Sürüm | İndirme |
|------|-------|---------|
| Node.js | 18+ | [nodejs.org](https://nodejs.org/) |
| WebView2 | Herhangi | Windows 11'de önceden yüklü |

#### Adımlar

```bash
# 1. Repoyu klonla
git clone https://github.com/KULLANICI/kurgu_app.git
cd kurgu

# 2. CMD ile dosya yolunu düzenle
örn: C:\Users\admin\Kurgu_App veya C:\Users\admin\Downloads\Kurgu_App 

# 3. CMD istemcisine aşağıdaki girdileri yaz
npm install && npm run dev

# 4. CMD istemcisinde gördüğün localhost adresini kopyalayıp tarayıcında çalıştır.


> **Not:** İlk `npm install` komutu Javascript araçlarını derlediği için biraz sürebilir. Sonraki derlemeler çok daha hızlıdır.

---

## Kullanım

### İlk Kurgu

1. **Proje Adı** alanına projenin başlığını yaz (örn. `RC Devre Frekans Analizi`)
2. **Alan / Konu** alanına teknik alanı yaz — Kurgu otomatik tanıyacak
3. Yeşil öneri kutusu belirirse **"Önerileri Otomatik Uygula"** tıkla
4. **Amaç** alanını doldur
5. Sağdaki Canlı Önizleme'yi izle; kalite skorunun 70+ olmasını hedefle
6. **🚀 Kurgula & Kaydet** → kopyala → AI'a yapıştır

### Paylaşım Linki

Form doluyken **🔗 Paylaş** butonuna tıkla. Üretilen URL'yi bir meslektaşına gönder — form tüm alanları dolu olarak açılır. URL içinde sunucu yoktur; tüm veri Base64 olarak URL'ye kodlanmıştır.

### A/B Test

**⚖️ A/B Test** butonu ile aynı talebin iki versiyonunu (kısa & detaylı) yan yana görürsün. Hangisini seçersen panoya kopyalanır ve tercih istatistiklere yansır.

### Kütüphane

5. adımda **Şablon Adı** ve **Versiyon** girerek mevcut formu kütüphaneye kaydet. Aynı şablona birden fazla versiyon ekleyebilirsin (`v1`, `revize`, `final`). Kütüphane modalından herhangi bir versiyonu tek tıkla forma yükle.

---

## Veri Saklama

| Veri | Nerede | Ne Zaman Silinir |
|------|--------|-----------------|
| Şablon kütüphanesi | `localStorage` | Tarayıcı cache temizlenirse |
| İstatistikler | `localStorage` | Tarayıcı cache temizlenirse |
| Paylaşım linki | URL parametresi | Kayıt tutulmaz |

**Gizlilik:** Hiçbir veri dışarı gönderilmez. Kurgu tamamen çevrimdışı çalışır. İnternet bağlantısı yalnızca "Claude.ai'ya Gönder" butonunda (tarayıcı açmak için) kullanılır.

---

## Akıllı Alan Önerileri

Kurgu aşağıdaki alanları otomatik tanır. **Alan** veya **Amaç** alanına ilgili bir kelime yazman yeterli:

| Alan | Tetikleyen Kelimeler | Otomatik Önerilen |
|------|---------------------|-------------------|
| **Elektrik** | elektrik, devre, RC, RL, RLC, bode, filtre | H(jω) formülü, Bode plot, kesim frekansı |
| **Fizik** | fizik, sarkaç, kuvvet, enerji, newton | T=2π√(L/g), animasyonlu sarkaç, enerji grafiği |
| **Matematik** | matematik, fourier, integral, türev, matris | Fourier serisi, harmonik grafikler |
| **Finans** | finans, yatırım, faiz, bütçe, NPV | Bileşik faiz, büyüme eğrisi, ROI |
| **Biyoloji** | biyoloji, popülasyon, hücre, evrim | Lojistik büyüme, faz uzayı |
| **İstatistik** | istatistik, olasılık, dağılım, regresyon | Normal dağılım, histogram, box plot |

---

## Prompt Kalite Skoru

Talep kalitesi 8 kriter üzerinden 0–100 arasında anlık olarak hesaplanır:

```
| 🔸 Proje Adı    ████████████████ 15 puan |
| 🔸 Amaç         ████████████████████████ 20 puan  ← En kritik |
| 🔸 Formüller    ████████████████ 15 puan | 
| 🔸 Alan         ████████████ 10 puan | 
| 🔸 Parametreler ████████████ 10 puan | 
| 🔸 Grafikler    ████████████ 10 puan | 
| 🔸 Etkileşim    ████████████ 10 puan | 
| 🔸 Ek Notlar    ████████████ 10 puan |

```

**Kılavuz:**
- `0–49` → Temel bilgiler eksik. AI soyut bir çıktı üretir.
- `50–74` → Yeterli. Çalışan bir çıktı beklenir.
- `75–89` → İyi. Detaylı ve yapılandırılmış çıktı beklenir.
- `90–100` → Mükemmel. Hedefe çok yakın ilk çıktı beklenir.

---

## Release Notları

### v0.1.0 — İlk Sürüm

- 5 adımlı form sihirbazı
- 6 alan için akıllı öneri sistemi
- Canlı önizleme + kalite skoru
- Versiyonlu şablon kütüphanesi
- Paylaşım linki (Base64 URL encoding)
- A/B test modu
- TR / EN dil desteği
- Claude / GPT / Gemini format desteği
- İstatistik paneli

---

## Bilinen Sınırlar

- **Şablon kütüphanesi localStorage'da:** Tarayıcı cache'i temizlenirse kütüphane silinir. SQLite'a taşınması v0.2.0 hedefleri arasında.
- **Çevrimdışı AI köprüsü:** Kurgu talebi oluşturur ama AI'a doğrudan bağlanmaz; clipboard üzerinden kopyala-yapıştır iş akışı kullanılır.

---

## Geliştirme Yol Haritası

```
v0.1.0  ████████████████████  Mevcut sürüm
v0.2.0  ░░░░░░░░░░░░░░░░░░░░  Planlanan

v0.2.0 Hedefleri:
  ☐ Şablon kütüphanesini SQLite'a taşı
  ☐ Talep düzenleme (güncelleme) özelliği
  ☐ Gelişmiş geçmiş filtreleme
  ☐ PDF / Markdown dışa aktarma

v0.3.0 Hedefleri:
  ☐ GitHub OAuth ile bulut yedekleme
  ☐ Topluluk şablon paylaşımı
  ☐ VS Code eklentisi
```

---

## Katkı

Katkılar memnuniyetle karşılanır. Büyük değişiklikler için önce bir `issue` açarak ne değiştirmek istediğini tartışalım.

### Yerel Geliştirme

```bash
# Fork'la ve klonla
git clone https://github.com/SENIN_KULLANICI_ADIN/kurgu_app.git

# Branch oluştur
git checkout -b ozellik/yeni-alan-destegi

# Commit et
git commit -m "feat: kimya alanı için öneri sistemi eklendi"

# Push et ve PR aç
git push origin ozellik/yeni-alan-destegi
```

### Commit Mesajı Formatı

```
feat: yeni özellik eklendi
fix: hata düzeltildi
refactor: kod yeniden yapılandırıldı
docs: dokümantasyon güncellendi
style: stil değişikliği (mantık değişmedi)
```

### Yeni Alan Eklemek

`src/App.jsx` dosyasındaki `DOMAINS` objesine yeni bir giriş ekle:

```js
const DOMAINS = {
  // ... mevcut alanlar ...

  kimya: {
    keywords: /kimya|mol|reaksiyon|çözelti|asit|baz|ph/i,
    formulas: 'pH = -log[H⁺]\npOH = -log[OH⁻]\npH + pOH = 14',
    params:   '[H⁺]: 1e-14 – 1 M\nSıcaklık: 0–100°C',
    charts:   'pH-konsantrasyon eğrisi\nTitrasyon eğrisi',
    interaction: ['Slider', 'Sayı girişi'],
    libs: ['recharts', 'MathJS'],
  },
}
```

---

## Proje Kökeni

Kurgu, bir sinyal işleme ödevinden doğdu.

```
VSB Modülasyonu Ödevi (B=5kHz, fc=100kHz, W=1kHz)
        │
        │  "Claude'a bunu nasıl daha iyi anlatırım?"
        ▼
Basit HTML Formu
        │
        │  "Daha akıllı, daha hızlı, daha kalıcı olmalı"
        ▼
React + Vite Web Uygulaması
        │
        │  "Tarayıcıdan çıkmadan çalışan native uygulama olsun"
        ▼
Sonraki adımlar...
        │
        │  
        ▼
Tauri Masaüstü Uygulaması  
        │
        │  
        ▼
Otomatik güncelleme · Bulut yedekleme · Topluluk şablonları
```

İsim de bu süreçten çıktı. *Kurgu*, Türkçede hem bir anlatının kurulmasını hem de teknik bir sistemin monte edilmesini anlatır — prompt yazmanın tam karşılığı.

---

## Lisans

[MIT](LICENSE) — Kullan, değiştir, dağıt. Kaynak göstermen yeterli.

---

<div align="center">

**Kurgu**, iyi bir talep ile iyi bir proje arasındaki mesafeyi kapatmak için yapıldı.

*Yıldız bırakmayı unutma* ⭐

</div>
