---
layout: post
title: Temel Java 
subtitle: "1. Gün: Giriş, Temel Veri Tipleri"
categories:
- java
---

**Giriş**

Java, ilk sürümü 1995 yılında çıkmış, açık kodlu, nesneye yönelik, zeminden bağımsız, yüksek verimli, çok işlevli, yüksek seviye, adım adım işletilen bir dildir. 
Milyarlarca cihazda halihazırda çalıştığı için mobil dünyada en çok kullanılan dil/teknoloji dersek yanlış bir tespit olmaz.  

Ayrıntılı teorik bilgi için vikipedi sayfasına göz atabilirsiniz;  
[Java (programlama dili)][Vikipedi]  

Java için Eclipse ve Intellij IDEA gibi popüler geliştirme araçları mevcut. Ben linux üzerinde Intellij IDEA kullanarak geliştirme yapacağım.
İki araca da aşağıdaki bağlantılar aracılığıyla erişebilirsiniz.

[Intellij IDEA][IDEA]  
[Eclipse][Eclipse]  

Geliştirme araçlarının yanı sıra Java ile geliştirme yapmak için Java Development Kit'e ihtiyacınız olacak. Ona da bu bağlantıdan ulaşabilirsiniz;  

[The Java Development Kit][JDK] 

# **Temel Veri Tipleri**
------------------------
Eğer halihazırda herhangi bir programlama/betik dili biliyorsanız bu tipleri zaten biliyorsunuz demektir.
Hem bu yüzden hem de oldukça basit oldukları için mümkün olduğunca sade bir anlatım kullanmaya çalışacağım.  



| Veri Tipi &nbsp;&nbsp;| Varsayılan Değer |             Minimum Değer            |             Maksimum Değer            |
|:---------:|:----------------:|:------------------------------------:|:-------------------------------------:|
|    byte   |         0        |             -128   (-2^7)            |             127   (2^7 -1)            |
|   short   |         0        |           -32,768   (-2^15)          |           32,767   (2^15 -1)          |
|    int    |         0        |      - 2,147,483,648    (-2^31)      |       2,147,483,647   (2^31 -1)       |
|    long   |        0L        | -9,223,372,036,854,775,808   (-2^63) &nbsp;&nbsp;&nbsp;&nbsp;| 9,223,372,036,854,775,807   (2^63 -1) |
|   float   |       0.0f       |                                      |                                       |
|   double  |       0.0d       |                                      |                                       |
|  boolean  |       false      |                                      |                                       |
|    char   |                  |           '\u0000' veya (0)          |         '\uffff' veya (65,535)        |


String, char kullanılan bazı kaçış dizileri (escape sequences) mevcut. Bunları da şu şekilde gösterebiliriz;  

| Gösterim |        Temsil Ettiği Karakter       |
|:--------:|:-----------------------------------:|
|    \n    |          yeni satır (0x0a)          |
|    \r    |           satırbaşı (0x0d)          |
|    \f    |        form beslemesi (0x0c)        |
|    \b    |           backspace (0x08)          |
|    \s    |            boşluk (0x20)            |
|    \t    |                 tab                 |
|    \"    |             çift tırnak             |
|    \'    |              tek tırnak             |
|    \\    |           ters eğik çizgi           |
|   \ddd   |         octal karakter (ddd)        |
|  \uxxxx  | Hexadecimal UNICODE karakter (xxxx) |

**Kullanımları**

Java'da da değişken tanımlama şekli çoğu programlama dili (muhtemelen hepsi) ile aynı ve şu şekilde;  

{% highlight java %}
veri_tipi degisken_adi = deger, nDegiskenAdi(ayni tip) = deger;
{% endhighlight %}

örnek tanımlamalar;  
{% highlight java %}
package com.isiksistem;

public class Main {

    public static void main(String[] args) {
        byte b = 127, b3 = -128;
        short s = 32767;
        int i = 2147483647;
        long l = 9223372036854775807L;
        float f = 8.573134f;
        double d = 73.134134d;
        boolean b2 = true;
        char c = 'C';
    }
}
{% endhighlight %}

Sonraki Bölüm: Veri Tipleri, Operatörler, Diziler:  
[Temel Java - 2. Gün: Veri Tipleri, Operatörler, Diziler][1]  

[Vikipedi]: https://tr.wikipedia.org/wiki/Java_%28programlama_dili%29
[IDEA]: https://www.jetbrains.com/idea/
[Eclipse]: https://www.eclipse.org/ 
[JDK]: https://www.oracle.com/technetwork/java/javase/downloads/index.html
[1]: /java/2016/03/05/temel-java-ikinci-gun-veri-tipleri-operatorler-diziler.html