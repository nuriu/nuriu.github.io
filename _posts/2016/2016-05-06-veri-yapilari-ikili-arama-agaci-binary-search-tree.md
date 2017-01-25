---
layout: post
title: "Veri Yapıları: İkili Arama Ağacı (Binary Search Tree)"
tags:
- c++
- veri yapıları
- arama ağaçları
- ikili arama ağacı
- binary search tree
categories:
- c++
- veri yapıları
---

# İkili Ağaç Yapısı
---------------

Ağaçlar kenarlar ile birbirine bağlanmış düğümlerden oluşur.
Birçok çeşidi vardır fakat bu yazıda ikili ağaç ve ikili arama ağacı ile ilgileneceğiz.

İkili ağaç yapısı her düğümün en fazla iki çoçuk düğüme sahip olduğu özel bir durumdur.
Arama işlemi sıralı dizilerdeki kadar hızlı, ekleme ve silme işlemleri ise bağlı listeler kadar hızlıdır.  

Örnek olarak ikili ağaç yapısını şu şekilde modelleyebiliriz;  

![İkili Ağaç Yapısı](/../resimler/ikiliAgacYapisi.png)

Şekilden anlaşılacağı gibi bu yapıda da bazı terimler mevcut.
Bunları basitçe şu şekilde listeleyebiliriz;  

- **Düğüm** önceki yapılarda olduğu gibi elemanımızı temsil eder.
- **Kök** ağacı oluşturan yani en tepedeki elemandır ve ağaç başına bir tanedir.
- **Ebeveyn** düğüm ise kardeş düğümlerin bağlı olduğu düğüm olarak ifade edilebilir.
- **Çocuk** düğüm aynı *ebeveyn* düğüme bağlı olan düğümlerin her biridir.
- **Kardeş** düğümler aynı *ebeveyn* düğüme bağlı olan düğümlerdir.
- **Yaprak** düğüm çocuk düğüme sahip olmayan düğümleri ifade etmek için kullanılır.
- **Seviye** düğüm jenerasyonlarını belirtmekte kullanılır. Kökün seviyesi 0 olarak kabul edilir ve aşağıya inildikçe artar.
- **Alt ağaç** düğümlerin alt jenerasyonundan oluşan yeni ağaçlara denir.

Kod kısmında ise bir düğüm kendi verisini içermenin yanı sıra sağ ve sol çocuklarına işaret eder.

C++ düğüm kodu örneği;

{% highlight cpp %}
struct dugum
{
   int veri;
   struct dugum *sol;
   struct dugum *sag;
};
{% endhighlight %}

# Ağaç Üzerinde Dolaşım  
------------------------  

Ağaçta dolaşmak için 3 yöntem vardır. Bunlar;  

- Kökten başlayan (Preorder)
- Kökün ortada olduğu (Inorder)
- Kökte sonlanan (Postorder)

dolaşım yöntemleridir.

**Kökten Başlayan Dolaşım Yöntemi (Preorder)**  

Bu yöntemde dolaşmaya kökten başlanır sonrasında önce sol alt ağaca ve takiben sağ alt ağaca geçilir.

Örnek bir ağaç modelinde şu şekilde gösterebiliriz;  

![İkili Ağaç Yapısında Kökten Başlayan Dolaşım](/../resimler/ikiliAgacKBD.png)

Düğüm sırası: A, (B, Ç, D), (C, E, F)  

**Kökün Ortada Olduğu Dolaşım Yöntemi (Inorder)**  

Bu yöntemde dolaşmaya sol alt ağaçtan başlanır ve kökten sağ alt ağaca geçilir.

Örnek bir ağaç modelinde şu şekilde gösterebiliriz;  

![İkili Ağaç Yapısında Kökün Ortada Olduğu Dolaşım](/../resimler/ikiliAgacKOOD.png)

Düğüm sırası: (Ç, B, D), A, (E, C, F)  

**Kökte Sonlanan Dolaşım Yöntemi (Postorder)**  

Bu yöntemde ise dolaşmaya sol alt ağaçtan başlanır sonrasında sağ alt ağaçta dolaşım tamamlanır ve en son köke geçilir.

Örnek bir ağaç modelinde şu şekilde gösterebiliriz;  

![İkili Ağaç Yapısında Kökte Sonlanan Dolaşım](/../resimler/ikiliAgacKSD.png)

Düğüm sırası: (Ç, D, B), (E, F, C), A  

Yukarıdaki üç sıralama yönteminin de kendi içinde örüntü oluşturduğunu görmüşsünüzdür.
Yapımızı kodlarken bu örüntüyü kolayca özyinelemeye çevirebileceğiz.

# İkili Arama Ağacı
-------------------

İkili arama ağacında temel kural verilerin köke göre bölümlenmesidir.
Yani eğer bir veri kökten küçük ise onun sol alt ağacında büyükse sağ alt ağacında yer alması gerekir ve bu tüm alt ağaçlarda geçerlidir (yani özyinelemelidir).

Bu yazıda ikili arama ağacı yapısında aşağıdaki temel işlemleri adım adım gerçekleştireceğiz;  

- Ekleme
- Dolaşma
- En küçük ve en büyük değerleri bulma
- Silme

İşe temelimiz olan düğüm yapısını oluşturarak başlayalım;  

{% highlight cpp %}
// elemanımız için kullanacağımız düğüm yapımız
struct dugum
{
    int veri;
    dugum * sol;
    dugum * sag;
};

typedef dugum eleman;
{% endhighlight %}

Sıra geldi *ekleme* işlemine. Fonksiyonumuz şu şekilde;  

{% highlight cpp %}
eleman* ekle(eleman* agac, int eklenecekDeger)
{
    // ağacımız tamamen boş ise
    if (agac == NULL)
    {
        // kökümüzü oluşturuyoruz
        eleman* kok = (eleman*)malloc(sizeof(eleman));

        // kökümüzün sağı ve solunu boş olacakları için NULL yapıyoruz
        kok->sag = NULL;
        kok->sol = NULL;

        // eklenecek değerimizi ekliyoruz
        kok->veri = eklenecekDeger;

        // ve yeni kök değerimizi geriye döndürüyoruz
        return kok;
    }

    // eklenecek değer kökten büyükse sağ alt ağaca geçip
    // fonksiyonumuzu orada tekrar işliyoruz (özyineleme)
    if (agac->veri < eklenecekDeger)
    {
        agac->sag = ekle(agac->sag, eklenecekDeger);
    }
    else // değer kökten küçükse sol alt ağaca geçiyoruz
    {
        agac->sol = ekle(agac->sol, eklenecekDeger);
    }

    // ağacımızın son halini geriye döndürüyoruz
    return agac;
}
{% endhighlight %}

Bu aşamadan sonra yaptığımız değişiklikleri görebilmemiz için dolaşma işlemlerini gerçekleştirelim.

*soldanSagaDolas* (inorder) fonksiyonumuz;  
{% highlight cpp %}
void soldanSagaDolas(eleman* agac)
{
    // dolaşacak değer kalmadığında geriye dönüyoruz
    if (agac == NULL)
    {
        return;
    }

    // önce sol alt ağacımıza uğruyoruz
    soldanSagaDolas(agac->sol);

    // sol alt ağaçtaki yaprak düğümümüzü yazdırıyoruz
    cout << agac->veri << " ";

    // sonra sağ alt ağaca geçiyoruz
    soldanSagaDolas(agac->sag);
}
{% endhighlight %}

*koktenSagaDolas* (preorder) fonksiyonumuz;  
{% highlight cpp %}
void koktenSagaDolas(eleman* agac)
{
    // dolaşacak değer kalmadığında geriye dönüyoruz
    if (agac == NULL)
    {
        return;
    }

    // önce kökümüzü yazdırıyoruz
    cout << agac->veri << " ";

    // sonra sol alt ağacımıza uğruyoruz
    koktenSagaDolas(agac->sol);

    // en son sağ alt ağaca geçiyoruz
    koktenSagaDolas(agac->sag);
}
{% endhighlight %}

*soldanKokeDolas* (postorder) fonksiyonumuz;  
{% highlight cpp %}
void soldanKokeDolas(eleman* agac)
{
    // dolaşacak değer kalmadığında geriye dönüyoruz
    if (agac == NULL)
    {
        return;
    }

    // önce sol alt ağacımıza uğruyoruz
    soldanKokeDolas(agac->sol);

    // sonra sağ alt ağaca geçiyoruz
    soldanKokeDolas(agac->sag);

    // en son kökümüzü yazdırıyoruz
    cout << agac->veri << " ";

}
{% endhighlight %}

Şimdi diğer işlemlere göre nispeten daha kolay olan en küçük ve en büyük veriye sahip olan düğümleri bulma işlemlerimize geçelim.
İkili arama ağacında en küçük değere sahip düğüm sol alt ağacın en alttaki sol elemanıdır.

Öyleyse fonksiyonumuz şu şekilde olmalıdır;
{% highlight cpp %}
int enKucukDegeriBul(eleman* agac)
{
    eleman* arayici = agac;

    // düğüm solunda çocuk barındırdığı sürece
    // soluna doğru gitmeye devam ediyoruz
    while(arayici->sol != NULL)
        arayici = arayici->sol;

    // bulduğumuz düğümün değerini geri döndürüyoruz
    return arayici->veri;
}
{% endhighlight %}

En büyük değeri bulan fonksiyonumuz;
{% highlight cpp %}
int enBuyukDegeriBul(eleman* agac)
{
    eleman* arayici = agac;

    // düğüm sağında çocuk barındırdığı sürece
    // sağına doğru gitmeye devam ediyoruz
    while(arayici->sag != NULL)
        arayici = arayici->sag;

    // bulduğumuz düğümün değerini geri döndürüyoruz
    return arayici->veri;
}
{% endhighlight %}

Şimdi gelelim en zor aşama olan silme işlemimize.
Bu fonksiyonumuzda yukarıda bulduğumuz en küçük/en büyük değerlerden faydalanacağız.

Sil fonksiyonumuz;
{% highlight cpp %}
eleman* sil(eleman* agac, int silinecekDeger)
{
    // ağacımız tamamen boş ise
    if (agac == NULL)
    {
        return NULL;
    }

    // silinecek değer kök düğümde ise
    if (silinecekDeger == agac->veri)
    {
        // kökün çocuk düğümü yoksa
        if (agac->sol == NULL && agac->sag == NULL)
        {
            return NULL;
        }

        // kökün sağında çocuk düğüm var ise
        if (agac->sag != NULL)
        {
            // kökün sağ alt ağacındaki en küçük değeri buluyoruz
            // ve yer değiştirme yapıyoruz
            agac->veri = enKucukDegeriBul(agac->sag);

            // sonrasında o değeri siliyoruz
            agac->sag = sil(agac->sag, enKucukDegeriBul(agac->sag));

            return agac;
        }
        // kökün solunda çocuk düğüm var ise
        if (agac->sol != NULL)
        {
            // kökün sol alt ağacındaki en büyük değeri buluyoruz
            // ve yer değiştirme yapıyoruz
            agac->veri = enBuyukDegeriBul(agac->sol);

            // sonrasında o değeri siliyoruz
            agac->sol = sil(agac->sol, enBuyukDegeriBul(agac->sol));
            return agac;
        }
    }
    // silinecek değer kökten küçük ise sol alt ağaca geçiyoruz
    if (silinecekDeger < agac->veri)
    {
        // silinecek değeri sol alt ağaçtan sil
        // ve o ağacı yeni sol alt ağaç yap
        agac->sol = sil(agac->sol, silinecekDeger);
        return agac;
    }
    // silinecek değer kökten büyük ise sağ alt ağaca geçiyoruz
    else
    {
        // silinecek değeri sağ alt ağaçtan sil
        // ve o ağacı yeni sağ alt ağaç yap
        agac->sag = sil(agac->sag, silinecekDeger);
    }

    // ağacımızın son halini geriye döndürüyoruz
    return agac;
}
{% endhighlight %}

Son olarak test kodlarını içeren *main* fonksiyonumuz;
{% highlight cpp %}
int main(int argc, char *argv[])
{
    // ağacımızı oluşturuyoruz
    eleman* agac = NULL;

    // örnek değerlerimizi giriyoruz
    agac = ekle(agac, 15);
    agac = ekle(agac, 6);
    agac = ekle(agac, 3);
    agac = ekle(agac, 2);
    agac = ekle(agac, 4);
    agac = ekle(agac, 7);
    agac = ekle(agac, 13);
    agac = ekle(agac, 18);
    agac = ekle(agac, 17);
    agac = ekle(agac, 20);

    // dolaşma işlemleri
    soldanSagaDolas(agac);
    cout << endl;
    koktenSagaDolas(agac);
    cout << endl;
    soldanKokeDolas(agac);
    cout << endl;

    // en küçük ve en büyük değer bulma işlemleri
    cout << enKucukDegeriBul(agac) << endl;
    cout << enBuyukDegeriBul(agac) << endl;

    // silme işlemleri
    agac = sil(agac, 2);
    soldanSagaDolas(agac);
    cout << endl;

    agac = sil(agac, 20);
    soldanSagaDolas(agac);
    cout << endl;

    agac = sil(agac, 13);
    soldanSagaDolas(agac);
    cout << endl;

    return 0;
}
{% endhighlight %}

Böylece ikili arama ağacı yapımızı da temel olarak incelemiş olduk.
Sonraki yazılarda görüşmek üzere.
