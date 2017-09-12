---
title: "Temel Java 5. Gün: Paketler, Kalıtım, Arayüzler"
date: 2016.03.09
tags:
- java
- paketler
- kalıtım
- arayüzler
categories:
- java
---

## Paketler

Paketler Java'da genellikle isim çatışmalarını engellemek ve sınıfların, arayüzlerin ve benzeri yapıların aranmasını / bulunmasını yani organizasyonunu kolaylaştırmak / iyileştirmek için kullanılırlar.

Uzun lafın kısası; paket ilişkili yapıların (ki bunlar sınıflar, arayüzler vb. yapılar) kümelendirilmesi/gruplandırılması olarak tanımlanabilir. Bu kümelendirme/gruplandırma ile birlikte bir nevi erişim üzerinde koruma da sağlanmış olur.  

## Paket Oluşturmak

Geliştirme aracı (IDE) kullanmasaydık paket oluşturma işlemi için komut satırına;  

``` bash
javac -d hedefKlasor dosyaAdi.java
```
bu koda uygun bir komut yazıp çalıştırıyoruz demem gerekiyordu fakat aksi söz konusu olduğu için buna gerek kalmadı.

Kullandığınız geliştirme aracında (IDEA, Eclipse vb.) kaynak kod dosyalarınızın olduğu kısımda uygun yere sağ tıkladığınızda yeni sınıf (class), paket (package) ekleme imkanı veren seçenekler göreceksiniz.

Paketlerini oluşturmak için bu seçenekleri kullanabilirsiniz.

Örnek olarak dünkü Kedi sınıfımızın kaynak kod dosyasını yeni oluşturduğumuz hayvan isimli bir paketin içine atacak olursak, bu sınıftan nesne oluşturabilmemiz için o paketi nesneyi oluşturacağımız kaynak koda dahil etmemiz gerekiyor.

Benim örneğime göre yapacak olursam şu satırı ilk satırlara eklemem gerekiyor (ki çoğu geliştirme aracı bu işlemi oldukça kolaylaştırıyor, örneğin benim kullandığım araç, sınıfı pakedin içine taşır taşımaz gerekli düzenlemeleri otomatik olarak yaptı.);  

``` java
import com.isiksistem.hayvan.Kedi;
```

## Kalıtım

Kalıtım basitçe anlatmak gerekirse bir sınıfın özelliklerini ve davranışlarını kullanacak başka bir sınıf türetme işlemidir. Bunu babanın çocuğuna bıraktığı miras gibi de düşünebilirsiniz.

(Örneğin alt sınıflar hakkında konuşulur iken miras alınan özellik/değişken/metod/fonksiyon gibi terimler/deyimler duyabilir/görebilirsiniz.)

Örnek olarak dün verdiğimiz örneği geliştireceğiz. Kalıtımı temel olarak anlamamız için 1 ana sınıfımızın (Hayvan) ve 2 türemiş sınıfımızın (Kedi, Kopek) olması bu aşamada bizim için yeterli.

Öyleyse örneğe geçelim;  

``` java Hayvan.java
package com.isiksistem;

// sınıflar türeteceğimiz soyut sınıfımız
// soyut (abstract) sınıflar doğrudan nesnesi oluşturulamayan sınıflardır
// nesne tabanlı tasarımda genelleme mantığı üzerine büyük öneme sahiptir
public abstract class Hayvan {

    // üye değişkenlerimiz (özellikler)
    // private olduğu için sadece bu sınıfın metodları
    // tarafından erişilebilirler.
    private int agirlik;
    private String isim;

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
    public Hayvan() {
        System.out.println("Bir hayvan nesnesi oluşturuldu.");
    }
}
```

``` java Kedi.java
package com.isiksistem;

// Kedi isimli sınıfımızı Hayvan isimli sınıfımızdan türettik.
// (extends mirasAlinacakSinifinAdi kuralına göre)
// Not: Hayvan isimli sınıfımız soyut olmasaydı
// burada değişen bir şey olmayacaktı.
// Yani eğer soyut kavramına takıldıysanız serimiz adı üstünde
// temel java olduğu şimdilik bu konuya takılmanıza gerek yok.
public class Kedi extends Hayvan {
    // sınıfımıza ek içerik ekleme özgürlüğüne hala sahibiz
    // fakat basitliğin sürmesi açısından
    // sadece kedi sınıfından bir nesne oluşturulduğu
    // mesajını yazdırmak şimdilik bizim için yeterli

    // yapıcı metodumuz
    public Kedi() {
        System.out.println("Bir kedi nesnesi oluşturuldu.\n");
    }
}
```

``` java Kopek.java
package com.isiksistem;

// Kopek isimli sınıfımızı Hayvan isimli sınıfımızdan türettik.
// (extends mirasAlinacakSinifinAdi kuralına göre)
// Not: Hayvan isimli sınıfımız soyut olmasaydı
// burada değişen bir şey olmayacaktı.
// Yani eğer soyut kavramına takıldıysanız serimiz adı üstünde
// temel java olduğu şimdilik bu konuya takılmanıza gerek yok.
public class Kopek extends Hayvan {
    // sınıfımıza ek içerik ekleme özgürlüğüne hala sahibiz
    // fakat basitliğin sürmesi açısından
    // sadece köpek sınıfından bir nesne oluşturulduğu
    // mesajını yazdırmak şimdilik bizim için yeterli

    // yapıcı metodumuz
    public Kopek() {
        System.out.println("Bir köpek nesnesi oluşturuldu.\n");
    }
}
```

``` java Main.java
// ana pakedimiz (projeyi oluştururken seçtiğimiz pakedimiz)
package com.isiksistem; // dolayısı ile sizde farklı olacaktır.

// bu örnekte ana paket dışında bir paket kullanmadık.
// dolayısı ile Hayvan sınıfı ile paketler başlığı altında
// örneğini verdiğim hayvan pakedini karıştırmamaya çalışın.

public class Main {

    public static void main(String[] args) {

        // Tekir adında Kedi nesnemiz
        Kedi Tekir = new Kedi();
        Tekir.ismiBelirle("Tekir");
        Tekir.agirligiBelirle(2);

        // Karabaş adında Kopek nesnemiz
        Kopek Karabas = new Kopek();
        Karabas.ismiBelirle("Karabaş");
        Karabas.agirligiBelirle(5);

        // bilgilerimizi yazdırıyoruz.
        System.out.println(Tekir.ismiGetir() + " isimli " +
                           Tekir.agirligiGetir() +
                           "kg ağırlığında kedi nesnemiz mevcut.");

        System.out.println(Karabas.ismiGetir() + " isimli " +
                           Karabas.agirligiGetir() +
                           "kg ağırlığında köpek nesnemiz mevcut.");
    }
}
```

Örneği tamamlayıp çalıştırdığımızda çıktımız şu şekilde olacak;  
``` bash
Bir hayvan nesnesi oluşturuldu.
Bir kedi nesnesi oluşturuldu.

Bir hayvan nesnesi oluşturuldu.
Bir köpek nesnesi oluşturuldu.

Tekir isimli 2 kg ağırlığında bir kedi nesnemiz mevcut.
Karabaş isimli 5 kg ağırlığında bir köpek nesnemiz mevcut.
```

Gördüğünüz üzere Hayvan sınıfından türetilmiş sınıfların herhangi birinden nesne yarattığımızda o sınıfın yapıcı metodundan önce miras alınan üst sınıfın yapıcı metodu çağrılır.
Bu yüzden "Bir kedi nesnesi oluşturuldu." ve "Bir köpek nesnesi oluşturuldu." mesajlarından önce "Bir hayvan nesnesi oluşturuldu." mesajımız gelmekte.  


## Arayüzler

Yukarıdaki örnekte bir sınıfın özelliklerini ve davranışlarını kullanmak için başka sınıflar türetmeyi ve türetilen sınıflardan ana sınıfın sahip olduğu (teknik olarak türetilmiş sınıflar da aynı özellik ve metodlara sahip olmuş oluyor.) özelliklere ve davranışlara erişmeyi gördük.

Peki ya yeni sınıfımıza sadece yeni davranışlar (ki buna yetenekler de denilir) kazandırmak istersek?  

İşte burada devreye arayüzler giriyor. Arayüzler sınıflara oldukça benzerler. Tanımlanışları şu şekildedir;  

``` java
erisimBelirteci interface arayuzAdi {
    // arayuz icerigi
}
```

Kullanılma mantığını göstermek üzere yukarıdaki örneğimize basit bir arayüz ekliyorum;  

``` java hareketEdebilen.java
package com.isiksistem;

public interface hareketEdebilen {
    // arayüzümüze istediğimiz kadar metod ekleyebiliriz.
    // sınıflardan farklı olarak burada
    // fonksiyonun içeriğini tanımlamıyoruz.
    void hareketEt();
}
```

Diğer kaynak kodlarımızı da şu şekilde düzenliyorum ve sadeleştiriyorum;  

``` java Hayvan.java
package com.isiksistem;

// implements arayuzAdi ile sınıfımıza
// hareketEt davranışını (metodunu) kazandırmış olduk.
public abstract class Hayvan implements hareketEdebilen {

    // üye değişkenlerimiz (özellikler)
    // private olduğu için sadece bu sınıfın metodları
    // tarafından erişilebilirler.
    private int agirlik;
    private String isim;

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
    public Hayvan() {
        System.out.println("Bir hayvan nesnesi oluşturuldu.");
    }
}
```

``` java Kedi.java
package com.isiksistem;

// Kedi isimli sınıfımızı Hayvan isimli sınıfımızdan türettik.
// (extends mirasAlinacakSinifinAdi kuralına göre)
// Not: Hayvan isimli sınıfımız soyut olmasaydı
// burada değişen bir şey olmayacaktı.
// Yani eğer soyut kavramına takıldıysanız serimiz adı üstünde
// temel java olduğu şimdilik bu konuya takılmanıza gerek yok.
public class Kedi extends Hayvan {
    // sınıfımıza ek içerik ekleme özgürlüğüne hala sahibiz
    // fakat basitliğin sürmesi açısından
    // sadece kedi sınıfından bir nesne oluşturulduğu
    // mesajını yazdırmak şimdilik bizim için yeterli

    // yapıcı metodumuz
    public Kedi() {
        System.out.println("Bir kedi nesnesi oluşturuldu.\n");
    }

    @Override
    public void hareketEt() {
        System.out.println("Bir kedi nesnesi hareket etti.\n");
    }
}
```

``` java Kopek.java
package com.isiksistem;

// Kopek isimli sınıfımızı Hayvan isimli sınıfımızdan türettik.
// (extends mirasAlinacakSinifinAdi kuralına göre)
// Not: Hayvan isimli sınıfımız soyut olmasaydı
// burada değişen bir şey olmayacaktı.
// Yani eğer soyut kavramına takıldıysanız serimiz adı üstünde
// temel java olduğu şimdilik bu konuya takılmanıza gerek yok.
public class Kopek extends Hayvan {
    // sınıfımıza ek içerik ekleme özgürlüğüne hala sahibiz
    // fakat basitliğin sürmesi açısından
    // sadece köpek sınıfından bir nesne oluşturulduğu
    // mesajını yazdırmak şimdilik bizim için yeterli

    // yapıcı metodumuz
    public Kopek() {
        System.out.println("Bir köpek nesnesi oluşturuldu.\n");
    }

    @Override
    public void hareketEt() {
        System.out.println("Bir köpek nesnesi hareket etti.\n");
    }
}
```

``` java Main.java
// ana pakedimiz (projeyi oluştururken belirttiğimiz pakedimiz)
package com.isiksistem; // dolayısı ile sizde farklı olacaktır.

public class Main {

    public static void main(String[] args) {

        Kedi Tekir = new Kedi();
        Kopek Karabas = new Kopek();

        // arayüz ile kazandığımız davranışlara (metodlara) erişiyoruz.
        Tekir.hareketEt();
        Karabas.hareketEt();
    }
}
```

Ve son çıktımız;  

``` bash
Bir hayvan nesnesi oluşturuldu.
Bir kedi nesnesi oluşturuldu.

Bir hayvan nesnesi oluşturuldu.
Bir köpek nesnesi oluşturuldu.

Bir kedi nesnesi hareket etti.

Bir köpek nesnesi hareket etti.
```

Bu bölümle birlikte temel java serimizdeki ağır konuları bitirmiş sayılırız. Şimdilik bu kadar.

**Dipnot:** Bir sınıftan başka bir sınıf türetilebildiği (diğer bir deyişle bir sınıf başka bir sınıfı genişletebildiği gibi) arayüzler arasında da bu işlem mümkündür ve yine extends ifadesi ile gerçekleştirilir.  

Sonraki Bölüm: Sıradışı Durum (İstisna) İşleme:  
[Temel Java - 6. Gün: Sıradışı Durum (İstisna) İşleme][1]  


[1]: /2016/03/10/temel-java-altinci-gun-siradisi-durum-istisna-isleme/
