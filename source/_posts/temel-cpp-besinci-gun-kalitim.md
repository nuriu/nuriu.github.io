---
title: "Temel C++ 5. Gün: Kalıtım"
date: 2015.07.05
tags:
- c++
- kalıtım
categories:
- c++
---

## Kalıtım

Bir önceki bölümde sınıflar ve nesneler ile ilgilendik. Kedi isimli bir sınıf tanımlayıp, o sınıftan Tekir isimli bir nesne oluşturduk.  

Şimdi, düşünelim ki birden fazla hayvan cinsimiz var. Örneğin kedi ve köpek olmak üzere iki cinsimiz olsun. Eğer bu iki tür için iki farklı sınıf tanımlarsak gereksiz yere kod tekrarı yapmış oluruz çünkü bu iki türünde sahip oldukları ortak özellikler var. Dünkü örneğin üzerinden devam edelim;  

``` cpp
#include <iostream>

using namespace std;

// Hayvan isminde bir sınıf olusturduk.
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
      Hayvan();
      ~Hayvan();
}; // noktali virgule dikkat etmeyi unutmayin.

Hayvan::Hayvan()
{
   cout << "Bir hayvan nesnesi olusturuldu." << endl;
}

Hayvan::~Hayvan()
{
   cout << this->isim << " nesnesi yok edildi." << endl;
}

// Hayvan sınıfından kedi ve kopek olmak uzere iki sinif turettik.

class Kedi : public Hayvan
{
   private:
      string ses = "miyav";
   public:
      string sesiGetir()
      {
         return ses;
      }
      Kedi();
      ~Kedi();
};

//Kedi sınıfı icin constructor ve deconstructor
Kedi::Kedi(){
   cout << "Bir kedi nesnesi olusturuldu." << endl;
}
Kedi::~Kedi(){
   cout << "Bir kedi nesnesi yok edildi." << endl;
}

class Kopek : public Hayvan
{
private:
   string ses = "havhav";
public:
   string sesiGetir()
   {
      return ses;
   }
   Kopek();
   ~Kopek();
};

//Kopek sınıfı icin constructor ve deconstructor
Kopek::Kopek(){
   cout << "Bir kopek nesnesi olusturuldu." << endl;
}
Kopek::~Kopek(){
   cout << "Bir kopek nesnesi yok edildi." << endl;
}


int main()
{
   Kedi Tekir;
   Kopek Karabas;

   Tekir.ismiBelirle("Tekir");
   Tekir.agirligiBelirle(5);

   Karabas.ismiBelirle("Karabaş");
   Karabas.agirligiBelirle(10);

   // Hayvan sinifindan miras alinan ozellikleri cagirdik.
   cout << Tekir.ismiGetir() << " isimli ";
   cout << Tekir.agirligiGetir() << " agirligindaki ";

   // Kedi sinifina ozel ozelligilimiz olan sesi cagirdik.
   cout << "nesnemiz " << Tekir.sesiGetir() << " sesini cikarir." << endl;


   // Hayvan sinifindan miras alinan ozellikleri cagirdik.
   cout << Karabas.ismiGetir() << " isimli ";
   cout << Karabas.agirligiGetir() << " agirligindaki ";

   // Kedi sinifina ozel ozelligilimiz olan sesi cagirdik.
   cout << "nesnemiz " << Karabas.sesiGetir() << " sesini cikarir." << endl;

   return 0;
}
```

Örneğimizde hayvan isimli sınıfımızda diğer hayvanlarda kullanacağımız özellikleri tanımladık. Sonra ise Kedi isimli bir sınıf oluşturduk ve Hayvan sınıfının özelliklerini miras aldık. Böylelikle hem Hayvan sınıfının özelliklerine hem de Kedi sınıfının kendine özgü özelliklerine erişim sağladık.

Sonraki Bölüm: Sanal Fonksiyonlar:  
[Temel C++ - 6. Gün: Sanal Fonksiyonlar][1]

[1]: /2015/07/06/temel-cpp-altinci-gun-sanal-fonksiyonlar/
