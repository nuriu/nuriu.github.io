---
title: "TypeScript 2. Bölüm: Fonksiyonlar"
date: 2016.04.27
tags:
- typescript
- fonksiyonlar
categories:
- typescript
---

## Fonksiyonlar

İşleri bölüp yönetmemize olanak sağlayan fonksiyonları isimli ve anonim olarak ikiye ayırabiliriz.

Tanımlanışları;  
``` typescript
// İsimli Fonksiyon
function fonksiyonIsmi(parametre1, parametre2) {
    return gonderilecekDeger;
}

// Anonim Fonksiyon
var isim = function(parametre1, parametre2) {
        return gonderilecekDeger;
    };
```

Örnek fonksiyon;  
``` typescript
// İsimli Fonksiyon
function topla(birinciSayi, ikinciSayi) {
    return birinciSayi + ikinciSayi;
}

// Anonim Fonksiyon
var topla = function(birinciSayi, ikinciSayi) {
        return birinciSayi + ikinciSayi;
    };
```

## Fonksiyon Türleri

TypeScript'in ana özelliklerinden biri olan türleri fonksiyonlarımız için de kullanabiliyoruz.  

Yukarıdaki basit fonksiyonumuzu türlerimiz ile birlikte yazalım;  

``` typescript
// İsimli Fonksiyon
function topla(birinciSayi: number, ikinciSayi: number): number {
    return birinciSayi + ikinciSayi;
}

// Anonim Fonksiyon
var topla = function(birinciSayi: number,
                     ikinciSayi : number): number {
    return birinciSayi + ikinciSayi;
};

```

Görüldüğü üzere parametrelerimiz ve fonksiyonumuz için türlerimizi yani sayı kullandığımızı ve geriye sayı döndüreceğimizi belirttik.  

Önceki bölümde tanıttığımız türleri fonksiyonlarda da kullanabilirsiniz.

# İsteğe Bağlı ve Varsayılan Parametreler

TypeScript fonksiyonlarında belirtilen her parametre gerekli olarak kabul edilir. Yani her fonksiyon çağrıldığında, derleyici kullanıcının o fonksiyonun her parametresi için değer verip mermediğini kontrol eder. (*null* ve *undefined* da geçerli değerlerdir.)

``` typescript
function ismiYaz(ad: string, soyad: string) {
    return ad + " " + soyad;
}

// hatalı. parametre eksik.
let isim1 = ismiYaz("Yavuz");
// hatalı. parametre fazla.
let isim2 = ismiYaz("Hızır", "Barbaros", "Hayrettin");
// doğru.
let isim3 = ismiYaz("Esat", "Yılmazer");
```

JavaScript'te ise her parametre isteğe bağlıydı, yani değersiz (*undefined*) bırakılabilirdi. TypeScipt'te aynı özelliği parametre isminin sonuna *?* ekleyerek gerçekleştirebiliriz.

Aynı örnekteki *soyad* parametresini isteğe bağlı yapalım;

``` typescript
function ismiYaz(ad: string, soyad?: string) {
    return ad + " " + soyad;
}

// artık doğru.
let isim1 = ismiYaz("Yavuz");
// hatalı. parametre fazla.
let isim2 = ismiYaz("Hızır", "Barbaros", "Hayrettin");
// doğru.
let isim3 = ismiYaz("Esat", "Yılmazer");
```

İsteğe bağlı parametreleri belirlerken dikkat etmeniz gereken şey bu parametreleri en sona yazmaktır. Yani eğer örneğimizdeki *ad* parametremizi isteğe bağlı yapacak olsaydık onu sona (en sağa) yazmamız gerekecekti.

İsteğe bağlı parametrelerin aksine varsayılan olarak tanımlanmış parametreleri listenin sonuna yazmamıza gerek yok. Aynı örneğimizdeki *ad* parametremizi *Yavuz* değerine sahip olarak tanımlayalım. Şu şekilde olacaktır;

``` typescript
function ismiYaz(ad = "Yavuz", soyad?: string) {
    return ad + " " + soyad;
}

// soyad değişkenini kullandığımız için hatalı. parametre eksik.
let isim1 = ismiYaz("Yavuz");
// hatalı. parametre fazla.  
let isim2 = ismiYaz("Hızır", "Barbaros", "Hayrettin");
// doğru. Çıktı: "Yavuz Yılmazer"
let isim3 = ismiYaz(undefined, "Yılmazer");
```

İkinci bölümümüzden bu kadar.

Sonraki bölüm: [TypeScript - 3. Bölüm: Sınıflar][1]

[1]: /2016/05/05/typescript-ucuncu-bolum-siniflar/
