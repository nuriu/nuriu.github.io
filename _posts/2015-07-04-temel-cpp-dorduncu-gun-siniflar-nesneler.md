---
layout: post
title: Temel C++
subtitle: "4. Gün: Sınıflar, Nesneler"
categories:
- cpp
---

# **Sınıflar / Nesneler**  
------------------------------

Sınıflar, veriler (nitelikler) ile kodların (davranışlar) anlamlı bir şekilde bir araya gelmesiyle oluşur. Nesnelerin nasıl inşa edileceklerini tanımlarlar. Genellikle başlık (header) dosyalarında tanımlanırlar. Böylelikle sınıf kodları diğer kodlardan ayrılmış olur.  

Örneğin; A isimli bir kediniz olduğunu varsayın. A, kedi sınıfının bir örneğidir. (instance)  
Örnekte olduğu gibi, sınıflar ile örnekleri arasında bire çok ilişki oluşur.  

Basit sınıf örneği:
{% highlight cpp %}
#include <iostream>

using namespace std;

// Kedi isminde bir sinif olusturduk.
class Kedi{
   // private degiskenler sadece public icindeki fonksiyonlar
   // tarafindan kullanilabilir.
   private:
      int agirlik;
      string isim;
   public:
      // nesnenin agirligini belirlemek icin
      // kullanacagimiz fonksiyon.
      void agirligiBelirle(int kg)
      {
         agirlik = kg;
      }
      // nesnenin ismini belirlemek icin
      // kullanacagimiz fonksiyon.
      void ismiBelirle(string ismi)
      {
         isim = ismi;
      }
      // nesnenin agirligini ogrenmek icin kullanacagimiz fonksiyon.
      int agirligiGetir()
      {
         // geriye agirlik degerini donduruyoruz.
         return agirlik;
      }
      // nesnenin ismini ogrenmek icin kullanacagimiz fonksiyon.
      string ismiGetir()
      {
         // ismi dondurduk.
         return isim;
      }

      // constructor sinif ismiyle ayni ismi alir.
      // her nesne olusturuldugunda cagirilir.
      Kedi();

      // deconstructor basinda ~ isaretiyle tanimlanir.
      ~Kedi();
}; // noktali virgule dikkat etmeyi unutmayin.

// nesne olusturuldugunda cagrilacak fonksiyon.
Kedi::Kedi()
{
   cout << "Bir kedi nesnesi olusturuldu." << endl;
}

// nesne yok edildiginde cagrilacak fonksiyon.
Kedi::~Kedi()
{
   cout << this->isim << " nesnesi yok edildi." << endl;
}

int main()
{
   Kedi Tekir;

   Tekir.agirligiBelirle(10);
   Tekir.ismiBelirle("Tekir");

   cout << Tekir.ismiGetir() << " isimli ";
   cout << Tekir.agirligiGetir() << " agirligindaki ";
   cout << "nesnemiz." << endl;

   return 0;
}
{% endhighlight %}

Sonraki Bölüm: Kalıtım:  
[Temel C++ - 5. Gün: Kalıtım][1]

[1]: /cpp/2015/07/05/temel-cpp-besinci-gun-kalitim.html
