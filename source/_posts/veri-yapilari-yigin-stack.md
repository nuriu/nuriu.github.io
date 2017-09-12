---
title: "Veri Yapıları: Yığın (Stack)"
date: 2016.03.13
tags:
- java
- veri yapıları
- yığınlar
- stack
categories:
- veri yapıları
- java
---

## Giriş

Temel Java serisi için verdiğim aranın ardından, veri yapılarına, java dilini kullanarak devam ediyoruz.

Sıradaki yapımız yığınlar, yabancı kaynaklarda stack olarak geçer/bilinir.

Son giren ilk çıkar (lifo) diye adlandırılan bir işleyişe sahiptirler.

Hepimizin bildiği geri al (ctrl + z) gibi popüler işlevlerde kullanılabilirler.  

Bağlı listeleri yatay olarak modellemiştik.

Yığınları da dikey bağlı listeler (diziler) gibi düşünebiliriz.

Tek farkları veri akışının sadece yukarıdan gerçekleştirilmesidir.

Şekiller ile aram daha iyidir diyenler için;  

![Yığın Yapısı](/resimler/veri-yapilari/yiginYapisi.png)

Kart destesi, üst üste koyulmuş kitaplar, tabaklar ve benzeri gibi gerçek hayattan örnekleri mevcuttur.

Yazılım tarafına geçtiğimizde ise dizileri veya bağlı listeleri kullanarak yığınlar oluşturulabilir.

Yığın yapısının kalıplaşmış/olmazsa olmaz belli başlı metodları vardır, bunlar (yabancı isimleri ile birlikte);  

- ekle() (push()) − yığına eleman eklemek için kullanılacak metod.  
- cikart() (pop()) − yığından en üstteki elemanı çıkartmak için kullanılacak metod.  
- gozat() (peek()) − yığının en üst elemanını gönderen metod.  

## Uygulama

Kolay olması ve konunun yığından uzaklaşmamasını istediğim için dizi kullanarak int tipinde veriler tutan bir yığın uygulaması yapalım.
Eğer pratik yapmak hoşunuza gidiyorsa konuya biraz ısındıktan sonra bağlı listeler ile de denemeler yapmanızı öneririm.  

Bağlı listelerde hep tek dosya üzerinden gitmiştik.
Fakat yığın yapımızı sınıf olarak tanımlayacağız böylece istediğimiz yer ve zamanda nesnelerini oluşturarak kullanabilme imkanımız olacak.

Uygulamamız *yigin.java* ve *Main.java* olmak üzere iki dosyadan oluşan bir konsol uygulaması olacak.

Sınıfımız;

``` java yigin.java
package com.isiksistem;

public class yigin {
    private int tepe; // yığının zirvesi/tepesi
    private int[] veriler; // verilerimizin saklanacağı dizimiz

    public yigin(int boyut) {
        // yığını oluşturacağımız metod
    }

    public void ekle(int deger) {
        // yığına eleman ekleyeceğimiz metod
    }

    public int cikart() {
        // yığından eleman çıkaracağımız metod
    }

    public int gozat() {
        // yığının tepesindeki elemanı gönderen metod
    }

    // yığın hata mesajlarımız için kullanacağımız sınıfımız.
    // aklınızı karıştırmasın yığın yapımızın kendisiyle alakası yok.
    // işimi kolaylaştırdığı için kullandım.
    public class yiginHatasi extends RuntimeException {
        public yiginHatasi(String bilgi) {
            super(bilgi);
        }
    }
}

```

Buradan itibaren metod-metod ilerleyelim.

Öncelikle yığınımızı oluşturmamıza yarayan yapıcı metodumuz;  

``` java
public yigin(int boyut) {
    if (boyut < 1) {
        throw new yiginHatasi("Boyut 0'dan büyük olmalıdır.");
    }
    else {
        veriler = new int[boyut];
        tepe = -1;
    }
}
```

Ekleme metodumuz;   

``` java
public void ekle(int deger) {
    if (tepe == veriler.length) {
        throw new yiginHatasi("Yığın Dolu.");
    }
    else {  // yığın dolu değilse
        tepe++;
        veriler[tepe] = deger;
    }
}
```

Çıkartma metodumuz;

``` java
public int cikart() {
    if (tepe == -1) {
        throw new yiginHatasi("Yığın Boş.");
    }
    else {  // yığın boş değilse
        // çıkartılacak değeri geçici değişkenimize atıyoruz.
        int d = veriler[tepe--];
        // çıkartılacak değerin yerini 0'a eşitliyoruz.
        veriler[tepe + 1] = 0;
        return d;   // geçici değişkenimizi gönderiyoruz.
    }
}
```

Gözatma metodumuz;

``` java
public int gozat() {
    if (tepe == -1) {
        throw new yiginHatasi("Yığın Boş.");
    }
    else {  // yığın boş değilse
        return veriler[tepe]; // tepedeki elemanı gönderiyoruz.
    }
}
```
Son olarak yığını oluşturduğumuz ve testlerimizi yaptığımız ana dosyamız;  

``` java Main.java
package com.isiksistem;

public class Main {

    public static void main(String[] args) {
        // 3 elemanlı oluşturduğumuz yığınımız.
        yigin yiginimiz = new yigin(3);

        // ekleme ve gözatma testlerimiz.
        System.out.println("Ekleme ve Gözatma Testleri: ");
        yiginimiz.ekle(1);
        System.out.println("Tepedeki eleman: " + yiginimiz.gozat());

        yiginimiz.ekle(2);
        System.out.println("Tepedeki eleman: " + yiginimiz.gozat());

        yiginimiz.ekle(3);
        System.out.println("Tepedeki eleman: " + yiginimiz.gozat());


        // çıkartma ve gözatma testlerimiz.
        System.out.println("\nÇıkartma Testleri: ");

        System.out.println("Silinen eleman: " + yiginimiz.cikart());
        System.out.println("Tepedeki eleman: " + yiginimiz.gozat());

        System.out.println("Silinen eleman: " + yiginimiz.cikart());
        System.out.println("Tepedeki eleman: " + yiginimiz.gozat());

        System.out.println("Silinen eleman: " + yiginimiz.cikart());
        // Buraya geldiğimizde yığın tamamen boş olacak.
        // O yüzden sınıfta tanımladığımız Yığın Boş hatasını verecek.
        System.out.println("Tepedeki eleman: " + yiginimiz.gozat());
    }

}
```

Nihai çıktımız şu şekilde oluyor;  
``` bash
Ekleme ve Gözatma Testleri:
Tepedeki eleman: 1
Tepedeki eleman: 2
Tepedeki eleman: 3

Çıkartma Testleri:
Silinen eleman: 3
Tepedeki eleman: 2
Silinen eleman: 2
Tepedeki eleman: 1
Silinen eleman: 1
Exception in thread "main" com.isiksistem.yigin$yiginHatasi: Yığın Boş.
```

Görüldüğü üzere listemiz tamamen boş olduğu zaman tepedeki elemana bakmak istediğimizde sınıfta tanımlamış olduğumuz Yığın Boş sıradışı durum mesajını gösterdi.  

Böylelikle bu yazının da sonuna geldik. Sonraki yazıda görüşmek üzere.
