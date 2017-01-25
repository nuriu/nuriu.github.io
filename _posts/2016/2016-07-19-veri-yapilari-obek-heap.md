---
layout: post
title: "Veri Yapıları: Öbek (Heap)"
tags:
- c++
- veri yapıları
- öbekler
- Heap
categories:
- veri yapıları
- c++
---

# Öbek
------

Öbekler, eklemeleri soldan sağa doğru yapılan ve son seviyesi dışındaki tüm seviyeleri dolu olan bir ikili ağaç çeşididir.

Öbeklerin ana özellikleri her ebeveyn değerin çocuklarından daha küçük / büyük değere sahip olmasıdır.
Yabancı kaynaklarda *Min Heap* ve *Max Heap* şeklinde adlandırılmaları bu sebepten dolayıdır.
Öncelikli ikili ağaçlar olarak da düşünülebilirler.

Öbekler genellikle ikili arama ağaçlarındakinin aksine dizi gibi yapılar ile gerçekleştirilirler.
Bunun sağladığı avantajlardan birisi de ebeveyn ve çocuk düğümleri arasındaki ilişkiyi matematiksel basit bir ifade ile kurulabilmesidir.
Bu ifadeler şu şekildedir;

- Ebeveynin indisi: 	(indis - 1) / 2
- Sol çocuğun indisi: 	2 * indis + 1
- Sağ çocuğun indisi: 	2 * indis + 2

Lafı fazla uzatmadan kod üzerinden gerçekleştirme yaparak aşama aşama ilerleyelim.

# Gerçekleştirim
----------------

Öbek örneğimizi C++ dilinde vektörleri kullanarak gerçekleştireceğiz.
Diğer nesne tabanlı dillerde (Java, C# vb.) diziyi tercih edebilirsiniz.

Öncelikle örneğimizde bize gerekecek kütüphaneleri çağıralım;
{% highlight cpp %}
#include <iostream>
#include <vector>

using namespace std;
{% endhighlight %}

Sıra geldi *Obek* sınıfımızı tanımlamaya;
{% highlight cpp %}
class Obek {
                                    // ------------------------------------------------------
public:		                    // kullanıcılar tarafından kullanılacak fonksiyonlarımız
                                    // ------------------------------------------------------
	int boyut() { return obek.size(); } // öbek boyutunu geri gönderecek fonksiyonumuz
	int enKucuguSil();          // öbeğin en küçük değerini (kökü) gönderecek fonksiyonumuz
	void ekle(int veri);        // öbeğe veri eklemek için kullanacağımız fonksiyonumuz
	void yazdir();              // öbeği yazdırmak için kullanacağımız fonksiyonumuz
                                    // ------------------------------------------------------
private:	                    // sadece iç işlemler için kullanılacak fonksiyonlarımız
                                    // ------------------------------------------------------
	int sag(int ebeveyn);       // ebeveyn indisine göre sağ çocuğu bulacak fonksiyonumuz
	int sol(int ebeveyn);       // ebeveyn indisine göre sol çocuğu bulacak fonksiyonumuz
	int ebeveyn(int cocuk);     // çocuğun indisine göre ebeveyni gönderecek fonksiyonumuz
	void yukariTasi(int indis); // elemanları yukarı taşımakta kullanılacak fonksiyonumuz
	void asagiTasi(int indis);  // elemanları aşağı taşımakta kullanılacak fonksiyonumuz
private:	            
	vector<int> obek;           // öbek vektörümüz
};
{% endhighlight %}

Şimdi sırasıyla tanımlamalarını yaptığımız sınıf fonksiyonlarımızı gerçekleştirelim.

*int enKucuguSil()*;
{% highlight cpp %}
// en küçük elemanı silip geri gönderen fonksiyonumuz
int Obek::enKucuguSil()
{
	int enKucuk = obek.front();

	obek[0] = obek.at(obek.size() - 1);
	obek.pop_back();
	asagiTasi(0);

	return enKucuk;
}
{% endhighlight %}

*int ekle(int veri)*;
{% highlight cpp %}
// gönderdiğimiz veriyi öbeğe eleman olarak ekleyen fonksiyonumuz
void Obek::ekle(int veri)
{
	obek.push_back(veri);           // vektörümüzün sonuna elemanımızı ekliyoruz ve
	yukariTasi(obek.size() - 1);    // son eklenen elemanı yukarıda uygun yere taşıyoruz
}
{% endhighlight %}

*void yazdir()*;
{% highlight cpp %}
// öbeğimizi baştan sona yazdiran fonksiyonumuz
void Obek::yazdir()
{
	vector<int>::iterator yer = obek.begin();
	cout << "Öbek: ";

	// vektörü başından sonuna kadar dolaşıp sırayla yazdırıyoruz
	while (yer != obek.end()) {
		cout << *yer << " ";
		++yer;
	}

	cout << endl;
}
{% endhighlight %}

*int sag(int ebeveyn)*;
{% highlight cpp %}
// gönderilen ebeveynin sağ çocuğunu bulan ve geriye gönderen fonksiyonumuz
int Obek::sag(int ebeveyn)
{
	int i = 2 * ebeveyn + 2; // sağ çocuğun olması gerektiği yerin indisini alıyoruz
	return (i < obek.size()) ? i : -1; // indis öbek içindeyse indisi gönderiyoruz
}
{% endhighlight %}

*int sol(int ebeveyn)*;
{% highlight cpp %}
// gönderilen ebeveynin sol çocuğunu bulan ve geriye gönderen fonksiyonumuz
int Obek::sol(int ebeveyn)
{
	int i = 2 * ebeveyn + 1; // sol çocuğun olması gerektiği yerin indisini alıyoruz
	return (i < obek.size()) ? i : -1; // indis öbek içindeyse indisi gönderiyoruz
}
{% endhighlight %}

*int ebeveyn(int cocuk)*;
{% highlight cpp %}
// gönderilen çocuğun ebeveynini bulan ve geriye gönderen fonksiyonumuz
int Obek::ebeveyn(int cocuk)
{
	if (cocuk != 0)
	{
		int i = (cocuk - 1) / 2; // ebeveynin olması gerektiği yerin indisini alıyoruz
		return i; // ve geriye indisi gönderiyoruz
	}
	return -1; // çocuk mevcut değilse ebeveyni olmayacağı için -1 gönderiyoruz
}
{% endhighlight %}

*void yukariTasi(int indis)*;
{% highlight cpp %}
// elemanlarımızı yukarıya taşımamıza olanak sağlayan fonksiyonumuz
void Obek::yukariTasi(int indis)
{
	// indisimizdeki değer ebeveyninden küçük olduğu sürece
	while ((indis > 0) && (ebeveyn(indis) >= 0) && (obek[ebeveyn(indis)] > obek[indis]))
	{
		// ebeveyni ile takas işlemini gerçekleştiriyoruz
		int gecici = obek[ebeveyn(indis)];
		obek[ebeveyn(indis)] = obek[indis];
		obek[indis] = gecici;
		indis = ebeveyn(indis);
	}
}
{% endhighlight %}

*void asagiTasi(int indis)*;
{% highlight cpp %}
// elemanlarımızı aşağıya taşımamıza olanak sağlayan fonksiyonumuz
void Obek::asagiTasi(int indis)
{
	// yerine taşınılacak uygun çocuğu buluyoruz
	int cocuk = sol(indis);

	if ((cocuk > 0) && (sag(indis) > 0) && (obek[cocuk] > obek[sag(indis)]))
	{
		cocuk = sag(indis);
	}

	if (cocuk > 0)
	{
		// uygun çocuk ile takas işlemini gerçekleştiriyoruz
		int gecici = obek[indis];
		obek[indis] = obek[cocuk];
		obek[cocuk] = gecici;
		asagiTasi(cocuk);
	}
}
{% endhighlight %}

Ve son olarak test senaryomuzu içeren *int main()* fonksiyonumuz;
{% highlight cpp %}
int main()
{
	// öbeğimizi oluşturuyoruz
	Obek* kucukObek = new Obek();

	// oluşturduğumuz öbeğe rastgele sırayla çeşitli değerler ekliyoruz
	kucukObek->ekle(7);
	kucukObek->yazdir();
	kucukObek->ekle(5);
	kucukObek->yazdir();
	kucukObek->ekle(1);
	kucukObek->yazdir();
	kucukObek->ekle(8);
	kucukObek->yazdir();
	kucukObek->ekle(2);
	kucukObek->yazdir();
	kucukObek->ekle(4);
	kucukObek->yazdir();
	kucukObek->ekle(9);
	kucukObek->yazdir();
	kucukObek->ekle(10);
	kucukObek->yazdir();
	kucukObek->ekle(3);
	kucukObek->yazdir();
	kucukObek->ekle(6);
	kucukObek->yazdir();

	// sırayla öbekteki en küçük değerleri yazdırıyoruz
	int obekBoyutu = kucukObek->boyut();

	for (int i = 0; i < obekBoyutu; i++)
		cout << "Öbekteki en küçük değer: " << kucukObek->enKucuguSil() << endl;

	// oluşturduğumuz öbeği bellekten temizliyoruz
	delete kucukObek;

	getchar();
}
{% endhighlight %}


Tamamlanmış öbek örneğimiz birleştirilmiş tam kodlarını da paylaşalım;
{% highlight cpp %}
#include <iostream>
#include <vector>

using namespace std;

class Obek {
                                    // ------------------------------------------------------
public:		                    // kullanıcılar tarafından kullanılacak fonksiyonlarımız
                                    // ------------------------------------------------------
	int boyut() { return obek.size(); } // öbek boyutunu geri gönderecek fonksiyonumuz
	int enKucuguSil();          // öbeğin en küçük değerini (kökü) gönderecek fonksiyonumuz
	void ekle(int veri);        // öbeğe veri eklemek için kullanacağımız fonksiyonumuz
	void yazdir();              // öbeği yazdırmak için kullanacağımız fonksiyonumuz
                                    // ------------------------------------------------------
private:	                    // sadece iç işlemler için kullanılacak fonksiyonlarımız
                                    // ------------------------------------------------------
	int sag(int ebeveyn);       // ebeveyn indisine göre sağ çocuğu bulacak fonksiyonumuz
	int sol(int ebeveyn);       // ebeveyn indisine göre sol çocuğu bulacak fonksiyonumuz
	int ebeveyn(int cocuk);     // çocuğun indisine göre ebeveyni gönderecek fonksiyonumuz
	void yukariTasi(int indis); // elemanları yukarı taşımakta kullanılacak fonksiyonumuz
	void asagiTasi(int indis);  // elemanları aşağı taşımakta kullanılacak fonksiyonumuz
private:	            
	vector<int> obek;           // öbek vektörümüz
};

// en küçük elemanı silip geri gönderen fonksiyonumuz
int Obek::enKucuguSil()
{
	int enKucuk = obek.front();

	obek[0] = obek.at(obek.size() - 1);
	obek.pop_back();
	asagiTasi(0);

	return enKucuk;
}

// gönderdiğimiz veriyi öbeğe eleman olarak ekleyen fonksiyonumuz
void Obek::ekle(int veri)
{
	obek.push_back(veri);           // vektörümüzün sonuna elemanımızı ekliyoruz ve
	yukariTasi(obek.size() - 1);    // son eklenen elemanı yukarıda uygun yere taşıyoruz
}

// öbeğimizi baştan sona yazdiran fonksiyonumuz
void Obek::yazdir()
{
	vector<int>::iterator yer = obek.begin();
	cout << "Öbek: ";

	// vektörü başından sonuna kadar dolaşıp sırayla yazdırıyoruz
	while (yer != obek.end()) {
		cout << *yer << " ";
		++yer;
	}

	cout << endl;
}

// gönderilen ebeveynin sağ çocuğunu bulan ve geriye gönderen fonksiyonumuz
int Obek::sag(int ebeveyn)
{
	int i = 2 * ebeveyn + 2; // sağ çocuğun olması gerektiği yerin indisini alıyoruz
	return (i < obek.size()) ? i : -1; // indis öbek içindeyse indisi gönderiyoruz
}

// gönderilen ebeveynin sol çocuğunu bulan ve geriye gönderen fonksiyonumuz
int Obek::sol(int ebeveyn)
{
	int i = 2 * ebeveyn + 1; // sol çocuğun olması gerektiği yerin indisini alıyoruz
	return (i < obek.size()) ? i : -1; // indis öbek içindeyse indisi gönderiyoruz
}

// gönderilen çocuğun ebeveynini bulan ve geriye gönderen fonksiyonumuz
int Obek::ebeveyn(int cocuk)
{
	if (cocuk != 0)
	{
		int i = (cocuk - 1) / 2; // ebeveynin olması gerektiği yerin indisini alıyoruz
		return i; // ve geriye indisi gönderiyoruz
	}
	return -1; // çocuk mevcut değilse ebeveyni olmayacağı için -1 gönderiyoruz
}

// elemanlarımızı yukarıya taşımamıza olanak sağlayan fonksiyonumuz
void Obek::yukariTasi(int indis)
{
	// indisimizdeki değer ebeveyninden küçük olduğu sürece
	while ((indis > 0) && (ebeveyn(indis) >= 0) && (obek[ebeveyn(indis)] > obek[indis]))
	{
		// ebeveyni ile takas işlemini gerçekleştiriyoruz
		int gecici = obek[ebeveyn(indis)];
		obek[ebeveyn(indis)] = obek[indis];
		obek[indis] = gecici;
		indis = ebeveyn(indis);
	}
}

// elemanlarımızı aşağıya taşımamıza olanak sağlayan fonksiyonumuz
void Obek::asagiTasi(int indis)
{
	// yerine taşınılacak uygun çocuğu buluyoruz
	int cocuk = sol(indis);

	if ((cocuk > 0) && (sag(indis) > 0) && (obek[cocuk] > obek[sag(indis)]))
	{
		cocuk = sag(indis);
	}

	if (cocuk > 0)
	{
		// uygun çocuk ile takas işlemini gerçekleştiriyoruz
		int gecici = obek[indis];
		obek[indis] = obek[cocuk];
		obek[cocuk] = gecici;
		asagiTasi(cocuk);
	}
}

int main()
{
	// öbeğimizi oluşturuyoruz
	Obek* kucukObek = new Obek();

	// oluşturduğumuz öbeğe rastgele sırayla çeşitli değerler ekliyoruz
	kucukObek->ekle(7);
	kucukObek->yazdir();
	kucukObek->ekle(5);
	kucukObek->yazdir();
	kucukObek->ekle(1);
	kucukObek->yazdir();
	kucukObek->ekle(8);
	kucukObek->yazdir();
	kucukObek->ekle(2);
	kucukObek->yazdir();
	kucukObek->ekle(4);
	kucukObek->yazdir();
	kucukObek->ekle(9);
	kucukObek->yazdir();
	kucukObek->ekle(10);
	kucukObek->yazdir();
	kucukObek->ekle(3);
	kucukObek->yazdir();
	kucukObek->ekle(6);
	kucukObek->yazdir();

	// sırayla öbekteki en küçük değerleri yazdırıyoruz
	int obekBoyutu = kucukObek->boyut();

	for (int i = 0; i < obekBoyutu; i++)
		cout << "Öbekteki en küçük değer: " << kucukObek->enKucuguSil() << endl;

	// oluşturduğumuz öbeği bellekten temizliyoruz
	delete kucukObek;

	getchar();
}
{% endhighlight %}

Böylece Öbek yapısının üzerinden geçmiş olduk. Sonraki yazılarda görüşmek üzere.
