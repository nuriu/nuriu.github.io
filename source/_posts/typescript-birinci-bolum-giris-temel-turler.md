---
title: "TypeScript 1. Bölüm: Giriş, Temel Türler"
date: 2016.04.26
tags:
- typescript
- giriş
- veri tipleri
categories:
- typescript
---

## Giriş

![TypeScript Logo](https://upload.wikimedia.org/wikipedia/commons/a/a6/TypeScript_Logo.png)

TypeScript, Microsoft tarafından açık kaynaklı olarak geliştirilen programlama dili. TypeScript genellikle, JavaScript'in bir üst kümesi olarak tarif edilir. Dolayısıyla bir JavaScript programı aynı zamanda geçerli bir TypeScript programıdır.  

TypeScript ile yazılan tüm kodlar JavaScript'e derlenir. Fakat doğrudan JavaScript ile kullanamadığınız sınıf-tabanlı nesne-tabanlı programlamayı TypeScript ile kullanabilirsiniz.  

Bana soracak olursanız, TypeScript, büyük ihtimalle zaman geçtikçe daha da popüler bir dil olacak. (Angular, Ionic gibi popüler kütüphanelerde aynı fikirde olacaklar ki kullanımını tavsiye ediyorlar/kendileri kullanıyorlar.)

## Nasıl kurabilirim?

Visual Studio'nun son sürümlerini kullanıyorsanız zaten bu desteğe sahipsiniz demektir. Fakat benim gibi Windows kullanmayanlardan iseniz Node js paketini aşağıdaki komut ile (bilgisayarınızda Node'un kurulu olması gerekli.) kurabilirsiniz;  

``` typescript
npm install -g typescript
```

Derleyiciyi kurduktan sonra;   

``` typescript
tsc dosyaAdi.ts
```

komutuyla derleme işlemlerinizi gerçekleştirebilirsiniz.

Bu işlem kodunuzu .js uzantılı bir javascript dosyasına dönüştürecektir.   

Hazırsanız dili incelemeye başlayalım.

## Değişken Tanımlama

Değişken tanımlama şeklimiz;  

``` typescript
var/let/const degiskenAdi = deger;
```

**var**

*var* anahtar kelimesi ile tanımlanan değişkenler tanımlandıkları fonksiyonların içerisinde kullanılabilirler.  

**let**

*let* anahtar kelimesi ile tanımlanan değişkenler tanımlandıkları kod bloğu içerisinde kullanılabilirler.  

**const**  

*const* anahtar kelimesi ile tanımlanan değişkenlere müdahale edilebilir fakat yeni atama yapılamaz ve sadece tanımlandıkları kod bloğu içerisinde kullanılabilirler.   

## Temel Türler

TypeScript çoğu dilden aşina olabileceğiniz şu veri türlerini destekler;  

**Boolean Değerleri**  
Diğer dillerdeki ile aynı amaca sahiptir sadece true (doğru) ve false (yanlış) değerlerine sahip olabilir.  

Tanımlanışları;  
``` typescript
var degiskenAdi: boolean = false /*veya*/ true;
```

**Sayılar (Number)**  
Tüm sayılar için kullanılan veri türüdür.

Tanımlanışları;  
``` typescript
var degiskenAdi: number = 8;
```

**Metinler (String)**  
Adı üzerinde metinler için kullanılan türlerdir. Çift tırnak (") ve tek tırnak (') ile kullanılabilirler.   

Tanımlanışları;  
``` typescript
var degiskenAdi: string = "kadir";
degiskenAdi = 'mehmet';
```

**Diziler (Array)**  
Belirtilen türde veri kümeleri/koleksiyonları oluşturmak için kullanılırlar.  

Tanımlanışları;  
``` typescript
// bu durumda veri türü number olmalıdır.
var degiskenAdi: veriTuru[] = [1, 2, 3];
// veya
var degiskenAdi: Array<veriTuru> = [1, 2, 3];
```

**Numaralandırmalar (Enum)**  
Sayısal değerlere daha anlaşılır isimler vermeye yararlar.
Numaralandırma varsayılan olarak 0'dan başlar. Bu değeri ve hatta her elemanın değerini siz de belirleyebilirsiniz.  

Tanımlanışları, kullanımları;  
``` typescript
enum Renkler { Kırmızı = 1, Yeşil, Mavi };
var degiskenAdi: Renkler = Renkler.Mavi;
```

**Herhangi (Any)**  
Tanımlarken türünü bilmediğimiz veriler için kullanılırlar.
Ayrıca birden fazla veri türü içeren dizilerin de kullanılabilmesini sağlarlar.  

Tanımlanışları, kullanımları;  
``` typescript
var degiskenAdi: any = 8;
degiskenAdi = "metin yapalım";
degiskenAdi = false; // boolean da olabilir

var diziAdi: any[] = [1, true, "metin"];
diziAdi[1] = 100;
```

**Hiçbiri (Void)**  
Bir önceki veri türümüzün (any) zıttı olarak değerlendirilebilir.
Burada hiçbir türümüz yoktur.
Bu yapıyı genellikle/sıklıkla geriye herhangi bir veri türü döndürmeyen fonksiyonlarda göreceğiz.     

Tanımlanışları;  
``` typescript
function fonksiyonAdi(): void {
    alert("mesaj");
}
```

İlk bölümümüzden bu kadar.

Sonraki bölüm: [TypeScript - 2. Bölüm: Fonksiyonlar][1]

[1]: /2016/04/27/typescript-ikinci-bolum-fonksiyonlar/
