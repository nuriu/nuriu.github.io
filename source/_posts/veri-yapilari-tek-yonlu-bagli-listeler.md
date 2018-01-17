---
title: "Veri Yapıları: Tek Yönlü Bağlı Listeler"
date: 2016.03.02
tags:
- c++
- veri yapıları
- bağlı listeler
- tek yönlü bağlı listeler
categories:
- veri yapıları
- c++
---

## Giriş

Belirli veri kümelerini saklamak için kullandığımız diziler statik yapılardı. Bu yapılarda boyutlar sonradan tam olarak kontrol edilemediği için her yerde kullanılması uygun ve verimli olmuyor. Verimliliğin ön planda olduğu bazı durumlarda bağlı listeleri kullanmak daha mantıklı olabiliyor. Bağlı listeler ise tek yönlü ve çift yönlü olmak üzere iki ana grupta incelenebilir. Bu yazımda tek yönlü bağlı listeler üzerine basit örnekler göstermeye çalışacağım.

## Bağlı Listeler

Tek yönlü bağlı listelerde her veri öğesinde sonraki öğeyi işaret eden bir işaretçi bulunur. Böylelikle liste elemanları arasında doğrusal tek yönlü bir bağ oluşturulmuş olunur. Basitçe yapı şekildeki gibidir;

![Bağlı Liste Yapısı](/resimler/veri-yapilari/bagliListeYapisi.png)

Şimdi bu yapıyı basitçe kodlayalım;  

``` cpp

#include <iostream>
#include <stdlib.h>

using namespace std;

// liste eleman şablonumuzu oluşturmak için struct yapısını kullanıyoruz.
struct v
{
    int sayi;
    v* sonraki;
};
typedef v oge;

int main(int argc, char *argv[])
{
    // her zaman ilk elemanı gosterecek olan ilk isaretcimiz.
    oge* ilk;

    // ilk isaretcimize bellekte yer ayırıyoruz.
    // (ilk elemanımızı oluşturuyoruz)
    ilk = (oge*) malloc(sizeof(oge));
    ilk -> sayi = 1;

    // ikinci elemanımızı oluşturuyoruz.
    ilk -> sonraki = (oge*) malloc(sizeof(oge));
    ilk -> sonraki -> sayi = 2;

    // üçüncü elemanımızı oluşturuyoruz.
    ilk -> sonraki -> sonraki = (oge*) malloc(sizeof(oge));
    ilk -> sonraki -> sonraki -> sayi = 3;

    // son elemanımızın üçüncü eleman olduğunu belirtiyoruz.
    ilk -> sonraki -> sonraki -> sonraki = NULL;

    // sayacımız/gezicimiz
    oge* sayac;

    // ilk elemandan başlayacağımız için sayacımızı ilke eşitliyoruz.
    sayac = ilk;

    cout << "İlk eleman: " << sayac -> sayi << endl;
    cout << "İkinci eleman: " << sayac -> sonraki -> sayi << endl;
    cout << "Üçüncü eleman: " << sayac->sonraki->sonraki->sayi << endl;

    return 0;
}
```

Yukarıdaki kodu yazıp çalıştırdığımızda konsola şu çıktıları yazdıracaktır;

``` bash
İlk eleman: 1
İkinci eleman: 2
Üçüncü eleman: 3
```

Bağlı liste yapısını kullanarak dizilerde yapması oldukça maliyetli olan araya eleman ekleme gibi işlemleri de daha verimli şekilde gerçekleştirebiliriz.  

Bu arada benim gerçekleştirme yöntemim bu işlemleri gerçekleştirmenin sadece bir yolu. Kullanılabilecek ve/veya izlenebilecek birçok yol/yöntem mevcut. Bunların benim yöntemlerimden daha mantıklı/verimli olabileceğini de söylemeliyim. O yüzden tek bir kaynağa bağlı kalmamakta fayda görüyorum ve size de aynısını öneriyorum.  

Şimdi yukarıdaki örneğimize, elemanları listelemeye yarayan bir *void Listele(oge* ilkEleman)* fonksiyonu ekleyelim;

``` cpp
void Listele(oge* ilkEleman)
{
    // elemanın sırasını göstermek için kullanacağımız değişkenimiz.
    int i = 1;

    // gezici sayacımız.
    oge* s;
    s = ilkEleman;

    // eleman boş olana kadar
    while(s != NULL)
    {
        // elemanın sayi değişkenini ekrana yaz.
        cout << i << ". eleman: " << s -> sayi << endl;
        i++;
        // elemanı sonraki elemana eşitle.
        s = s -> sonraki;
    }
}
```

Bu fonksiyonu ekleyip, *main* fonksiyonu içerisindeki aşağıdaki satırları silip *Listele(ilk);* satırını ekleyerek fonksiyonumuzu çağırdığımızda yine aynı işlevin tekrarlandığını göreceksiniz.  

``` cpp
    // sayacımız/gezicimiz
    oge* sayac;

    // ilk elemandan başlayacağımız için sayacımızı ilke eşitliyoruz.
    sayac = ilk;

    cout << "İlk eleman: " << sayac -> sayi << endl;
    cout << "İkinci eleman: " << sayac -> sonraki -> sayi << endl;
    cout << "Üçüncü eleman: " << sayac -> sonraki -> sonraki -> sayi << endl;
```

Bu fonksiyon ile birlikte kaç elemanlı olduğundan bağımsız bir şekilde listemizin başından sonuna kadar tüm elemanları yazdırabiliyoruz.  

Ekleme işlemine geçmeden önce silme işlemi yapan *oge\* Sil(oge\* ilkEleman, int silinecekDeger)* fonksiyonumuzu yazalım. Bu işlem için üç olasılığımız olduğunu varsayalım;  
1. Silinecek eleman ilk elemanımız olabilir. (ve listemiz tek elemanlı olabilir.)  
2. Silinecek eleman son elemanımız olabilir.  
3. Silinecek eleman aradaki bir eleman olabilir.  

İlk olasılığımızın gerçekleşmesi ihtimaline karşı ilk elemanın değişebilecek olmasından dolayı fonksiyonumuz oge* tipinde yeni ilk elemanı işaret eden bir işaretçi yollamalı. Benim yöntemim şu şekilde oldu;  

``` cpp
oge* Sil(oge* ilkEleman, int silinecekDeger)
{
    // gezici sayacımız.
    oge* s = ilkEleman;

    // bağı korumak için kullanacağımız geçici işaretçimiz.
    oge* gecici;

    // silinecek olan eleman ilk elemansa
    if(s -> sayi == silinecekDeger)
    {
        gecici = s;

        if(s -> sonraki != NULL) // ikinci bir eleman varsa
        {
            // ilk elemanı sonraki elemana eşitliyoruz.
            s = s -> sonraki;

            // ilk elemanı siliyoruz.
            free(gecici);

            // geriye yeni ilk elemanımızı gönderiyoruz.
            return s;
        }

        // liste tek elemanlıysa
        // elemanı siliyoruz
        free(gecici);
        
        // geriye boş liste döndürüyoruz.
        return NULL;
    }

    // ilk eleman değilse
    // listede aramaya başlıyoruz.
    while(s -> sonraki != NULL)
    {
        // silinecek eleman bulunduysa
        if(s -> sonraki -> sayi == silinecekDeger &&
            s -> sonraki != NULL)
        {
            // burada, işlemleri bir eleman öncesinden
            // yapmamızın sebebi önceki eleman ile olan bağı
            // yani aradaki bağı kaybetmemek.
            gecici = s -> sonraki;
            s -> sonraki = s -> sonraki -> sonraki;
            free(gecici);
            return ilkEleman;
        }
        
        // bulunamadıysa sonraki elemana geçiyoruz.
        s = s -> sonraki;
    }

    // silinecek eleman bulunamadıysa
    cout << "Silinecek eleman bulunamadi." << endl;

    return ilkEleman;
}
```

Şimdi ise listeye eleman ekleme işlemine geçelim. Burada da dört ana olasılığımız olsun. Bunlar;  
1. Liste boş olabilir. (Eleman listenin ilk elemanı olacaktır.)  
2. Eklenecek eleman ilk elemandan küçüktür. (Eleman listenin yeni ilk elemanı olacaktır.)  
3. Eklenecek eleman ilk elemandan büyük ama son elemandan küçüktür. (Yani listenin ara elemanı olacaktır.)  
4. Eklenecek eleman listedeki tüm elemanlardan büyüktür. (Yani listenin yeni son elemanı olacaktır.)  

``` cpp
oge* Ekle(oge* ilkEleman, int eklenecekDeger)
{
    oge* s = ilkEleman;

    // liste boş ise
    if(s == NULL)
    {
        s = (oge*) malloc(sizeof(oge));
        s -> sayi = eklenecekDeger;
        s -> sonraki = NULL;
        return s;
    }
    
    // liste bir veya daha fazla elemana sahip ise
    oge* gecici = (oge*) malloc(sizeof(oge));
    
    // eklenecek değer ilk elemandan küçükse
    if(ilkEleman -> sayi > eklenecekDeger)
    {
        gecici -> sayi = eklenecekDeger;
        gecici -> sonraki = ilkEleman;
        return gecici;
    }
    
    // son eleman değilse ve
    // sonraki eleman eklenecek sayidan küçükse
    // eklenecek eleman için doğru aralığı bulmaya çalışıyoruz.
    while(s -> sonraki != NULL &&
            s -> sonraki -> sayi <= eklenecekDeger)
    {
        s = s -> sonraki;
    }
    
    // aralığı bulduktan sonra
    // büyük elemanı geçicinin sonraki işaretine atıyoruz.
    gecici -> sonraki = s -> sonraki;
    
    // sayimizi ekliyoruz.
    gecici -> sayi = eklenecekDeger;
    
    // sonraki işaretine elemanı atıyoruz.
    s -> sonraki = gecici;
    
    return ilkEleman;
}
```

Böylelikte tek yönlü bağlı listelerin üzerinden geçmiş bulunuyoruz. Programın son hali aşağıdaki gibidir;  

``` cpp
#include <iostream>
#include <stdlib.h>

using namespace std;


// liste eleman şablonumuzu oluşturmak için
// struct yapısını kullanıyoruz.
struct v
{
    int sayi;
    v* sonraki;
};
typedef v oge;

void Listele(oge* ilkEleman)
{
    // elemanın sırasını göstermek için kullanacağımız değişkenimiz.
    int i = 1;

    // gezici sayacımız.
    oge* s = ilkEleman;

    // eleman boş olana kadar
    while(s != NULL)
    {
        // elemanın sayi değişkenini ekrana yaz.
        cout << i << ". eleman: " << s -> sayi << endl;
        i++;
        // elemanı sonraki elemana eşitle.
        s = s -> sonraki;
    }
    cout << endl;
}

oge* Sil(oge* ilkEleman, int silinecekDeger)
{
    // gezici sayacımız.
    oge* s = ilkEleman;

    // bağı korumak için kullanacağımız geçici işaretçimiz.
    oge* gecici;

    // silinecek olan eleman ilk elemansa
    if(s -> sayi == silinecekDeger)
    {
        gecici = s;

        if(s -> sonraki != NULL) // ikinci bir eleman varsa
        {
            // ilk elemanı sonraki elemana eşitliyoruz.
            s = s -> sonraki;

            // ilk elemanı siliyoruz.
            free(gecici);

            // geriye yeni ilk elemanımızı gönderiyoruz.
            return s;
        }
        
        // liste tek elemanlıysa
        // elemanı siliyoruz
        free(gecici);
        
        // geriye boş liste döndürüyoruz.
        return NULL;
    }
    
    // ilk eleman değilse
    // listede aramaya başlıyoruz.
    while(s -> sonraki != NULL)
    {
        // silinecek eleman bulunduysa
        if(s -> sonraki -> sayi == silinecekDeger &&
           s -> sonraki != NULL)
        {
            // burada işlemleri bir eleman öncesinden
            // yapmamızın sebebi önceki eleman ile olan bağı
            // yani aradaki bağı kaybetmemek.
            gecici = s -> sonraki;
            s -> sonraki = s -> sonraki -> sonraki;
            free(gecici);
            return ilkEleman;
        }
        
        // bulunamadıysa sonraki elemana geçiyoruz.
        s = s -> sonraki;
    }

    // silinecek eleman bulunamadıysa
    cout << "Silinecek eleman bulunamadi." << endl;
    
    return ilkEleman;
}

oge* Ekle(oge* ilkEleman, int eklenecekDeger)
{
    oge* s = ilkEleman;

    // liste boş ise
    if(s == NULL)
    {
        s = (oge*) malloc(sizeof(oge));
        s -> sayi = eklenecekDeger;
        s -> sonraki = NULL;

        return s;
    }
    
    // liste bir veya daha fazla elemana sahip ise
    oge* gecici = (oge*) malloc(sizeof(oge));
    // eklenecek değer ilk elemandan küçükse
    if(ilkEleman -> sayi > eklenecekDeger)
    {
        gecici -> sayi = eklenecekDeger;
        gecici -> sonraki = ilkEleman;
        return gecici;
    }

    // son eleman değilse ve
    // sonraki eleman eklenecek sayidan küçükse
    // eklenecek eleman için doğru aralığı bulmaya çalışıyoruz.
    while(s -> sonraki != NULL &&
            s -> sonraki -> sayi <= eklenecekDeger)
    {
        s = s -> sonraki;
    }

    // aralığı bulduktan sonra
    // büyük elemanı geçicinin sonraki işaretine atıyoruz.
    gecici -> sonraki = s -> sonraki;
    
    // sayimizi ekliyoruz.
    gecici -> sayi = eklenecekDeger;
    
    // sonraki işaretine elemanı atıyoruz.
    s -> sonraki = gecici;
    return ilkEleman;
}

int main(int argc, char *argv[])
{
    // her zaman ilk elemanı gosterecek olan ilk isaretcimiz.
    oge* ilk;

    // ilk isaretcimize bellekte yer ayırıyoruz.
    // (ilk elemanımızı oluşturuyoruz)
    ilk = (oge*) malloc(sizeof(oge));
    ilk -> sayi = 1;

    // ikinci elemanımızı oluşturuyoruz.
    ilk -> sonraki = (oge*) malloc(sizeof(oge));
    ilk -> sonraki -> sayi = 2;

    // üçüncü elemanımızı oluşturuyoruz.
    ilk -> sonraki -> sonraki = (oge*) malloc(sizeof(oge));
    ilk -> sonraki -> sonraki -> sayi = 4;

    // testler için dördüncü elemanımızı oluşturuyoruz.
    ilk -> sonraki -> sonraki -> sonraki= (oge*) malloc(sizeof(oge));
    ilk -> sonraki -> sonraki -> sonraki -> sayi = 5;

    // son elemanımızın dördüncü eleman olduğunu belirtiyoruz.
    ilk -> sonraki -> sonraki -> sonraki -> sonraki = NULL;

    Listele(ilk);
    ilk = Ekle(ilk, 3);
    Listele(ilk);

    return 0;
}
```

**NOT:** Testlerde bir sorun yaşamadım fakat gözden kaçırmış olduğum şeyler olabilir. Bu yüzden herhangi bir hata, geliştirme vb. hakkında öneri/sorularınız olursa bana GitHub veyahut Twitter üzerinden ulaşabilirsiniz.  
