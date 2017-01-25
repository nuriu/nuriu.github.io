---
layout: post
title: "Temel C++ 3. Gün: Fonksiyonlar, Girdi/Çıktı, İşaretçiler"
tags:
- c++
- fonksiyonlar
- girdi / çıktı
- işaretçiler
categories:
- c++
series: c++
---

**Fonksiyonlar**  
----------------

Fonksiyonlar (Diğer adıyla metodlar) programları bölümlere ayırmaya yarar. Böylelikle  proje büyükte sorun çıkarmaya başlayacak olan kod tekrarlarını da minimuma indirir. Yine de projenizi iyi tasarlamalısınız, aksi halde yararından çok zararı olur. Fonksiyonlar;  

`"geri döndüreceği veri tipi" "fonksiyon adı"(1. parametre, 2. parametre, n. parametre)` şeklinde tanımlanır. Örnek: `int topla(int sayi1, int sayi2)` int tipinde topla adında, sayi1 ve sayi2 olmak üzere iki parametresi olan bir fonksiyon.  

Fonksiyonlar konusunu basit bir örnek üzerinde göstermek en doğrusu olacaktır sanırım. Basit bir hesap makinesi örneğiyle hem önceki konuları pekiştirelim hem de fonksiyonların mantığını anlayalım.

Hesap Makinesi:  
{% highlight cpp %}
#include <iostream>

using namespace std;

// void tipinde yani geri deger dondurmeyecek
// int tipinde s1 ve s2 olmak uzere iki parametre alan
// topla isimli bir fonksiyon tanimladik.
void topla(int s1, int s2)
{
   cout << "Toplama islemini sectiniz. ";
   cout << "Iki sayi toplanip ekrana yazilacak." << endl;

   cout << "Toplam sonucu: " << s1 + s2 << endl;
}

// geriye int tipinde bir deger dondurecek olan
// cikar isimli, iki parametreli fonksiyonumuz
int cikar(int s1, int s2)
{
   cout << "Cikarma islemini sectiniz. ";
   cout << "Buyuk sayidan kucuk sayi cikartilacak." << endl;

   if(s1 > s2)
      return (s1 - s2);
   else if (s2 > s1)
      return (s2 - s1);
   else
      return 0;
}

// topla fonksiyonunun carpma islemi icin degistirilmis hali
// geriye deger dondurmeyen carp isimli fonksiyonumuz
void carp(int s1, int s2)
{
   cout << "Carpma islemini sectiniz. ";
   cout << "Iki sayi carpilip ekrana yazilacak." << endl;

   cout << "Carpim sonucu: " << s1 * s2 << endl;
}

// geriye int tipinde bir deger dondurecek olan fonksiyonumuz
int bol (int s1, int s2)
{
   cout << "Bolme islemini sectiniz. ";
   cout << "Buyuk sayi kucuk sayiya bolunecek." << endl;

   if (s1 > s2)
      return (s1 / s2);
   else if (s2 > s1)
      return (s2 / s1);
   else
      return 1;
}

int main()
{
   int secim = 0, sayi1 = 0, sayi2 = 0;
   cout << "Hesap makinesine hosgeldiniz. Iki sayi giriniz: " << endl;
   cin >> sayi1 >> sayi2; // kullanicidan iki sayi aldik.

   // menumuz.
   cout << "" << endl;
   cout << "Islem Listesi: \n";
   cout << "Toplama icin 1, \n";
   cout << "Cikarma icin 2, \n";
   cout << "Carpim icin 3, \n";
   cout << "Bolum icin 4, \n";
   cout << "ve cikis icin -1 girin; \n";

   // yanlis secim icin geri donus noktasi.
   secimAsamasi:

   cout << "Seciminiz: ";
   cin >> secim;

   switch(secim)
   {
      case -1:
         cout << "Cikisi sectiniz." << endl;
         break;
      case 1:
         // aldigimiz degerleri topla fonksiyonumuza yolladik.
         topla(sayi1, sayi2);
         break;
      case 2:
         // degerleri cikar fonksiyonumuza yollayip donen degeri yazdik.
         cout << "Cikarma sonucu: " << cikar(sayi1, sayi2) << endl;
         break;
      case 3:
         // degerleri carp fonksiyonumuza yolladik.
         carp(sayi1, sayi2);
         break;
      case 4:
         // degerleri bol fonksiyonumuza yollayip donen degeri yazdik.
         cout << "Bolum sonucu: " << bol(sayi1, sayi2) << endl;
         break;
      default:
         cout << "Hatali secim yaptiniz. Lutfen seciminizi tekrar yapin." << endl;
         // hatali secim yapilmasi halinde secimAsamasi isimli
         // alana donulmesini belirttik.
         goto secimAsamasi;
         break;
   }
   return 0;
}
{% endhighlight %}


**Girdi / Çıktı İşlemleri (Dosyalar)**  
----------------------------------------

Ufak programlar dışındaki çoğu program dosyalar ile çalışır. Dolayısıyla dosya oluşturmak, okumak ve yazmak için belirli fonksiyonlara ihtiyaç vardır. Burada devreye `fstream` kütüphanesi devreye giriyor. Vektörleri kullanmak için nasıl `vector` kütüphanesini kullandıysak burada da aynı şekilde `fstream` kütüphanesini kullanacağız.  

Dosyalar şu kurala uygun şekilde programa dahil edilir;

Dosyaya yazmak için: `ofstream değişken adı ("dosya adı", açma modu)`  
Dosyadan okumak için: `ifstream değişken adı ("dosya adı", açma modu)`

Her iki mod için birer örnek yapalım.  

Girdiğiniz adı ve soyadı dosyaya yazan program örneği:  
{% highlight cpp %}
#include <iostream>
#include <string>
// dosya islemlerini yapabilmek icin
// fstream kutuphanesini programa dahil ettik.
#include <fstream>

using namespace std;

int main()
{
   // dYaz -> "dosya.txt" isimli dosyayi
   // ios::out modunda aciyoruz.
   ofstream dYaz("dosya.txt", ios::out);
   // ios::out -> bu modla acilan dosyalara
   // daha onceden veri girildiyse eger
   // yeni veriler onceki verilerin uzerine yazilir
   // yani veri kaybi yasanir.

   // diger mod ios::app -> verileri yazmaya
   // dosyanin sonundan baslar. veri kaybi olmaz.

   string ad, soyad;
   cout << "Adiniz: ";
   getline(cin, ad);
   cout << "Soyadiniz: ";
   getline(cin,soyad);

   // cout yerine yukarida tanimladigimiz ismi kullaniyoruz.
   dYaz << ad << " " << soyad << endl;

   // isimiz bittiginde dosyayi kapatiyoruz.
   dYaz.close();
   return 0;
}
{% endhighlight %}

Dosyaya yazdırdığınız adı ve soyadı okuyup ekrana yazan program örneği:  
{% highlight cpp %}
// ios::in modunda "dosya.txt" isimli dosyayi aciyoruz.
ifstream dOku("dosya.txt", ios::in);

string okunanAd, okunanSoyad;

// dosyanin sonuna gelene kadar
// dosyada bulunan tüm verileri okuyabilmek icin
// eof() fonksiyonu kullanilabilir.
while (!dOku.eof())
{
   // okuma yapmak icin cin yerine yukarida
   // tanimladigimiz ismi kullaniyoruz.
   dOku >> okunanAd >> okunanSoyad;
}
// tek verimiz oldugu icin dongu disinda ekrana yazdiriyoruz.
cout << okunanAd << " " << okunanSoyad << endl;

// isimiz bittiginde dosyayi kapatiyoruz.
dOku.close();
{% endhighlight %}

**İşaretçiler (Pointers)**  
----------------------------

İşaretçiler, değişkenlerin aksine değer yerine değerin adresini saklarlar. Bellek yönetimi açısından çok önemlidirler. İşletim sistemleri ve oyunlar gibi yazılımlarda çok fazla kullanılırlar. Aynı değişkenler gibi tanımlanırlar tek farkları başlarına `*` getirilmesidir. Tanımlama örneği;  
`int *sayi;`  

Basit örnek:  
{% highlight cpp %}
#include <iostream>

using namespace std;

int main()
{
   // int tipinde bir degisken ve isaretci tanimladik.
   int sayi = 8, *pSayi;
   // & referans operatorünü kullanarak
   // sayi degiskeninin adresini
   // pSayi isimli isaretciye atadik.
   pSayi = &sayi;

   // degiskenin kendisini kullanarak degerini ve adresini yazdirdik.
   cout << "Sayi degiskeninin degeri: " << sayi << endl;
   cout << "Sayi degiskeninin adresi: " << &sayi << "\n" << endl;

   // isaretciyi kullanarak sayi degiskeninin degerini ve adresini yazdirdik.
   cout << "Sayi degiskeninin degeri: " << *pSayi << endl;
   cout << "Sayi degiskeninin adresi: " << pSayi << endl;
   return 0;
}
{% endhighlight %}

Bu örnekten sonra neden işaretçilere gerek olduğu konusunda akılda bir soru oluşabilir. Bölüm başında anlattığımız fonksiyonlarda parametre olarak int tipinde değişken alıyorduk ve böyle yaptığımızda değişkeni kopyalamış oluyoruz. Bu da bellekte iki kat daha fazla yer kaplaması anlamına geliyor. Fakat eğer değerleri fonksiyonlara işaretçi yoluyla yollarsak bu sorun ortadan kalkmış oluyor.  

İşaretçi konusu genelde yeni başlayanlar tarafından oldukça kafa karıştırıcı bulunur. Bu yüzden en basit şekilde açıklayıp burada bırakmayı doğru buluyorum. Bu konuda daha fazla örneği internet üzerinden bulabilirsiniz.  

Sonraki Bölüm: Sınıflar, Nesneler:  
[Temel C++ - 4. Gün: Sınıflar, Nesneler][1]

[1]: /temel-cpp-dorduncu-gun-siniflar-nesneler/
