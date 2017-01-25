---
layout: post
title: "Temel C# 2. Gün: Giriş, Veri Tipleri, Tip Dönüşümleri"
tags:
- c#
- giriş
- veri tipleri
- tip dönüşümleri
categories:
- c#
---

# **Giriş**  
Visual Studio'da proje oluşturmak için DOSYA -> YENİ -> PROJE (FILE -> NEW -> PROJECT) yolunu veya CTRL + SHIFT + N kısayolunu kullanabilirsiniz. Açılan pencerede sol kısımda Visual C#'ı seçip, sağa gelen listede Konsol Uygulaması'nı (console application) seçin. Aşağıdaki kısımda projenize isim verip kaydedileceği dizini seçtikten sonra Tamam (OK) tuşuna basarak projenizi oluşturabilirsiniz. Konsol uygulaması C#'i öğrenmek için oldukça iyidir. Çünkü sade ve doğrusaldır. Sizin için fazladan dosyalar veya kodlar oluşturmaz. Biz de bu yüzden temel c# serisinde konsol uygulamalarıyla devam edeceğiz. Temel Python serisinde olduğu gibi programlama mantığını bilenler ve yeni bir dil öğrenmek isteyenleri hedefleyerek sade örnekler ve tanımlar kullanacağım. Herhangi bir dil öğrendiyseniz zaten sizin için yeterli olacaktır. Daha ileri düzey ve/veya detaylı örnekleri sonraki serilerde işlemeye çalışacağım.  

# **Veri Tipleri**  
System.ValueType sınıfından türetilen veri tiplerinden belli başlı olanları şöyle listeleyebiliriz;  


| Tip     	| Değer Aralığı                                          	| Varsayılan Değer 	|
|---------	|--------------------------------------------------------	|------------------	|
| bool    	| True ya da False                                       	| False            	|
| byte    	| 0-255                                                  	| 0                	|
| char    	| U +0000 - U +ffff                                      	| '\0'             	|
| decimal 	| (-7.9 x 1028 - 7.9 x 1028) / 100 - 28                  	| 0.0m             	|
| double  	| (+/-)5.0 x 10-324 - (+/-)1.7 x 10308                   	| 0.0d             	|
| float   	| -3.4 x 1038 - + 3.4 x 1038                             	| 0.0f             	|
| int     	| -2,147,483,648 - 2,147,483,647                         	| 0                	|
| long    	| -9,223,372,036,854,775,808 - 9,223,372,036,854,775,807 	| 0l               	|
| sbyte   	| -128 - 127                                             	| 0                	|
| short   	| -32,768 - 32,767                                       	| 0                	|
| uint    	| 0 - 4,294,967,295                                      	| 0                	|
| ulong   	| 0 - 18,446,744,073,709,551,615                         	| 0                	|
| ushort  	| 0 - 65,535                                             	| 0                	|

**Referans Tipleri**  
Bu tipler değer tutmak yerine değere referans olurlar. Örnek tipler;  

| Tip     	| Tanımlanış Örneği                       	| Açıklama                                                                                                          	|
|---------	|-----------------------------------------	|-------------------------------------------------------------------------------------------------------------------	|
| dynamic 	| dynamic d = 20;                         	| Herhangi bir değer alabilirler. Tip belirlemesi çalışma sırasında yapılır.                                        	|
| object  	| object obj;                             	| C# veri tipleri için ana sınıftır. Diğer tiplerin değerlerini alabilirler.                                        	|
| pointer 	| char* pointerIsmi;   int* pointerIsmi2; 	| C ve C++'taki pointer ile aynı yeteneklere sahiptir. Başka bir tipin bellek adresini saklamak için kullanılırlar. 	|
| string  	| String metin = "Merhaba";               	| Metin saklamak için kullanılırlar.                                                                                	|

# **Tip Dönüşümleri**  
Belirli tipteki veriyi başka bir tipe çevirmek istendiğinde kullanılan yöntemlerdir. İki farklı yöntemle gerçekleştirilebilirler. Örnekler;  

{% highlight csharp %}
using System;
namespace TipDegisimi
{
   class ExplicitDegisim
   {
      static void Main(string[] args)
      {
         float f = 86.21f;
         int i;

         // float tipindeki veriyi int tipine donustur
         i = (int)f;
         Console.WriteLine(i);
         Console.ReadKey();
      }
   }
}
{% endhighlight %}    

{% highlight csharp %}
using System;
namespace TipDegisimi
{
   class MetineDonusturme
   {
      static void Main(string[] args)
      {
         int i = 8;
         float f = 83.05f;
         double d = 2912.4737;
         bool b = false;

        // diger tiplerdeki verilerin metine donusturulmus hallerini ekrana yazdirir.
         Console.WriteLine(i.ToString());
         Console.WriteLine(f.ToString());
         Console.WriteLine(d.ToString());
         Console.WriteLine(b.ToString());
         Console.ReadKey();

      }
   }
}
{% endhighlight %}  

Diğer yöntem ise methodlar ile dönüştürmedir. Dönüştürme yapacağınız değiskenden önce Convert.To yazarsanız hangi tiplere dönüştürebileceğiniz intellisense yardımı ile görüp karar verebilirsiniz.  

Sonraki Bölüm: Karar Verme Yapıları & Döngüler:  
[Temel C# - 3. Gün: Karar Verme Yapıları & Döngüler][1]  

[1]: /temel-csharp-ucuncu-gun-karar-verme-yapilari-donguler/
