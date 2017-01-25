---
layout: post
title: "Linux & C# Üzerine: Rider RS (C#) ile Bağlı Liste Örneği"
date: 2016-03-04 19:00:00 +0200
tags:
- c#
- genel
- linux
- Rider RS
- veri yapıları
- bağlı listeler
categories:
- c#
- genel
- linux
---

**Giriş**  

Çoğu insanın vardır bir türlü sevemediği, ısınamadığı teknolojiler.
Benim de Microsoft politikalarına ve teknolojilerine (şu an bunu yazmak için kullandığım VS Code ve TypeScript hariç) karşı büyük bir alerjim (doğru bir kelime seçimi oldu mu bilmiyorum ama tam olarak anlatmak istediğimi temsil ediyor.) vardı.  

Bu teknolojilerle ilk olarak yanlış hatırlamıyorsam orta okul zamanlarında hobi olarak dahil olduğum oyun sunucuları sayesinde tanışmıştım.
Ms SQL Server 2003 üzerinde binlerce veriye sahip 20-30 tablodan oluşan veritabanı ve genel olarak kullanıcı yönetimi üzerine yoğunlaşmış prosedürler ile ilgileniyordum.
Açıkçası uğraşım tamamen amatörce olduğundan ne yaptığımın tam olarak farkında değildim ama oldukça keyifliydi.
Veritabanındaki birkaç sütun verisini değiştirip oyuna girdiğimde değişikliklerin daha görsel şeylere dönüştüğünü görmek mutlu etmişti.
Öylesine mutlu etmiş olacak ki hayatım boyunca benzer şeyler ile uğraşmayı seçtim. Doğru bir seçim yapıp yapmadığımı son nefeste öğrenecek olsam da hala pişman olmadım.

Neyse sonrasında anadolu teknik lisesinde bilişim teknolojileri bölümünde Visual Basic ve C# ile tanıştım.
Veritabanı ve web (html, css, vbullettin, phpbb vb.) teknolojileri dışındaki teknolojilerle tanışmak güzeldi.
Veri tabanlı windows form uygulamaları, raporlamaları vesaire ile uğraşıp mezun olduktan sonra üniversite dönemi başladı.
İçimde her zaman bir oyun geliştirme isteği olduğundan dolayı kişisel araştırmalarım sonucunda bu dünyanın Windows/Microsoft'tan ibaret olmadığını öğrendim.
Üniversite eğitimiyse C ile başladı. Şu anda 4. dönemimdeyim (ezici bir "bilimsel" hazırlık sınıfı da sayılırsa 3. yılımın 2. dönemi oluyor.)
Şu ana kadar C'ye ek olarak nesne tabanlı programlamayı öğretmek amacıyla C# gösterildi.
İki dile de aşina olduğum için genel hatırlama ve güzel ipuçları dışında teknik yönden çok fazla yeni şey öğrenmedim. (İlk defa gördüğüm mühendislik teorik eğitiminden bahsetmiyorum.)

Bu yüzden kendi zamanımda daha farklı konulara yöneldim. Önceki dönemdeki uygulamaların, ödevlerin, projelerin C# üzerinden yürümesi ve mono teknolojisinin iş görüp görmeyeceğinden emin olmamam gibi sebeplerden dolayı kalıcı olarak Linux'a geçememiştim.
Şu anda dönem arasında deneme/keşfetme amaçlı kurduğum arch tabanlı manjaro dağıtımını kullanıyorum.
Her ne kadar konunun uzmanı olmasam da şu düşüncemi rahatlıkla söyleyebilirim ki linux politikaları açısından normal kullanıcılar için diğer tüm açılardan ise yazılım geliştiriciler için mükemmel.
Gerek tasarımcılar gerek web tabanlı geliştirmeler yapan kişilerin unix tabanlı işletim sistemli bilgisayarları kullanmaları boşuna değilmiş.  

**Neden Linux?**

Bu soruya daha bilgili kişiler bir sürü maddeyle cevap verebilir.
Bana göre açık kaynaklı olması yani şirketlerin tekelinde olmaması (ubuntu konusunda emin değilim.) ve bedava olması en önemli seçim sebepleridir.
Peki Linux dağıtımları Windows'tan daha mı iyi? Kimi konularda evet kimi konularda hayır.

*Linux;*  

1. Neredeyse tüm linux dağıtımları (muhtemelen hepsi) geliştirici araçlarıyla birlikte geliyor. Dolayısıyla normal bir yazılım geliştiricisinin ihtiyaç duyacağı teknolojilerin çoğu zaten kurulu.
2. Sizi eğlenceden bir nebze uzaklaştırıyor. (Bu çoğu zaman gerekli. Fakat sadece oyun oynayan ve tüm oyunları oynamak isteyen biriyseniz linux dağıtımları size göre değil.)
3. Çoğu dağıtım, şirket tabanlı olmadığı ve dünya genelinde çeşitli insanlar tarafından geliştirildiği için veri ticaretiyle haşır neşir olmadıkları söylenebilir.

*Windows;*  

1. Neredeyse her bilgisayar oyunu windows merkezli üretiliyor. (ve bence bu windowsun artısından ziyade geliştiricilerin seçiminden kaynaklı.)
2. Daha stabil olduğu düşünülüyor. (her ne kadar aylardır linux kullanıp bu tür bir sorun yaşamamış olsam da.)
3. Son dönemlerde kalitesinden çok topladığı verilerle gündemde.

**Linux & C#**

Peki linux üzerinde hiç sorun yaşamadım mı? Elbette yaşadım ve çoğu da benim bilgisizliğimden dolayıydı.  

Benim için her ne kadar sorun olmasa da sorun olarak isimlendirilebilecek bir diğer konu ise c# ile windows üzerindeki gibi geliştirme yapmaktı.
C++ ile tanıştığım andan itibaren .net çatısını hiç sevememiş olsam da microsoft şaşırtıcı bir şekilde geçtiğimiz yıl içerisinde kütüphanenin çekirdeğinin kaynağını açmasına sevindim.
Dolayısı ile c#, windowsa özel bir teknoloji olmaktan biraz daha kurtuldu.  

Bu dönemde de c# üzerinden ödev/proje 'lendirileceğimizi öğrendiğim için istemeye istemeye (benim ne istediğimin elbette bir önemi yok) sanal makineye başvurdum, dolayısıyla yine windowsa, visual studio'ya yani microsoft teknolojilerine mecbur kalmıştım. (linux üzerinde monodevelop hakkında bilgim yoktu ki hala yok. o yüzden bu olasılık devre dışıydı.)

Taa ki JetBrains'in Rider projesini görene kadar. Rider çoklu-platform destekli bir c# geliştirme aracı. (ide)
C#'a olan yargımı biraz daha yıkmak için iyi bir fırsat olduğunu düşündüm ve hemen erken erişime dahil oldum.  

Sanal makineye kurduğum windows 7 için toplam 100 gb'a yakın bir alan ayırmıştım. Visual Studio 2015 CE de bir ton şeyle birlikte geldiği için sanırım iki haneli bir yer kaplıyor. Her ne kadar en sevdiğim geliştirme aracı da olsa c# ile geliştirme yaparken sürekli yavaş olduğu hissine kapılıyordum. (belki benim önyargımdır veya belki gerçekten de iki microsoft teknolojisi kendi aralarında tam verimli anlaşamıyordur bilemiyorum.)  

Rider'ı kurmak için yaptığım indirme ise sadece 200 küsür megabyte'tı. Aracı kurduktan sonra ilk fark ettiğim şey visual studio ile oluşturulmuş projeleri okuyabildiği ve üzerinde çalışabildiği idi. Yani bu araç da visual studio ile aynı (.sln uzantılı) proje yapısını destekliyor/kullanıyordu.  
Hemen sonra fark ettiğim şey her ne kadar erken erişim ürünü olup stabil sayılmasa da oldukça hızlı olduğuydu. Henüz bu aşamada tam olarak destek sınırlarını bilmiyor olsam da şu an ki ödev üzerinde (c#, windows forms) birlikte çalıştığım arkadaşım windows/vs üzerinde geliştirme yapmaktayken ben Rider kullanıyorum ve erken erişim ürünü olduğunu belli eden kapatma hataları dışında henüz herhangi bir sorun/aksilik yaşanmadı. Aracın genel görünümü şu şekilde;  

![JetBrains Project Rider](/../resimler/rider.png)

**Rider RS (C#) ile Bağlı Liste Örneği**
---------------------------------------

Şimdi hem ödeve hazırlık hem de sınıfları kullanarak basit bir veri yapısı geliştirmek için c# console projesi oluşturalım. Rider'ın proje oluşturma ekranı şu şekilde;  

![JetBrains Project Rider - Proje Oluşturma Ekranı](/../resimler/rider2.png)

Oluşturduğum projeye bu dosyaları ekledim/düzenledim;  

**BagliListe.cs**
{% highlight csharp %}
namespace BagliListeOrnek
{
  // yapımız için kullanacağımız soyut sınıfımız.
  public abstract class BagliListe
  {
    public int Boyut = 0;
    public TekYonluBagliListe Ilk;

    public abstract void Ekle(int eklenecekDeger);
    public abstract void Sil(int silinecekDeger);
    public abstract void Listele();
  }
}
{% endhighlight %}

**TekYonluBagliListe.cs**
{% highlight csharp %}
namespace BagliListeOrnek
{
  // ana sınıfımızdan ürettiğimiz yapı sınıfımız.
  public class TekYonluBagliListe : BagliListe
  {
    public int Veri { get; set; }
    public TekYonluBagliListe Sonraki { get; set; }

    // ezeceğimiz fonksiyonlarımız.
    public override void Ekle(int eklenecekDeger)
    {

    }

    public override void Sil(int silinecekDeger)
    {

    }

    public override void Listele()
    {

    }
  }
}
{% endhighlight %}

**Program.cs**
{% highlight csharp %}
namespace BagliListeOrnek
{
  class Program
  {
    static void Main(string[] args)
    {
      TekYonluBagliListe liste = new TekYonluBagliListe();

      // ekleme işlemi için testlerimiz.
      liste.Ekle(3);    // liste boşsa
      liste.Ekle(1);    // ilk elemandan küçük olma durumu
      liste.Ekle(2);    // araya eleman ekleme işlemi
      liste.Ekle(4);    // en büyük eleman olma durumu
      liste.Listele();

      // silme işlemi için testlerimiz.
      liste.Sil(1);     // ilk eleman olma senaryosu
      liste.Listele();
      liste.Sil(3);     // ara eleman olma senaryosu
      liste.Listele();
      liste.Sil(4);     // son eleman olma senaryosu
      liste.Listele();
    }
  }
}
{% endhighlight %}

**Listele()**

{% highlight csharp %}
public override void Listele()
{
    var sayac = Ilk;
    var i = 0;
    while (sayac != null)
    {
        i++;
        Console.WriteLine(i + ". Eleman: " + sayac.Veri);
        sayac = sayac.Sonraki;
    }
    Console.WriteLine();
}
{% endhighlight %}

**Ekle()**

{% highlight csharp %}
public override void Ekle(int eklenecekDeger)
{
    var sayac = new TekYonluBagliListe();
    // liste boş ise
    if (Ilk == null)
    {
        sayac.Veri = eklenecekDeger;
        sayac.Sonraki = null;
        Ilk = sayac;
    }
    else // bir veya daha fazla eleman mevcut ise
    {
        sayac = Ilk;
        var gecici = new TekYonluBagliListe();

        // ilk elemandan küçük olma durumu
        if (Ilk.Veri > eklenecekDeger)
        {
            gecici.Veri = eklenecekDeger;
            gecici.Sonraki = Ilk;
            Ilk = gecici;
        }
        else
        {
            // son eleman değilse ve sonraki eleman eklenecek sayidan küçükse
            // eklenecek eleman için doğru aralığı bulmaya çalışıyoruz.
            while (sayac.Sonraki != null && sayac.Sonraki.Veri < eklenecekDeger)
            {
                sayac = sayac.Sonraki;
            }
            gecici.Sonraki = sayac.Sonraki;
            gecici.Veri = eklenecekDeger;
            sayac.Sonraki = gecici;
        }
    }
    Boyut++; // bir eleman ekledik.
}
{% endhighlight %}

**Sil()**

{% highlight csharp %}
public override void Sil(int silinecekDeger)
{
    var sayac = Ilk;
    var gecici = new TekYonluBagliListe();

    if (Ilk.Veri == silinecekDeger)   // ilk eleman olma durumu
    {
        if (Ilk.Sonraki != null) // ikinci eleman var ise
        {
            Ilk = Ilk.Sonraki;
        }
        else // liste tek elemanlı ise
        {
            Ilk = null;
        }
    }
    else // ilk eleman değilse
    {
        // listede silinecek elemanı arıyoruz.
        while (sayac.Sonraki != null)
        {
            // elemanı bulduysak
            if (sayac.Sonraki.Veri == silinecekDeger && sayac.Sonraki != null)
            {
                sayac.Sonraki = sayac.Sonraki.Sonraki;
            }
            else // bulamadıysak sonraki elemana geçiyoruz.
            {
                sayac = sayac.Sonraki;
            }
        }
    }
}
{% endhighlight %}

Fonksiyonlarımızı yukarıdaki şekilde yazıp programımızı çalıştırdığımızda çıktımız şu şekilde olacaktır;  
{% highlight csharp %}
1. Eleman: 1
2. Eleman: 2
3. Eleman: 3
4. Eleman: 4

1. Eleman: 2
2. Eleman: 3
3. Eleman: 4

1. Eleman: 2
2. Eleman: 4

1. Eleman: 2
{% endhighlight %}

Böylelikle linux üzerinde ilk c# programımı yazmış oldum. Bir süredir C# ile haşır neşir olmadığım için C++ hala daha tanıdık/kolay gelse de güzel bir deneyim oldu.  


# **Dipnot:**
---------
Sevmek/sevmemek bir yana bizim meslek grubu için geçerli olmak üzere hiçbir teknolojiden tamamen kopmamak gerektiğine inanıyorum.
Hiçbir zaman dil/kütüphane fanatikliliğini doğru bulmadım.  

Önemli olanın öğrenmeyi öğrenmek ve o an geliştirilecek projede karar verecek kişi siz iseniz projeye/ekibe/geliştiricilere en uygun dili/kütüphaneleri seçmek/seçebilmek olduğuna inanıyorum.

Son olarak Rider projesi ile tamamen sanal w7'ye mecbur kalmadığımı görmek sevindirici. Son sürümünün ücretsiz olması dileğiyle bu konudan şimdilik bu kadar.
