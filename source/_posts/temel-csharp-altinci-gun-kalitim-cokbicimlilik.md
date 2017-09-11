---
title: "Temel C# 6. Gün: Kalıtım & Çokbiçimlilik"
date: 2015.10.22
tags:
- c#
- kalıtım
- çokbiçimlilik
categories:
- c#
---

## Kalıtım
Ana sınıflardan sınıf türetmeye yarar. C#'ta şu şekilde uygulanır;  

``` csharp
<erişim belirteci> class <miras alınacak sınıf adı>
{
   // içerik
}
class <miras alan sınıf adı> : <miras alınan sınıf adı>
{
   // içerik
}
```

Örnek olarak şekil isimli bir sınıf oluşturalım ve bu sınıftan dörtgen isimli bir sınıf türetelim;  

``` csharp Sekil.cs
namespace Kalitim
{
  // ana sınıfımızı tanımlıyoruz.
    class Sekil
    {
        #region üyeler
        protected int genislik;
        protected int yukseklik;
        #endregion

        #region belirleyiciler
        public void genisligiBelirle(int g)
        {
            this.genislik = g;
        }

        public void yuksekligiBelirle(int y)
        {
            this.yukseklik = y;
        }
        #endregion
    }
}
```

``` csharp Dortgen.cs
namespace Kalitim
{
    // sekil sınıfından miras alan dortgen sınıfımız.
    class Dortgen: Sekil
    {
        public int alaniHesapla()
        {
            return (this.genislik * this.yukseklik);
        }
    }
}
```

``` csharp Program.cs
using System;

namespace Kalitim
{
  class Program
  {
    static void Main(string[] args)
    {
      // miras alan sınıfımıza ait iki yeni nesne oluşturuyoruz.
      Dortgen kare = new Dortgen();
      Dortgen dikdortgen = new Dortgen();

      // ilk nesnemizin üye değerlerini belirliyoruz.
      kare.yuksekligiBelirle(5);
      kare.genisligiBelirle(5);

      // ikinci nesnemizin üye değerlerini belirliyoruz.
      dikdortgen.yuksekligiBelirle(5);
      dikdortgen.genisligiBelirle(8);

      // nesnelerimizin alanlarını ekrana yazdırıyoruz.
      Console.WriteLine("Karenin alanı: " + kare.alaniHesapla());
      Console.WriteLine("Dikdörtgenin alanı: " + dikdortgen.alaniHesapla());
      Console.ReadKey();
    }
  }
}
```

## Çokbiçimlilik
Var olan fonksiyonlarımızı farklı işlevlerde kullanabilmemizi sağlar. Şimdi çokbiçimlilik özelliklerini kullanarak örneğimizi değiştirelim;  

``` csharp Sekil.cs
namespace Cokbicimlilik
{
    abstract class Sekil
    {
        public abstract double alan();
    }
}
```

``` csharp Dikdortgen.cs
namespace Cokbicimlilik
{
    // Sekil sınıfından türetilen Dikdortgen sınıfımız.
    class Dikdortgen: Sekil
    {
        // üyelerimiz.
        private double genislik;
        private double yukseklik;

        // sınıf oluşturucumuz.
        public Dikdortgen(double a = 0, double b = 0)
        {
            this.genislik = a;
            this.yukseklik = b;
        }

        // Sekil sınıfının alan fonksiyonunu farklı biçimde kullanıyoruz.
        public override double alan()
        {
            return (genislik * yukseklik);
        }

    }
}
```

``` csharp Program.cs
using System;

namespace Cokbicimlilik
{
    class Program
    {
        static void Main(string[] args)
        {
            // dikdörtgen nesnemizi 5'e 8 boyutlarında oluşturduk.
            Dikdortgen d = new Dikdortgen(5,8);

            // 5 yarıçaplı çember nesnemizi oluşturduk.
            Daire d2 = new Daire(5);

            Console.WriteLine("Dikdörtgenin alanı: " + d.alan());
            Console.WriteLine("Dairenin alanı: " + d2.alan());
            Console.ReadKey();
        }
    }
}
```

Örnekte görüldüğü üzere ana sınıfımızda tanımladığımız alan fonksiyonunu dinamik çokbiçimlilik sayesinde hem dikdörtgen sınıfı nesnelerinde hem de daire sınıfı nesnelerinde kullanabildik.  
