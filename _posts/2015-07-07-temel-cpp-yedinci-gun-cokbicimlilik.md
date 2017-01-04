---
layout: post
title: "Temel C++ 7. Gün: Çokbiçimlilik"
tags:
- c++
- çokbiçimlilik
categories:
- c++
series: c++
---

Çokbiçimlilik
-------------
Çokbiçimlilik dün bahsettiğimiz sanal fonksiyonlar kullanılarak, aynı fonksiyonun farklı biçimlerde kullanılmasıyla oluşur. Böylece fonksiyonun bulunduğu sınıfın türünü bilmek zorunda kalmayız. Dünkü sanal fonksiyon örneğimiz aynı zamanda çokbiçimlilik örneğidir. Aynı örneğin sadeleştirilmiş halini tekrar paylaşacağım. Çünkü gösterebileceğim en basit örnek sanırım bu.  

Örneğimiz:  
{% highlight cpp %}
#include <iostream>

using namespace std;

class Hayvan{
   private:
   public:
      virtual string sesiGetir(){return "Henuz bir sesim yok.";}
      Hayvan();
      ~Hayvan();
};

Hayvan::Hayvan(){}

Hayvan::~Hayvan(){}

class Kedi : public Hayvan{
   private:
   public:
      string sesiGetir(){return "miyav";}
      Kedi();
      ~Kedi();
};

Kedi::Kedi(){}
Kedi::~Kedi(){}

class Kopek : public Hayvan{
   private:
   public:
      string sesiGetir(){return "hav";}
      Kopek();
      ~Kopek();
};

Kopek::Kopek(){}
Kopek::~Kopek(){}

int main()
{
   Kedi Tekir;

   cout << "Tekir isimli nesnemiz " << Tekir.sesiGetir() << " sesini cikarir." << endl;

   Kopek Tomar;

   cout << "Tomar isimli nesnemiz " << Tomar.sesiGetir() << " sesini cikarir." << endl;
   return 0;
}
{% endhighlight %}  

Temel C++ serimiz burada sonlanıyor. İlerleyen zamanlarda daha ileri düzey örnekler üzerinde durabiliriz. Şimdilik bu kadar.  
