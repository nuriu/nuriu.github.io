---
title: "Temel C# 4. Gün: Metodlar"
date: 2015.10.20
tags:
- c#
- metodlar
categories:
- c#
---

## Metodlar
Metodlar (diğer adıyla fonksiyonlar) birlikte belirli bir işlemi yerine getiren bir grup ifadeden oluşurlar. C# dilinde metod tanımlamaları şu yazılım kurala uygun olarak yapılır;  

``` csharp
<Erişim tipi> <Geri döneceği değer tipi> <Metod adı>(Parametre listesi)
{
   Metod kod bloğu
}
```

Şu ana kadar irdelediğimiz tüm konuları içerecen kapsamlı bir hesap makinesi örneği yapalım. İşe fonksiyonlarımızı tanımlayarak başlayalım. Benim tasarladığım örnek;  

``` csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metodlar
{
    internal class Program
    {
        // Hesap makinesi menüsünü kullanıcıya sunacağımız ve
        // seçim yapmasını isteyeceğimiz fonksiyon.
        // Geriye int tipinde kullanıcı seçimini göndereceğiz. (int)
        private static int Menu()
        {

        }

        // Sayı giriş işlemlerini gerçekleştireceğimiz fonksiyon.
        // Geriye veri göndermiyoruz (void)
        private static void SayiGirisi()
        {

        }

        // Bölme işlemini gerçekleştireceğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Toplama()
        {

        }

        // Bölme işlemini gerçekleştireceğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Cikarma()
        {

        }

        // Bölme işlemini gerçekleştireceğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Carpma()
        {

        }

        // Bölme işlemini gerçekleştireceğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Bolme()
        {

        }

        // İşlem sonucundan sonra kullanıcıya yeni bir işlem
        // yapmak isteyip istemediğini sorup ona göre
        // programın akışını şekillendireceğimiz fonksiyon.
        // Geriye veri göndermeyeceğiz (void)
        private static void YeniIslem()
        {

        }

        // Ana fonksiyonumuz.
        private static void Main()
        {

        }
    }
}
```

Şimdi de değişkenlerimizi tanımlayalım, menümüzü ve ana fonksiyonumuzu şekillendirelim. Ben şöyle uyguladım;  

``` csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metodlar
{
    internal class Program
    {
        // Global değişkenlerimiz.
        private static float sayi1, sayi2, sonuc;

        // Hesap makinesi menüsünü kullanıcıya sunacağımız ve
        // seçim yapmasını isteyeceğimiz fonksiyon.
        // Geriye int tipinde kullanıcı seçimini göndereceğiz. (int)
        private static int Menu()
        {
            int s = 0;

            Console.WriteLine("Hesap Makinesi Örneğine Hoşgeldiniz.");

            Console.WriteLine("");

            Console.WriteLine("--- İŞLEM MENÜSÜ ---");
            Console.WriteLine("Toplama işlemi için 1'i,");
            Console.WriteLine("Büyük sayıdan küçük sayıyı çıkarmak için 2'yi,");
            Console.WriteLine("Çarma işlemi için 3'ü,");
            Console.WriteLine("Büyük sayıyı küçük sayıya bölmek için 4'ü,");
            Console.WriteLine("Çıkış için 0'ı giriniz.");

            Console.Write("Seçiminiz: ");

            // Kullanıcının girdiği değeri s değişkenimize atadık.
            s = Convert.ToInt32(Console.ReadLine());

            // s değişkenini fonksiyonun çağrıldığı yere gönderdik.
            return s;
        }

        // Sayı giriş işlemlerini gerçekleştireceğimiz fonksiyon.
        // Geriye veri göndermiyoruz (void)
        private static void SayiGirisi()
        {

        }

        // Bölme işlemini gerçekleştireceğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Toplama()
        {

        }

        // Bölme işlemini gerçekleştireceğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Cikarma()
        {

        }

        // Bölme işlemini gerçekleştireceğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Carpma()
        {

        }

        // Bölme işlemini gerçekleştireceğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Bolme()
        {

        }

        // İşlem sonucundan sonra kullanıcıya yeni bir işlem
        // yapmak isteyip istemediğini sorup ona göre
        // programın akışını şekillendireceğimiz fonksiyon.
        // Geriye veri göndermeyeceğiz (void)
        private static void YeniIslem()
        {

        }

        // Ana fonksiyonumuz.
        private static void Main()
        {

            // seçim değişkenimiz
            int secim;

            // ileride bir sorun oluşturmaması için
            // global değişkenlerimizi sıfırladık.
            sayi1 = 0;
            sayi2 = 0;
            sonuc = 0;

            // Menu fonksiyonumuzu çağırdık ve gönderdiği değeri
            // secim değişkenimize atadık.
            secim = Menu();

            // secim değişkenimize göre program akışımızı switch
            // yapısıyla ayırdık.
            switch (secim)
            {
                // kullanıcı 1 girdiyse;
                case 1:
                    Console.WriteLine("--- TOPLAMA İŞLEMİ ---");

                    // kullanıcıyı sayı girişi yapması için
                    // SayiGirisi fonksiyonuna yönlendirdik.
                    SayiGirisi();

                    // Toplama fonksiyonumuzu çağırıp sonucu ekrana yazdırdık.
                    Console.WriteLine("Toplama sonucu: " + Toplama());

                    // kullanıcıyı YeniIslem fonksiyonuna yönlendirdik.
                    YeniIslem();
                    break;

                // kullanıcı 2 girdiyse;
                case 2:
                    Console.WriteLine("--- ÇIKARMA İŞLEMİ ---");

                    // kullanıcıyı sayı girişi yapması için
                    // SayiGirisi fonksiyonuna yönlendirdik.
                    SayiGirisi();

                    // Cikarma fonksiyonumuzu çağırıp sonucu ekrana yazdırdık.
                    Console.WriteLine("Çıkarma sonucu: " + Cikarma());

                    // kullanıcıyı YeniIslem fonksiyonuna yönlendirdik.
                    YeniIslem();
                    break;

                // kullanıcı 3 girdiyse;
                case 3:
                    Console.WriteLine("--- ÇARPMA İŞLEMİ ---");

                    // kullanıcıyı sayı girişi yapması için
                    // SayiGirisi fonksiyonuna yönlendirdik.
                    SayiGirisi();

                    // Carpma fonksiyonumuzu çağırıp sonucu ekrana yazdırdık.
                    Console.WriteLine("Çarpma sonucu: " + Carpma());

                    // kullanıcıyı YeniIslem fonksiyonuna yönlendirdik.
                    YeniIslem();
                    break;

                // kullanıcı 4 girdiyse;
                case 4:
                    Console.WriteLine("--- BÖLME İŞLEMİ ---");

                    // kullanıcıyı sayı girişi yapması için
                    // SayiGirisi fonksiyonuna yönlendirdik.
                    SayiGirisi();

                    // Bolme fonksiyonumuzu çağırıp sonucu ekrana yazdırdık.
                    Console.WriteLine("Bölme sonucu: " + Bolme());

                    // kullanıcıyı YeniIslem fonksiyonuna yönlendirdik.
                    YeniIslem();
                    break;

                // kullanıcı başka bir değer girdiyse;
                default:
                    Console.WriteLine("--- ÇIKIŞ İÇİN ENTER'A BASIN. ---");
                    Console.ReadLine();
                    break;
            }                        
        }
    }
}
```

Şimdi de kalan fonksiyonlarımızı düzenleyelim. Bendeki sonuç şu şekilde;  

``` csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metodlar
{
    internal class Program
    {
        // Global değişkenlerimiz.
        private static float sayi1, sayi2, sonuc;

        // Hesap makinesi menüsünü kullanıcıya sunduğumuz ve
        // seçim yapmasını istediğimiz fonksiyon.
        // Geriye int tipinde kullanıcı seçimini göndereceğiz. (int)
        private static int Menu()
        {
            int s = 0;

            Console.WriteLine("Hesap Makinesi Örneğine Hoşgeldiniz.");

            Console.WriteLine("");

            Console.WriteLine("--- İŞLEM MENÜSÜ ---");
            Console.WriteLine("Toplama işlemi için 1'i,");
            Console.WriteLine("Büyük sayıdan küçük sayıyı çıkarmak için 2'yi,");
            Console.WriteLine("Çarma işlemi için 3'ü,");
            Console.WriteLine("Büyük sayıyı küçük sayıya bölmek için 4'ü,");
            Console.WriteLine("Çıkış için 0'ı giriniz.");

            Console.Write("Seçiminiz: ");

            // Kullanıcının girdiği değeri s değişkenimize atadık.
            s = Convert.ToInt32(Console.ReadLine());

            // s değişkenini fonksiyonun çağrıldığı yere gönderdik.
            return s;
        }

        // Sayı giriş işlemlerini gerçekleştirdiğimiz fonksiyon.
        // Geriye veri göndermiyoruz (void)
        private static void SayiGirisi()
        {
            // Kullanıcıdan birinci sayıyı girmesini istedik
            Console.WriteLine("Birinci sayıyı giriniz: ");

            // Kullanıcının girdiği değeri uygun tipe dönüştürdük ve
            // sayi1 değişkenine atadık.
            sayi1 = Convert.ToSingle(Console.ReadLine());

            // Kullanıcıdan ikinci sayıyı girmesini istedik
            Console.WriteLine("İkinci sayıyı giriniz: ");

            // Kullanıcının girdiği değeri uygun tipe dönüştürdük ve
            // sayi2 değişkenine atadık.
            sayi2 = Convert.ToSingle(Console.ReadLine());
        }

        // Bölme işlemini gerçekleştirdiğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Toplama()
        {
            sonuc = sayi1 + sayi2;
            return sonuc;
        }

        // Bölme işlemini gerçekleştirdiğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Cikarma()
        {
            if (sayi1 > sayi2)
            {
                sonuc = sayi1 - sayi2;
            }
            else if (sayi2 > sayi1)
            {
                sonuc = sayi2 - sayi1;
            }
            else
            {
                return 0;
            }
            return sonuc;
        }

        // Bölme işlemini gerçekleştirdiğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Carpma()
        {
            sonuc = sayi1 * sayi2;
            return sonuc;
        }

        // Bölme işlemini gerçekleştirdiğimiz fonksiyon.
        // Geriye float tipinde sonuç değişkenini göndereceğiz. (float)
        private static float Bolme()
        {
            if (sayi1 > sayi2)
            {
                sonuc = sayi1 / sayi2;
            }
            else if (sayi2 > sayi1)
            {
                sonuc = sayi2 / sayi1;
            }
            else
            {
                return 1;
            }
            return sonuc;
        }

        // İşlem sonucundan sonra kullanıcıya yeni bir işlem
        // yapmak isteyip istemediğini sorup ona göre
        // programın akışını şekillendirdiğimiz fonksiyon.
        // Geriye veri göndermiyoruz (void)
        private static void YeniIslem()
        {
            char c;
            Console.WriteLine("Yeni bir işlem yapmak istiyor musunuz? (E/H)");

            // kullanıcının girdiği değeri uygun formata dönüştürüp
            // c değişkenine atıyoruz.
            c = Convert.ToChar(Console.ReadLine().ToUpper());

            // kullanıcının girdiği değeri kontrol ediyoruz.
            // eğer E girdiyse programı tekrar ana fonksiyona yönlendiriyoruz.
            if (c == 'E')
            {
                Console.WriteLine("");
                Main();
            }
            // başka bir değer girdiyse programı sonlandırıyoruz.
            else
            {
                Console.WriteLine("HOŞÇAKALIN...");
            }
        }

        // Ana fonksiyonumuz.
        private static void Main()
        {
            // seçim değişkenimiz
            int secim;

            // ileride bir sorun oluşturmaması için
            // global değişkenlerimizi sıfırladık.
            sayi1 = 0;
            sayi2 = 0;
            sonuc = 0;

            // Menu fonksiyonumuzu çağırdık ve gönderdiği değeri
            // secim değişkenimize atadık.
            secim = Menu();

            // secim değişkenimize göre program akışımızı switch
            // yapısıyla ayırdık.
            switch (secim)
            {
                // kullanıcı 1 girdiyse;
                case 1:
                    Console.WriteLine("--- TOPLAMA İŞLEMİ ---");

                    // kullanıcıyı sayı girişi yapması için
                    // SayiGirisi fonksiyonuna yönlendirdik.
                    SayiGirisi();

                    // Toplama fonksiyonumuzu çağırıp sonucu ekrana yazdırdık.
                    Console.WriteLine("Toplama sonucu: " + Toplama());

                    // kullanıcıyı YeniIslem fonksiyonuna yönlendirdik.
                    YeniIslem();
                    break;

                // kullanıcı 2 girdiyse;
                case 2:
                    Console.WriteLine("--- ÇIKARMA İŞLEMİ ---");

                    // kullanıcıyı sayı girişi yapması için
                    // SayiGirisi fonksiyonuna yönlendirdik.
                    SayiGirisi();

                    // Cikarma fonksiyonumuzu çağırıp sonucu ekrana yazdırdık.
                    Console.WriteLine("Çıkarma sonucu: " + Cikarma());

                    // kullanıcıyı YeniIslem fonksiyonuna yönlendirdik.
                    YeniIslem();
                    break;

                // kullanıcı 3 girdiyse;
                case 3:
                    Console.WriteLine("--- ÇARPMA İŞLEMİ ---");

                    // kullanıcıyı sayı girişi yapması için
                    // SayiGirisi fonksiyonuna yönlendirdik.
                    SayiGirisi();

                    // Carpma fonksiyonumuzu çağırıp sonucu ekrana yazdırdık.
                    Console.WriteLine("Çarpma sonucu: " + Carpma());

                    // kullanıcıyı YeniIslem fonksiyonuna yönlendirdik.
                    YeniIslem();
                    break;

                // kullanıcı 4 girdiyse;
                case 4:
                    Console.WriteLine("--- BÖLME İŞLEMİ ---");

                    // kullanıcıyı sayı girişi yapması için
                    // SayiGirisi fonksiyonuna yönlendirdik.
                    SayiGirisi();

                    // Bolme fonksiyonumuzu çağırıp sonucu ekrana yazdırdık.
                    Console.WriteLine("Bölme sonucu: " + Bolme());

                    // kullanıcıyı YeniIslem fonksiyonuna yönlendirdik.
                    YeniIslem();
                    break;

                // kullanıcı başka bir değer girdiyse;
                default:
                    Console.WriteLine("--- ÇIKIŞ İÇİN ENTER'A BASIN. ---");
                    Console.ReadLine();
                    break;
            }
        }
    }
}
```

Sonraki Bölüm: Sınıflar:  
[Temel C# - 5. Gün: Sınıflar][1]  


[1]: /2015/10/21/temel-csharp-besinci-gun-siniflar/
