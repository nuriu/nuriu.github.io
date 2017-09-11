---
title: "Temel Python 3. Gün: Veri Tipleri"
date: 2015.10.12
tags:
- python
- veri tipleri
categories:
- python
---

## Listeler

Listeleri temel olarak veri kümeleri olarak açıklamak mümkün. C ailesindeki dizilere benzemelerine rağmen listelerdeki verilerin aynı türde olmasına gerek yoktur. Yani metinlerle sayıları aynı listede tutmak istiyorsanız, bunu yapabilirsiniz. Örnek tanımlamalar;  

``` python
karisikListe = ['ahmet', 'kadir', 1996, 1994]
sayiListesi = [1, 2, 3, 4, 5, 6, 7, 8 ]
tekElemanliListe = ["a"]
```

Yukarıda gördüğünüz gibi karisikListe, ahmet ve kadir isimlerinin yanı sıra 1996 ve 1994 sayılarını da içermektedir.  

## Verilere Erişim

Listelerde verilere erişim dizi mantığındaki gibidir. Yani 0'dan başlayan indis numaraları kullanılır. Örneğin yukardaki örnekteki karisikListe'nin elemanlarına aşağıdaki gibi ulaşabiliriz;  

``` python
print karisikListe[0] # ekrana ahmet yazar
print karisikListe[1] # ekrana kadir yazar
print karisikListe[2] # ekrana 1996 yazar
print karisikListe[3] # ekrana 1994 yazar
```

## Verileri Güncellemek
Liste verilerini güncellemek dizilerle aynı mantık ile gerçekleştirilebilir. Örneğin;  

``` python
sayiListesi = [1, 2, 3, 4, 5, 6, 7, 8 ]
sayiListesi[0] = 9 # yeni liste [9, 2, 3, 4, 5, 6, 7, 8]
```

## Verileri Silmek
del veya remove komutları ile gerçekleştirilebilir. Örnek;  

``` python
karisikListe = ['ahmet', 'kadir', 1996, 1994]
karisikListe.remove("ahmet") # yeni liste ['kadir', 1996, 1994]
del karisikListe[1] # yeni liste ['kadir', 1994]
```

Görüldüğü gibi remove listedeki içeriğe göre, del ise indis numarasına göre silme işlemini gerçekleştirir.  

## Veri Eklemek
append fonksiyonu ile listeye eleman eklemek mümkünleştirilmiştir. Bu fonksiyon, gönderilen elemanı listenin sonuna ekler. Örneğin;  

``` python
tekElemanliListe = ["a"]
tekElemanliListe.append("b") # yeni liste ["a", "b"]
```

## Diğer Hazır Fonksiyonlar
Listeler ile kullanılmak üzere, append ve remove fonksiyonları gibi birçok hazır fonksiyon önceden yazılıp geliştirici kullanımına sunulmuştur. Bunlardan bazıları şunlardır;  

``` python
# liste1 ve liste2 olarak tanimlanmis iki listemiz oldugunu dusunelim

cmp(liste1, liste2)  # iki listeyi karsilastirir
len(liste1)          # liste1'in toplam uzunluğunu verir
max(liste1)          # liste1'deki en yuksek degerli veriyi gonderir
min(liste1)          # liste1'deki en dusuk degerli veriyi gonderir

liste1.count(3)      # 3 sayisinin liste1'deki adedini gonderir
liste1.sort()        # liste1'i siralar
liste1.reverse()     # liste1'i tersten siralar
```

## Demetler (Değişkenler Grubu) (Tuples)

Demetleri verileri değiştirilemeyen listeler gibi düşünebiliriz. Demetler listelere listeler de demetlere dönüştürülebilirler. Örneğin;  

``` python
# demet1 ve demet2 olarak tanimlanmis iki degiskenimiz oldugunu dusunelim

# demet1 degiskenini liste tipine donusturerek liste2'yi olusturur.
liste2 = list(demet1)

# liste1 degiskenini demet tipine donusturerek demet2'yi olusturur.
demet2 = tuple(liste1)
```

## Sözlükler (Dictionary)

Anahtarlar ve değerler olmak üzere ikili veri kümelerinden oluşan veri yapılarıdır. Örnek;  

``` python
adaletBirligi = {'Batman': 'Bruce Wayne',
                'Superman': 'Clark Kent',
                'Flash': 'Barry Allen'}

intikamcilar = {'Iron Man': 'Tony Stark',
                'Hulk': 'Bruce Banner',
                'Captain America': 'Steve Rogers'}

# ekrana Flash'ın karsisindaki degiskeni yazar yani Barry Allen.
print(adaletBirligi['Flash'])

# intikamcilar'dan Captain America anahtarli veri kumesini siler.
del intikamcilar['Captain America']

intikamcilar.keys() # sozlukteki anahtar degiskenleri gonderir.
adaletBirligi.values() # sozlukteki degerleri gonderir.
intikamcilar.clear() # sozlugu temizler.
```

Sonraki Bölüm: Koşul Yapıları ve Döngüler:  
[Temel Python - 4. Gün: Koşul Yapıları ve Döngüler][1]  

[1]: /2015/10/13/temel-python-dorduncu-gun-kosul-yapilari-ve-donguler/
