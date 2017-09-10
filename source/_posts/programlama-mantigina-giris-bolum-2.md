---
layout: post
title: "Programlama Mantığına Giriş Bölüm 2"
date: 2015.06.28
tags:
- genel
categories:
- genel
---

Programlar Nelerden Oluşur?
---------------------------
Kaba tabirle programlar modüllerden, modüller algoritmalardan, algoritmalar ise kod bloklarından oluşur. Modülleri kabaca kaynak kod doslayarı olarak düşünebilirsiniz. Algoritmalar ise hepimizin farkında olmadan kullandığı şeydir; sıralanmış iş adımları.

Lafı daha fazla uzatmayıp örnek üzerinden gidelim. Aşağıda kullanıcı tarafından girilen iki sayının karelerinin toplamını bulup ekrana yazan basit programın C dilindeki kaynak kodu verilmiştir.

``` c main.c
#include <stdio.h>
#include <stdlib.h>

int n1 = 0, n2 = 0;
int toplam = 0;

int main()
{
	printf("Arada bosluk olacak sekilde iki sayi girin: ");
	scanf("%d %d", &n1, &n2);
	printf("Girilen sayilarin karelerinin toplami:\n");
	toplam = (n1*n1) + (n2*n2);
	printf("%d",toplam);
	return 0;
}
```

Yukarıdaki kaynak kodu üç parçaya bölebiliriz;  

- Başlık dosyaları  
	İlk iki satır programımıza `stdio.h` ve `stdlib.h` olmak üzere iki başlık (header) dosyası çağırır. Bu başlık dosyaları kullanılmak üzere hazır fonksiyonları içerir.  
- Değişken tanımlamaları  
	4-5. satırlarda `int` tipinde üç değişken tanımlanmıştır. Değişkenler programlarda veri kullanımını kolaylaştırır.
- Main fonksiyonunun kod bloğu  
	Sonraki 7. satırda  `int` tipinde tanımlanan `main` fonksiyonunu görüyoruz.  Alt satırlarda ise `{` ile başlayıp `}` ile sonlanan, fonksiyonun kod bloğu bulunmakta.  

Programın yaptıkları sırasıyla şunlar;  

- Ekrana `Arada bosluk olacak sekilde iki sayi girin: ` yazar.  
- Kullanıcının girdiği sayıları, daha önceden `int` tipinde tanımlanmış olan `n1` ve `n2` değişkenlerine atar.  
- Ekrana `Girilen sayilarin karelerinin toplami:` yazıp bir alt satıra geçer.  
- Yine `int` tipinde tanımlanmış olan `toplam` değişkenine `(n1*n1) + (n2*n2)` işleminin sonucunu atar.  
- Ve son olarak ekrana `toplam` değişkenini yazdırır.  

Basit bir programın nelerden oluştuğunu gösterdiğimize göre bu kodların nereye yazıldığını ve nasıl programa dönüştüğünden bahsedebiliriz.  

Programlar Nasıl Oluşur?
------------------------

Yukarıdaki örnekteki kaynak kodu bir metin belgesine yazıp dosya uzantısını `.c` yapıp kaydetseniz bile tek başına bir işe yaramaz.  

Kodların programa dönüşebilmesi için kodların bir derleyici tarafından derlenmesi gerekir. Bu konuyu anlatmak için genelde derleyici, bağlayıcı gibi unsurlar ayrı ayrı anlatılır fakat konu oldukça uzamaya ve karışıklaşmaya müsait olduğundan ben sadece, bunların birleştirilmiş halleri olaran IDE (integrated development environment) 'nin tanımını yapacağım.  

IDE nedir?
----------

IDE, kodların yazıldığı ve derlendiği yazılımlardır. Visual Studio (C++, C#, F#, Python), Eclipse(Java, C, C++), Code::Blocks(C, C++, D) gibi bir çok örnekleri vardır. Bu yazılımlar hakkında daha detaylı bilgiyi ve ekran görüntülerini internetten bulabilirsiniz.  

Bu ve önceki bölümde programlama dünyasına ufak bir pencere açtık. Bundan sonraki yazılarım genelde programlama dilleri ve kütüphaneleri üzerine teknik yoğunluklu olacak. Doğrudan uygulamayla başlamak istiyorsanız gelecekteki yazılarım sizin için daha uygun olacaktır. Fakat kafanızın karıştığını düşünüyor ve giriş konusunda daha fazla bilgi istiyorsanız aşağıdaki kaynaktan veya googledan yararlanabilirsiniz.  

[Programming Concepts: A Brief Tutorial for New Programmers][Kaynak]

[Kaynak]: http://holowczak.com/programming-concepts-tutorial-programmers/
