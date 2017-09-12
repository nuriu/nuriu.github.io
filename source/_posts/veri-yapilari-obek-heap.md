---
title: "Veri Yapıları: Öbek (Heap)"
date: 2016.07.19
tags:
- c++
- veri yapıları
- öbekler
- Heap
categories:
- veri yapıları
- c++
---

## Öbek

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

## Gerçekleştirim

Öbek örneğimizi C++ dilinde vektörleri kullanarak gerçekleştireceğiz.

Diğer nesne tabanlı dillerde (Java, C# vb.) diziyi tercih edebilirsiniz.

Öncelikle örneğimizde bize gerekecek kütüphaneleri çağıralım;
``` cpp
#include <iostream>
#include <vector>

using namespace std;
```

Sıra geldi *Obek* sınıfımızı tanımlamaya;
``` cpp
class Obek {
public:
	// öbek boyutunu geri gönderecek fonksiyonumuz
	int boyut() { return obek.size(); }
	// öbeğin en küçük değerini (kökü) gönderecek fonksiyonumuz
	int enKucuguSil();
	// öbeğe veri eklemek için kullanacağımız fonksiyonumuz
	void ekle(int veri);
	// öbeği yazdırmak için kullanacağımız fonksiyonumuz
	void yazdir();

private:
	// ebeveyn indisine göre sağ çocuğu bulacak fonksiyonumuz
	int sag(int ebeveyn);
	// ebeveyn indisine göre sol çocuğu bulacak fonksiyonumuz
	int sol(int ebeveyn);
	// çocuğun indisine göre ebeveyni gönderecek fonksiyonumuz
	int ebeveyn(int cocuk);
	// elemanları yukarı taşımakta kullanılacak fonksiyonumuz
	void yukariTasi(int indis);
	// elemanları aşağı taşımakta kullanılacak fonksiyonumuz
	void asagiTasi(int indis);
private:	            
	vector<int> obek; // öbek vektörümüz
};
```

Şimdi sırasıyla tanımlamalarını yaptığımız sınıf fonksiyonlarımızı gerçekleştirelim.

*int enKucuguSil()*;
``` cpp
// en küçük elemanı silip geri gönderen fonksiyonumuz
int Obek::enKucuguSil()
{
	int enKucuk = obek.front();

	obek[0] = obek.at(obek.size() - 1);
	obek.pop_back();
	asagiTasi(0);

	return enKucuk;
}
```

*int ekle(int veri)*;
``` cpp
// gönderdiğimiz veriyi öbeğe eleman olarak ekleyen fonksiyonumuz
void Obek::ekle(int veri)
{
	// vektörümüzün sonuna elemanımızı ekliyoruz
	obek.push_back(veri);
	// son eklenen elemanı yukarıda uygun yere taşıyoruz
	yukariTasi(obek.size() - 1);
}
```

*void yazdir()*;
``` cpp
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
```

*int sag(int ebeveyn)*;
``` cpp
// gönderilen ebeveynin sağ çocuğunu bulan ve geriye gönderen fonksiyon
int Obek::sag(int ebeveyn)
{
	// sağ çocuğun olması gerektiği yerin indisini alıyoruz
	int i = 2 * ebeveyn + 2;
	// indis öbek içindeyse indisi gönderiyoruz
	return (i < obek.size()) ? i : -1;
}
```

*int sol(int ebeveyn)*;
``` cpp
// gönderilen ebeveynin sol çocuğunu bulan ve geriye gönderen fonksiyon
int Obek::sol(int ebeveyn)
{
	// sol çocuğun olması gerektiği yerin indisini alıyoruz
	int i = 2 * ebeveyn + 1;
	// indis öbek içindeyse indisi gönderiyoruz
	return (i < obek.size()) ? i : -1;
}
```

*int ebeveyn(int cocuk)*;
``` cpp
// gönderilen çocuğun ebeveynini bulan ve geriye gönderen fonksiyonumuz
int Obek::ebeveyn(int cocuk)
{
	if (cocuk != 0)
	{
		// ebeveynin olması gerektiği yerin indisini alıyoruz
		int i = (cocuk - 1) / 2;
		return i; // ve geriye indisi gönderiyoruz
	}
	// çocuk mevcut değilse ebeveyni olmayacağı için -1 gönderiyoruz
	return -1;
}
```

*void yukariTasi(int indis)*;
``` cpp
// elemanlarımızı yukarıya taşımamıza olanak sağlayan fonksiyonumuz
void Obek::yukariTasi(int indis)
{
	// indisimizdeki değer ebeveyninden küçük olduğu sürece
	while ((indis > 0) && (ebeveyn(indis) >= 0) &&
		   (obek[ebeveyn(indis)] > obek[indis]))
	{
		// ebeveyni ile takas işlemini gerçekleştiriyoruz
		int gecici = obek[ebeveyn(indis)];
		obek[ebeveyn(indis)] = obek[indis];
		obek[indis] = gecici;
		indis = ebeveyn(indis);
	}
}
```

*void asagiTasi(int indis)*;
``` cpp
// elemanlarımızı aşağıya taşımamıza olanak sağlayan fonksiyonumuz
void Obek::asagiTasi(int indis)
{
	// yerine taşınılacak uygun çocuğu buluyoruz
	int cocuk = sol(indis);

	if ((cocuk > 0) && (sag(indis) > 0) &&
		(obek[cocuk] > obek[sag(indis)]))
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
```

Ve son olarak test senaryomuzu içeren *int main()* fonksiyonumuz;
``` cpp
int main()
{
	// öbeğimizi oluşturuyoruz
	Obek* kucukObek = new Obek();

	// oluşturduğumuz öbeğe sırayla çeşitli değerler ekliyoruz
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
```


Tamamlanmış öbek örneğimiz birleştirilmiş tam kodlarını da paylaşalım;
``` cpp
#include <iostream>
#include <vector>

using namespace std;

class Obek {
public:
	// öbek boyutunu geri gönderecek fonksiyonumuz
	int boyut() { return obek.size(); }
	// öbeğin en küçük değerini (kökü) gönderecek fonksiyonumuz
	int enKucuguSil();
	// öbeğe veri eklemek için kullanacağımız fonksiyonumuz
	void ekle(int veri);
	// öbeği yazdırmak için kullanacağımız fonksiyonumuz
	void yazdir();

private:
	// ebeveyn indisine göre sağ çocuğu bulacak fonksiyonumuz
	int sag(int ebeveyn);
	// ebeveyn indisine göre sol çocuğu bulacak fonksiyonumuz
	int sol(int ebeveyn);
	// çocuğun indisine göre ebeveyni gönderecek fonksiyonumuz
	int ebeveyn(int cocuk);
	// elemanları yukarı taşımakta kullanılacak fonksiyonumuz
	void yukariTasi(int indis);
	// elemanları aşağı taşımakta kullanılacak fonksiyonumuz
	void asagiTasi(int indis);
private:	            
	vector<int> obek; // öbek vektörümüz
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
```

Böylece Öbek yapısının üzerinden geçmiş olduk. Sonraki yazılarda görüşmek üzere.
