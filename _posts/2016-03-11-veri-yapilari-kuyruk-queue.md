---
layout: post
title: Veri Yapıları
subtitle: 'Kuyruk (Queue)'
date: 2016-03-11 19:00:00 +0200
categories:
  - java
  - veriyapilari
---

# Giriş
---------

Kuyruklar her ne kadar çok benzese de yığınların aksine ilk giren ilk çıkar (fifo) diye adlandırılan bir işleyişe sahiptirler.
Şu an yetişen nesillerin pek bilmediği / görmediği vakti zamanında az bekletmeyen ekmek kuyrukları bu yapıya en güzel örneklerdendir.
Bunun dışında araç kuyrukları ve fabrikalardaki bant yapıları da yapının gözümüzde daha iyi canlanması için örnek olarak verilebilir.

Kuyruk yapısını şu şekilde modelleyerek gösterebiliriz;  

![Kuyruk Yapısı](/../resimler/kuyrukYapisi.png)

Yığın yapımızda olduğu gibi kuyruk yapımızda da belli başlı metodlarımız mevcut. Bunlar;  

- ekle() (enqueue()) − kuyruğa eleman eklemek için kullanılacak fonksiyon.  
- cikart() (dequeue()) − kuyruktan önündeki elemanı kuyruktan çıkartmak için kullanılacak fonksiyon.  
- gozat() (peek()) − kuyruğun önündeki elemanı gönderen fonksiyon.  

# Uygulama
------------

Yığın örneğimizde olduğu gibi bu örneğimizi de dizileri kullanarak gerçekleştireceğiz.
Uygulamamız *kuyruk.java* ve *Main.java* olmak üzere iki dosyadan oluşan bir konsol uygulaması olacak.

Sınıfımız; 
 
> kuyruk.java  

{% highlight java %}
package com.isiksistem;

public class kuyruk {
    private int on, arka; // dizimizin önü ve arkası (kuyruğa göre ters işler)
    private int[] veriler; // verilerimiz
    private int kapasite; // kuyruk kapasitemiz

    public kuyruk(int boyut) {
        // kuyruğu oluşturacağımız metod
    }

    public void ekle(int deger) {
        // kuyruğa eleman ekleyeceğimiz metod
    }

    public int cikart() {
        // kuyruktan eleman çıkaracağımız metod
    }

    public int gozat() {
        // kuyruğun en önündeki elemanı gönderecek metod
    }

    // yığın sınıfımızda da kullandığımız hata sınıfımız ve yapıcı metodumuz.
    public class kuyrukHatasi extends RuntimeException {
        public kuyrukHatasi(String bilgi) {
            super(bilgi);
        }
    }
}
{% endhighlight %}

Buradan itibaren metod-metod ilerleyelim.
Öncelikle kuyruğumuzu oluşturduğumuz yapıcı metodumuz;  

{% highlight java %}
public kuyruk(int boyut) {
    on = -1;
    arka = 0;
    kapasite = boyut;
    veriler = new int[boyut];
}
{% endhighlight %}

Ekleme metodumuz;   

{% highlight java %}
public void ekle(int deger) {
    if (on <= kapasite - 1) { // kuyruk dolu değilse
        on++; // dizinin önü bir artıyor.
        veriler[on] = deger; // elemanı kuyruğa ekliyoruz.
    }
    else {
        throw new kuyrukHatasi("Kuyruk dolu.");
    }
}
{% endhighlight %}

Çıkartma metodumuz;

{% highlight cpp %}
public int cikart() {
    if (on >= arka) { // kuyruk bitmediyse

        int d = veriler[arka++]; // çıkartılacak değeri geçici değişkenimize atıyoruz.
        veriler[arka - 1] = 0; // çıkartılacak değerin yerini 0'a eşitliyoruz.

        if(arka > on) // son elemana kadar çıkarttığımızda
        {
            // yeni eleman ekleyebilmemiz için ön ve arkayı sıfırlıyoruz.
            arka = 0;
            on = -1;
        }

        return d; // geçici değişkenimizi gönderiyoruz.
    }
    else {
        throw new kuyrukHatasi("Kuyruk boş.");
    }
}
{% endhighlight %}

Gözatma metodumuz;

{% highlight cpp %}
public int gozat() {
    if (on >= arka) { // kuyruk boş değilse
        return veriler[arka]; // kuyruğun önündeki (dizinin değil) elemanımızı gönderiyoruz.
    }
    else {
        throw new kuyrukHatasi("Kuyruk boş.");
    }
}
{% endhighlight %}

Son olarak kuyruk nesnemizi oluşturduğumuz ve testlerimizi yaptığımız ana dosyamız;  

> Main.java  

{% highlight java %}
package com.isiksistem;

public class Main {

    public static void main(String[] args) {
        // 3 elemanlık kuyruğumuz
        kuyruk kuyrugumuz = new kuyruk(3);

        // ekleme ve gözatma testleri
        kuyrugumuz.ekle(1);
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());
        kuyrugumuz.ekle(2);
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());
        kuyrugumuz.ekle(3);
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());

        // çıkarma ve gözatma testleri
        System.out.println("\nÇıkan eleman: " + kuyrugumuz.cikart());
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());
        System.out.println("Çıkan eleman: " + kuyrugumuz.cikart());
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());
        System.out.println("Çıkan eleman: " + kuyrugumuz.cikart());

        // ekleme ve gözatma testleri 2
        kuyrugumuz.ekle(1);
        System.out.println("\nÖndeki eleman: " + kuyrugumuz.gozat());
        kuyrugumuz.ekle(2);
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());
        kuyrugumuz.ekle(3);
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());

        // çıkarma ve gözatma testleri 2
        System.out.println("\nÇıkan eleman: " + kuyrugumuz.cikart());
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());
        System.out.println("Çıkan eleman: " + kuyrugumuz.cikart());
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());
        System.out.println("Çıkan eleman: " + kuyrugumuz.cikart());

        // Bu aşamaya geldiğimizde kuyruğumuz boş olduğu için
        // kuyruk boş hatasını gösterecek.
        System.out.println("Öndeki eleman: " + kuyrugumuz.gozat());
    }

}
{% endhighlight %}

Nihai çıktımız şu şekilde oluyor;  
{% highlight java %}
Öndeki eleman: 1
Öndeki eleman: 1
Öndeki eleman: 1

Çıkan eleman: 1
Öndeki eleman: 2
Çıkan eleman: 2
Öndeki eleman: 3
Çıkan eleman: 3

Öndeki eleman: 1
Öndeki eleman: 1
Öndeki eleman: 1

Çıkan eleman: 1
Öndeki eleman: 2
Çıkan eleman: 2
Öndeki eleman: 3
Çıkan eleman: 3

Exception in thread "main" com.isiksistem.kuyruk$kuyrukHatasi: Kuyruk boş.
{% endhighlight %}

Böylece yığın ile oldukça benzer olan kuyruk yapısını da incelemiş olduk.
Sıradaki seri; Nesne tabanlı tasarım, bilinen adıyla SOLID prensiplerinde görüşmek üzere.