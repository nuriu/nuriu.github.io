---
layout: post
title: TypeScript 
subtitle: "2. Bölüm: Fonksiyonlar"
categories:
- typescript
---

# Fonksiyonlar
---------------

İşleri bölüp yönetmemize olanak sağlayan fonksiyonları isimli ve anonim olarak ikiye ayırabiliriz.

Tanımlanışları;  
{% highlight ts %}
// İsimli Fonksiyon
function fonksiyonIsmi(parametre1, parametre2) {
    return gonderilecekDeger;
}

// Anonim Fonksiyon
var isim = function(parametre1, parametre2) { return gonderilecekDeger; };
{% endhighlight %}

Örnek fonksiyon;  
{% highlight ts %}
// İsimli Fonksiyon
function topla(birinciSayi, ikinciSayi) {
    return birinciSayi + ikinciSayi;
}

// Anonim Fonksiyon
var topla = function(birinciSayi, ikinciSayi) { return birinciSayi + ikinciSayi; };
{% endhighlight %}

# Fonksiyon Türleri

TypeScript'in ana özelliklerinden biri olan türleri fonksiyonlarımız için de kullanabiliyoruz.  

Yukarıdaki basit fonksiyonumuzu türlerimiz ile birlikte yazalım;  

{% highlight ts %}
// İsimli Fonksiyon
function topla(birinciSayi: number, ikinciSayi: number): number {
    return birinciSayi + ikinciSayi;
}

// Anonim Fonksiyon
var topla = function(birinciSayi: number, ikinciSayi: number): number {
    return birinciSayi + ikinciSayi; 
};

{% endhighlight %}

Görüldüğü üzere parametrelerimiz ve fonksiyonumuz için türlerimizi yani sayı kullandığımızı ve geriye sayı döndüreceğimizi belirttik.  

Önceki bölümde tanıttığımız türleri fonksiyonlarda da kullanabilirsiniz.

# İsteğe Bağlı ve Varsayılan Parametreler 

TypeScript fonksiyonlarında belirtilen her parametre gerekli olarak kabul edilir.
Yani her fonksiyon çağrıldığında, derleyici kullanıcının o fonksiyonun her parametresi için değer verip mermediğini kontrol eder. (*null* ve *undefined* da geçerli değerlerdir.)

{% highlight ts %}
function ismiYaz(ad: string, soyad: string) {
    return ad + " " + soyad;
}

let isim1 = ismiYaz("Yavuz");                           // hatalı. parametre eksik.
let isim2 = ismiYaz("Hızır", "Barbaros", "Hayrettin");  // hatalı. parametre fazla.
let isim3 = ismiYaz("Esat", "Yılmazer");                // doğru.
{% endhighlight %}

JavaScript'te ise her parametre isteğe bağlıydı, yani değersiz (*undefined*) bırakılabilirdi.
TypeScipt'te aynı özelliği parametre isminin sonuna *?* ekleyerek gerçekleştirebiliriz.
Aynı örnekteki *soyad* parametresini isteğe bağlı yapalım;

{% highlight ts %}
function ismiYaz(ad: string, soyad?: string) {
    return ad + " " + soyad;
}

let isim1 = ismiYaz("Yavuz");                           // artık doğru.
let isim2 = ismiYaz("Hızır", "Barbaros", "Hayrettin");  // hatalı. parametre fazla.
let isim3 = ismiYaz("Esat", "Yılmazer");                // doğru.
{% endhighlight %}

İsteğe bağlı parametreleri belirlerken dikkat etmeniz gereken şey bu parametreleri en sona yazmaktır.
Yani eğer örneğimizdeki *ad* parametremizi isteğe bağlı yapacak olsaydık onu sona (en sağa) yazmamız gerekecekti.

İsteğe bağlı parametrelerin aksine varsayılan olarak tanımlanmış parametreleri listenin sonuna yazmamıza gerek yok.
Aynı örneğimizdeki *ad* parametremizi *Yavuz* değerine sahip olarak tanımlayalım. Şu şekilde olacaktır;

{% highlight ts %}
function ismiYaz(ad = "Yavuz", soyad?: string) {
    return ad + " " + soyad;
}

let isim1 = ismiYaz("Yavuz");                           // hatalı. parametre eksik.
let isim2 = ismiYaz("Hızır", "Barbaros", "Hayrettin");  // hatalı. parametre fazla.
let isim3 = ismiYaz(undefined, "Yılmazer");             // doğru. Çıktı: "Yavuz Yılmazer"
{% endhighlight %}

İkinci bölümümüzden bu kadar.

Sonraki bölüm: [TypeScript - 3. Bölüm: Sınıflar][1]

[1]: /typescript/2016/05/05/typescript-ucuncu-bolum-siniflar.html