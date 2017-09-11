---
title: "Temel C++ 1. Gün: Veri Tipleri, Kontrol Yapıları, Diziler"
date: 2015.07.01
tags:
- c++
- veri tipleri
- kontrol yapıları
- diziler
categories:
- c++
---

Daha önce, programlama dünyasına iki bölümlük bir teorik giriş yapmıştık. Şimdi ise C++'ın ilk yazısıyla temel dil serilerine başlayacağız.  

## IDE Seçimi

Yeni bir dil veya teknolojiyle çalışacağınız zaman genellikle ilk önce geliştirme ortamını oluşturursunuz. Biz de öğrenmeye C++ dili için kullanabileceğimiz bir IDE seçmekle başlayalım.  

**C++ dili için IDE örnekleri:**  

- Kdevelop
- Microsoft Visual Studio
- Anjuta
- Code::Blocks
- Eclipse CDT
- CodeLite
- NetBeans C++
- JetBrains CLion

Yukarıdaki örneklerin yanı sıra, öğrenme amaçlı olan web tabanlı derleyiciler de mevcut fakat bir IDE ile çalışmaya bir an önce alışmak için yukarıdaki örneklerden birini seçmek daha doğru olur.  

Açık kaynaklı ve ücretsiz olmasının yanı sıra şu anlık sadece C++ diliyle uğraşacağımız için **CodeLite**'ı kullanmayı tercih edebilirsiniz. Diğer bir ücretsiz seçenek ise **Code::Blocks**.  

CodeLite'ı aşağıdaki adresten indirebilirsiniz:  
[download.codelite.org][cl]

Code::Blocks'u aşağıdaki adresten indirebilirsiniz:  
[codeblocks.org/downloads/26][cb]

CodeLite'ı kurduktan sonra çeşitli ayarlar yapmanız istenecek. Bunlardan en önemlisi derleyici seçimi. *scan* seçeneği ile bilgisayarınızda hali hazırda uygun bir derleyici olup olmadığını tarar. Eğer bilgisayarınızda bir derleyici yoksa *install* seçeneğini seçip derleyiciyi kurabilirsiniz. Eğer bu tip ayarlarla uğraşmak istemiyorsanız Code::Blocks'u tercih edin. Kendisi tüm gerekli kurulumları yapıyor. Daha detaylı bilgileri/anlatımları google veya youtube üzerinden bulabilirsiniz.  

IDE seçimi de yapıldığına göre C++'a giriş yapabiliriz. Bundan sonraki tüm anlatımlarım tamamen kod tabanlı olacak. Eğer daha önceden başka bir programlama dili ile uğraştıysanız daha şanslısınız, yabancılık çekmeyeceksiniz.  

Giriş
-----

İlk teori yazımızdaki örneğimize geri dönelim:

``` cpp
#include <iostream>
using namespace std;

int main()
{
      cout << "Merhaba!" << endl;
      return 0;
}
```

Örneğimizin ilk satırında `#include` komutunu kullanarak standart kütüphanelerden `iostream`'i programımıza dahil ediyoruz. Bu kütüphane bizim `cout` komutunu kullanmamızı sağlıyor.  
İkinci satırdaysa `using namespace` komutuyla kodlarımızda, ekrana yazmak, kullanıcı girişi almak gibi durumlarda kullanacağımız `cin` ve `cout` gibi komutlarda sürekli `std::` ön ekini kullanmaktan kurtuluyoruz. Eğer bunu yazmasaydık `main` fonksiyonu içindeki ilk satırımız şöyle olmalıydı:  

`std::cout << "Merhaba!" << std::endl;`

Örneğimizin ilk iki satırı standart olarak programımızda olacağı için ne işe yaradıklarını bilmemiz gerek. Bundan sonraki ek örnekler haricindeki tüm anlatımımız tek bir kaynak kod üzerinden gidecek.

Değişken Tanımlama
------------------
Değişkenler global ve lokal olmak üzere genellikle iki şekilde tanımlanabilir. Global değişkenler fonksiyonların dışında tanımlanır ve programın her yerinde kullanılabilir. Lokal değişkenler ise fonksiyonların içinde tanımlanır ve sadece tanımlandığı fonksiyonun içinde kullanılabilir.

``` cpp
#include <iostream>

using namespace std;

// int tipindeki global değişkenimiz.
int globalDegisken;

int main()
{
      // char tipindeki lokal değişkenimiz.
      char lokalDegisken;


      return 0;
}
```

Yukarıdaki örnekte `//` ile başlayan satırlar açıklama/yorum satırlarıdır ve iki tip kullanımı vardır.

Yorum kullanımı:
``` cpp
// Tek satır yorum

/*
 * Çoklu satır
 * yorum
 */
```

Önceki örnekte gözüktüğü gibi değişkenler `VeriTipi DeğişkenAdı` olacak şekilde tanımlanır ve bunun çeşitli kuralları vardır. Bu kurallar hemen hemen tüm dillerde geçerlidir. Bunlar:

- Değişken isimlerinde boşluk kullanılamaz.
- Değişken isimleri sayı veya özel karakter ile başlayamaz.
- Programlama dili tarafından kullanılan anahtar kelimeler değişken ismi olarak kullanılamaz.
- Değişken isimleri !, ?, {, ] gibi karakterler içeremezler.
- C++ harf duyarlıdır. Yani abc ve ABC farklı olarak algılanır.
- Türkçe karakter kullanılamaz.

Belli başlı değişken tanımlama kuralları bunlardır. Derleyicilere göre ufak değişiklikler gösterebilirler.

## Veri Tipleri

Değişkenler ve sonraki bölümde göreceğimiz fonksiyonlar veri tipleriyle tanımlanırlar. Bu veri tipleri değişken tanımlama için kullanılıyorsa değişkenin saklayacağı verinin tipini, fonksiyon tanımlama için kullanılıyorsa fonksiyonun çağrıldığı yere döndüreceği verinin tipini belirtir.  

Belli başlı veri tipleri şunlardır ve çoğu dilde ortaktır;

| Veri Tipi | Hafıza Boyutu | Açıklaması                 |
|-----------|---------------|--------------------------- |
| char      | 1             | karakter                   |
| short     | 2             | 16 bit uzunluğunda tamsayı |
| long      | 4             | 32 bit uzunluğunda tamsayı |
| int       | 4             | tamsayı                    |
| float     | 4             | ondalıklı sayı             |
| double    | 8             | duyarlıklı ondalıklı sayı  |
| bool      | 1             | doğru veya yanlış          |  


**Örnek Tanımlamalar:**
``` cpp
float pi = 3.14;
char a = 'a';
string isim = "Yavuz";
bool durum = true;
```

## Aritmetik Operatörler

Aritmetik işlemleri yapmakta kullanılan basit operatörlerdir. *(çarpma) ve /(bölme) işlemleri +(toplama) ve -(çıkarma) işlemlerine göre daha önceliklidirler. Uzun işlemlerde işlem sırasını kontrol edebilmek için ( ve ) kullanılır. Bu parantezler içinde yazılan işlemler daha önceliklidir.  

**Operatör kullanım örnekleri:**
``` cpp
// aritmetik operatorler: +, -, *, /, %, ++, --, +=, -=
cout << "8 + 2 = " << 8 + 2 << endl;
cout << "8 - 2 = " << 8 - 2 << endl;
cout << "8 * 2 = " << 8 * 2 << endl;
cout << "8 / 2 = " << 8 / 2 << endl;
// 8'in 2 ile bolumunden kalan:
cout << "8 % 2 = " << 8 % 2 << endl;
```

**çift + ve çift - kullanımı:**
``` cpp
int sayi = 5;

// sayi degiskeni su anki degerini alir, sonra bir arttirilir.
sayi++;

// sayi degiskeni bir arttirilir.
++sayi;

// sayi degiskeni su anki degerini alir, sonra bir azaltilir.
sayi--;

// sayi degiskeni bir azaltilir.
--sayi;
```

+= kullanımı: `a = a + b` yerine `a += b`  
-= kullanımı: `a = a - b` yerine `a -= b`  


## Kontrol Yapıları

If-else ve Switch-case olarak adlandırılan iki yaygın türü vardır.

**If-else örnek:**
``` cpp
int yas = 21;

if(yas < 18) // yas 18'den kucukse alttaki kodlari uygula
{
   cout << "Uzgunum." << endl;
   cout << "Ehliyet alamazsiniz." << endl;
}
else // yas 18'e esit veya 18'den buyukse alttaki kodlari uygula
{
   cout << "Tebrikler." << endl;
   cout << "Ehliyet alabilirsiniz." << endl;
}
```

Bu yapıda dikkat edilecek yer `yas < 18` kontrolü. Kullanılabilecek çeşitli mantıksal operatörler:

| Operatör | Görevi            |
|----------|-------------------|
| <  |&nbsp;&nbsp;küçükse           |
| <= |&nbsp;&nbsp;küçük veya eşitse |
| >  |&nbsp;&nbsp;büyükse           |
| >= |&nbsp;&nbsp;büyük veya eşitse |
| != |&nbsp;&nbsp;eşit değilse      |
| == |&nbsp;&nbsp;eşitse            |
| && |&nbsp;&nbsp;ve                |
| çift çizgi&nbsp;|&nbsp;&nbsp;veya              |  

<br/>

**Switch-case örnek:**
``` cpp
switch(yas) // yas degiskenine gore
{
   case 1: // deger 1 ise
      cout << "Dunyaya hosgeldiniz." << endl;
         break;
   case 2: // deger 2 ise
 	  cout << "Tebrikler. Ilk adiminizi attiniz." << endl;
          break;
   case 6: // deger 6 ise
       cout << "Okul cagina geldiniz." << endl;
         break;
   case 18: // deger 18 ise
       cout << "Artik yetiskin bir bireysiniz." << endl;
         break;
   default: // deger yukaridakilerden farkliysa
         break;
}
```

## Diziler

Dizileri birden fazla değer taşıyan değişkenler gibi düşünebilirsiniz. Tek boyutlu ve çok boyutlu olmak üzere ikiye ayrılırlar. Şöyle tanımlanırlar:  
`veriTipi diziAdi[1. Boyut Eleman Sayısı][2. Boyut Eleman Sayısı][n. Boyut Eleman Sayısı]`

Genel olarak tek ve çift boyutlu diziler ihtiyaçları karşılar.

Çok boyutlu dizi gösterimi:
<img src="https://i-msdn.sec.s-msft.com/dynimg/IC32056.gif" />

Tek boyutlu dizileri yukarıdaki tablonun ilk sütunu olarak düşünebilirsiniz.  

**Tanımlama örneği:**
``` cpp
// DIZILER
  int dizi[3] = {1, 2, 3};
  int ikiBoyutluDizi[3][3] = {01,02,03,
                              11,12,13};
```

**Yukarıdaki örneğe göre eleman değerleri:**
``` cpp
// DIZILER
cout << dizi[0] << endl; // 1. eleman: 1
cout << dizi[1] << endl; // 2. eleman: 2
cout << dizi[2] << endl; // 3. eleman: 3

cout << "" << endl;

cout << ikiBoyutluDizi[0][0] << endl; // 1. satır 1. sütun: 1
cout << ikiBoyutluDizi[0][1] << endl; // 1. satır 2. sütun: 2
cout << ikiBoyutluDizi[0][2] << endl; // 1. satır 3. sütun: 3
cout << ikiBoyutluDizi[1][0] << endl; // 2. satır 1. sütun: 11
cout << ikiBoyutluDizi[1][1] << endl; // 2. satır 2. sütun: 12
cout << ikiBoyutluDizi[1][2] << endl; // 2. satır 3. sütun: 13
```

İlk bölümden bu kadar. Anlamadığınız yerler hakkında detaylı bilgiyi google ve youtube üzerinden bulabilirsiniz.  

İkinci bölümde döngülerle, metin veri tipi ve vektörler ile ilgileneceğiz.

Sonraki Bölüm: Döngüler, Metinler, Vektörler:  
[Temel C++ - 2. Gün: Döngüler, Metinler, Vektörler][2]


[cl]: http://downloads.codelite.org/
[cb]: http://www.codeblocks.org/downloads/26
[2]: /2015/07/02/temel-cpp-ikinci-gun-donguler-metinler-vektorler/
