---
title: "Temel Python 7. Gün: Kalıtım"
date: 2015.10.16
tags:
- python
- kalıtım
categories:
- python
---

Kalıtım
-------
Kabaca bir sınıftan başka bir sınıf oluşturma işlemidir. Tanımlanması şu şekildedir;  

``` python
class ClassIsmi(AnaClassIsmi):
    içerik
```

**Kalıtım Örneği**  
Dün oluşturduğumuz oyuncu sınıfından bir yönetici sınıfı oluşturmak istediğimizi varsayalım. Kalıtım yoluyla şu şekilde gerçekleştirebiliriz;  

``` python
class Yonetici(Oyuncu):
    yoneticiSayisi = 0
    # ek veriler eklenebilir.

    def __init__(self):
        Yonetici.yoneticiSayisi += 1
    # ek fonksiyonlar eklenebilir.
```

Şimdi de dünkü örneğimizle bugünkü örneğimizi birleştirip daha işlevsel bir örnek elde edelim;  

``` python
class Oyuncu:
    oyuncuSayisi = 0
    isim = ""
    yas = 0

    def __init__(self, isim, yas):
        self.isim = isim
        self.yas = yas
        Oyuncu.oyuncuSayisi += 1

    def oyuncuyuGoster(self):
        print("İsim: ", self.isim,  "\nYaş: ", self.yas, "\n")

oyuncu1 = Oyuncu("Ahmet", 18)
oyuncu2 = Oyuncu("Mehmet", 21)

oyuncu1.oyuncuyuGoster()
oyuncu2.oyuncuyuGoster()

print("Toplam Oyuncu Sayısı: %d" % Oyuncu.oyuncuSayisi, "\n")


class Yonetici(Oyuncu):
    yoneticiSayisi = 0
    # ek veriler eklenebilir.

    def __init__(self):
        Yonetici.yoneticiSayisi += 1
    # ek fonksiyonlar eklenebilir.

yonetici1 = Yonetici()

# ana sınıfın verilerini alt sınıfımızda kullandık.
yonetici1.isim = "Osman"
yonetici1.yas = 40

# ana sınıfın fonksiyonunu alt sınıfımızda kullandık.
yonetici1.oyuncuyuGoster()

# toplam oyuncu sayısını etkilemedigimizi 
# (yani ana sınıfın constructorunu cagirmadigimizi) gorelim.
print("Toplam Oyuncu Sayısı: %d" % Oyuncu.oyuncuSayisi)
print("Toplam Yönetici Sayısı: %d" % Yonetici.yoneticiSayisi)
```
