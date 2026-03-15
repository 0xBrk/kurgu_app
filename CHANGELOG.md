# Kurgu — v0.2.0 Sürüm Notları

**Yayın tarihi:** Mart 2026
**Önceki sürüm:** v0.1.1

---

## Öne Çıkan Değişiklikler

v0.2.0, yalnızca hata düzeltmesi değil; aynı zamanda tüm kod tabanının **önerilen modüler yapıya** taşındığı bir yeniden yapılandırma sürümüdür. Tek dosya olan 873 satırlık `App.jsx`, bağımsız modüllere ayrılmıştır.

---

## Kritik Düzeltmeler

### YK-01 — Modal scroll kilidi üç instance tarafından eziliyordu
**Etki:** Modal açıkken sayfa scroll'u hiçbir zaman engellenmiyordu.

v0.1.1'de `Modal` bileşenine eklenen `useEffect`, 3 Modal instance'ı (`libOpen`, `shareOpen`, `abOpen`) için aynı anda çalışıyordu. `open=false` olan iki instance `overflow=''` yazarak `open=true` olan instance'ın kilidini anında siliyordu.

**Düzeltme:** Scroll kilidi `Modal` bileşeninden kaldırıldı. `App.jsx`'te tek bir `useEffect`, `anyModalOpen = libOpen || shareOpen || abOpen` değişkenini izliyor.

```js
// App.jsx
const anyModalOpen = libOpen || shareOpen || abOpen
useEffect(() => {
  document.body.style.overflow = anyModalOpen ? 'hidden' : ''
  return () => { document.body.style.overflow = '' }
}, [anyModalOpen])
```

---

### YK-02 — toB64 büyük payloadlarda RangeError ile çöküyordu
**Etki:** Formüller + parametreler + notlar dolu olduğunda paylaşım linki oluşturma uygulamayı tamamen çökertiyor, "Maximum call stack size exceeded" hatası veriyordu.

`String.fromCharCode(...bytes)` spread sözdizimi JavaScript'in ~65.000 argüman sınırını aşıyordu.

**Düzeltme:** `utils/b64.js`'te chunk bazlı işleme (`CHUNK_SIZE = 8192`). Payload boyutundan bağımsız olarak hatasız çalışır.

```js
// utils/b64.js
export const toB64 = (obj) => {
  const bytes = new TextEncoder().encode(JSON.stringify(obj))
  let binary = ''
  for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
    binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK_SIZE))
  }
  return btoa(binary)
}
```

---

## Önemli Düzeltmeler

### ÖN-01 — useMemo([form]) optimizasyon sıfırdı
`form` referansı her `setF` çağrısında yeni obje ürettiğinden `useMemo([form])` her tuş vuruşunda geçersiz kılınıyordu. Ekstra bellek ve karşılaştırma maliyeti vardı, fayda yoktu.

**Düzeltme:** `ScoreCard`, `prompt` ve `promptShort` memoları artık tek tek ilgili form alanlarını bağımlılık olarak alıyor. `SCORE_KEYS` sabiti `constants/score.js`'te tanımlandı.

---

### ÖN-02 — 3 useEffect mount'ta eş zamanlı localStorage yazıyordu
Her `history`, `library`, `stats` değişikliğinde ayrı `useEffect` anında `lsSet` çağırıyordu. Her tuş vuruşunda 3 localStorage yazma işlemi tetikleniyordu.

**Düzeltme:** `hooks/` içindeki her hook'a `useDebouncedWrite(key, value, 300ms)` eklendi. Değişiklik sonrası 300ms bekleniyor; bu süre içinde başka değişiklik gelirse timer sıfırlanıyor.

---

### ÖN-03 — Skor iki yerde bağımsız hesaplanıyordu (DRY ihlali)
`generate()` ve `ScoreCard` aynı reduce mantığını ayrı ayrı yazıyordu. `SCORE_CFG` değiştiğinde biri güncellenmeyebilirdi.

**Düzeltme:** `constants/score.js`'te tek `calcScore(form)` fonksiyonu. `generate()` ve `ScoreCard` her ikisi bunu kullanıyor.

---

### ÖN-04 — `stats.total` sonsuz büyüyordu, history limiti 30'du
Geçmiş 30 kayıtla sınırlıyken `stats.total` her `generate()`'de artıyordu. 31. kurguda istatistik panelindeki "Toplam Kurgu" yanıltıcı oluyordu.

**Düzeltme:** `stats.total` tamamen kaldırıldı. `useStats` hook'u `historyLength` parametresi alıyor; `StatsTab` bu değeri doğrudan `history.length` olarak gösteriyor.

---

### ÖN-05 — `filteredHist` her render'da yeniden hesaplanıyordu
`history.filter(...)` her render'da çalışıyordu.

**Düzeltme:** `useMemo([history, histFilter])` ile sarıldı.

---

### ÖN-06 — `stats.domains` büyük/küçük harf duyarlıydı
"Elektrik" ve "elektrik" iki ayrı anahtar oluşturuyordu, istatistik parçalanıyordu.

**Düzeltme:** `useStats.record()` içinde domain normalize ediliyor: önce `DOMAINS` eşleşmesinden normalleştirilmiş isim alınıyor, yoksa `form.domain.toLowerCase().trim()` kullanılıyor.

---

### KÜ-01 — Clipboard `.catch()` eksikti
Tüm `navigator.clipboard.writeText()` çağrıları başarısız olduğunda sessizce geçiyordu.

**Düzeltme:** Her clipboard çağrısına `.catch(() => toast.show('Kopyalama başarısız ⚠'))` eklendi.

---

### KÜ-02 — Form state sayfa yenilemede kayboluyordu
Uzun form doldururken yanlışlıkla sekme kapatma veya F5 tüm içeriği siliyordu.

**Düzeltme:** Form state her değişikliğinde `FORM_DRAFT_KEY = 'kurgu_draft'` anahtarıyla localStorage'a 300ms debounce ile kaydediliyor. Mount'ta URL parametresi yoksa taslak yükleniyor.

---

### KÜ-03 — Adım atlama: zorunlu alanlar boşken kurgu oluşturulabiliyordu
Kullanıcı direkt 5. adıma atlayıp hiçbir şey doldurmadan "Kurgula" butonuna basabiliyordu.

**Düzeltme:** "Sonraki →" butonu `goNext()` fonksiyonunu çağırıyor. Adım 1'den adım 2'ye geçerken Proje Adı veya Alan / Konu alanlarından en az biri dolu değilse kırmızı hata mesajı gösteriliyor ve adım ilerletilmiyor.

---

### KÜ-04 — `lsSet` QuotaExceededError'ı yakalamıyordu
localStorage dolduğunda sessizce veri kaybı oluyordu.

**Düzeltme:** `utils/storage.js`'teki `lsSet` try/catch içeriyor. `QuotaExceededError` yakalandığında eski history kayıtlarının yarısı silinerek alan açılıyor ve yazma tekrar deneniyor.

---

### KÜ-05 — Chip bileşeni klavye ile kullanılamıyordu
`<span>` erişilebilir değildi: `role`, `tabIndex`, klavye desteği yoktu.

**Düzeltme:** `components/Chip.jsx`'e `role="button"`, `tabIndex={0}`, `aria-pressed={active}`, `onKeyDown` (Enter/Space) ve focus ring eklendi.

---

## Mimari Yeniden Yapılandırma

v0.2.0'da tek dosyalık 873 satırlık yapı aşağıdaki modüler yapıya taşındı:

```
src/
├── constants/
│   ├── domains.js     DOMAINS objesi (6 alan, regex + öneri verisi)
│   ├── score.js       SCORE_CFG + calcScore() + SCORE_KEYS
│   └── chips.js       INTERACTION_CHIPS, LIB_CHIPS
│
├── utils/
│   ├── storage.js     lsGet, lsSet (QuotaExceeded korumalı), FORM_DRAFT_KEY
│   ├── b64.js         toB64 (chunk-safe), fromB64
│   └── prompt.js      buildPrompt()
│
├── hooks/
│   ├── useToast.js    Bildirim hook'u
│   ├── useHistory.js  History CRUD + debounced localStorage
│   ├── useLibrary.js  Kütüphane CRUD + debounced localStorage
│   └── useStats.js    İstatistik kayıt + normalized domain
│
├── components/
│   ├── Btn.jsx        React.memo
│   ├── Chip.jsx       React.memo + a11y (role, tabIndex, onKeyDown)
│   ├── Field.jsx      React.memo
│   ├── StepDot.jsx    React.memo + a11y
│   ├── ScoreCard.jsx  React.memo + calcScore() + granular useMemo
│   ├── StatsBar.jsx   React.memo
│   └── Modal.jsx      Scroll lock kaldırıldı (App düzeyine taşındı)
│
├── App.jsx            ~350 satır — sadece orchestration
├── index.css          Global stiller + responsive media query
├── main.jsx           React 18 giriş noktası
└── tauriApi.js        Web stub
```

**App.jsx satır sayısı:** 873 → ~350 (−60%)

---

## Bilinen Açık Sorunlar

### K-01 — Geçmiş her sayfa yüklemesinde sıfırlanıyor *(v0.1.2 / v0.2.1'de düzelecek)*

`history` state'i `useState([])` ile boş başlıyor. Mount'taki `useEffect` (debounced da olsa) 300ms sonra localStorage'a `[]` yazıyor ve önceki geçmişin üstüne geçiyor.

**Düzeltme (sonraki sürüm):**
```js
// Mevcut (kasıtlı bırakıldı):
const [history, setHistory] = useState([])

// Sonraki sürüm:
const [history, setHistory] = useState(() => lsGet(HIST_KEY, []))
```

---

## Değişen Dosyalar

| Dosya | Durum | Açıklama |
|-------|-------|----------|
| `src/App.jsx` | ✏️ Yeniden yazıldı | 873 → ~350 satır, sadece orchestration |
| `src/constants/domains.js` | ✨ Yeni | DOMAINS sabit dosyası |
| `src/constants/score.js` | ✨ Yeni | SCORE_CFG + calcScore() + SCORE_KEYS |
| `src/constants/chips.js` | ✨ Yeni | Chip sabitleri |
| `src/utils/storage.js` | ✨ Yeni | lsGet/lsSet (QuotaExceeded + draft key) |
| `src/utils/b64.js` | ✨ Yeni | toB64 chunk-safe, fromB64 |
| `src/utils/prompt.js` | ✨ Yeni | buildPrompt() |
| `src/hooks/useToast.js` | ✨ Yeni | Toast hook |
| `src/hooks/useHistory.js` | ✨ Yeni | History CRUD + debounced write |
| `src/hooks/useLibrary.js` | ✨ Yeni | Library CRUD + debounced write |
| `src/hooks/useStats.js` | ✨ Yeni | Stats + normalized domain |
| `src/components/Btn.jsx` | ✨ Yeni | React.memo |
| `src/components/Chip.jsx` | ✨ Yeni | React.memo + a11y |
| `src/components/Field.jsx` | ✨ Yeni | React.memo |
| `src/components/StepDot.jsx` | ✨ Yeni | React.memo + a11y |
| `src/components/ScoreCard.jsx` | ✨ Yeni | React.memo + granular memo |
| `src/components/StatsBar.jsx` | ✨ Yeni | React.memo |
| `src/components/Modal.jsx` | ✨ Yeni | Scroll lock kaldırıldı |
| `src/index.css` | ✏️ Güncellendi | Değişmedi (responsive fix v0.1.1'den geldi) |
| `index.html` | — | Değişmedi |
| `package.json` | ✏️ Güncellendi | version: 0.2.0 |
