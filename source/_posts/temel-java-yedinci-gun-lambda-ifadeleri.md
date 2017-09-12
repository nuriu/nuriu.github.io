---
title: "Temel Java 7. Gün: Lambda İfadeleri"
date: 2016.03.11
tags:
- java
- lambda
- lambda ifadeleri
categories:
- java
---


## Lambda

*Lambda* ifadeleri, Java 8 ile birlikte gelen, işlevsel programlamayı ve geliştirmeyi oldukça kolaylaştıran yeni bir özellik.  

*Lambda* ifadeleri şu şekilde yazılırlar;  

``` java
parametre -> ifade gövdesi
```

Bu gösterimler "temel" düzey için başlarda biraz zorlayıcı bir konu olabilmekte (ayrıca bu konu ile ilgili seviyeyi zorlaştırmadan, karmaşıklaştırmadan bir örnek göstermek çok zor) o yüzden elimden geldiğince basit bir örnek ile göstermeye çalışacağım.  

Farz edelim ki sayılardan oluştan *Integer* tipinde bir listemiz var ve bu listemizdeki tüm elemanları, çift olan elemanları, tek olan elemanları ve belirli bir koşula uyan elemanları ayrı ayrı yazdırmak istiyoruz ve bunu tek bir metod kullanarak olabildiğince basit/kısa bir şekilde yapmak istiyoruz. Öyleyse burada *Lambda* ifadelerinden şu şekilde yararlanabiliriz;  

``` java
package com.isiksistem;

// diziler (Arrays) sınıfını kullanabilmemiz için gerekli
import java.util.Arrays;
// Liste (List <T>) oluşturmamız için gerekli
import java.util.List;
// isle fonksiyonumuzdaki doğrulama işlemi için gerekli
import java.util.function.Predicate;

public class Main {

    public static void main(String[] args) {

        // listemiz
        List<Integer> liste = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);

        System.out.println("Tüm sayılar:");
        // isle fonksiyonumuza listemizi ve
        // sayinın true olma durumunu yolluyoruz.
        isle(liste, (sayi)-> true);

        System.out.println("\nÇift sayılar:");
        // isle fonksiyonumuza listemizi ve
        // sayinın çift olma durumunu yolluyoruz.
        isle(liste, (sayi)-> sayi % 2 == 0 );

        System.out.println("\nTek sayılar:");
        // isle fonksiyonumuza listemizi ve
        // sayinın tek olma durumunu yolluyoruz.
        isle(liste, (sayi)-> sayi % 2 == 1 );

        System.out.println("\nDörtten küçük sayılar:");
        // isle fonksiyonumuza listemizi ve
        // sayinın 4'ten küçük olma durumunu yolluyoruz.
        isle(liste, (sayi)-> sayi < 4 );
    }


    // elemanlarımız üzerinde kontrol yapmak için
    // kullanacağımız isle metodumuz
    public static void isle(List<Integer> islenecekListe,
                            Predicate<Integer> dogrulayici) {
        // gönderilen listedeki her Integer sayi için
        for(Integer sayi: islenecekListe)  {
            // eğer sayi gönderilen duruma uyuyorsa
            // (Predicate ile doğrulama yapıyoruz),
            // örneğin çift olma durumu için
            // yukarıda sayi % 2 == 0 koşulunu yolladık,
            // eğer sayinin 2 ile bolumundan kalan 0 ise
            // dogrulayici.test(sayi) geriye true döndürecek ve
            // if kod bloğu çalıştırılacak.
            // islenecekListe'deki tüm sayıların lambda ifadesi ile
            // gönderilen duruma uyup uymadığı test edilecek.
            if(dogrulayici.test(sayi)) {
                System.out.println(sayi);
            }
        }
    }
}
```

Örneğimizi çalıştırdığımızda çıktımız böyle olacaktır;  

``` bash
Tüm sayılar:
1
2
3
4
5
6
7
8

Çift sayılar:
2
4
6
8

Tek sayılar:
1
3
5
7

Dörtten küçük sayılar:
1
2
3

```

Kodları olabildiğince uygun/anlaşılır biçimde açıklamaya çalıştım, umarım başarılı olmuşumdur. Temel Java serimizden bu kadar. Faydalı olmuş olması dileğiyle sonraki yazılarda görüşmek üzere.
