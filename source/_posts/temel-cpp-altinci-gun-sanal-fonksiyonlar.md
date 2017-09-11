---
title: "Temel C++ 6. Gün: Sanal Fonksiyonlar"
date: 2015.07.06
tags:
- c++
- sanal fonksiyonlar
categories:
- c++
---

## Sanal Fonksiyonlar

Sanal fonksiyonlar, miras alınan sınıfın bir fonksiyonunu miras alan sınıfta farklı bir şekilde kullanmamıza yarayan fonksiyonlardır. Fonksiyon tanımlarken başına `virtual` eklemek yeterlidir. Örnek;  

Dünkü örneğimizin geliştirilmiş hali:
``` cpp
#include <iostream>

using namespace std;

class Hayvan{
   private:
      int agirlik;
      string isim;
   public:
      void agirligiBelirle(int kg)
      {
         agirlik = kg;
      }
      void ismiBelirle(string ismi)
      {
         isim = ismi;
      }
      int agirligiGetir()
      {
         return agirlik;
      }
      string ismiGetir()
      {
         return isim;
      }
      //yeni sanal fonksiyonumuz
      virtual string sesiGetir()
      {
         return "Henuz bir sesim yok.";
      }
      Hayvan();
      ~Hayvan();
};

Hayvan::Hayvan()
{
   cout << "Bir hayvan nesnesi olusturuldu." << endl;
}

Hayvan::~Hayvan()
{
   cout << this->isim << " nesnesi yok edildi." << endl;
}

class Kedi : public Hayvan
{
   private:
   public:
      // ana sinifin sahip oldugu sesiGetir fonksiyonunu farkli sekilde kullanabiliyoruz.
      string sesiGetir()
      {
         return "miyav";
      }
      Kedi();
      ~Kedi();
};

Kedi::Kedi(){}
Kedi::~Kedi(){}

// kopek sinifimiz.
class Kopek : public Hayvan
{
   private:
   public:
      // ana sinifin sahip oldugu sesiGetir fonksiyonunu farkli sekilde kullanabiliyoruz.
      string sesiGetir()
      {
         return "havhav";
      }
      Kopek();
      ~Kopek();
};

Kopek::Kopek(){}
Kopek::~Kopek(){}

int main()
{
   Kedi Tekir;

   Tekir.ismiBelirle("Tekir");
   Tekir.agirligiBelirle(5);

   cout << Tekir.ismiGetir() << " isimli ";
   cout << Tekir.agirligiGetir() << " agirligindaki ";

   cout << "nesnemiz " << Tekir.sesiGetir() << " sesini cikarir." << endl;

   //aynı aileden diğer nesnemiz.
   Kopek Tomar;

   Tomar.ismiBelirle("Tomar");
   Tomar.agirligiBelirle(10);

   cout << Tomar.ismiGetir() << " isimli ";
   cout << Tomar.agirligiGetir() << " agirligindaki ";

   cout << "nesnemiz " << Tomar.sesiGetir() << " sesini cikarir." << endl;
   return 0;
}
```

Sanal fonksiyonlar daha çok pointer aracılığıyla kullanılır fakat ben mantığını oldukça basit tutmaya çalıştım.  

Sonraki Bölüm: Çokbiçimlilik:  
[Temel C++ - 7. Gün: Çokbiçimlilik][1]

[1]: /2015/07/07/temel-cpp-yedinci-gun-cokbicimlilik/
