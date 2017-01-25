---
layout: post
title: "(D) Bağımlılık Ters Çevirme İlkesi (Dependency inversion principle)"
date: 2016-03-15 22:30:00 +0200
tags:
- mimari & tasarım
- solid ilkeleri
- tasarım ilkeleri
categories:
- solid ilkeleri
- mimari & tasarım
---

# Bağımlılık Ters Çevirme İlkesi
---------------------------------

Bu serimizdeki son ilkemiz (soli**D**) aşağıdaki iki temel düşünceyi savunur/belirtir;  

> Yük seviyeli modüller düşük seviyeli modüllere bağımlı olmamalıdır. Her ikisi de soyutlamalara bağlı olmalıdır.

> Soyutlamalar detaylara bağlı olmamalıdır. Detaylar soyutlamalara bağlı olmalıdır.  

Bu duruma gerçek hayattan şöyle bir örnek verebiliriz;
Aracınızın lastiği patladığında arabayı değiştirmek gerekir mi? Hayır.
Burada araç yüksek seviyeli modül, lastikler ise düşük seviyeli modüllerdir.  

İşte şu an inceleyeceğimiz ilke bu durumun yazılım tasarımında/gerçekleştirmesinde uygulanmasını/göz önüne alınmasını savunuyor.  

Hemen örneğimize geçelim.
Basit olması açısından ampul ve elektrik anahtarı arasındaki ilişkiyi programlayacağımızı düşünelim.
Başlangıç tasarımımız şu şekilde olsun;  

![Onuncu Adım](/../resimler/solid/ilkeler10.png)

Örneğimizde bir *ampul* sınıfımız ve onu kontrol etmek için yaptığımız ve ona bağımlı olan *elektrikAnahtari* isimli sınıfımız var.
*elektrikAnahtari* sınıfımızdaki *bas* isimli metodumuzda o anki *elektrikAnahtari* sınıfının nesnesinde referans olunan *ampul* nesnesinin açık olup olmamasına göre ampulu açıyor/kapatıyor.  

**Problem**

Eğer aynı *elektrikAnahtari* sınıfımızı kullanarak oluşturacağımız nesnelerden daha fazla cihaz kontrol etmeyi istersek (başka ışıklandırma sistemleri vb.) *elektrikAnahtari* sınıfımızda her seferinde büyük değişiklikler yapmamız gerekiyor.
Yani yüksek seviyeli modülümüz olan *elektrikAnahtari* küçük seviyeli modülümüz olan *ampul* sınıfına bağımlı oldu.
Dolayısıyla hem ilkemizi ihlal etmiş durumdayız hem de kötü bir tasarım çıkarmış sayılırız.  

**Çözüm**

İlkemize göre bu iki sınıfımızın da bağlı olacağı bir soyutlama yapmamız gerekiyor.
İşe *elektrikAnahtari* sınıfımızdaki anahtar kısmını soyutlaştırarak başlayalım;  

![Onbirinci Adım](/../resimler/solid/ilkeler11.png)

Şimdi *ampul* sınıfı için arayüz oluşturalım;  

![Onikinci Adım](/../resimler/solid/ilkeler12.png)

Dikkatinizi çektiyse *elektrikAnahtari* sınıfımızdaki *ampul* sınıfına olan bağımlılığı kaldırdık yerine *acilipKapanabilen* arayüzünü koyduk.
Böylelikle hem *ampul* sınıfına olan bağımlılığı kaldırdık hem de o sınıf üzerindeki kontrolümüzü koruduk.
Son adım olarak örnek olması için kontrol edilecek yeni bir sınıf ekleyelim;  

![Onüçüncü Adım](/../resimler/solid/ilkeler13.png)

Gördüğünüz üzere yüksek seviyeli modülümüz olarak kabul edebileceğimiz *elektrikAnahtari* sınıfımızda hiçbir değişiklik yapmamıza gerek kalmadan yeni bir sınıf ekleyebilmiş olduk.  

SOLID ilkelerinden bu kadar, hatamız/yanlışımız olmuş ise affola, maksat öğrenmek/öğrendiğini paylaşmak.  
