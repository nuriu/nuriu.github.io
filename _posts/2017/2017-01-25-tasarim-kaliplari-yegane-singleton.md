---
layout: post
title: "Tasarım Kalıpları: Yegâne (Singleton)"
description: "Yegâne (Singleton) oluşturuluşsal tasarım kalıbı üzerine bir çalışma."
date: 2017-01-26
tags:
  - tasarım kalıpları
  - mimari & tasarım
  - java
  - oluşturuluşsal tasarım kalıpları
  - yegane
  - singleton
categories:
  - tasarım kalıpları
  - mimari & tasarım
  - java
---

## Nedir?

Yegâne tasarım kalıbı, diğer kalıplara göre en basit oluşturuluşsal tasarım kalıplarından birisidir.
Ayrıca nesne oluşturmak için en iyi yollardan biri olarak değerlendirilebilir.

Bu tasarım, bir sınıfınızdan sisteminiz dahilinde sadece tek bir nesneye ihtiyaç duyduğunuzda yardımcı olacaktır. Yani, ilgili sınıftan doğrudan örnek oluşturmaksızın, sadece bir nesne oluşturulmasına ve onun oluşturulmuş tek nesnesine erişime olanak sağlar.


## Uygulama

Uygulama olarak döndüreceği nesneye, nesneyi döndürecek fonksiyona ve ek olarak basit bir fonksiyona sahip
 bir sınıf oluşturacağız.

Daha sonrasında bu sınıfa bir dinamik olarak değiştireceğimiz mesaj ve o mesajı yazdıran bir fonksiyon ekleyeceğiz.

Örneğimiz olarak işleyeceğimiz yegane sınıfın sınıf diyagramı aşağıdaki şekildedir;

![Yegane uml sınıf diyagram örneği.](/resimler/2017/01/yegane.png)

> Yegane.java:

{% highlight java %}
public class Yegane {

    // geri döndüreceğimiz nesnemiz.
    private static Yegane nesne = null;

    // oluşturucumuzu özelleştirerek doğrudan nesne oluşturmanın önüne geçiyoruz.
    private Yegane() {}

    // nesnemizi geri döndürdüğümüz fonksiyonumuz.
    public static Yegane NesneyiGetir() {
        if (nesne == null) {      // nesnemiz oluşturulmamış ise;
            nesne = new Yegane(); // nesnemizi oluşturuyoruz.
        }

        return nesne;             // nesnemizi döndürüyoruz.
    }

    //
    public void MerhabaDe() {
        System.out.println("Merhaba!");
    }
}
{% endhighlight %}

Sınıfımızın en basit uygulaması için iki nesne oluşturup örnek fonksiyonlarımızı çağırıyoruz;

> TasarimDesenleri.java

{% highlight java %}
public class TasarimDesenleri
{
    public static void main(String[] args)
    {
        Yegane y = Yegane.NesneyiGetir();
        Yegane y2 = Yegane.NesneyiGetir();

        y.MerhabaDe();
        y2.MerhabaDe();
    }
}
{% endhighlight %}

Böylece temel anlamda Yegâne tasarım kalıbını uygulamış olduk.

Fakat örnek fonksiyonumuz tasarım kalıbının işlediğini anlamamız için yeterli değil.

O yüzden sınıfımızı ve main fonksiyonumuzu aşağıdaki şekilde değiştirelim;


> Yegane.java

{% highlight java %}
public class Yegane {

    // geri döndüreceğimiz nesnemiz.
    private static Yegane nesne = null;

    // dinamik olarak değiştireceğimiz mesajımız.
    public String mesaj = null;

    // oluşturucumuzu özelleştirerek doğrudan nesne oluşturmanın önüne geçiyoruz.
    private Yegane() {}

    // nesnemizi geri döndürdüğümüz fonksiyonumuz.
    public static Yegane NesneyiGetir() {
        if (nesne == null) {      // nesnemiz oluşturulmamış ise;
            nesne = new Yegane(); // nesnemizi oluşturuyoruz.
        }

        return nesne;             // nesnemizi döndürüyoruz.
    }

    // mesajımızı yazıdrmadan sorumlu fonksiyonumuz.
    public void MesajiYazdir() {
        System.out.println(mesaj);
    }
}
{% endhighlight %}

> TasarimDesenleri.java

{% highlight java %}
public class TasarimDesenleri
{
    public static void main(String[] args)
    {
        Yegane y = Yegane.NesneyiGetir();
        Yegane y2 = Yegane.NesneyiGetir();

        // y nesnemizin mesajını Mesaj 1 olarak oluşturuyoruz.
        y.mesaj = "Mesaj 1";

        // iki nesnenin de mesajlarını yazdırıyoruz.
        y.MesajiYazdir();
        y2.MesajiYazdir();
    }
}
{% endhighlight %}

Normal şartlarda yukarıdaki kod bloğunun çıktısının

```
Mesaj 1
null
```

gibi olması beklenebilir fakat kullandığımız tasarım kalıbı dolayısıyla çıktımız;

```
Mesaj 1
Mesaj 1
```

şeklinde olacaktır. Diğer bir deyişle sistemimizde sadece bir benzersiz Yegane nesnesi oluşacaktır.
