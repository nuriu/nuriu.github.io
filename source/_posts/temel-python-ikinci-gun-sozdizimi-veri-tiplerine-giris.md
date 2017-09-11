---
title: "Temel Python 2. Gün: Sözdizimi, Veri Tiplerine Giriş"
date: 2015.10.11
tags:
- python
- sözdizimi
- veri tipleri
categories:
- python
---

## Python'a Giriş - Sözdizimi

Python'u diğer programlama dillerinden ayıran özelliklerin içindeki en görünür olanı sözdizimi farklılıklarıdır. Python C ailesi gibi parantezler ve noktalı virgüller yerine girintili yapıyı kullanır. Böylelikle sadelik ve okunabilirlik artar. Python ile yazılmış basit bir program örneği;  

``` python
print("Merhaba")
```

Yukarıdaki örnek ekrana Merhaba yazdıracaktır. Görüldüğü üzere kod diğer dillere göre oldukça sadedir. Özellikle "eski okul" bir dil öğrendikten sonra Python'a başladıysanız bunu çok çabuk fark edersiniz.  

Bu seri ile birlikte programlama mantığını öğrenmiş kişileri hedef kitlesi olarak düşünüp ona uygun, kısa ve öz şekilde yazmaya çalışacağım.  

## Önişlem Komutları

Kaynak kodu dosyalarının en başında bulunurlar. Yazılımınıza ek fonksiyonları/kütüphaneleri kazandırmak için kullanılırlar. Kullanımları oldukça basittir. Örnek;  

``` python
from django.db import models
```  

Tek satırlık örneğimiz iki kısımdan oluşmaktadır. İngilizce bilen kişiler için basitçe anlaşılabileceği gibi yapı from "modül adı" import "fonksiyon/değişken adı" şeklindedir. "modül adı"" kısmında adı yazan modülden "fonksiyon/değişken adı" kısmında yazan fonksiyon(ları)/değişken(leri) kaynak kodumuza eklememizi sağlar. İlerleyen örneklerde daha iyi anlaşılacaktır.  

## Veri Tiplerine Giriş

Python dili de diğer programlama dilleri gibi standartlaşmış veri tiplerine ve değişken tanımlama kurallarına sahiptir. Benzerlik oldukça fazladır fakat bu tamamen aynı deneyim ve/veya kullanım şekli anlamına gelmez.  

**Numaralar**  

Python ile yazdığınız bir programda değişken tanımlarken değişken tipi belirtmenize gerek yoktur. Python tanımlanan değişkenin tipini otomatik olarak anlar. Örneğin;  

``` python
x = 5
```  

Örnekte görüldüğü üzere Python ile değişken tanımlamak diğer dillere göre bir nebze daha basittir. Python, örnekteki x değişkeninin int (tamsayı) tipinde bir değişken olduğunu anlar.  

**Metinler**  

Metin tipindeki veriler numaralardan farklı olarak diğer dillerdeki gibi ayırıcı karakterler içinde tanımlanırlar. Fakat Python'da char-string tanımlama farklılıkları yoktur. Metin tipindeki verinizi ister ''(tek tırnaklar) ile ister "" (çift tırnaklar) ile tanımlayabilirsiniz. Bir diğer fark ise metnin satır formatını tanımlarken belirleyebiliyor olmanız. Örneğin;  

``` python
metin = "Bu bir metindir."
birBaskaMetin = '''Bu metin
iki satira ayrilmistir'''
metinIcindeTirnak = "\"Alinti yapmak isterseniz bu sekilde tirnak isaretlerini kullanabilir, alintinizi bilinen formatta yazdirabilirsiniz.\""
```  

Sonraki Bölüm: Veri Tipleri:  
[Temel Python - 3. Gün: Veri Tipleri][1]  

[1]: /2015/10/12/temel-python-ucuncu-gun-veri-tipleri-data-types/
