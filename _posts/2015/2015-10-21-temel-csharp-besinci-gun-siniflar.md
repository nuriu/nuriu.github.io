---
layout: post
title: "Temel C# 5. Gün: Sınıflar"
tags:
- c#
- sınıflar
categories:
- c#
---

# **Sınıflar**  
Uzun uzun sınıf mantığını anlatmayacağım. C++ ve Python serilerinden veya üçüncül kaynaklardan sınıflar ile ilgili teorik bilgileri alabilirsiniz. C#'ta sınıflar için varsayılan erişim *internal*, sınıf üyeleri için varsayılan erişim ise *private*'tır. Şu şekilde tanımlanırlar;  

{% highlight csharp %}
<erişim belirteci> class  sinifismi
{
   // üye değişkenler
   <erişim belirteci> <veri tipi> degisken1;
   <erişim belirteci> <veri tipi> degisken2;
   .
   .
   .
   <erişim belirteci> <veri tipi> degiskenN;

   // üye metodlar
   <erişim belirteci> <döndüreceği değer tipi> metod1(parametre listesi)
   {
      // metod içeriği
   }
   <erişim belirteci> <döndüreceği değer tipi> metod2(parametre listesi)
   {
      // metod içeriği
   }
   ...
   <erişim belirteci> <döndüreceği değer tipi> metodN(parametre listesi)
   {
      // metod içeriği
   }
}
{% endhighlight %}  


Şimdi yukarıdaki yazım kurallarına uyarak bir sınıf ve o sınıfa üye bir nesne oluşturup kullanalım. Basit örnek;  

{% highlight csharp %}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace siniflar
{
  class Kutu
  {
    // üye değişkenlerimiz.
    private decimal en;
    private decimal boy;
    private decimal yukseklik;

    // üye fonksiyonlarımız.
    public void enBelirle(decimal e)
    {
      // this anahtar kelimesi o an üzerinde çalışılan
      // nesneye erişimi sağlar.
      this.en = e;
    }

    public void boyBelirle(decimal b)
    {
      this.boy = b;
    }

    public void yukseklikBelirle(decimal y)
    {
      this.yukseklik = y;
    }

    public void enGoster()
    {
      Console.WriteLine("En: " + this.en);
    }
    public void boyGoster()
    {
      Console.WriteLine("Boy: " + this.boy);
    }
    public void yukseklikGoster()
    {
      Console.WriteLine("Yükseklik: " + this.yukseklik);
    }

    public decimal hacimHesapla()
    {
      return (this.en * this.boy * this.yukseklik);
    }
  }
  class Program
  {
    static void Main(string[] args)
    {
      // kutumuz isimli Kutu sınıfına üye bir nesne oluşturuyoruz.
      Kutu kutumuz = new Kutu();

      // oluşturduğumuz nesnenin özelliklerini
      // belirliyoruz.
      kutumuz.enBelirle(5);
      kutumuz.boyBelirle(3);
      kutumuz.yukseklikBelirle(2);

      // girdiğimiz değerlerin doğruluğunu ekrana
      // yazdırarak test ediyoruz.
      kutumuz.enGoster();
      kutumuz.boyGoster();
      kutumuz.yukseklikGoster();

      // nesnemizin hacimHesapla fonksiyonunu çağırıyoruz.
      Console.WriteLine("");
      Console.WriteLine("Hacim: " + kutumuz.hacimHesapla());
      Console.ReadKey();
    }
  }
}
{% endhighlight %}  

Sonraki Bölüm: Kalıtım, Çokbiçimlilik:  
[Temel C# - 6. Gün: Kalıtım, Çokbiçimlilik][1]  


[1]: /temel-csharp-altinci-gun-kalitim-cokbicimlilik/
