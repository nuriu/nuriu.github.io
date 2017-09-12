---
title: "Temel Java 2. Gün: Veri Tipleri, Operatörler, Diziler"
date: 2016.03.06
tags:
- java
- veri tipleri
- operatörler
- diziler
categories:
- java
---

# Veri Tipleri (devamı)

## Sayılar

Tüm sayı tipleri soyut Number sınıfından şekildeki gibi türemiş alt sınıflardır;  

![Sayilar](/resimler/sayilar.png)

## Sayı Metodları

Number sınıfının alt sınıflarının sahip olduğu bazı metodlar şu şekildedir;  

| Metod       | Açıklama                                                                             |
|-------------|--------------------------------------------------------------------------------------|
| xValue()    | bu Number nesnesini x tipine dönüştürür ve geri gönderir.                            |
| compareTo() | bu Number nesnesini parametre olarak girilen değerle karşılaştırır.                  |
| equals()    | bu Number nesnesinin parametre olarak gönderilen değere eşit olup olmadığını bulur.  |
| toString()  | bu Number nesnesinin metin tipini geri gönderir.                                     |
| min()       | gönderilen iki parametreden küçük olanı geriye gönderir.                             |
| max()       | gönderilen iki parametreden büyük olanı geriye gönderir.                             |


## Karakter Metodları

Character sınıfının alt sınıflarının sahip olduğu bazı metodlar şu şekildedir;  

| Metod          | Açıklama                                                                                          |
|----------------|---------------------------------------------------------------------------------------------------|
| isLetter()     | gönderilen karakterin harf olup olmadığını kontrol eder.                                          |
| isDigit()      | gönderilen karkaterin rakam olup olmadığını kontrol eder.                                         |
| isWhitespace() | gönderilen karakterin boşluk olup olmadığını kontrol eder. (kaçış dizeleri de dahil olmak üzere.) |
| isUpperCase()  | gönderilen karakterin büyük olup olmadığını kontrol eder.                                         |
| isLowerCase()  | gönderilen karakterin küçük olup olmadığını kontrol eder.                                         |
| toUpperCase()  | gönderilen karakter küçükse büyük karaktere çevirir.                                              |
| toLowerCase()  | gönderilen karakter büyükse küçük karaktere çevirir.                                              |
| toString()     | geriye gönderilen karakterli bir metin nesnesi döndürür.                                          |

## Metinler

Metinler karakter dizelerinden oluşan nesnelerdir. Birçok metoda sahiptirler. Basit metin örneği;  

``` java
String ad = "Kadir";
// length() metodumuz ad değişkeninin uzunluğunu gönderir.
int adUzunluk = ad.length();
System.out.println(ad + " ismi " + adUzunluk + " karakterden oluşur.");
```

Örnekteki kodu Java konsol uygulamamızda yazıp çalıştırdığımızda çıktımış şöyle olacaktır;  

``` bash
Kadir ismi 5 karakterden oluşur.
```

## Metinleri Birleştirmek

String sınıfında metinleri birleştirmeye yarayan concat isimli bir metod bulunur.

Basit örnek;  
``` java
String ad = "Kadir";
String ikinciAd = "Sefa", soyad = "ÜNAL";
System.out.println(ad.concat(ikinciAd).concat(soyad));
```

Çıktı;  
``` java
KadirSefaÜNAL
```

concat metodundan ziyade birleştirme işlemi için genelde + operatörü kullanılır.

Örnek;  
``` java
String ad = "Kadir";
String ikinciAd = "Sefa", soyad = "ÜNAL";
System.out.println(ad + " " + ikinciAd + " " + soyad);
```

Çıktı;  
``` bash
Kadir Sefa ÜNAL
```

## Operatörler

Operatörler verileri işlemek için kullanılan araçlardır.
Temel operatörleri aritmetik, mantıksal ve atama olarak dört grup içerisinde inceleyebiliriz.  

## Aritmetik Operatörler

| Operatör       | Açıklama                                                              |
|----------------|-----------------------------------------------------------------------|
| + (Ekleme)     | Operatörün iki tarafındaki verileri toplar.                           |
| - (Çıkarma)    | Operatörün sağındaki veriyi solundaki veriden çıkarır.                |
| ++ (Arttırma)  | Veriyi bir arttırır.                                                  |
| -- (Azaltma)   | Veriyi bir azaltır.                                                   |
| * (Çarpma)     | Operatörün iki tarafındaki verileri çarpar.                           |
| / (Bölüm)      | Operatörün solundaki veriyi sağındaki veriye böler.                   |
| % (Mod)        | Operatörün solundaki veriyi sağındaki veriye bölümünden kalanı verir. |


## İlişkisel Operatörler

| Operatör | Açıklama                                                                                                             |
|----------|----------------------------------------------------------------------------------------------------------------------|
| ==       | İki verinin eşit olup olmadığını kontrol eder. Eşitse true değerini döndürür.                                        |
| !=       | İki verinin eşit olup olmadığını kontrol eder. Eşit değilse true değerini döndürür.                                  |
| >        | Soldaki verinin sağdaki veriden büyük olup olmadığını kontrol eder. Büyükse true döndürür.                           |
| <        | Soldaki verinin sağdaki veriden küçük olup olmadığını kontrol eder. Küçükse true döndürür.                           |
| >=       | Soldaki verinin sağdaki veriden büyük veya ona eşit olup olmadığını kontrol eder. Büyükse veya eşitse true döndürür. |
| <=       | Soldaki verinin sağdaki veriden küçük veya ona eşit olup olmadığını kontrol eder. Küçükse veya eşitse true döndürür. |

## Mantıksal Operatörler

| Operatör | Açıklama                                                                 |
|----------|--------------------------------------------------------------------------|
| &&       | eğer solundaki ve sağındaki işlemler doğruysa (0 değilse) true döndürür. |
| !        | eğer karşılaştırma (işlem) doğruysa false döndürür.                      |

Bunlara ek olarak veya (||) işareti eğer solundaki veya sağındaki işlemlerden biri doğruysa (0 değilse) true döndürür.

## Atama Operatörleri

| Operatör | Açıklama                                                                     |
|----------|------------------------------------------------------------------------------|
| =        | Sağdaki veriyi soldaki veriye atar. ( a = b )                                |
| +=       | Sağdaki veriyi soldakiyle toplar ve soldaki veriye atar. ( a = a + b )       |
| -=       | Sağdaki veriyi soldakinden çıkarır ve soldaki veriye atar. ( a = a - b )     |
| *=       | Sağdaki veriyi soldakiyle çarpar ve soldaki veriye atar. ( a = a * b )       |
| /=       | Soldaki veriyi sağdakine böler ve soldaki veriye atar. ( a = a / b )         |
| %=       | Soldaki verinin sağdakine bölümünden kalanı soldaki veriye atar. ( a = a % b)|

Yarın yazmayı düşündüğüm karar verme yapıları konusundaki basit hesap makinesi örneği ile birlikte operatörlerin görevleri/işlevleri daha iyi anlaşılacaktır.  

## Diziler

Diziler, daha önceden belirlenmiş bir boyutta aynı tip verileri saklamaya yarar. Aynı tip verilerin koleksiyonu olarak da açıklanabilir.

Tanımlanışları;  
``` java
veriTipi[] diziAdi;

// örnek tanımlama
int[] sayilar = new int[8];
//int tipinde bir dizi oluşturduk ve 10 elemanlık yer ayırdık.
```

Elemanlara erişim;  
``` java
String[] doksanAltililar =  { "Mehmet Emekli",
                              "Ahmet Urgancı",
                              "Şevket Keyifsiz" };

// indis değerlerimizin 0'dan başladığını gözden kaçırmayalım.
System.out.println(doksanAltililar[0]);
System.out.println(doksanAltililar[1]);
System.out.println(doksanAltililar[2]);
```

Çıktımız;  
``` bash
Mehmet Emekli
Ahmet Urgancı
Şevket Keyifsiz
```

İlerleyen günlerde değineceğimiz kontrol & döngü yapıları ile birlikte diziler üzerinde işlemler yapacağız. Bugünlük bu kadar.

Sonraki Bölüm: Karar Yapıları, Döngüler, Metodlar:  
[Temel Java - 3. Gün: Karar Yapıları, Döngüler, Metodlar][1]  


[1]: /2016/03/07/temel-java-ucuncu-gun-karar-yapilari-donguler-metodlar/
