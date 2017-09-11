---
title: "Tasarım Kalıpları: Giriş"
date: 2016.07.21
tags:
- mimari & tasarım
- tasarım kalıpları
categories:
- tasarım kalıpları
- mimari & tasarım
---

## Nedir?

Tecrübeli, nesne-tabanlı yazılım geliştirenler tarafından yazılım geliştirme sürecinde ortaya çıkan genel problemleri çözme amacıyla geliştirilen/düşünülen çözüm ve/veya çözüm yöntemi bütünleri tasarım kalıpları, tasarım desenleri, tasarım örüntüleri gibi isimler ile adlandırılır.

Sözünü ettiğimiz kalıplar, *Gang of Four (GoF)* olarak bilinen dört yazar tarafından yazılan [*"Design Patterns: Elements of Reusable Object-Oriented Software"*][Kitap] isimli kitabın yayınlanmasından sonra alanımızda popülerlik kazanmıştır.

Tasarım kalıpları genellikle sınıflar, nesneler arası ilişkileri ve etkileşimleri gösterir/açıklar. Dolayısıyla programlama, yazılım tasarımına yapısal bir yaklaşım olarak görülebilirler.

Daha detaylı teorik bilgiyi [*Software design pattern*][Wiki] başlıklı wikipedia sayfasından edinebilirsiniz.

Bağlantısını verdiğim sayfada bahsedildiği gibi tasarım kalıpları *Oluşturuluşsal (Creational)*, *Yapısal (Structural)*, *Davranışsal (Behavioral)* ve *Eşzamansal (Concurrency)* olmak üzere 4 ana kategoride incelenebilirler.

Bunlardan sonuncusu olan eşzamansal kalıplar daha ileri düzey sayılabilecek çoklu kullanım (multithreading) ile ilgilidir. Bu yüzden ilk aşamada sadece ilk üç kategorideki bazı kalıplardan bahsetmeye çalışacağım.

Zamanla, yazıları ekledikçe aşağıdaki fihriste bağlantılarını ekleyeceğim.

## Fihrist

Üzerine yazmayı düşündüğüm tasarım kalıpları;

- Oluşturuluşsal (Creational)
   1. [Yegâne (Singleton)][1]  
   1. Fabrika & Soyut Fabrika (Factory & Abstract Factory)  
   1. Yapıcı (Builder)  
   1. Örnek (Prototype)  


- Yapısal (Structural)
   1. Uyarlayıcı (Adapter)  
   1. Köprü (Bridge)  
   1. Bileşik (Composite)  
   1. Dekoratör (Decorator)  
   1. Cephe (Facade)  
   1. Sineksiklet (Flyweight)  
   1. Vekil (Proxy)   


- Davranışsal (Behavioral)
   1. Komut (Command)  
   1. Yorumlayıcı (Interpreter)  
   1. Yineleyici (Iterator)  
   1. Arabulucu (Mediator)  
   1. Yadigâr (Memento)  
   1. Gözlemci (Observer)  
   1. Durum (State)  
   1. Strateji (Strategy)  
   1. Şablon (Template)  
   1. Ziyaretçi (Visitor)  

[Kitap]: https://en.wikipedia.org/wiki/Design_Patterns
[Wiki]: https://en.wikipedia.org/wiki/Software_design_pattern
[1]: /2017/01/26/tasarim-kaliplari-yegane-singleton/
