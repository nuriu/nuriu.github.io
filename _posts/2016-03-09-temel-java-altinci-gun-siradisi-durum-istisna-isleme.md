---
layout: post
title: Temel Java 
subtitle: "6. Gün: Sıradışı Durum (İstisna) İşleme"
categories:
- java
---

# Giriş
---------

Sıradışı durumlar veya istisnalar (yabancı kaynaklarda exceptions olarak geçer) programın çalıştırıldığı sırada açığa çıkan problemlerdir. 
Bu tip problemlerin ortaya çıkması dolayısıyla programın çalışması/akışı anormal biçimde sonlanabilir/bozulabilir.
Kimse programında bu tip problemlerin oluşmasını istemeyeceği için sıradışı durum işlemeyi kullanıyoruz.  

Peki, öncelikle programımızda oluşabilecek problemler neler olabilir? Örneğin;
Programımızda kullanıcıdan girdi alıyorsak kullanıcımız geçersiz değer girebilir. (en basitinden sayı yerine harf içeren değer girmesi gibi...)

# Sıradışı Durum (İstisna, Hata) Yakalama ve İşleme
---------------------------------------------------

Başlığın biraz uzun olduğunun farkındayım fakat şöyle düşünüyorum; bir yapıyı isimsel olarak (misalen exceptions) kalıplaştırmak yerine o işi açıklayan/özetleyen Türkçe kelimeler kullanmanın daha doğru olduğu kanısındayım.  

Sizler/öğrenenler/öğretenler veya bununla ilgilenen/ilgilenecek olan her kim varsa bu şekilde başlıklarla karşılaştığında zaten kendisine uygun biçimde özetleyecektir.  

Bir Türk'ün bunu bir başka Türk'e anlatırken/açıklarken "exceptionları şöyle handle ediyoruz" demesindense "bak şu hatalarla ve oluşan sıradışı durumlarla kısaca istisnalarla böyle ilgileniyoruz, onları böyle böyle işliyoruz." demesinin bir kayıp değil kazanç olacağını düşünüyorum.  

Bu konuyu milliyetçilikle bağdaştırmanızı istemiyorum çünkü benim aklımdaki bu değil.
Bu aşamada veya burada bulunuyorsanız "Türkçe kaynak yok" cümlesini çoktan duymuş olma ihtimaliniz oldukça yüksek.
Türkçe kaynak elbette yok ve bu tip basit konular bir yana (bu tür konuları her yerde bulabilirsiniz her ne kadar yarı Türkçe yarı İngilizce olsa da), daha özel veya üst düzey sayılabilecek konularda gerçekten İngilizce'si olmayan birisinin doğrudan konuyu yani işin özünü öğrenme şansı neredeyse yok. İşte bu yüzden yok. Yerelleştirmediğimiz için, yerelleştirmeye uğraşmadığımız için yok. Yoksa onların isimlendirme/anlatma yetenekleri çok kuvvetli olduğundan değil elbette ki.
İş tamamen bizim suçumuz, kimse gelip bizim için/bizim faydamıza bir şey yapmaz ve eğer bu işte çok az da olsa söz sahibi olmayı veya en basitinden varlığımızın olmasını istiyorsak bunu değiştirmeliyiz.  

Konu her ne kadar sıradışı durum işleme (bahsettiğim konu da her ne kadar bizim sıradışı durumumuz/hatamız) olsa da şu kişisel düşüncemi paylaşma ihtiyacı duyuyorum;  

Ben başka bir iş yapabileceğimi sanmıyorum, yani ülkeme, ülkeden ziyade vatanıma daha faydalı olabileceğim bir işte becerikli/başarılı/faydalı olabileceğimi sanmıyorum.
Dolayısıyla eğer bu işi yapacaksam da elimden geleni yapmalıyım. Çünkü ömrüm yeterse uzun yıllar sonrasını görebilirsem ülkemde en azından kendi adıma kendi meslek grubumda çalışan kişilerin yukarıda bahsettiğim dili kullanmalarını görmeyi istemiyorum ve bunu can acıtıcı buluyorum.
Basit bir konuya çok takılmış gibi gözükebilirim ama dil demek kültür demektir. Özel günlerde/bayramlarda, şu an biz rahat nefes alalım diye zamanında can vermiş/vermeyi göze almış kişileri anmayı/övmeyi/sevmeyi biliyoruz.
Ancak bu kolay iş, herkes bunu yapabilir ki çoğu yapıyor da. Zor olan bunu göstermek değil bunu eyleme dökmek. 
 
Ben kendi adıma her ne kadar hatalarım olsa da kullandığım kelimelere dikkat etmeye çalışıyorum. Lütfen siz de edin. Siz de kültürünüzü/dilinizi koruyun, korutun. Bilgi öğrendiğiniz gibi değil, sizin paylaştığınız gibi yayılır.  

Bu satıra kadar okuyarak geldiyseniz öncelikle hala konunun özünü görmediğiniz için özür dilerim ve daha fazla uzatmayarak kod örneğimize geçelim;  

{% highlight java %}
try {
    
   // korunan kod bloğu olarak da adlandırılan
   // sıradışı durumun oluşabileceği kodlar.
   
} catch (siradisiDurumTuru bilgiDegiskenimiz) {
    
   // uygulanacak kodlar
   
} catch (siradisiDurumTuru2 bilgiDegiskenimiz2) {
    
   // uygulanacak kodlar
   
} catch (siradisiDurumTuru3 bilgiDegiskenimiz3) {
    
   // uygulanacak kodlar
   
} // try ifadesinden sonra istediğiniz kadar catch fonksiyonunu kullanabilirsiniz.
{% endhighlight %}

Kavramların havada kalmaması ve nasıl durumlarda faydalı sonuçlar elde edebileceğimizi göstermek için diziler ile ilgili basit örneğimiz;  

{% highlight java %}
package com.isiksistem;

public class Main {

    public static void main(String[] args) {
        int dizi[] = new int[2];
        try {
            // örnek olarak 2 numaralı indise yani var olmayan 3. elemana erişmeyi deniyoruz.
            System.out.println(dizi[2]);
            // eğer burada 0. veya 1. indise yani var olan bir elemana erişmeyi denersek
            // sıradışı bir durum oluşmayacak dolayısıyla ilgili catch bloğu atlanacak
            // ve program çalışmaya devam edecek.

        } catch (ArrayIndexOutOfBoundsException diziErisimHatasi) {
            // eğer try ifadesi içersinde çalıştırmayı denediğimiz kodlarda
            // Java dilinde ArrayIndexOutOfBoundsException olarak tanımlanmış
            // bir durum / hata / istisna oluşursa bu kod bloğu işlenecek
            // ve program çalışmaya devam edecek.
            System.out.println("Erişmeye çalıştığınız eleman dizi sınırları içinde bulunmuyor.");
        }
        System.out.println("Programımız bu satırlardan sonra sonlanacak.\nİki durumu da başarıyla işledik.");
    }
}
{% endhighlight %}

Örnek olarak verdiğim *ArrayIndexOutOfBoundsException* dışındaki istisna örneklerinin tamamını burada anlatabilmem imkansız o yüzden kendi durumunuza uygun durumları internet üzerinde araştırma yaparak kolaylıkla bulabilirsiniz.
Kim bilir belki bu araştırma, hiç yoktan daha farklı/faydalı bilgiler de edinmenize vesile olur.  

Bu konuda da temel java serimizden bu kadar. Serimizi yarın yayınlamayı planladığım Lambda gösterimleri konusu ile sonlandıracağız.  

**Dipnot:** Bir aksilik/değişiklik olmazsa ileride yazmayı planladığım mimari ve tasarım konularında da ana dil olarak Java dilini kullanmayı düşünüyorum.
(Becerebilirsem mümkün olduğunca en azından iki dilde örneklemeyi düşünüyorum. Böylece hem dilden daha bağımsız ilerlemiş hem de başka dillerle uğraşmamış olsanız bile ne kadar benzediklerini daha iyi görmüş olursunuz.)    

Sonraki Bölüm: Lambda İfadeleri:  
[Temel Java - 7. Gün: Lambda İfadeleri][1]  


[1]: /java/2016/03/09/temel-java-yedinci-gun-lambda-ifadeleri.html