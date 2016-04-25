---
layout: post
title: Temel Java 
subtitle: "3. Gün: Karar Yapıları, Döngüler, Metodlar"
categories:
- java
---

# Karar Yapıları
---------------------------

Karar yapıları programın akışını değiştirmek, programı yönlendirmek gibi amaçlar ile kullanılan yapılardır.
Bu yapıları basitçe dörde ayırabiliriz;  

1. if
2. if else
3. if else if ... else
4. switch

**If**

Belirtilmiş bir şartın sağlanması durumunda çalışacak kod blokları için kullanılır.  
Tanımlanışları;  

{% highlight java %}
if(şart) {
    // karşılaştırma/şart sonucu true olarak geriye dönerse
    // çalıştırılacak kodlar
}
{% endhighlight %}

Karar verme yapılarında tek şart kısmına ve/veya mantıksal operatörlerini kullanarak birden fazla şart yazabilirsiniz. Örneğin;  

{% highlight java %}
// ve
if(şart && şart2) {
    // şart ve şart 2 sonuçları true olarak geriye dönerse
    // çalıştırılacak kodlar
}
// veya
if(şart || şart2) {
    // şart veya şart 2 sonuçlarından biri true olarak geriye dönerse
    // çalıştırılacak kodlar
}
{% endhighlight %}

**If Else**

Belirtilmiş bir şartın sağlanması ve sağlanmaması durumu olmak üzere iki yönden birine yönlendirmek için kullanılır.  
Tanımlanışları;  

{% highlight java %}
if(şart) {
    // karşılaştırma/şart sonucu true olarak geriye dönerse
    // çalıştırılacak kodlar
}
else {
    // karşılaştırma/şart sonucu false olarak geriye dönerse
    // çalıştırılacak kodlar
}
{% endhighlight %}

**If Else If ... Else**

Belirtilmiş şartların sayısınca programı yönlendirmek için kullanılır.  
Tanımlanışları;  

{% highlight java %}
if(şart) {
    // şart sonucu true olarak geriye dönerse
    // çalıştırılacak kodlar
}
else if(şart 2) {
    // şart 2 sonucu true olarak geriye dönerse
    // çalıştırılacak kodlar
}
else {
    // şart ve şart 2 sonucu false olarak geriye dönerse
    // çalıştırılacak kodlar
}
{% endhighlight %}

Bu yapıda ilk if ifadesinden sonra istediğimiz kadar else if ile kontrol yapabiliriz.
Fakat bu yapının abartılması her dilde kod okunabilirliğini azalttığı için ben, 2-3 şarttan fazlası için kullanmamayı, bunun yerine daha fazla şartın/kontrolün olduğu durumlarda switch yapısını kullanmayı tercih ediyorum.
Herkese de aynısını öneriyorum.   

**Switch**

Belirtilmiş şartlar/durumlar aracılığıyla programa yön vermek için kullanılır.
Bazı durumlarda bir önceki If Else If ... Else yapısının yerine daha iyi bir çözüm olarak kullanılabilir.   
Tanımlanışları;  

{% highlight java %}
switch(ifade) {
    case durum1:
       // durum1 geçerliyse çalışacak kodlar
       break;
    case durum2:
       // durum2 geçerliyse çalışacak kodlar
       break;
    // NOT: istediğiniz kadar case ifadesi kullanabilirsiniz.
    default:
       // hiçbir durum geçerli değilse çalışacak kodlar
       break;
}
{% endhighlight %}

Tüm karar yapılarını tek tek örneklemek yerine yazı sonundaki basit bir hesap makinesi örneği aracılığıyla açıklamayı hem daha sade oluşu hem de kaynak kod içerisinde nerelerde, nasıl, hangi amaçlar için kullanıldığını gösterdiği için daha doğru buluyorum. O yüzden açıklamaları örneğe bırakıyorum.

# Döngüler
---------------------------

Belirli şartlar gerçekleştiği sürece kendi kod bloğunu çalıştıran yapılara döngüler denir.
Aynı/benzer işlemleri birden fazla yaparken kod tekrarından kaçınmak / kod tekrarını azaltmak için kullanılırlar.

Dört döngü türü vardır. Bunlar;  

1. for
2. while
3. do while
4. foreach

**For**

Üç temel kısımdan oluşur; *tanımlama*, *koşul*, *güncelleme*.  
*Tanımlama* döngüye ilk girişte çalışır. (Tek sefer)  
*Koşul* her döngü işleminde kontrol edilir.  
*Güncelleme* ise her döngü işleminden sonra, koşul kontrolünden önce çalışır.

Tanımlanışları;  
{% highlight java %}
for(tanımlama; koşul; güncelleme)
{
   // Kodlar, ifadeler
}
{% endhighlight %}

Örnek;  

{% highlight java %}
for(int i = 0; i < 5; i++) {
   // i değişkenini 0 olarak tanımlayan
   // i değişkenini her döngü işleminde 1 arttıran
   // ve i değişkeni 5'ten küçük olduğu sürece çalışacak olan
   // for döngümüz
}
{% endhighlight %}

**While**

For döngüsüne göre daha sadedir. Sadece koşul kısmından oluşur.
Koşul doğru olduğu sürece kod bloğunu işler.

Tanımlanışları;  
{% highlight java %}
while (koşul) {
   // Kodlar, ifadeler
}
{% endhighlight %}

Eğer for için verdiğimiz örneği while döngüsüne dönüştürmek istersek şöyle bir ifademiz olur;  
{% highlight java %}
int i = 0;
while (i < 5) {
   // Kodlar, ifadeler
   i++;
}
{% endhighlight %}

Her ne kadar iki yapıyı da aynı durumlar için kullanabilirsek de şu ana kadar tecrübe ettiğim kadarıyla genelde yerleri biraz farklıdır.
Belirli bir süre kodlama ile uğraştıktan sonra döngü kullanacağınız zaman hangisinin daha mantıklı olduğunu anlar hale geliyorsunuz.

**Do While**

Bu döngü yapısının while döngüsünden tek farkı döngü bloğuna her durumda en az bir kez girip, bloğu çalıştırmasıdır.  

Tanımlanışları;  
{% highlight java %}
// yap
do {
   // Kodlar, ifadeler
} while (koşul); // koşul sağlandığı sürece
{% endhighlight %}

Özetle bu ifade önce işi yapmaya başlar, ilk işten sonra ise kontrol etmeye başlar.

**Foreach**

Bir de bu döngülere ek olarak Java 5 ile birlikte gelen gelişmiş for döngüsü (foreach olarak da adlandırılır) genellikle veri koleksiyonlarında gezinme amaçları ile kullanılır.

Tanımlanışları;
{% highlight java %}
for(tanımlama : koleksiyon)
{
   // Kodlar, ifadeler
}
{% endhighlight %}

Önceki gün yaptığımız dizi örneğini buraya taşıyacak olursak şöyle olacaktır;
{% highlight java %}
package com.isiksistem;

public class Main {

    public static void main(String[] args) {
        String[] doksanAltililar =  { "Mehmet Emekli",
                                      "Ahmet Urgancı",
                                      "Şevket Keyifsiz" };

        // doksanAltililar dizimizde gezmek için doksanAltili isimli
        // bir değişken tanımlıyoruz ve her aşamada onu ekrana yazdırıyoruz.
        for (String doksanAltili:
             doksanAltililar) {
            System.out.println(doksanAltili);
        }
    }
}
{% endhighlight %}

Çıktımız yine aynı olacaktır;  
{% highlight java %}
Mehmet Emekli
Ahmet Urgancı
Şevket Keyifsiz
{% endhighlight %}

**Döngü Kontrol İfadeleri**   

| İfade    &nbsp;| Açıklama                                                                                                            |
|----------|---------------------------------------------------------------------------------------------------------------------|
| continue &nbsp;| bu ifade kullanıldığında döngü, bu ifadeden sonraki kodları atlar ve koşul kontrolünü yaparak sonraki işleme geçer. |
| break    | bu ifade çalıştığında döngü tamamen sonlandırılır yani döngüden çıkılır.    

# Metodlar
---------------------------

Metodlar kaynak kodların okunabilirliğini artırmak, kod tekrarını azaltmak gibi verimli amaçlar için kullanılmaktadırlar.
Kaynak kodunuzun tamamını yapboz olarak düşünürseniz metodlar sizin yapboz parçalarınız olacaktır.
Tek farkı bu parçaları (metodları) istediğiniz yerde (erişim şartlarına uyulması kaydıyla) kullanabilmenizdir.  

Tanımlanışları;
{% highlight java %}
erişimBelirteci veriDonusTipi metodIsmi (parametre listesi) {
 // metod kod bloğu
}
{% endhighlight %}

Çağırılışları;
{% highlight java %}
metodIsmi(gönderilecek parametre listesi);
{% endhighlight %}

Örnek metodlar;
{% highlight java %}
public static int ikiSayiyiTopla(int birinciSayi, int ikinciSayi) {
    // parametre olarak gönderilen iki sayıyı toplayıp
    // fonksiyonun çağrıldığı yere gönderiyoruz.
    return (birinciSayi + ikinciSayi);
}

public static int ikiSayiyiCarp(int birinciSayi, int ikinciSayi) {
    // parametre olarak gönderilen iki sayıyı çarpıp
    // fonksiyonun çağrıldığı yere gönderiyoruz.
    return (birinciSayi * ikinciSayi);
}
{% endhighlight %}

Bu metodları şu şekilde çağırdığımızda;
{% highlight java %}
System.out.println("5 + 10 = " + ikiSayiyiTopla(5, 10));
System.out.println("5 * 10 = " + ikiSayiyiCarp(5, 10));
{% endhighlight %}

Çıktımız şu olacaktır;
{% highlight java %}
5 + 10 = 15
5 * 10 = 50
{% endhighlight %}


# Hesap Makinesi Örneği
------------------------

Şimdi şu ana kadar öğrenilen bilgiler ile iki tamsayı ile işlem yapacak olan basit bir hesap makinesi yazalım.

Amaç: İki sayı arasında 4 işlem yapabilmek.  
Çözüm: Amacı parçalara bölmek;  

Kullanacağımız veriler: iki tam sayı   
(diğer deyişle değişkenlerimiz: int birinciSayi, int ikinciSayi)  

Yapacağımız işlemler;  (diğer deyişle metodlarımız;)

1. Toplama ( public static int topla(int birinciSayi, int ikinciSayi) )
2. Çıkarma ( public static int cikar(int birinciSayi, int ikinciSayi) )
3. Çarpma ( public static int carp(int birinciSayi, int ikinciSayi) )
4. Bölme ( public static int bol(int birinciSayi, int ikinciSayi) )

Not: Java'da derleyici içinde girdi almak uğraştırıcı ve şu an ki seviyeye göre zor olduğu için girdimizi sadece kendimiz için amatörce yapacağız. 

Önce metodlarımızı yazalım;  
{% highlight java %}
package com.isiksistem;

public class Main {

    public static void main(String[] args) {

    }

    public static int topla(int birinciSayi, int ikinciSayi) {
        return (birinciSayi + ikinciSayi);      // iki sayıyı toplayıp geri gönderiyoruz.
    }

    public static int carp(int birinciSayi, int ikinciSayi) {
        return (birinciSayi * ikinciSayi);      // iki sayıyı çarpıp geri gönderiyoruz.
    }

    public  static int cikar(int birinciSayi, int ikinciSayi) {
        if (birinciSayi > ikinciSayi)           // birinci sayı büyük ise
            return (birinciSayi - ikinciSayi);  // birinciden ikinciyi çıkarıp geri gönderiyoruz.
        else if (ikinciSayi > birinciSayi)      // ikinci sayı büyük ise
            return (ikinciSayi - birinciSayi);  // ikinciden birinciyi çıkarıp geri gönderiyoruz.
        else                                    // geriye kalan tek durum iki sayının eşit olması
            return 0;                           // bu durumda da geriye 0 gönderiyoruz.
    }

    public static int bol(int birinciSayi, int ikinciSayi) {
        if (birinciSayi > ikinciSayi)           // birinci sayı büyük ise
            return (birinciSayi / ikinciSayi);  // birinciyi ikinciye bölüp geri gönderiyoruz.
        else if (ikinciSayi > birinciSayi)      // ikinci sayı büyük ise
            return (ikinciSayi / birinciSayi);  // ikinciyi birinciye bölüp geri gönderiyoruz.
        else                                    // geriye kalan tek durum iki sayının eşit olması
            return 1;                           // bu durumda da geriye 1 gönderiyoruz.
    }
}

{% endhighlight %}

Şimdi de ana fonksiyonumuza karar verme yapılarımızı ekleyelim;
{% highlight java %}
package com.isiksistem;

public class Main {

    public static void main(String[] args) {
        int sonuc = 0; // yazdıracağımız sonuç değişkenimiz.

        // bu değişken değerlerini istediğiniz tam sayılar ile değiştirin
        int sayi = 20, sayi2 = 2;

        // işlemlerimiz
        String[] islemler = {"Toplama", "Çıkarma", "Çarpma", "Bölme"};
        // Bu değişkeni yukarıdaki değerlerden yapacağınız işleme göre eşitleyin.
        String islem = islemler[0]; // şu an 0. indis yani Toplama işlemini seçtik.

        switch (islem) {
            case "Toplama":     // islem değeri "Toplama" ise (yani islemler[0] ile aynı ise)
                sonuc = topla(sayi, sayi2);
                System.out.println(sonuc);
                break;
            case "Çıkarma":     // islem değeri "Çıkarma" ise (yani islemler[1] ile aynı ise)
                sonuc = cikar(sayi, sayi2);
                System.out.println(sonuc);
                break;
            case "Çarpma":      // islem değeri "Çarpma" ise (yani islemler[2] ile aynı ise)
                sonuc = carp(sayi, sayi2);
                System.out.println(sonuc);
                break;
            case "Bölme":       // islem değeri "Bölme" ise (yani islemler[3] ile aynı ise)
                sonuc = bol(sayi, sayi2);
                System.out.println(sonuc);
                break;
            default:            // islem değeri yanlış belirtilmiş ise
                System.out.println("Doğru bir işlem tipi belirtmediniz.");
                break;
        }
    }
}
{% endhighlight %}


Ve bunları birleştirelim. Son çalışır sürümümüz şu şekilde;  

{% highlight java %}
package com.isiksistem;

public class Main {

    public static void main(String[] args) {
        int sonuc = 0; // yazdıracağımız sonuç değişkenimiz.

        // bu değişken değerlerini istediğiniz tam sayılar ile değiştirin
        int sayi = 20, sayi2 = 2;

        // işlemlerimiz
        String[] islemler = {"Toplama", "Çıkarma", "Çarpma", "Bölme"};
        // Bu değişkeni yukarıdaki değerlerden yapacağınız işleme göre eşitleyin.
        String islem = islemler[0]; // şu an 0. indis yani Toplama işlemini seçtik.

        switch (islem) {
            case "Toplama":     // islem değeri "Toplama" ise (yani islemler[0] ile aynı ise)
                sonuc = topla(sayi, sayi2);
                System.out.println(sonuc);
                break;
            case "Çıkarma":     // islem değeri "Çıkarma" ise (yani islemler[1] ile aynı ise)
                sonuc = cikar(sayi, sayi2);
                System.out.println(sonuc);
                break;
            case "Çarpma":      // islem değeri "Çarpma" ise (yani islemler[2] ile aynı ise)
                sonuc = carp(sayi, sayi2);
                System.out.println(sonuc);
                break;
            case "Bölme":       // islem değeri "Bölme" ise (yani islemler[3] ile aynı ise)
                sonuc = bol(sayi, sayi2);
                System.out.println(sonuc);
                break;
            default:            // islem değeri yanlış belirtilmiş ise
                System.out.println("Doğru bir işlem tipi belirtmediniz.");
                break;
        }
    }

    public static int topla(int birinciSayi, int ikinciSayi) {
        return (birinciSayi + ikinciSayi);      // iki sayıyı toplayıp geri gönderiyoruz.
    }

    public static int carp(int birinciSayi, int ikinciSayi) {
        return (birinciSayi * ikinciSayi);      // iki sayıyı çarpıp geri gönderiyoruz.
    }

    public  static int cikar(int birinciSayi, int ikinciSayi) {
        if (birinciSayi > ikinciSayi)           // birinci sayı büyük ise
            return (birinciSayi - ikinciSayi);  // birinciden ikinciyi çıkarıp geri gönderiyoruz.
        else if (ikinciSayi > birinciSayi)      // ikinci sayı büyük ise
            return (ikinciSayi - birinciSayi);  // ikinciden birinciyi çıkarıp geri gönderiyoruz.
        else                                    // geriye kalan tek durum iki sayının eşit olması
            return 0;                           // bu durumda da geriye 0 gönderiyoruz.
    }

    public static int bol(int birinciSayi, int ikinciSayi) {
        if (birinciSayi > ikinciSayi)           // birinci sayı büyük ise
            return (birinciSayi / ikinciSayi);  // birinciyi ikinciye bölüp geri gönderiyoruz.
        else if (ikinciSayi > birinciSayi)      // ikinci sayı büyük ise
            return (ikinciSayi / birinciSayi);  // ikinciyi birinciye bölüp geri gönderiyoruz.
        else                                    // geriye kalan tek durum iki sayının eşit olması
            return 1;
    }
}
{% endhighlight %}

Bu örneği derleyip çalıştırdığımızda çıktımız şu şekilde oluyor;

{% highlight java %}
22
{% endhighlight %}

sayi = 20 ve 
sayi2 = 2 olduğundan toplamları 20 + 2 = 22 oldu. Diğer fonksiyonları test etmeyi de size bırakıyorum.  

Ben testlerde bir soruna rastlamadım fakat gözden kaçırdığım şeyler olabilir.
Böyle bir şey fark ederseniz bana yukarıda sağda bulunan bağlantılardan ulaşıp bilgilendirirseniz sevinirim.  

Bu yazıdan da bu kadar. Teşekkürler.  

Sonraki Bölüm: Sınıflar, Nesneler:  
[Temel Java - 4. Gün: Sınıflar, Nesneler][1]  


[1]: /java/2016/03/07/temel-java-dorduncu-gun-siniflar-nesneler.html