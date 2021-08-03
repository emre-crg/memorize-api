## Açıklama
Memorize projesi Back-End kısmı

## Setup

* node_modules bağımlılıklarının yüklemesi
``` bash
npm install
```

* Knex kütüphanesinin global kurulumu
``` bash
npm install -g knex
```

* Knex ORM'si ile Postgresql tabloları oluşturulur
``` bash
knex migrate:latest
```

* Proje çalıştırılır
``` bash
npm run server
```


## Araçlar
 * [Node JS](https://nodejs.org/en/)   
 * [Express JS](http://expressjs.com/)   
 * [Postgresql](https://www.postgresql.org/)  
 * [Knex JS](https://knexjs.org/)  

## API Erişim Noktaları

>***
> API Erişim Adresi: https://memorize-api.herokuapp.com
> ***

| Metod | Erişim Noktası | Açıklama |
| ----- |:--------------:| -----:|
| GET   | `/sets`  | Veritabanındaki bütün kelime setlerini getirir. |
| GET   | `/sets:id`  | Id bilgisine göre kelime setini getirir. |
| POST  | `/sets`  | Yeni kelime seti oluşturur. |
| PATCH | `/sets:id`  | Id bilgisi olan kelime setinin herhangi bir propertisini değiştirir. |
| GET   | `/card/all`  | Veritabanındaki bütün kartları getirir |
| GET   | `/card/:id`  | Kart Id'si verilen kartı getirir. |
| GET   | `/card/setId/:id`  | Set id'sine göre kartları getirir. |
| POST  | `/card/:id`  | Set id'si belirtilerek kart eklenir. |

