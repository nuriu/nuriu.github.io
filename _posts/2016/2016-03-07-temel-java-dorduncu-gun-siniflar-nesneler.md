---
layout: post
title: "Temel Java 4. Gün: Sınıflar, Nesneler"
tags:
- java
- sınıflar
- nesneler
categories:
- java
series: java
---

# Sınıflar
------------

Sınıfları nesneler tasarlamaya/oluşturmaya yarayan planlar gibi düşünebiliriz.
Bir bina için teknik proje (farklı bir ismi varsa bilmiyorum.) ne ise, nesnelerimiz hatta genel yazılım tasarımımız için sınıflar da o derece önemlidir.  

Eğer sınıflar hakkında daha fazla teorik bilgi/örneğe ihtiyaç duyarsanız önceki serilerden sınıflar ve nesneler kısımlarına bakabiliriz.
Böylelikle diller arasındaki benzerliği de keşfetmiş olursunuz. Bağlantılar;  

[Temel C++ - 4. Gün: Sınıflar, Nesneler][1]  
[Temel Python - 6. Gün: Nesneler ve Sınıflar][2]  
[Temel C# - 5. Gün: Sınıflar][3]  

Özetlemek gerekirse temel olarak sınıfları dört ana parçaya ayırabiliriz. Bunlar;  

1. Üye değişkenler (özellikler olarak da adlandırılabilir.)
2. Üye metodlar (davranışlar olarak da adlandırılabilir.)
3. Yapıcı metod (constructor)

Son madde olan yapıcı metodu üye metodlar içinde de sınıflayabiliriz.
Bu metodu özetle nesne oluşturulduğunda çağrılan metod olarak tanımlayabiliriz.  

**Not:** Java nesnelerin tam olarak ne zaman yok edildiğini/edileceğini tam olarak kestiremediğimiz çöpçü (garbage collector) altyapısına sahip bir dil olduğu için yıkıcı metod veya tam olarak eş değeri bildiğim kadarıyla bu dilde bulunmuyor.
(finalize, dispose gibi metodlar mevcut fakat aynı işi gördüğünden veya aynı mantığa sahip olduğundan emin olmadığım için onlardan bahsedemiyorum.)

Temel sınıf tanımlanışı;  
{% highlight java %}
erisimBelirteci class sinifIsmi {
    // üye değişkenlerimiz (özellikler)
    erisimBelirteci veriTipi degiskenAdi;
    .
    .
    .
    erisimBelirteci veriTipi degiskenAdi;
    
    // üye metodlarımız (davranışlar)
    erisimBelirteci dondurecegiVeriTipi metodAdi(parametre listesi) {
        // metod içeriği
    }
    .
    .
    .
    erisimBelirteci dondurecegiVeriTipi metodAdi(parametre listesi) {
        // metod içeriği
    }
    
    // yapıcı metodumuz
    erisimBelirteci sinifIsmi(){
        // yapıcı metodumuzun içeriği
    }
}
{% endhighlight %}


Şimdi yukarıdaki tanımlanışı örnek alarak basit bir kedi sınıfı oluşturalım;  

{% highlight java %}
package com.isiksistem;

// public erişim belirteçli Kedi isimli sınıfımız
public class Kedi {

    // üye değişkenlerimiz (özellikler)
    private int agirlik;    // private olduğu için sadece bu sınıfın metodları
    private String isim;    // tarafından erişilebilirler.

    // üye metodlarımız (davranışlar)
    public void agirligiBelirle(int kg) {
        this.agirlik = kg;
    }

    public void ismiBelirle(String isim) {
        this.isim = isim;
    }

    public int agirligiGetir() {
        return this.agirlik;
    }

    public String ismiGetir () {
        return this.isim;
    }

    // yapıcı metodumuz
    public Kedi() {
        System.out.println("Bir kedi nesnesi oluşturuldu.\n");
    }
}
{% endhighlight %}


# Nesneler
------------

Nesneleri sınıflar aracılığı ile oluşturulan özelliklere (değişkenlere) ve davranışlara (metodlara) sahip yapılar olarak düşünebiliriz.  

Örneğin yukarıdaki Kedi sınıfımızdan bir nesne oluşturalım;  
{% highlight java %}
package com.isiksistem;

public class Main {

    public static void main(String[] args) {
        // Tekir adında Kedi nesnemiz
        Kedi Tekir = new Kedi();

        // nesnemizin özelliklerini yine nesnemizin metodları aracılığı ile belirledik.
        Tekir.ismiBelirle("Tekir");
        Tekir.agirligiBelirle(10);

        // bilgilerimizi yazdırıyoruz.
        System.out.print(Tekir.ismiGetir() + " isimli " + Tekir.agirligiGetir() + " kg ağırlığında bir kedi nesnemiz mevcut.\n");
    }
}
{% endhighlight %}

Çıktımız şu şekilde olacaktır;  
{% highlight java %}
Bir kedi nesnesi oluşturuldu.

Tekir isimli 10 kg ağırlığında bir kedi nesnemiz mevcut.
{% endhighlight %}

Sınıflar ve nesnelerden şimdilik bu kadar. Sonraki bölümde görüşmek üzere.  

Sonraki Bölüm: Paketler, Kalıtım, Arayüzler:  
[Temel Java - 5. Gün: Paketler, Kalıtım, Arayüzler][4]  


[1]: /temel-cpp-dorduncu-gun-siniflar-nesneler/
[2]: /temel-python-altinci-gun-nesneler-ve-siniflar/
[3]: /temel-csharp-besinci-gun-siniflar/
[4]: /temel-java-besinci-gun-paketler-kalitim-arayuzler/