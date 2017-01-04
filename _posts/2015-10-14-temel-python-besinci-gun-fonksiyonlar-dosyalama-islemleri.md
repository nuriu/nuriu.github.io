---
layout: post
title: "Temel Python 5. Gün: Fonksiyonlar, Dosyalama İşlemleri"
tags:
- python
- fonksiyonlar
- dosyalama
categories:
- python
series: python
---

Fonksiyonlar
------------
Python'da fonksiyonlar diğer geleneksel dillere göre oldukça farklı şekilde tanımlanırlar. Basitçe, fonksiyon tanımlama sentaksı şu şekildedir;  

{% highlight python %}
def fonksiyonAdi( parametreler ):
    kodlar
    return geriGonderilecekIfade
{% endhighlight %}  

Gönderilen metni ekrana yazdıran Python fonksiyonu örneği;  
{% highlight python %}
def yazdir(metin):
    print (metin)
    return;

yazdir("Yazdırılacak Metin")
{% endhighlight %}  

Girintilere (global ve lokal değişkenlere) biraz daha dikkat etmekte fayda var.  

Dosyalama İşlemleri
-------------------

**Dosya Açma İşlemi**  
Dosya açma işlemi open fonksiyonu ile yapılır. open fonksiyonuna dosya adı ve açma modu parametleri girilerek basitçe dosya açma işlemi gerçekleştirilir. Örnek;  

{% highlight python %}
dosya = open("dosya.txt", "wb")
{% endhighlight %}  

Örneğimiz dosya.txt isimli dosyayı wb (write binary) modunda açar. wb modunun yanı sıra birçok dosya açma modu bulunmaktadır. Bunları şöyle listeleyebiliriz;  


- r: Dosyayı sadece okumak için açar. Dosya işaretçisi dosyanın başındadır.  
- rb: Dosyayı binary formatında sadece okumak için açar. Dosya işaretçisi dosyanın başındadır.  
- r+: Dosyayı okumak ve yazmak için açar. Dosya işaretçisi dosyanın başındadır.  
- rb+: Dosyayı binary formatında okumak ve yazmak için açar. Dosya işaretçisi dosyanın başındadır.  
- w: Dosyayı sadece yazmak için açar. Eğer aynı isimde dosya mevcutsa üzerine yazar. Dosya oluşturulmamışsa oluşturur.  
- wb: Dosyayı binary formatında sadece yazmak için açar. Eğer aynı isimde dosya mevcutsa üzerine yazar. Dosya oluşturulmamışsa oluşturur.  
- w+: Dosyayı okumak ve yazmak için açar. Eğer aynı isimde dosya mevcutsa üzerine yazar. Dosya oluşturulmamışsa oluşturur.  
- wb+: Dosyayı binary formatında okumak ve yazmak için açar. Eğer aynı isimde dosya mevcutsa üzerine yazar. Dosya oluşturulmamışsa oluşturur.  
- a: Dosyayı ekleme yapmak için açar. Dosya mevcutsa, dosya işaretçisi dosyanın sonundadır. Dosya oluşturulmamışsa oluşturur.  
- ab: Dosyayı binary formatında ekleme yapmak için açar.Dosya mevcutsa, dosya işaretçisi dosyanın sonundadır. Dosya oluşturulmamışsa oluşturur.  
- a+: Dosyayı ekleme yapmak ve okumak için açar. Dosya mevcutsa, dosya işaretçisi dosyanın sonundadır. Dosya oluşturulmamışsa oluşturur.  
- ab+: Dosyayı binary formatında ekleme yapmak ve okumak için açar. Dosya mevcutsa, dosya işaretçisi dosyanın sonundadır. Dosya oluşturulmamışsa oluşturur.  

**Dosya Bilgilerine Erişim İşlemleri**  
Dosya nesnesinin çeşitli bilgilerine erişim basitçe aşağıdaki örnekteki gibidir;  

{% highlight python %}
dosya = open("dosya.txt", "wb")
print ("Açılan dosyanın adı: ", dosya.name)
print ("Kapanıp kapanmama durumu: ", dosya.closed)
print ("Açıldığı mod: ", dosya.mode)
{% endhighlight %}  

**Dosyaya Yazma İşlemi**  
write fonksiyonu ile örnekteki gibi gerçekleştirilir;  

{% highlight python %}
dosya.write( "Birinci cümle.\nBunu da alt satıra yazalım.\n");
{% endhighlight %}  

**Dosyadan Okuma İşlemi**  
read fonksiyonuna okunacak karakter sayısı gönderilerek örnekteki gibi gerçekleştirilir;
{% highlight python %}
dosya = open("dosya.txt", "r+")
okunan = dosya.read(8);
print (okunan)
{% endhighlight %}  

Ek bilgi: read fonksiyonuna ek olarak tell fonksiyonu ile dosya işaretçisinin o anda nerede olduğunu öğrenmek mümkündür.  

**Dosyanın Adını Değiştirme İşlemi**  
Var olan dosyaların isimleri örnekteki gibi değiştirilebilir;  

{% highlight python %}
# işletim sistemi methodlarını eklemezseniz çalışmaz
import os
# ilk parametre dosanın adı, ikinci parametre dosyanın yeni adı
os.rename("dosya.txt", "dosya2.txt")
{% endhighlight %}  

**Dosya Kapama İşlemi**  
Açılan dosyaların kapanma işlemi close fonksiyonu ile örnekteki gibi gerçekleştirilir;  

{% highlight python %}
dosya.close()
{% endhighlight %}  

**Dosyayı Silme İşlemi**  
Dosya silme işlemi de örnekteki gibi kolaylıkla yapılabilir;  

{% highlight python %}
# işletim sistemi methodlarını eklemezseniz çalışmaz
import os
os.remove("dosya2.txt")
{% endhighlight %}  

Sonraki Bölüm: Nesneler ve Sınıflar:  
[Temel Python - 6. Gün: Nesneler ve Sınıflar][1]  

[1]: /temel-python-altinci-gun-nesneler-ve-siniflar/
