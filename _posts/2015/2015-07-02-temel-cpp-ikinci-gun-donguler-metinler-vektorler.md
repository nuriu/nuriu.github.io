---
layout: post
title: "Temel C++ 2. Gün: Döngüler, Metinler, Vektörler"
tags:
- c++
- döngüler
- metinler
- vektörler
categories:
- c++
---

Temel C++ serisinin ilk bölümüne aşağıdaki linkten ulaşabilirsiniz:  
[Temel C++ - 1. Gün: Veri Tipleri, Kontrol Yapıları, Diziler][1]

Döngüler
--------

Döngüler tekrarlanacak işlemler/kod blokları için bir çözümdür. Kod tekrarından ve okunabilirlik sorunlarından kurtulmamızı sağlar.  

1- For Döngüsü
--------------

`for(karşılaştırılacak değer, koşul, döngü işlemi)` şeklinde tanımlanırlar.

For örnek:
{% highlight cpp %}
#include <iostream>

using namespace std;

int yas=0;

int main()
{
      // yas degiskeni 18 olana kadar kodlari uygula
      // ve degisken degerini 1 arttir.
      for(yas = 0; yas <= 18; yas++)
      {
         if(yas != 0)
            cout << yas - 1 << " degeri 1 arttirildi: " << yas << endl;
      }
      return 0;
}
{% endhighlight %}

2- While Döngüsü
----------------

While ve Do-While döngülerinde tanımlama `while(koşul)` şeklinde yapılır. For örneği ile aynı işleve sahip olan While döngüsü aşağıdaki gibidir.  

While örnek:
{% highlight cpp %}
// yas degiskeni 18 olana kadar kodlari uygula.
while(yas <= 18)
{
   if(yas != 0)
      cout << yas - 1 << " degeri 1 arttirildi: " << yas << endl;

   yas++;
}
{% endhighlight %}

3- Do-While Döngüsü
-------------------

While döngüsünün tersi gibi düşünebilirsiniz. Her koşulda döngüye en az 1 kere girmesi istenilen durumlarda bu yapı kullanılır. Aşağıdaki örnekte yaş değişkenini 18'e eşitleyip döngü koşulunu 18'den küçük olduğu sürece geçerli olacak şekilde ayarladık. Fakat kodu derlediğinizde ekranda `yas degiskeninin yeni degeri: 18` yazısını göreceksiniz. Bunun sebebi daha önceden söylediğimiz gibi döngü içindeki kodların en az bir kez çalıştırılmasıdır.

Do-While örnek:
{% highlight cpp %}
yas = 18;

do{
   if(yas != 0)
      cout << "yas degiskeninin yeni degeri: " << yas << endl;

   yas++;
}while(yas < 18);
{% endhighlight %}

Döngüler konusunu basit bir problem ve çözümü ile bitirelim.  

Problem: Kullanıcı 8 değerini girene kadar kullanıcıdan bir sayı tahmin etmesini isteyin. 8 değeri girildiğindeyse ekrana "Tebrikler" yazdırın.  
Çözümler;

For döngüsüyle:
{% highlight cpp %}
// int (sayi) tipinde bir degisken tanimladik ve sifira esitledik.
int girilenSayi = 0;

// for dongusu ile
for( girilenSayi = 0; girilenSayi != 8; )
{
   cout << "Bir sayi girin: ";

   // kullanicinin girdigi sayiyi girilenSayi degiskenine at.
   cin >> girilenSayi;

   // girilenSayi degiskeni 8 degilse:
   if(girilenSayi != 8)
   {
      // Yanlis tahmin yazip alt satira gec.
      cout << "Yanlis tahmin.\n" << endl;
   }
   else // 8 ise
   {
      cout << "Tebrikler. Dogru tahmin." << endl;
   }
}
{% endhighlight %}

While döngüsüyle:
{% highlight cpp %}
// while dongusuyle
// degiskeni tekrar kullanacagimiz icin 0'a esitledik.
girilenSayi = 0;
// girilenSayi 8'e esit olmadigi surece donguyu isle.
while(girilenSayi != 8)
{
   cout << "Bir sayi girin: ";

   // kullanicinin girdigi sayiyi girilenSayi degiskenine at.
   cin >> girilenSayi;

   // girilenSayi degiskeni 8 degilse:
   if(girilenSayi != 8)
   {
      // Yanlis tahmin yazip alt satira gec.
      cout << "Yanlis tahmin.\n" << endl;
   }
   else // 8 ise
   {
      cout << "Tebrikler. Dogru tahmin." << endl;
   }
}
{% endhighlight %}

Bu problem için en iyi seçim olan do-While döngüsüyle:
{% highlight cpp %}
// do-while dongusuyle
// degiskeni tekrar kullanacagimiz icin 0'a esitledik.
girilenSayi = 0;

do{
   cout << "Bir sayi girin: ";

   // kullanicinin girdigi sayiyi girilenSayi degiskenine at.
   cin >> girilenSayi;

   // girilenSayi degiskeni 8 degilse:
   if(girilenSayi != 8)
   {
      // Yanlis tahmin yazip alt satira gec.
      cout << "Yanlis tahmin.\n" << endl;
   }
   else // 8 ise
   {
      cout << "Tebrikler. Dogru tahmin." << endl;
   }
}while(girilenSayi != 8);
{% endhighlight %}


Metinler (Strings)
------------------

C dilinde metinleri kullanabilmek için `char` tipinde diziler tanımlamak zorundasınız. Fakat C dilinden etkilenerek oluşturulan C++ dilinde metinleri, değişken tanımlarmış gibi `string` tipiyle tanımlayıp kullanabilirsiniz. Küçük bir örnek vermek gerekirse:  

{% highlight cpp %}
// ad ve soyad adinda iki string tanimladik.
string ad, soyad;

cout << "Adiniz: ";

// kullanicinin girdigi metni ad degiskenine at.
getline(cin, ad);

cout << "Soyadiniz: ";

// kullanicinin girdigi metni soyad degiskenine at.
getline(cin, soyad);

cout << "Merhaba " << ad << " " << soyad << endl;
{% endhighlight %}


Vektörler
---------

Vektörler aynı diziler gibidir. Farklı boyutlarının değişebilmesidir.  
`vector <veri tipi> vektör adı(boyutu)` şeklinde tanımlanırlar. Vektörleri kullanabilmek için dosyanızın başına `#include <vector>` komutunu eklemelisiniz.

{% highlight cpp %}
// dinamik boyutlu bir vektor tanimladik.
vector <int> sayilar;

int i=0; // for dongusu icin kullanacagimiz sayac.

//i 5 olana kadar don, her dondugunde i'yi 1 arttir.
for(i = 0; i < 5; i++)
{
   //vektorun sonuna i'nin 1 fazlasini ekle.
   sayilar.push_back(i+1);
}

//i 5 olana kadar don, her dondugunde i'yi 1 arttir.
for(i = 0; i < 5; i++)
{
   // vektorun elemanlarini ekrana alt alta yaz.
   cout << sayilar[i] << endl;
}
{% endhighlight %}

Yukarıdaki örnekte dikkatinizi çektiyse vektör sınıfından `push_back` isimli fonksiyonu kullandık. Bu fonksiyon vektörün sonuna değer eklememizi sağlıyor.  

Vektörler hakkında daha detaylı bilgiyi aşağıdaki linkten bulabilirsiniz:  
[Sanalkurs - Vektörleri Kullanmak][2]

Bu bölümde anlatacaklarım bu kadar, sonraki bölümde Fonksiyonlar, Girdi/Çıktı, İşaretçiler konularıyla ilgileneceğiz.  


Sonraki Bölüm: Fonksiyonlar, Girdi/Çıktı, İşaretçiler:  
[Temel C++ - 3. Gün: Fonksiyonlar, Girdi/Çıktı, İşaretçiler][3]


[1]: /temel-cpp-birinci-gun-giris/
[2]: http://sanalkurs.net/vektorleri-kullanmak-6551.html
[3]: /temel-cpp-ucuncu-gun-fonksiyonlar-girdi-cikti-isaretciler/
