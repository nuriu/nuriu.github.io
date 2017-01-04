---
layout: post
title: "Jekyll: Sosyal Paylaşım Tuşlarının Eklenmesi"
date: 2016-06-22 17:30:00 +0300
tags:
- jekyll
categories:
- jekyll
series: jekyll
---

**Problem**

Jekyll tabanlı sistem kullanmaya başladığımdan beri eksikliğini hissettiğim birkaç konudan biriydi sosyal paylaşım. Bugün, çözümünün ne kadar basit olduğunu gördükten sonra, siteme neden daha önce eklemediğimi düşündürmedi değil. Jekyll ve GH Pages sağladığı hız ve kolaylığın yanı sıra varsayılan olarak kullanıldığında wordpress joomla gibi hazır içerik sistemlerinden ziyaretçi ile etkileşim, seo gibi bazı konularda daha geride kalıyor. Bunun çözümü de biz geliştiricilere kalıyor. 

**Çözüm**

Bu ufak problemin basit çözümü yazı şablonunuzu tanımladığınız html sayfasındaki uygun yere aşağıdaki kodu eklemekten ibaret;
<div style="padding:0rem 10rem;">
<script src="https://gist.github.com/nuriu/9cb813ddb2cfae2f4967ba5e977b1fc8.js"></script>
</div>
**NOT:** Yukarıdaki kodda kullanılan değişkenleri (örneğin: *site.author.twitter* ) kendi ayarlarınıza (*_config.yml*) göre düzenlemeniz gerekebilir.