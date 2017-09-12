---
title: "(I) Arayüz Ayrımı İlkesi (Interface segregation principle)"
date: 2016.03.17
tags:
- mimari & tasarım
- solid ilkeleri
- tasarım ilkeleri
categories:
- solid ilkeleri
- mimari & tasarım
---

## Arayüz Ayrımı İlkesi

> many client-specific interfaces are better than one general-purpose interface.

Türkçe;  

> istemciye özel çok arayüz, genel amaçlı tek bir arayüzden daha iyidir.

veya farklı bir deyiş ile "hiçbir istemci (nesne) kullanmadığı metodlara bağlı olmamalıdır."

Bu ilke, arayüzleri şişmanlatmak yerine, onları daha özelleştirilmiş biçimde kullanmayı hedefler.  

Hem bağlantılı hem de daha mantıklı ve basit olması açısından bir önceki ilkemizdeki verdiğimiz örnekten devam edelim;  

![Yedinci Adım](/resimler/solid/ilkeler7.png)

Şimdi projemizin büyüdüğünü ve yeni gereksinimlerin eklendiğini düşünerek bu tasarımı biraz daha büyütelim/genelleyelim;  

![Sekizinci Adım](/resimler/solid/ilkeler8.png)

Projemizin taşıtlar ile ilgili olduğunu varsayarak üst sınıflar ekledik ve var olan sınıflarımızı kategorize ettik.
*luks* sınıfımızı soyut yaptık ve ondan *suv* ile *spor* sınıflarını türettik.

Ek olarak üstü açılabilen araçlar olacağını düşünerek arayüzümüze bu yeteneği ekleyerek arayüzümüzü genellemiş olduk.

Peki iyi mi yaptık? Buradaki sorun nerede?  

## Sorun

Dikkat ederseniz arayüzümüz doğrudan *luks* sınıfına bağlı.

Yani *luks* sınıfından türetilen her sınıfa ait tüm nesneler bu yeteneklere sahip olacak/olmalı. *spor* sınıfına ait tüm araçların üstü açılabilen olduğunu varsayalım.

Peki ya *suv* sınıfına ait olanlar? Sorunumuz işte burada başlıyor.

## Çözüm

Bu sorunu çözmek için yapmamız gereken şey çok basit.
Eğer arayüzümüzü şişirmek/genellemek yerine daha özel arayüzler oluşturursak, onları daha uygun kullanabiliriz. Yani;  

![Dokuzuncu Adım](/resimler/solid/ilkeler9.png)

Bu basit ama önemli ilkeyi aklımızda bulundurup tasarımımızı özelleştirdiğimizde genişlemeye daha müsait/uygun bir yapı elde etmiş olduk.

Sonraki bölüm: [Bağımlılık Ters Çevirme İlkesi][1]

[1]: /2016/03/18/bagimlilik-ters-cevirme-ilkesi-dependency-inversion-principle/
