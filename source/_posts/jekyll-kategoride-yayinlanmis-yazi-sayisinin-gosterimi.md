---
title: "Jekyll: Kategoride Yayınlanmış Yazı Sayısının Gösterimi"
date: 2016.03.05
tags:
- jekyll
categories:
- jekyll
---

## Problem

Geçtiğimiz haftalarda blog altyapısını jekyll 3'e güncelleyip farklı bir temaya taşıdıktan sonra yazılan kategorilerdeki yazılmış yazı sayısının gözükmemesi.

## Çözüm

Her ne kadar daha akıllıca bir çözüm arasam da kullandığım yapıya uygun bir çözüm bulamadım. O yüzden daha amatörce ve basit olan yoldan problemi şu şekilde çözdüm;  

``` html _includes/category/title.html (kategori sayfasının başlık kısmı)
{% for category in site.data.categories %}
  {% if category.slug == page.category %}
    {% assign category_name =  category.name %}
  {% endif %}
{% endfor %}

<!-- yazı sayısını hesapladığımı yeni kısım -->
{% assign category_size = 0 %}
{% for post in site.posts %}
    {% if post.categories contains page.category %}
    {% assign category_size = category_size | plus: 1 %}
    {% endif %}
{% endfor %}

<h1 class="page-title">
    <div class="page-title__text">{{ category_name }}</div>
    <div class="page-title__subtitle">
        <strong>‘{{ category_name }}’</strong> kategorisinde 
        <!-- eğer kategoride hiç yazı yayınlanmamış ise -->
        {% if category_size == 0 %}
            henüz hiç yazı yayınlamadım.
        {% else %} <!-- yazılmış ise yazı sayısını göster -->
            {{ category_size }} yazı yayınladım.
        {% endif %}
    </div>
</h1>
```

``` html _includes/page/explore.html (sayfada kategorilerin gözüktüğü alt kısım)
<div class="explore">
    <div class="explore__devider">*****</div>
    <div class="explore__label"> Yazdığım farklı kategorileri veya 
        yazmayı planladığım yazıları keşfedin.
    </div>
    <ul class="categories">
    {% for category in site.data.categories %}
    <!-- yazı sayısı her kategori için sıfırlıyoruz -->
    {% assign category_size = 0 %}
    {% for post in site.posts %} <!-- her yazı için -->
        <!-- yazının kategorisi o anki kategorimize eşitse -->
        {% if post.categories contains category.slug %} 
        <!-- yazı sayımızı bir arttırıyoruz -->
        {% assign category_size = category_size | plus: 1 %}
        {% endif %}
    {% endfor %}
    <!-- kategoride yazı yoksa kategoriyi yazdırmıyoruz -->
    {% if category_size == 0 %}
    <!-- kategoride yazı varsa kategori adını -->
    <!-- ve yazı sayısını yazdırıyoruz -->
    {% else %}
    <li class="categories__item">
    <a href="{{ '/kategori/' | append: category.slug | prepend: site.baseurl }}">
        {{ category.name }} ({{ category_size }})
    </a></li>
    {% endif %}
    {% endfor %}
	<li class="categories__item"><a href="{{ '/' | prepend: site.baseurl }}">
		Tüm Yazılar <span>({{ site.posts | size }})</span>
	</a></li>
    </ul>
</div>
```

Böylece hem henüz yazı yayınlanmamış kategorilerin kalabalık olmasını hem de anasayfada alt kısımda (sizin yapınıza göre dosya adları ve yerleri değişik olacaktır) görebileceğiniz üzere kategorideki yazı sayılarını ziyaretçilere göstermiş olduk.
