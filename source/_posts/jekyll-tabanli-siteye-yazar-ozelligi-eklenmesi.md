---
title: "Jekyll Tabanlı Siteye Yazar Özelliği Eklenmesi"
date: 2015.06.26
tags:
- jekyll
categories:
- jekyll
---

Jekyll bazlı blog sitenizi birden fazla kişiyle birlikte kullanıyor ve yazar özelliği eklemek istiyorsanız aşağıdaki adımları uygulayabilirsiniz.

Yazarları Tanımlama
-------------------
İlk yapmanız gereken **_data/authors.yml** dosyasını oluşturmak ve aşağıdaki şablona uygun biçimde düzenlemek.  

``` yml _data/authors.yml
birinci_ad_soyad:  
   name: İsim Soyisim  
   email: E-posta adresi  
   web: Web adresi  
ikinci_ad_soyad:  
   name: İsim Soyisim  
   email: E-posta adresi  
   web: Web adresi  
üçüncü_ad_soyad:  
   name: İsim Soyisim  
   email: E-posta adresi  
   web: Web adresi  
```

Yazıları Yazarlara Atama
------------------------
Yazı dosyalarınızın en üstündeki kısımda genellikle başlık, etiket, şablon gibi seçenekleri belirlersiniz. O seçeneklerin arasına yazıyı yazan kişiyi de **authors.yml** dosyasında tanımladığınız bilgiye göre eklemelisiniz.  

Örneğin:
--------
``` markdown
layout: post  
author: birinci_ad_soyad  
```

Yazar Bilgisini Gösterme
------------------------
Son olarak yazılarda, yazan kişinin bilgisini göstermek kaldı.

Bunu yapmak için aşağıdaki linkteki kodları **_layouts/post.html** dosyanızdaki uygun bölüme eklemeniz gerekmektedir. Bunu yaptıktan sonra özellik kullanıma hazır hale gelecektir, dosyayı istediğiniz gibi düzenleyebilirsiniz. Düzenli olarak yapmanız gereken tek şey yazacağınız yazıların başındaki özellikler kısmına **author: ad_soyad** özelliğini eklemek.  

``` html _layouts/post.html
{% assign author = site.data.authors[page.author] %}		
{% if author %}
    Yazan:<a href="{{ author.web }}" target="_blank">
            <span>{{ author.name }}</span>
          </a>
{% endif %}
```