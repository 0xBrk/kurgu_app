# Kurgu — v0.2.0 Sürüm Notları

**Yayın tarihi:** Mart 2026
**Önceki sürüm:** v0.1.0

---

# Changelog - kurgu_app

## [0.2.0] - 2026-03-15

### 🚀 Mimari Değişiklikler (Refactoring)
* **Dosya Ağacı Yenilendi:** Uygulamanın devasa `App.jsx` dosyası "Feature-Based" (Özellik Odaklı) mimariye göre parçalandı.
* **Yeni Modüller:** * `WizardStep`, `PreviewCard`, `ScoreCard` -> `src/features/wizard/`
  * `HistoryTab` -> `src/features/history/`
  * `StatsTab`, `StatsBar` -> `src/features/stats/`
  * `LibraryContent`, `ShareContent`, `ABContent` -> Kendi klasörlerine ayrıldı.
* **Vite Alias Yapılandırması:** `vite.config.js` içerisine `@components`, `@features`, `@utils`, vb. alias'lar eklendi.

### ⚡ Performans İyileştirmeleri (Optimization)
* **Re-render Kontrolü:** Alt bileşenler `React.memo` ile sarmalanarak dışarı çıkarıldı.
* **Inline Style Temizliği:** Satır içi stiller temizlenerek `src/index.css` dosyasında global sınıflara dönüştürüldü.
