---
layout: post
title: (L) Liskov’un Yer Değiştirme İlkesi
subtitle: '(Liskov substitution principle)'
categories:
  - mimari&tasarim
---

# Giriş
---------

> What is wanted here is something like the following substitution property:  If for each object o1 of type S there is an object o2 of type T such that for  all programs P defined in terms of T, the behavior of P is unchanged when  o1 is substituted for o2 then S is a subtype of T.

Barbara Liskov tarafından tanıtılmış olan Liskov’un yer değiştirme ilkesi açık/kapalı ilkesinin bir özel durumu gibi düşünülebilir.
Bu kez yukarıdaki alıntının Türkçe'sini yazıp açıklamaya çalışmayacağım.
Çünkü adeta matematiksel bir teorem/tanım olarak verilmiş cümleyi kaç kez okuduysam da kastı tam olarak anlamadım.
O yüzden daha fazla araştırma yaptım ve ulaştığım sonucu şu öz ifade ile açıklayabilirim;  

Üst sınıf ile o sınıftan türetilen alt sınıf(lar)ın nesneleri yer değiştirdikleri zaman aynı davranışı sergilemelidir.

Uzatmadan hemen örnek üzerinden gidelim.  

# Liskov’un Yer Değiştirme İlkesi
---------------------------------

Varsayalım ki soyut *araba* sınıfından türetilmiş *luks* ve *kulustur* isimli sınıflarımız mevcut.

Senaryomuza uygun, basit bir tasarım yapalım;  

![Altıncı Adım](/../resimler/solid/ilkeler6.png)

Bu aşamada *calistir* ve *klimayiAc* isimli iki soyut metoda sahip olan soyut bir *araba* sınıfımız var.
Bu sınıftan *luks* ve *kulustur* isimli iki sınıf türetiyoruz.
Türetilen sınıflar da üst sınıfın metodlarını eziyorlar.
Peki burada nasıl bir problem var?  

*kulustur* isimli sınıfımızın nesneleri adından da anlaşılabileceği üzere klimaya sahip olmayacaklar.
Dolayısı ile *klimayiAc* isimli metod içerisinde sıradışı durum ifadeleri kullanmaktan null döndürmeye kadar tasarım hatasını gizlemek/üstünü örtmek için birçok işlem yapmak gerecek.
Ayrıca proje üzerinde çalışan diğer takım arkadaşları durumun farkında değilse bazı aksaklıklar/karmaşıklıklar meydana gelecek.
Dolayısıyla böyle bir durumu yaşamamak için örneğimize çözüm amaçlı bir arayüz ekleyelim;  

![Yedinci Adım](/../resimler/solid/ilkeler7.png)

Bu adımla birlikte *klimayiAc* metodumuzu sadece *luks* sınıfının nesnelerine açarak karmaşıklık ihtimalini ortadan kaldırdık ve ilkemize uygun bir tasarım elde ettik.  

Sonraki bölüm: [Arayüz Ayrımı İlkesi][1]

[1]: /mimari&tasarim/2016/03/15/arayuz-ayrimi-ilkesi-interface-segregation-principle.html