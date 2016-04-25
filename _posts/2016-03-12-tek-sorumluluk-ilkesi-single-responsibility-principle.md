---
layout: post
title: (S) Tek Sorumluluk İlkesi
subtitle: '(Single responsibility principle)'
date: 2016-03-12 03:00:00 +0200
categories:
  - mimari&tasarim
---

# Giriş
---------

Mimari & Tasarım kategorimize giriş yapma zamanımız geldi.
Bu kategorideki ilk serimiz solid olarak kısaltılan/bilinen nesne tabanlı yazılım tasarımı ilkeleri üzerine olacak.
Peki nedir bu ilkeler?

1. (S) Tek Sorumluluk İlkesi (Single responsibility principle)  
2. (O) Açık/Kapalı İlkesi (Open/closed principle)  
3. (L) Liskov'un Yer Değiştirme İlkesi (Liskov substitution principle)  
4. (I) Arayüz Ayrımı İlkesi (Interface segregation principle)  
5. (D) Bağımlılık Ters Çevirme İlkesi (Dependency inversion principle) 

# Bu ilkeler niçin var?

Yazılım projeleri büyüdükçe hem daha karmaşıklaşıyor hem de karmaşıklaşma potansiyeli artıyor.
Bu karmaşıklıklar yüzünden hem proje üzerinde ilerlemek/yol bulmak zorlaşıyor hem de olası kod tekrarları yüzünden kaynak kullanımı artıyor, dolayısıyla performans da düşüyor.  

İşte bu ilkeler hem bu konuda hem de genel olarak daha akılcı bir yol izlememizde bize yardımcı oluyorlar. 
Sonuçta bunlar diğer alanların/konuların sahip olduğu gibi birer düşünce yapısı/şekli.

# Nasıl kullanacağız / kullanmalıyız?

Ben bu ilkelerin kalıplar olarak düşünülmesindense ilkeler olarak düşünülmesinin daha doğru olduğunu düşünüyorum.
Yani; yazdığımız kodları bu kalıplara uydurmaya çalışmaktansa kod yazarken bu ilkeleri aklımızda bulundurmanın ve ona göre akılcı hareket etmenin daha mantıklı olduğu kanaatindeyim.  

Uygulamaların teorik olarak gereğinden fazla uzatılmasından hoşlanmadığım için lafı daha fazla uzatmadan ilk ilkemiz üzerinde konuşmaya geçelim.  

# Tek Sorumluluk İlkesi
------------------------

Orijinal;

> A class should have only one reason to change.

Türkçe;

> Bir sınıf değişmek için yalnızca bir nedene sahip olmalıdır.

> -Robert C. Martin.

Bu ilke Robert C. Martin tarafından "Agile Software Development, Principles, Patterns, and Practices" isimli kitabının "Principles of Object Oriented Design" bölümünde tanıtıldı.

Bu ilkeyi özetleyen cümleyi anlayabileceğimiz bir dile çevirelim; "Her sınıfın tek bir işi/sorumluluğu olmalıdır."
Yani eğer bir sınıf birden fazla sorumluluğa sahipse hem bu ilkeye uymuyor hem de iyi bir tasarıma sahip değildir denilebilir. Nasıl mı?  

Şöyle bir örnek ile açıklamaya çalışayım;  

Diyelim ki bir oyun prototipi üzerinde çalışıyoruz ve temel şekiller için *dortgen*, *ucgen* gibi sınıflarımız var ve bu sınıflar aracılığı ile oluşturacağımız nesneleri ekranda çizme işlemi yapacağız.
Şöyle bir sınıf tasarımı yaptığımızı düşünelim;  

![Birinci Adım](/../resimler/solid/ilkeler1.png)

İlk tasarım aşamamızda benzer metodlar olduğu keşfettik.
Bu sınıflarımız birer şekil ve bu iki şeklin de (olası diğer şekillerimizin de) alan ve çevre metodları olduğuna göre kalıtım/soyutlama konusundaki bilgilerimizi kullanarak bu iki sınıfı *sekil* isimli alan ve cevre metodlarına sahip bir sınıftan türetebiliriz.
Böylece tasarımımız şu aşamaya gelmiş olur;  

![İkinci Adım](/../resimler/solid/ilkeler2.png)

Tasarımımız biraz daha mantıklı bir hal aldı.
Fakat hala bir sorunumuz var. O da sınıflarımızın farklı bir iş olan *ciz* metodunu yapıyor olması.
Eğer bu tasarımla devam edersek sekil sınıfından türeteceğimiz bu tür sınıflarda yine *ciz* metodunu benzer şekilde tekrar etmemiz gerekecek. 
Peki bu durumu nasıl daha iyi/mantıklı hale getirebiliriz?
Çizme işi başlı başına ayrı bir iş olduğundan onu tamamen farklı bir sınıf yapabiliriz/yapmalıyız.
Son tasarımımız bu hali aldı;  

![Üçüncü Adım](/../resimler/solid/ilkeler3.png)

# Bu tasarım/ilke neden mantıklı/gerekli?

Yukarıdaki senaryomuza bir *daire* sınıfı eklediğimizi düşünelim.
İlk tasarım aşamamıza göre bu sınıfın nesnelerini çizebilmek için de bu sınıfa ait bir metodumuz olmalıydı.
Son tasarımımızı uygulayacak olursak yapmamız gereken tek şey cizer sınıfına daire nesnesini parametre olarak alan bir ciz metodu eklemek.
Böylece hem sınıflarımıza ek sorumluluklar yüklememiş olacağız hem de daha sağlam/mantıklı bir yapı inşa etmiş olacağız.  

Çizme işinin daire, dortgen veya ucgen hatta ve hatta herhangi bir sekil alt sınıfının kendisi ile hiçbir alakası yok.
Yani gerçek hayattki nesne mantığıyla düşünürsek; bir üçgen kendi kendisini çizebilir mi? hayır, onu çizmek için bir çizerin olması gerekli değil mi?  

İşte bu yüzden çizme işini cizer isimli bambaşka bir sınıfa taşıdık. Elbette unutmamalı ki bunu farklı şekillerde de uygulayabilirdik. (arayüz kullanarak vesaire.)
Yani benim burada izlediğim ve kolay anlaşılabilir olmayı amaçlayan yöntem bu işi gerçekleştirmenin/ilkeyi açıklamaya çalışmanın sadece bir yolu.
Dolayısıyla daha iyi yöntemleri bulmak/uygulamak mümkün.

# Bu tasarımı/ilkeyi ne zaman düşünmeli/uygulamalıyız?

En başından. Sınıfları düşünmeye başladığınız an bu ilkeyi de düşünmelisiniz.
Bu projenize ölçeklendirilebilir bir yapı ve temiz bir tasarım kazandırmakla kalmayıp takım çalışması sırasında olası bir işlem çakışmasının da önüne geçecektir. (her şeye rağmen bu büyük ölçüde size yani kodları yazan/tasarlayan kişilere bağlıdır.)

İlk ve en kolay ilkemizden bu kadar.
Umarım anlaşılabilir/yeterli düzeyde bir anlatım/açıklama yapabilmişimdir.

Sonraki bölüm: [Açık/Kapalı İlkesi][1]

[1]: /mimari&tasarim/2016/03/12/acik-kapali-ilkesi-open-closed-principle.html