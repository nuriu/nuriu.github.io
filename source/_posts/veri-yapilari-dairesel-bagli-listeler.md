---
title: "Veri Yapıları: Dairesel Bağlı Listeler"
date: 2016.03.03
tags:
- c++
- veri yapıları
- bağlı listeler
- dairesel bağlı listeler
categories:
- veri yapıları
- c++
---

## Dairesel Bağlı Listeler

Dairesel bağlı listelerin tek yönlü listelerden tek farkı son elemanın sonraki işaretçisinin ilk elemanı işaret etmesidir. Böylece dairesel bir zincir yapısı oluşturulmuş olur. Basitçe yapı şekildeki gibidir;

![Bağlı Liste Yapısı](/resimler/veri-yapilari/daireselBagliListeYapisi.png)

Yani kabaca, değişecek olan tek şey kontrol şeklimiz. Sayacımızın sonraki işaretçisi NULL gösterene kadar değil ilk işaretçisinin gösterdiği yeri gösterene kadar devam edeceğiz.  

Yapıda temel aynı olduğu için sadece fonksiyonların işleme mantığını aşağıdaki şekilde paylaşacağım.

## Listeleme:

``` cpp
void Listele(oge* ilkEleman)
{
    int i = 1;
    oge* s = ilkEleman;

    do
    {
        cout << i << ". eleman: " << s -> sayi << endl;
        i++;
        s = s -> sonraki;
    } while(s != ilkEleman);

    cout << endl;
}
```

## Ekleme:

``` cpp
oge* Ekle(oge* ilkEleman, int eklenecekDeger)
{
    // liste boş ise
    if(ilkEleman == NULL)
    {
        ilkEleman = (oge*) malloc(sizeof(oge));
        ilkEleman -> sonraki = ilkEleman;
        ilkEleman -> sayi = eklenecekDeger;
        
        return ilkEleman;
    }

    // liste bir veya daha fazla elemana sahip ise
    oge* s = ilkEleman;
    oge* gecici = (oge*) malloc(sizeof(oge));

    // eklenecek değer ilk elemandan küçükse
    if(ilkEleman -> sayi > eklenecekDeger)
    {
        gecici -> sayi = eklenecekDeger;
        gecici -> sonraki = ilkEleman;
        
        while (s -> sonraki != ilkEleman)
        {
            s = s -> sonraki;
        }
        
        s -> sonraki = gecici;
        return gecici;
    }

    // son eleman değilse ve
    // sonraki eleman eklenecek sayidan küçükse
    // eklenecek eleman için doğru aralığı bulmaya çalışıyoruz.
    while(s -> sonraki != ilkEleman &&
            s -> sonraki -> sayi < eklenecekDeger)
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

## Silme:

``` cpp
oge* Sil(oge* ilkEleman, int silinecekDeger)
{
    oge* s = ilkEleman;
    oge* gecici;

    if(s -> sayi == silinecekDeger) // silinecek olan eleman ilk elemansa
    {
        // son elemana kadar geliyoruz.
        while (s -> sonraki != ilkEleman)
        {
            s = s -> sonraki;
        }
        
        // ilkEleman'ı yani ilk'i zincirden çıkarıyoruz.
        s -> sonraki = ilkEleman -> sonraki;
        
        // ilkEleman'ı siliyoruz.
        free(ilkEleman);
        
        // yeni ilk eleman olacak olan ikinci elemanı döndürüyoruz.
        return s -> sonraki;
    }

    // silinecek olan eleman ilk eleman değilse
    // listede aramaya başlıyoruz.
    do
    {
        // silinecek eleman bulunduysa
        if(s -> sonraki -> sayi == silinecekDeger &&
            s -> sonraki != ilkEleman)
        {
            gecici = s -> sonraki;
            s -> sonraki = s -> sonraki -> sonraki;
            free(gecici);
            
            return ilkEleman;
        }
        
        // bulunamadıysa sonraki elemana geçiyoruz.
        s = s -> sonraki;
    } while(s -> sonraki != ilkEleman);
    
    // silinecek eleman bulunamadıysa
    cout << "Silinecek eleman bulunamadi." << endl;
    return ilkEleman;
}
```

Önceki örnekte olduğu gibi bu örneği de belirli testlerden geçirdim. Herhangi bir sorunla karşılaşmadım. Kaynak kodun tamamı şu şekilde:

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
    int i = 1;
    oge* s = ilkEleman;

    do
    {
        cout << i << ". eleman: " << s -> sayi << endl;
        i++;
        s = s -> sonraki;
    } while(s != ilkEleman);

    cout << endl;
}

oge* Sil(oge* ilkEleman, int silinecekDeger)
{
    oge* s = ilkEleman;
    oge* gecici;

    // silinecek olan eleman ilk elemansa
    if(s -> sayi == silinecekDeger)
    {
        // son elemana kadar geliyoruz.
        while (s -> sonraki != ilkEleman)
        {
            s = s -> sonraki;
        }
        
        // ilkEleman'ı yani ilk'i zincirden çıkarıyoruz.
        s -> sonraki = ilkEleman -> sonraki;
        
        // ilkEleman'ı siliyoruz.
        free(ilkEleman);

        // yeni ilk eleman olacak olan ikinci elemanı döndürüyoruz.
        return s -> sonraki;
    }
    
    // ilk eleman değilse
    // listede aramaya başlıyoruz.
    do
    {
        // silinecek eleman bulunduysa
        if(s -> sonraki -> sayi == silinecekDeger &&
            s -> sonraki != ilkEleman)
        {
            gecici = s -> sonraki;
            s -> sonraki = s -> sonraki -> sonraki;
            free(gecici);
            return ilkEleman;
        }
        
        // bulunamadıysa sonraki elemana geçiyoruz.
        s = s -> sonraki;
    } while(s -> sonraki != ilkEleman);
    
    // silinecek eleman bulunamadıysa
    cout << "Silinecek eleman bulunamadi." << endl;
    return ilkEleman;
}

oge* Ekle(oge* ilkEleman, int eklenecekDeger)
{
    // liste boş ise
    if(ilkEleman == NULL)
    {
        ilkEleman = (oge*) malloc(sizeof(oge));
        ilkEleman -> sonraki = ilkEleman;
        ilkEleman -> sayi = eklenecekDeger;
        
        return ilkEleman;
    }
    
    // liste bir veya daha fazla elemana sahip ise
    oge* s = ilkEleman;
    oge* gecici = (oge*) malloc(sizeof(oge));

    // eklenecek değer ilk elemandan küçükse
    if(ilkEleman -> sayi > eklenecekDeger)
    {
        gecici -> sayi = eklenecekDeger;
        gecici -> sonraki = ilkEleman;
        
        while (s -> sonraki != ilkEleman)
        {
            s = s -> sonraki;
        }
        
        s -> sonraki = gecici;
        
        return gecici;
    }
    
    // son eleman değilse ve
    // sonraki eleman eklenecek sayidan küçükse
    // eklenecek eleman için doğru aralığı bulmaya çalışıyoruz.
    while(s -> sonraki != ilkEleman &&
            s -> sonraki -> sayi < eklenecekDeger)
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
    ilk = Ekle(ilk, 1);
    Listele(ilk);

    return 0;
}
```
