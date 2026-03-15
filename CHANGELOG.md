# Kurgu — v0.4.0 Sürüm Notları

## [0.4.0] - 2026-03-15

### 🧠 İstem Mühendisliği (Prompt Engineering) Revizyonu
`src/utils/prompt.js` dosyası tamamen baştan yazılarak basit metin birleştirme mantığından, modern yapay zeka yönlendirme standartlarına geçirildi.

* **Sistem Personası (Role-Playing) Eklendi:** Prompt'un en başına yapay zekayı yönlendirecek bir "Uzman React & Vite Geliştiricisi" personası tanımlandı. Bu sayede AI'ın ürettiği kodların production-ready (üretime hazır) standartlarda olması güvence altına alındı.
* **Model Bazlı Dinamik Formatlama (Adaptive Formatting):** Yapay zeka modellerinin veriyi anlama biçimlerindeki farklılıklar koda entegre edildi:
  * **Claude:** İçerik, Claude'un en iyi anladığı format olan XML etiketleriyle (`<project_context>`, `<strict_rules>` vb.) yapılandırıldı.
  * **GPT & Gemini:** İçerik hiyerarşisi, bu modellerin daha iyi tepki verdiği Markdown başlıkları (`### PROJE BAĞLAMI`) ile tasarlandı.
* **Halüsinasyon Önleyici Kesin Kurallar (Anti-Hallucination Constraints):** Prompt'un en sonuna, AI'ın inisiyatif alıp kod mimarisini bozmasını engelleyen katı kurallar listesi (Clean architecture kullanımı, iş mantığının custom hook'lara ayrılması, useMemo/useCallback zorunluluğu) eklendi.
* **Gelişmiş Bölümlendirme:** İstekler mantıksal bloklara ayrıldı (Bağlam, Matematiksel Mantık, Arayüz, Teknik Özellikler, Kurallar).

### 🎯 Akıllı Puanlama Algoritması (Smart Scoring Engine)
`src/constants/score.js` dosyasındaki puanlama sistemi, statik "boş/dolu" kontrolünden çıkartılarak içerik analizine (Content Validation) dayalı dinamik bir yapıya kavuşturuldu.

* **Doğal Dil Derinlik Analizi:** "Amaç" (Goal) alanına girilen metnin kelime sayısı analiz edilerek (NLP yaklaşımı) puanlama kademelendirildi. Sadece birkaç kelime yazanlarla, detaylı bir prompt giren kullanıcıların skorları ayrıştırıldı (örn: >15 kelimeye tam puan).
* **Regex ile Matematiksel Doğrulama:** "Formüller" alanına girilen metnin gerçekten bir denklem içerip içermediği Düzenli İfadeler (Regex) ile denetlenmeye başlandı. (`=`, `+`, `*`, `sin`, `∫` vb. semboller aranarak matematiksel tutarlılığa ekstra puan verildi).
* **Bileşenler Arası Sinerji Bonusu:** Birbirinden bağımsız form alanları arasında akıllı bağlantılar kuruldu. Kullanıcı eğer "Grafikler" alanını doldurmuş ve kütüphane olarak `Chart.js`, `Recharts` veya `D3` gibi bir araç seçmişse sisteme +5 ekstra "Sinerji Puanı" eklendi.
* **Skor Tavanı Güvenliği:** Algoritma sonucunun hiçbir senaryoda %100'ü geçmemesi için `Math.min()` limitörü entegre edildi.
