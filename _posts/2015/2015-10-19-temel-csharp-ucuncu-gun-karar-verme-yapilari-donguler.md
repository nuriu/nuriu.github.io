---
layout: post
title: "Temel C# 3. Gün: Karar Verme Yapıları & Döngüler"
tags:
- c#
- karar verme yapıları
- döngüler
categories:
- c#
---

# **Karar Verme Yapıları**  
Karar verme yapıları adından da anlaşılacağı üzere belirli durumların gerçekleşmesi durumunda program akışını değiştirmek için kullanılan yapılardır.  

**If Yapısı**  
Belirli bir durumu kontrol eder, durum kontrolden geçerse kod bloğunu işler, durum kontrolden geçmezse varsa diğer durumları yoksa else kod bloğunu çalıştırır. Else bloğu yoksa program akışına kaldığı yerden devam eder. Basitçe if yapısı şu şekilde tanımlanır;  

{% highlight csharp %}
using System;
namespace KararYapilari
{
   class Program
   {
      static void Main(string[] args)
      {
         if (değerlendirilecek durum)
         {
         }
         else if(durum yanlışsa değerlendirilecek durum 1)
         {
         }
         else if(durum ve durum 1 yanlışsa değerlendirilecek durum 2)
         {
         }
         .
         .
         .
         else if(durum, durum 1, durum 2, ..., durum n-1 yanlışsa değerlendirilecek durum n)
         {
         }
         else
         {
             /*Tüm durumlar yanlışsa işlenecek kod bloğu*/
         }
      }
   }
}
{% endhighlight %}  

Basit örnek;  
{% highlight csharp %}
using System;
namespace KararYapilari
{
   class Program
   {
      static void Main(string[] args)
      {
         /*lokal değişkenimiz*/
         int yas = 18;

         /*yas değişkeninin 18'den büyük olup olmadığını denetle*/
         if (yas > 18)
         {
            /*denetlenen durum doğruysa işlenecek kod bloğu*/
            Console.WriteLine("Yaş değişkeni 18'den büyük.");
         }
         /*yas değişkeniyle ilgili ek durum değerlendirmesi*/
         else if(yas == 18)
         {
            /*yaş değişkenin 18'den büyük olmaması fakat
               18'e eşit olması durumunda işlenecek kod bloğu*/
            Console.WriteLine("Yaş değişkeni 18'e eşit.");
         }
         else
         {
            /*denetlenen durum yanlışsa işlenecek kod bloğu*/
            Console.WriteLine("Yaş değişkeni 18'den küçük.");
         }

         Console.ReadLine();
      }
   }
}
{% endhighlight %}   

**Switch Yapısı**  
Fazla uzayan ve karmaşıklaşan if yapılarına çözüm olarak geliştirilmiş yapıdır. Birden fazla koşul karşında programın akışını değiştirmeye yarar. Tanımlanış şekli;  

{% highlight csharp %}
using System;
namespace KararYapilari
{
   class Program
   {
      static void Main(string[] args)
      {
         switch (degerlendirilecek durum)
         {
            case olabilecek sonuc 1:
               kodlar
               break;
            case olabilecek sonuc 2:
                kodlar
                break;
            case olabilecek sonuc 3:
                kodlar
                break;
            .
            .
            .
            case olabilecek sonuc n:
                kodlar
                break;
            default:
                diğer sonuçlarda çalışacak kodlar
                break;
         }
      }
   }
}
{% endhighlight %}  

if yapısını kullandığımız örneği switch yapısı ile farklı bir şekilde gerçekleştirelim;  

{% highlight csharp %}
using System;
namespace KararYapilari
{
   class Program
   {
      static void Main(string[] args)
      {
          switch (yas)
          {
              case 18:
                    Console.WriteLine("Yaş = 18.");
                    break;
              case 19:
                    Console.WriteLine("Yaş = 19.");
                    break;
              case 20:
                    Console.WriteLine("Yaş = 20.");
                    break;
              default:
                    Console.WriteLine("Yaş değişkeni 18'den küçük veya 20'den büyük.");
                    break;
          }
          Console.ReadLine();
      }
   }
}
{% endhighlight %}  

# **Döngüler**  
Döngüler, belirli bir koşulun sağlandığı sürece tekrar tekrar gerçekleştirilecek işlemler için kullanılırlar. 3 şekli şöyledir;  

**While**  
Belirtilen koşul gerçekleştiği sürece kod bloğunu işleyen döngü çeşididir. Tanımlanış şekli;  

{% highlight csharp %}
using System;
namespace Donguler
{
   class Program
   {
      static void Main(string[] args)
      {
          while(kosul)
          {
              kosul gerçekleştiği sürece işlenecek kodlar
          }
      }
   }
}
{% endhighlight %}  

Basit while örneği;  
{% highlight csharp %}
using System;
namespace Donguler
{
   class Program
   {
      static void Main(string[] args)
      {
          int yas = 0;
          while(yas < 18)
          {
              yas += 1;
          }
          Console.WriteLine("Yas = 18 oldu.");
          Console.ReadLine();
      }
   }
}
{% endhighlight %}

**For**  
for yapısı while döngüsünün biraz süslenmiş hali gibidir. Tanımlanış şekli;  

{% highlight csharp %}
using System;
namespace Donguler
{
   class Program
   {
      static void Main(string[] args)
      {
          for(sayac degiskeni; kosul; sayac işlemi)
          {
              kosul gerçekleştiği sürece işlenecek kodlar
          }
      }
   }
}
{% endhighlight %}  

Basit for örneği;  

{% highlight csharp %}
using System;
namespace Donguler
{
   class Program
   {
      static void Main(string[] args)
      {
          int yas = 0;
          for(yas = 0; yas < 18; yas++)
          {
             Console.WriteLine(yas);
          }
          Console.ReadLine();
      }
   }
}
{% endhighlight %}  

**Do While**  
while döngüsünün ters çevrilmiş hali gibidir. Program döngü içine her koşulda en az 1 kez girip kod bloğunu işler. Tanımlanış şekli;  

{% highlight csharp %}
using System;
namespace Donguler
{
   class Program
   {
      static void Main(string[] args)
      {
          do
          {
              kosul gerçekleşene kadar işlenecek kodlar
          }while(kosul)
      }
   }
}
{% endhighlight %}  

Basit örnek;  
{% highlight csharp %}
using System;
namespace Donguler
{
   class Program
   {
      static void Main(string[] args)
      {
          int yas = 18;
          do
          {
              yas+=1;
          }while(yas < 18)

          Console.WriteLine("Yas = 19.");
          Console.ReadLine();
      }
   }
}
{% endhighlight %}  

Sonraki Bölüm: Metodlar:  
[Temel C# - 4. Gün: Metodlar][1]  

[1]: /temel-csharp-dorduncu-gun-metodlar/
