---
layout: post
title: "Programlama Mantığına Giriş Bölüm 1"
tags:
- genel
categories:
- genel
series: genel
---

Programlama mantığı konusu hakkında iki bölüm yazacağım. İlk bölümde program dünyasına teorik giriş yapacağız. İkinci bölümde ise programların nasıl yapıldıklarıyla ilgileneceğiz.  

Teorik bölümle ilgilenmiyorsanız ikinci bölüme şuradan ulaşabilirsiniz;  
[Programlama Mantığına Giriş - Bölüm 2][PMGB2]

Teori bölümü olan ilk bölümde cevabını vermeye çalışacağım sorular şunlar;  

1 - Program Nedir?
------------------
Genel olarak programlar, bilgisayara kullanıcısıyla ve donanımıyla nasıl etkileşimde bulunacağını, veriyi/verileri nasıl işleyeceğini söylediğimiz adımlar topluluğudur. Programlama dilleri kullanılarak geliştirilirler. Bu diller ise yüksek, orta ve düşük seviyeli diller olmak üzere üçe ayrılır.

Programları yazmak çoğu zaman programcıların işidir. Programlamayı mühendislik disiplini çerçevesinde ele alan meslek ise ülkemizde 'gerçek' örneklerine ender rastladığımız 'Yazılım Mühendisliği' dir.

2 - Programlama Nasıl Yapılır?
------------------------------
Bir bilgisayar ile konuşmak, bir insan ile mektuplaşmanın hızlı versiyonu gibidir. Fark, bilgisayarın hızlı cevap verip, yorulmamasıdır.

Örneğim biraz farklı gelmiş olabilir fakat durum örnekteki eyleme çok benzer. Bilgisayarlarla konuşmak yazılar aracılığıyla yapılır ve bunun amacı genellikle onlara bir şeyler yaptırtmaktır.  

Dijital dünya da bizim dünyamızın sahip olduğu gibi çeşitli dillere sahiptir. Fakat bu dillerin kullanım amaçları, avantajları ve dezavantajları vardır. Hemen hemen hepsinin sözdizimi birbirlerine benzer fakat farklıdır. Örneğin, oyunlarda ve sistem yazılımlarında düşük ve nadiren orta seviyeli diller kullanılmaktadır. Çünkü bu diller kullanıcısına donanım üzerinde yüksek seviyeli dillere göre daha fazla kontrol sağlar. Bu dillerde uzmanlaşması daha zordur ve uzun sürer.  

Programlama aşaması mühendislik disiplininde genellikle gerçekleştirme, uygulama gibi adlandırılan bir süreçtir. Bu süreçten önce tespit edilen, araştırılan ve çözümü tasarlanan bir problemin çözümü, programlama aşamasında geliştirilmeye başlanır. Uzun lafın kısası benim görüşüme göre işin öz kısmıdır.

Soruya dönecek olursak programlar, genellikle IDE (integrated development environment) adı verilen programlar aracılığıyla yazılır. Bu programlar, görünüş olarak birçok kişinin kullandığı ofis programlarına benzer. Önünüzde boş bir sayfa vardır ve o sayfayı, belirli bir dil kullanarak doldurursunuz. Üzerinde çalıştığınız dosyayı kaydettiğinizdeyse, kaynak kod olarak isimlendirilen, uzantısı, kullandığınız dilin isminin genellikle kısaltılmış hali olan bir dosya elde edersiniz. Orta ve büyük ölçekli projeler bu dosyalardan oldukça fazlasına, milyonlarca toplam satır sayısına sahiptir.  

IDE olarak adlandırılan bu yazılımlar kodun makine diline yani 1 ve 0 lara dönüştürülmesinden sorumludur. Yazılan kodu derler, çalışmayı engelleyecek hata varsa durur yoksa programı çalıştırır.

Aşağıda aynı görevi üstlenen farklı dillerde yazılmış basit bir program örneği görmektesiniz. Hepsinin yaptığı şey ekrana `Merhaba!` yazısını yazmaktır.

# C++:
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
      cout << "Merhaba!" << endl;
      return 0;
}
{% endhighlight %}

# Java:
{% highlight java %}
public class cMERHABA{
    public static void main(String[] args){
        System.out.println("Merhaba!");
    }
}
{% endhighlight %}

# C#:
{% highlight csharp %}
class cMERHABA
{
    static void Main()
    {
        System.Console.WriteLine("Merhaba!");
    }
}
{% endhighlight %}

Programlama dilleri seviyelerinin yanı sıra kullanım şekillerine ve yapılarına göre de sınıflandırılır. Örneğin yukarıda örnek olarak verilen üç dil de nesne tabanlı dillerdir ve dünya genelinde en çok bu tip diller kullanılır.

İlk teori bölümümüzü burada bitirelim.
Bu konuda daha detaylı ve teknik bilgiyi ikinci bölümden edinebilirsiniz;  
[Programlama Mantığına Giriş - Bölüm 2][PMGB2]



[PMGB2]: /programlama-mantigina-giris-bolum-2/
