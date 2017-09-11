---
title: "Jekyll: Sosyal Paylaşım Tuşlarının Eklenmesi"
date: 2016.06.22
tags:
- jekyll
categories:
- jekyll
---

## Problem

Jekyll tabanlı sistem kullanmaya başladığımdan beri eksikliğini hissettiğim birkaç konudan biriydi sosyal paylaşım. Bugün, çözümünün ne kadar basit olduğunu gördükten sonra, siteme neden daha önce eklemediğimi düşündürmedi değil. Jekyll ve GH Pages sağladığı hız ve kolaylığın yanı sıra varsayılan olarak kullanıldığında wordpress joomla gibi hazır içerik sistemlerinden ziyaretçi ile etkileşim, seo gibi bazı konularda daha geride kalıyor. Bunun çözümü de biz geliştiricilere kalıyor.

## Çözüm

Bu ufak problemin basit çözümü yazı şablonunuzu tanımladığınız html sayfasındaki uygun yere aşağıdaki kodu eklemekten ibaret;

``` html 
Bu Yazıyı Paylaş: 
<a href="https://twitter.com/intent/tweet?text={{ page.title }} - {{ page.subtitle }}:&url={{ site.url }}{{ page.url }}&via={{ site.author.twitter }}&related={{ site.author.twitter }}" rel="nofollow" target="_blank" title="Twitter'da paylaş">
<i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a> | 

<a href="https://facebook.com/sharer.php?u={{ site.url }}{{ page.url }}" rel="nofollow" target="_blank" title="Facebook'da paylaş">
<i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a> | 

<a href="https://plus.google.com/share?url={{ site.url }}{{ page.url }}" rel="nofollow" target="_blank" title="Google+'da paylaş">
<i class="fa fa-google-plus" aria-hidden="true"></i> Google+</a> | 

<a href="https://www.reddit.com/submit?url={{ site.url }}{{ page.url }}&title={{ page.title }} - {{ page.subtitle }}" rel="nofollow" target="_blank" title="Reddit'de paylaş">
<i class="fa fa-reddit" aria-hidden="true"></i> Reddit</a> | 

<a href="https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ page.url }}&title={{ page.title }} - {{ page.subtitle }}" rel="nofollow" target="_blank" title="LinkedIn'de paylaş">
<i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a> | 

<a href="http://www.tumblr.com/share/link?url={{ site.url }}{{ page.url }}&name={{ page.title }} - {{ page.subtitle }}&description={{ page.title }} - {{ page.subtitle }}" rel="nofollow" target="_blank" title="Tumblr'da paylaş">
<i class="fa fa-tumblr" aria-hidden="true"></i> Tumblr</a>
```

**NOT:** Yukarıdaki kodda kullanılan değişkenleri (örneğin: *site.author.twitter* ) kendi ayarlarınıza (*_config.yml*) göre düzenlemeniz gerekebilir.
