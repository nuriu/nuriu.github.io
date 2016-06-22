---
layout: post
title: TypeScript 
subtitle: "3. Bölüm: Sınıflar"
categories:
- typescript
---

# Sınıflar
----------

JavaScript fonksiyonlara ve prototip bazlı kalıtımlara odaklandığından dolayı ben dahil olmak üzere nesne tabanlı programlamayla daha haşır neşir olmuş olan çoğu kişiye bir miktar garip gelmiştir.  

JavaScript nesne tabanlı yaklaşıma ECMAScript 6 ile geçmeye başlasa da TypeScript bu yönteme şimdiden olanak tanıyor.

Buradaki sınıflar temel olarak diğer nesne tabanlı dillerdeki çeşitleriyle aynı. Basit bir örnek ile inceleyelim;

{% highlight ts %}
class SinifIsmi {
    degiskenIsmi: degiskenTipi;
    .
    .
    .
    
    constructor(parametreIsmi: parametreTipi ...) {
        // yapıcı fonksiyon içeriği
    }
    
    fonksiyonIsmi() {
        // fonksiyon içeriği
    }
}
{% endhighlight %}

Görüldüğü üzere yazım şeklindeki ufak farklılıklar dışında neredeyse diğer dillerdeki çeşitleriyle aynı.

**NOT:** *...* olarak bıraktığım kısımlar çeşitlendirilebilir/çoğaltılabilir olduğu için öyle yazdım.

# Erişim Belirteçleri

Yine bu konuda da nesne tabanlı yapıya uygun olarak 3 tip erişim belirteci var.
Bunlar diğer dillerden de aşina olabileceğiniz üzere *public*, *private* ve *protected*.
Erişim belirteci belirtilmediği durumlarda varsayılan olarak *public* atanır.

- *private* erişim belirtecine sahip üyeler bulundukları sınıf dışarısında kullanılamazlar.
- *public* erişim belirtecine sahip üyeler bulundukları sınıf dışarısından da erişilebilirler.
- *protected* erişim belirtecine sahip üyeler bulundukları sınıfta ve o sınıftan türetilmiş sınıflarda kullanılabilirler. 

# Kalıtım
----------

Nesne tabanlı programlamanın yapı taşı olan sınıflar arasındaki kalıtımsal ilişkiler ile ilgili diğer serilerde verdiğim basit örnek ile inceleyelim;
{% highlight ts %}
// ana sınıfımız
class Hayvan {
    // üye değişkenimiz (varsayılan olarak public)
    isim: string;
    
    // yapıcı fonksiyonumuz
    constructor(ismi: string) {
        this.isim = ismi;
    }
    
    hareketEt(metre: number = 0) {
        // metin ifadeleri içerisinde değişken kullanımı
        console.log(`${this.isim} ${metre} metre hareket etti.`);
    }
}

// Hayvan sınıfından türettiğimiz Kus sınıfımız
// bu sınıfımız Hayvan sınıfının tüm özelliklerini taşıyacak
class Kus extends Hayvan {
    constructor(isim: string) {
        // üst sınıfımızın yapıcı fonksiyonunu çağırıyoruz
        super(isim);
    }
    
    hareketEt(metre = 8) {
        console.log(`${this.isim} Uçuyor...`);
        // üst sınıfımızdaki fonksiyonumuzu çağırıyoruz
        super.hareketEt(metre);
    }
}

// Hayvan sınıfından türettiğimiz Kopek sınıfımız
// bu sınıfımız da Hayvan sınıfının tüm özelliklerini taşıyacak
class Kopek extends Hayvan {
    constructor(isim: string) {
        // üst sınıfımızın yapıcı fonksiyonunu çağırıyoruz
        super(isim);
    }
    
    hareketEt(metre = 45) {
        console.log(`${this.isim} Koşuyor...`);
        // üst sınıfımızdaki fonksiyonumuzu çağırıyoruz
        super.hareketEt(metre);
    }
}

let biricik = new Kus("Biricik");
let yavuz: Hayvan = new Kopek("Yavuz");

biricik.hareketEt();
yavuz.hareketEt(16);
{% endhighlight %}

Çıktımız şu şekilde olacaktır;
{% highlight ts %}
Biricik Uçuyor...
Biricik 8 metre hareket etti.
Yavuz Koşuyor...
Yavuz 16 metre hareket etti.
{% endhighlight %}

Böylece TypeScript üzerinde sınıf ve kalıtım konseptleri ve yazılımları üzerinden yüzeysel olarak da olsa geçmiş olduk.

Sonraki bölüm: [TypeScript - 4. Bölüm: Arayuzler][1]

[1]: /typescript/2016/06/22/typescript-dorduncu-bolum-arayuzler.html