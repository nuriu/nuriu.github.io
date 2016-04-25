---
layout: post
title: Jekyll 
subtitle: Kategoride Yayınlanmış Yazı Sayısın Gösterimi
categories:
- jekyll
---

**Problem**

Geçtiğimiz haftalarda blog altyapısını jekyll 3'e güncelleyip farklı bir temaya taşıdıktan sonra yazılan kategorilerdeki yazılmış yazı sayısının gözükmemesi.

**Çözüm**

Her ne kadar daha akıllıca bir çözüm arasam da kullandığım yapıya uygun bir çözüm bulamadım. O yüzden daha amatörce ve basit olan yoldan problemi şu şekilde çözdüm;  

**_includes/category/title.html (kategori sayfasının başlık kısmı)**  

<script src="https://gist.github.com/nuriu/bce3344c9e3a16d1cb13.js"></script>

**_includes/page/explore.html (sayfada kategorilerin gözüktüğü alt kısım)**  

<script src="https://gist.github.com/nuriu/e06baa695be1658cc7b9.js"></script>

Böylece hem henüz yazı yayınlanmamış kategorilerin kalabalık olmasını hem de anasayfada alt kısımda (sizin yapınıza göre dosya adları ve yerleri değişik olacaktır) görebileceğiniz üzere kategorideki yazı sayılarını ziyaretçilere göstermiş olduk.