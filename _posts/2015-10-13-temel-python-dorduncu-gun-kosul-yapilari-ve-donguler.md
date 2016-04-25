---
layout: post
title: Temel Python
subtitle: "4. Gün: Koşul Yapıları ve Döngüler"
categories:
- python
---

# **If, Elif, Else**  
Karar verme yapılarından olan if yapısının diğer dillerdeki versiyonlarından tek farkı yazım biçimindedir. (sentaks) Bu yapıları kullanırken girintilere biraz daha fazla dikkat etmelisiniz. Örnek;  

{% highlight python %}
yas = 20

# yas degiskeni 18'den kucukse
if yas < 18:
    print("Yasiniz 18'den kucuktur.")
# yas degiskeni 18'den buyuk fakat 21'den kucukse
elif yas < 21:
    print("Yasiniz 18-20 araligindadir.")
# yas degiskeni yukaridaki durumlardan hicbirine uymuyorsa
else:
    print("Yasiniz 20'den buyuktur.")
{% endhighlight %}  


# **For**  
For döngüsünün kullanım şekli C ailesindeki şeklinden biraz farklıdır. Örneğin sayı aralıklarıyla ilgili basit bir örnek;  

{% highlight python %}
# 1'den 100'e kadar olan sayilari yazdirmak
sayac = 1
for sayi in range(1,100):
    print (sayac,'. Sayi :', sayi)
    sayac+=1
{% endhighlight %}

Bu örnek ekrana 1-100 aralığındaki sayıları (100 hariç) yazdırır. C ailesinden farklı olarak 3 bölümlü değildir. Sadece değişken adı ve döneceği aralıktan oluşur. Liste içinde dönüp tüm elemanları yazdıran basit bir örnek;  

{% highlight python %}
# 4 elemanlı kisiler listesi
kisiler = ['ahmet', 'mehmet', 'kadir', 'osman']
# kisiler listesinin uzunlugu boyunca indis degeri icin donecek
# ve tum indis degerleri icin listenin elemanlarini yazdiracak
for indis in range(len(kisiler)):
   print (indis + 1,'. Kisi :', kisiler[indis])
{% endhighlight %}


# **While**    
While döngüsü mantık olarak en kolay döngü sistemidir. Belirli bir koşul gerçekleşmediği sürece tekrar eden kod bloğundan oluşur. Örnek;  

{% highlight python %}
# sayac degeri 10'dan kucuk veya 10'a esitse degeri ekrana yazacak
sayac = 1
while (sayac <= 10):
   print ('Sayac degeri:', sayac)
   sayac += 1
{% endhighlight %}


Sonraki Bölüm: Fonksiyonlar, Dosyalama İşlemleri:  
[Temel Python - 5. Gün: Fonksiyonlar, Dosyalama İşlemleri][1]  


[1]: /python/2015/10/14/temel-python-besinci-gun-fonksiyonlar-dosyalama-islemleri.html
