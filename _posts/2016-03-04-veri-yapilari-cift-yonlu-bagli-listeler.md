---
layout: post
title: Veri Yapıları
subtitle: 'Çift Yönlü Bağlı Listeler'
categories:
  - cpp
  - veriyapilari
---

**Çift Yönlü Bağlı Listeler**

Çift yönlü bağlı listelerde her veri öğesinde sonraki öğeyi işaret eden bir işaretçi bulunduğu gibi önceki öğeyi işaret eden bir işaretçi daha bulunur. Böylece liste elemanları arasında doğrusal çift yönlü bir bağ oluşturulmuş olunur.  

Avantajları:  

1. Liste içinde baştan sona doğru gezebildiğimiz gibi sondan başa doğru da gezebiliriz.
2. Listeyi tersine çevirmek kolaydır.
3. Bir öğedeyken önceki öğeye dönebiliriz. Tek yönlü bağlı listelerde bu mümkün değildi.

Dezavantajları:  

1. Önceki öğeyi gösteren fazladan bir işaretçimiz olduğu için öğe başına daha fazla hafıza alanı gerektirir.
2. Ekleme ve silme işlemleri tek yönlü bağlı listelere göre daha fazla işaretçi işlemleri gerektirdiği için tek yönlü bağlı listelere göre daha uzun sürer. 

Basitçe yapı şekildeki gibidir;

![Bağlı Liste Yapısı](/../resimler/ciftYonluBagliListeYapisi.png)

Şimdi bu yapıyı basitçe kodlayalım;  
{% highlight cpp %}
#include <iostream>
#include <stdlib.h>

using namespace std;

// liste eleman şablonumuzu oluşturmak için struct yapısını kullanıyoruz.
struct v
{
    v* onceki; // önceki elemanı gösterecek işaretçimiz.
    int sayi;
    v* sonraki; // sonraki elemanı gösterecek işaretçimiz.
};
typedef v oge;

int main(int argc, char *argv[])
{
    // her zaman ilk elemanı gosterecek olan ilk isaretcimiz.
    oge* ilk;

    // ilk eleman.
    ilk = (oge*) malloc(sizeof(oge));
    ilk -> sayi = 1;
    
    // ilk eleman -> önceki = null
    ilk -> onceki = NULL;

    // ikinci eleman.
    ilk -> sonraki = (oge*) malloc(sizeof(oge));
    ilk -> sonraki -> sayi = 2;
    
    // 2. eleman -> önceki = ilk eleman
    ilk -> sonraki -> onceki = ilk;
    
    // son elemanımızın ikinci eleman olduğunu belirtiyoruz.
    ilk -> sonraki -> sonraki = NULL;

    return 0;
}
{% endhighlight %}

Önceki iki yapıda bağlı listelerin genel mantığının üzerinden geçtiğimiz için bu yapıyı olabildiğince kod üzerinden açıklama satırları ile açıklamaya çalışacağım. 

**Listeleme**  

Bu fonksiyonumuz önceki örneklerdeki ile hemen hemen aynı.

{% highlight cpp %}
void Listele(oge* ilkEleman)
{
    int i = 1;
    oge* s = ilkEleman;

    // eleman boş olana kadar
    while(s != NULL)
    {
        cout << i << ". eleman: " << s -> sayi << endl;
        i++;
        s = s -> sonraki;
    }
    cout << endl;
}
{% endhighlight %}

**Ekleme**

Çift yönlü bağlı listelerde sıra duyarlı eleman ekleme işlemini aşağıdaki şekilde gerçekleştirebiliriz.

{% highlight cpp %}
oge* Ekle(oge* ilkEleman, int eklenecekDeger)
{
    if(ilkEleman == NULL) // listemiz boş ise
    {
        // ilk elemanımızı oluşturuyoruz
        ilkEleman = (oge*) malloc(sizeof(oge));

        // eklenecek eleman listedeki tek eleman olacağı için
        // öncesini ve sonrasını NULL'a işaret ediyoruz.
        ilkEleman -> onceki = NULL;
        ilkEleman -> sonraki = NULL;

        // sayımızı ekliyoruz ve geriye döndürüyoruz.
        ilkEleman -> sayi = eklenecekDeger;
        return ilkEleman;
    }
    // bağın korunması için kullanacağımız geçici işaretçimiz.
    oge* gecici = (oge*) malloc(sizeof(oge));

    // eklenecek sayı ilk elemandan küçük ise
    if(ilkEleman -> sayi > eklenecekDeger)
    {
        gecici -> onceki = NULL;
        gecici -> sayi = eklenecekDeger;
        gecici -> sonraki = ilkEleman;
        ilkEleman -> onceki = gecici;

        return gecici;
    }
    // sayacımız
    oge* s = ilkEleman;
    // sayimiz için doğru yeri arıyoruz.
    while(s -> sonraki != NULL && s -> sonraki -> sayi < eklenecekDeger)
    {
        s = s -> sonraki;
    }
    // bir eleman önceden işlemlerimizi yapıyoruz.
    gecici -> sonraki = s -> sonraki;
    s -> sonraki = gecici;
    gecici -> onceki = s;
    // ekleyeceğimiz elemanın yerini hazırladık.

    // ekleyeceğimiz eleman son eleman olmayacak ise
    if(gecici -> sonraki != NULL)
    {
        // sonra gelecek elemanın önceki işaretçisini
        // ekleyeceğimiz öğeye eşitliyoruz.
        gecici -> sonraki -> onceki = gecici;
    }
    // son olarak sayımızı ekliyoruz.
    gecici -> sayi = eklenecekDeger;
    return ilkEleman;
}
{% endhighlight %}

Yukarıdaki fonksiyonumuzu test etmek için aşağıdaki test senaryomuzu uygulayalım.  

{% highlight cpp %}
// ekleme testleri
ilk = Ekle(ilk, 2); // liste boşsa
ilk = Ekle(ilk, 0); // ilk elemandan küçük olma senaryosu
ilk = Ekle(ilk, 4); // en büyük eleman olma senaryosu
ilk = Ekle(ilk, 3); // araya eleman ekleme senaryosu
ilk = Ekle(ilk, 1); // araya eleman ekleme senaryosu

Listele(ilk);
{% endhighlight %}

Çıktımız şu şekilde oluyor;  

{% highlight cpp %}
1. eleman: 0
2. eleman: 1
3. eleman: 2
4. eleman: 3
5. eleman: 4
{% endhighlight %}

Görünüşe göre fonksiyonumuz başarı ile çalışmakta. Öyleyse silme işlemine geçebiliriz.  

**Silme**

{% highlight cpp %}
oge* Sil(oge* ilkEleman, int silinecekDeger)
{
    // sayacımız ve geçici işaretçimiz.
    oge* s = ilkEleman;
    oge* gecici;

    // silinecek değer ilk elemana eşit ise
    if(ilkEleman -> sayi == silinecekDeger)
    {
        // ilk eleman öğemizi silmek üzere geçici işaretçimize alıyoruz.
        gecici = ilkEleman;

        // ilk elemanı sonraki elemana eşitliyoruz.
        ilkEleman = ilkEleman -> sonraki;

        // ve silme işlemini gerçekleştiriyoruz.
        free(gecici);
        return ilkEleman;
    }

    // değilse
    // silinecek elemanımızı arıyoruz ve bir önceki elemana yerleşiyoruz.
    while(s -> sonraki != NULL && s -> sonraki -> sayi != silinecekDeger)
    {
        s = s -> sonraki;
    }

    // son elemana gelip sayıyı bulamadıysak
    if(s -> sonraki == NULL)
    {
        cout << "Girdiğiniz değer listede bulunamadı." << endl;
        return ilkEleman;
    }

    // elemanı silmek üzere geçici işaretçimize alıyoruz.
    gecici = s -> sonraki;

    // onun yerine bir sonraki elemanı alıyoruz ve silinecek elemanı siliyoruz.
    s -> sonraki = s -> sonraki -> sonraki;
    free(gecici);

    // ekleme işleminde olduğu gibi
    // eleman son eleman değil ise
    if(s -> sonraki != NULL)
    {
        // sonraki elemanın önceki işaretçisine kendisini işaret ediyoruz.
        s -> sonraki -> onceki = s;
    }

    // ve ilk elemanımızı geriye gönderiyoruz.
    return ilkEleman;
}
{% endhighlight %}

Yukarıdaki fonksiyonumuzu test etmek için aşağıdaki test senaryomuzu uygulayalım.  

{% highlight cpp %}
// silme testleri
ilk = Sil(ilk, 0); // ilk eleman olma senaryosu
ilk = Sil(ilk, 2); // ara eleman olma senaryosu
ilk = Sil(ilk, 4); // son eleman olma senaryosu
ilk = Sil(ilk, 4); // elemanın listede olmama senaryosu
Listele(ilk);
{% endhighlight %}

Çıktımız şu şekilde oluyor;  

{% highlight cpp %}
Girdiğiniz değer listede bulunamadı.
1. eleman: 1
2. eleman: 3
{% endhighlight %}

Görüldüğü üzere dört senaryomuz da testten başarı ile geçti.  

Dipnot:
-------
İlerleyen zamanlarda uygunluğu açısından bu veri yapısına listeyi ters çevirme işlevi üzerine eklemeler yapabilirim. Şimdilik bu kadar.