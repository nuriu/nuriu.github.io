---
layout: post
title: "(O) Açık/Kapalı İlkesi (Open/closed principle)"
date: 2016-03-12 18:00:00 +0200
tags:
- mimari & tasarım
- solid ilkeleri
- tasarım ilkeleri
categories:
- solid ilkeleri
- mimari & tasarım
---

# Açık/Kapalı İlkesi
---------------------

Orijinal;

> software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification

Türkçesi ile;

> yazılım varlıkları (sınıflar, modüller, fonksiyonlar vb.) genişletme için açık ama değişiklik için kapalı olmalıdır.

Bu terim *Bertrand Meyer* tarafından 1988 yılında çıkan "*Object Oriented Software Construction*" isimli kitabı aracılığıyla tanıtılmıştır.  

Özetle anlatılmak istenen şudur ki;
yazılım varlıkları (sınıflar, modüller, fonksiyonlar vb.) davranışlarının/işlevlerinin genişletilmesi için kodun değiştirilmesi gerekmemeli.  

Tek sorumluluk ilkesindeki örneğimize kaldığımız yerden incelemeye devam edelim.
Varsayalım ki yine *dortgen* ve *ucgen* olmak üzere 2 sınıfımız var. Son durumumuz şu şekildeydi;  

![Üçüncü Adım](/../resimler/solid/ilkeler3.png)

Prototipimizdeki hesaplama işlemlerini bir hesaplayıcı nesne yardımıyla yapmak istediğimizi düşünelim ve bu tasarımı duruma uygun bir hale getirmeye çalışalım;  

![Dördüncü Adım](/../resimler/solid/ilkeler4.png)

Tasarımımıza hesaplar sınıfını ekleyerek uygulamamızı hesaplayıcı nesne kullanmaya uygun hale getirdik.
Fakat eklediğimiz her nesnede bu sınıfa yeni bir metod eklemek gerekecek, yani bu sınıfımız genişletmeye açık değil.
Peki bu tasarımı nasıl daha mantıklı yapabiliriz? Bu ilkemizi de göz önünde bulundurarak şöyle bir tasarıma ulaştık (1 adım geriye ve aynı zamanda 1 adım ileriye gittik);  

![Beşinci Adım](/../resimler/solid/ilkeler5.png)

Bu aşamada tasarımımızı açıklayalım; *sekil* isimli bir soyut sınıfımız var. Bu sınıftan *dortgen* ve *ucgen* gibi sınıflar türetiyoruz.
Türettiğimiz sınıflar hem kendine has özelliklere sahipler hem de üst sınıftan miras aldıkları alan ve cevre metodlarına.
Her şeklin alan ve çevre hesaplaması farklılık göstereceği/gösterebileceği için bu işi o şekle ait sınıfın içinde ilgili metodda gerçekleştirip sonucu gönderiyoruz.
Hesaplayıcı nesne kullanmak için oluşturduğumuz *hesaplar* sınıfımızda ise şimdilik alan ve çevre isimli iki metod bulunuyor.
Bu metodlar parametre olarak sekil nesnesi alıyor ve aldığı nesnenin alan ve cevre metodlarını çağırıyor.  

Şimdi senaryomuza sekil sınıfından bir *daire* sınıfı türettiğimizi düşünelim. (bunun gibi istediğimiz kadar uygun ekleme yapabiliriz.)
Bu ve diğer sekil altsınıflarının herhangi birine ait bir nesnenin alanını ve çevresini hesaplamak için hesaplayıcı nesnemizi kullanabiliriz.
Ve bunu yapmak için hesaplar sınıfında herhangi bir değişiklik yapmamıza gerek yok.

Tasarımımıza genel olarak baktığımızda çizer sınıfının da bu ilkeye uygun hale getirilebileceğini görebiliriz.
Tek sorumluluk ilkesini bozmadan cizer sınıfını açık/kapalı ilkesine uygun hale getirme işini de size bırakıyorum.
Zaten teori üzerinde ilerlediğimiz için oldukça basit bir işlem.   

# Açık/Kapalı İlkesinin Faydaları

Bu ilkeyi göz önünde bulundurmamızın bize çeşitli yararları olacaktır. Bunlardan bazıları şunlardır;  

1. Uygulama daha stabil/güçlü olacaktır çünkü önceden test ettiğimiz varlığı (sınıflar, fonksiyonlar vb.) değiştirmiyoruz.
2. Uygulama daha esnek olacaktır çünkü yeni gereksinimleri daha kolay karşılayabiliyoruz.
3. Uygulamayı test etmek daha kolay olacaktır ve hata potansiyeli/eğilimi azalacaktır.


**Dipnot:** Basitçe anlaşılabilir/açıklanabilir olması için aynı basit örnek üzerinden açıklamalar yaptım.
Bu ilke genel olarak kimlik doğrulama gibi bir nebze daha ileri düzey örnekler ile açıklanır/örneklenir.
Bu yüzden tek bir kaynağa bağlı kalmamanızı internet üzerinden (yabancı diliniz olmasa bile) araştırmalar yapmanızı, aynı konularda örneklenmiş kodları okumanızı tavsiye ederim.
Sonuçta verdiğim bu örnek verilebilecek en iyi örnek değil. Maksadım örneğin kendisine değil düşünce yapısına dikkat çekmek olduğu için temel düzeyde ilerlemeye çalışıyorum.
Hatalarım / yanlışlarım varsa affola.
Umarım faydalı olabilmişimdir.  


Sonraki bölüm: [Liskov’un Yer Değiştirme İlkesi][1]

[1]: /liskovun-yer-degistirme-ilkesi-liskov-substitution-principle/
