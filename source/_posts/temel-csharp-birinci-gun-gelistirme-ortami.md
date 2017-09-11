---
title: "Temel C# 1. Gün: Geliştirme Ortamının Hazırlanması"
date: 2015.10.17
tags:
- c#
- giriş
- geliştirme ortamı
categories:
- c#
---

## Giriş
C ailesinin son üyesi olan C# Microsoft tarafından geliştirilen bir dildir. İlk sürümü 2000 yılında, son sürümü ise 20 Temmuz 2015'te çıkmıştır. Aktif olarak geliştirilmektedir. Yazım stili, diğer iki c dili ile neredeyse aynıdır. Fikir sahibi olabilmek için örnek program;  

``` csharp
using System;

public static class Merhaba
{
	static void Main()
	{
		Console.WriteLine("Merhaba");
		Console.ReadKey();
	}
}
```

Görüldüğü üzere geleneksel parantezli kullanım C# ile devam etmekte. C# ile ilgili daha detaylı bilgi edinmek isterseniz aşağıdaki bağlantıya tıklayabilirsiniz.  

[C Sharp - Vikipedi][Vikipedi]  

## Geliştirme Ortamı
Herhangi bir .Net teknolojisi ile geliştirme yapacaksanız en iyi ve en mantıklı seçenek yine ne yazikki Microsoft ürünlerini kullanmak. C++ ve Python'un aksine C# tabiri caizse oldukça bağımlı bir dil. O yüzden IDE olarak Visual Studio kullanmak en doğrusu. Eğer herhangi bir Visual Studio sürümüne sahip değilseniz aşağıdaki linkten ücretsiz Community versiyonunu indirebilirsiniz.  

[Visual Studio][VS]  

Sonraki Bölüm: Giriş, Veri Tipleri, Tip Dönüşümleri:  
[Temel C# - 2. Gün: Giriş, Veri Tipleri, Tip Dönüşümleri][1]  

[1]: /2015/10/18/temel-csharp-ikinci-gun-giris-veri-tipleri-tip-donusumleri/

[VS]: https://www.visualstudio.com/downloads/
[Vikipedi]: https://tr.wikipedia.org/wiki/C_Sharp
