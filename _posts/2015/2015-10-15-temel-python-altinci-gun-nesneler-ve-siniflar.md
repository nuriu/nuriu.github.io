---
layout: post
title: "Temel Python 6. Gün: Nesneler ve Sınıflar"
tags:
- python
- sınıflar
- nesneler
categories:
- python
---

Sınıf Oluşturma
---------------
Python'da sınıf oluşturma işlemi diğer dillerdeki gibi class ifadesi ile gerçekleştirilir. Tanım sentaksı aşağıdaki gibidir;  

{% highlight python %}
class ClassIsmi:
    içerik
{% endhighlight %}  

Şimdi, oyuncuların ismini, yaşını ve toplam oyuncu sayısını içeren basit bir oyuncu sınıfı oluşturmak istediğimizi düşünelim. Bunu Python dili ile aşağıdaki şekilde gerçekleştirebiliriz;  

{% highlight python %}
class Oyuncu:
    oyuncuSayisi = 0
    isim = ""
    yas = 0
{% endhighlight %}  

Sınıfımıza, nesne oluşturulduğunda çağrılacak olan constructorumuzu ve çağıran nesnenin bilgilerini gösterecek fonksiyonumuzu ekleyelim. Son durum aşağıdaki gibi olacaktır;  

{% highlight python %}
class Oyuncu:
    oyuncuSayisi = 0
    isim = ""
    yas = 0

    # constructorumuz; Oyuncu sınıfına ait yeni bir
    # nesne oluşturulduğunda otomatik olarak çağrılan fonksiyon.
    def __init__(self, isim, yas):
        self.isim = isim
        self.yas = yas
        Oyuncu.oyuncuSayisi += 1

    # cağıran nesnenin bilgilerini gösterecek olan fonksiyonumuz
    def oyuncuyuGoster(self):
        print("İsim: ", self.isim,  "\nYaş: ", self.yas, "\n")
{% endhighlight %}

Nesne Oluşturma
---------------
Nesne oluşturma işlemi sınıf oluşturma işleminden çok daha kolaydır. Yapmamız gereken tek şey sınıfımızı önceden belirlediğimiz parametreleri alan bir fonksiyon gibi çağırmak. Örnek olarak iki yeni oyuncu ekleyelim;  
{% highlight python %}
# Oyuncu sınıfımızın ilk nesnesini oluşturuyoruz.
# Parametre olarak önceden belirlenen isim ve yaş değerlerini yolluyoruz.
oyuncu1 = Oyuncu("Ahmet", 18)

# Oyuncu sınıfımızın ikinci nesnesini oluşturuyoruz.
oyuncu2 = Oyuncu("Mehmet", 21)
{% endhighlight %}

Nesneler Aracılığıyla Fonksiyonları Çağırma
-------------------------------------------
Şimdi de oluşturduğumuz nesnelerin ve sınıfımızın bilgilerini ekrana yazdıralım;  

{% highlight python %}
# Oluşturduğumuz nesnelerin bilgilerini önceden oluşturduğumuz fonksiyon
# ile gösteriyoruz.
oyuncu1.oyuncuyuGoster()
oyuncu2.oyuncuyuGoster()

# Toplam oyuncu sayısını gösteriyoruz.
print("Toplam Oyuncu Sayısı: %d" % Oyuncu.oyuncuSayisi)
{% endhighlight %}

Sonraki Bölüm: Kalıtım:  
[Temel Python - 7. Gün: Kalıtım][1]  

[1]: /temel-python-yedinci-gun-kalitim/
