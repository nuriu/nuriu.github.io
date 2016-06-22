---
layout: post
title: TypeScript 
subtitle: "4. Bölüm: Arayüzler"
categories:
- typescript
---

# Arayüzler
-----------
Final dönemi için verdiğim uzun süreli mecburi aradan sonra kaldığımız yerden devam edelim.
Diğer nesne tabanlı dillerden tanıdığımız arayüzler TypeScript dilinde de işimizi kolaylaştırmak için mevcut durumda.  

Fonksiyonlar bölümünde bahsettiğim isteğe bağlı parametreler bu kısımdaki özellikler için de kullanılabilir.
Basitçe örneklemek gerekirse;  

{% highlight ts %}
interface Dortgen {
    renk?: string; 	// renk özelliğimiz isteğe bağlı
    genislik: number;	// genislik özelliğimiz belirlenmek zorunda
    yukseklik: number;	// yukseklik özelliğimiz belirlenmek zorunda
}
{% endhighlight %}

Arayüz kullanımını daha iyi açıklayabilmek için bu örneğimizi fonksiyonlar ile genişletelim;

{% highlight ts %}
function dortgenOlustur(d: Dortgen): {renk: string; alan: number} {
	
    // geçici dortgen değişkenimiz
    let dortgen = {renk: "kırmızı", alan: 100};

    // renk belirtilmiş ise dörtgenimizin rengini atıyoruz
    if (d.renk) {
        dortgen.renk = d.renk;
    }

    // kenar uzunlukları belirtilmiş ise dörtgenimizin alanını hesaplıyoruz
    if (d.genislik && d.yukseklik) {
        dortgen.alan = d.genislik * d.yukseklik;
    }

    // geçici değişkenimizi geriye gönderiyoruz
    return dortgen;
}

// beyaz renkli, alanı 80 olan bir dörtgen oluşturuyoruz
let dikdortgen = dortgenOlustur({ renk: "beyaz", genislik: 8, yukseklik: 10 });

{% endhighlight %}

Yukarıdaki örneğimizde arayüzü nesne özelliklerini tanımlamakta kullandık.
TypeScript arayüzlerde bu kullanımın yanı sıra fonksiyon türlerini açıklama amaçlı kullanıma da imkan sunuyor.
Bunu da son örneğimiz ile şöyle göstermiş olalım;

Arayüzümüz;  

{% highlight ts %}
interface metinAramasi {
	// parametrelerimiz ve geriye dönüş tipimiz
    (kaynak: string, aranan: string): boolean;
}
{% endhighlight %}

Fonksiyonumuz;

{% highlight ts %}
// arayüzümüz tipinde oluşturduğumuz fonksiyonumuz
let metinAra: metinAramasi;

metinAra = function(kaynak: string, aranan: string) {

    let durum = kaynak.search(aranan);

    // kaynak aranan metni içermiyor ise
    if (durum == -1) {
        return false;
    }

    // kaynak aranan metni içeriyor ise
    else {
        return true;
    }
}

{% endhighlight %}

Gördüğünüz gibi arayüzümüzü fonksiyonumuzun parametrelerini ve dönüş değer türünü tanımlamak için kullandık.
Sınıflar ile birlikte kullanımı gibi daha detaylı konulara [buraya][0] tıklayarak TypeScript sitesindeki dökümanlardan ulaşabilirsiniz.
Java ve diğer diller ile ne kadar benzer yazım şekilleri olduğunu keşfedeceksiniz.
Kısaca arayüzlere değindik. Sonraki yazılarda görüşmek üzere.

[0]: http://www.typescriptlang.org/docs/handbook/interfaces.html