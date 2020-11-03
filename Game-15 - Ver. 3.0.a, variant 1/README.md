# Hobby
[GITHUB](https://github.com) - Моя записная книжка (наброски, заметки и т.д. и т.п.)!

<hr>

## Игра Пятнашки (Puzzle 15, Game 15), вариант 1

Лицензия (License): **GNU GPL V3**.

![](https://github.com/drilnet/puzzle15/blob/main/UA.png)

Скачайте! Распакуйте! Дополнительно распакуйте изображения в [Cat_01](https://github.com/drilnet/puzzle15/tree/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%201/Cat_01 "Здесь хранится нарезка изображений для игры!")!
<br>
Откройте **game-15.html** в любом браузере!

### Как вставить своё изображение!

Файл: [cat_01_scissors&size.pl](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%201/cat_01_scissors%26size.pl)
<br>
Скрипт, который делает нарезку изображений для игры (скрипт написан на [Perl](http://www.perl.org)).
<br>
Для работы скрипта необходим [ImageMagick](https://www.imagemagick.org/)!

Открыть скрипт в любом текстовом редакторе!
<br>
Найти следующие строки:

```
# Имя файла входного изображения.
my $in_image = 'images/01.LogoVRLE8,ver.7b_480x252.png';
```
```
# На какие части порезать входное изображение.
my $width_size = 120;
my $height_size = 63;
```

Изображение у нас 480 x 252 px (480 / 4 = 120 px, 252 / 4 = 63 px).

```
# На сколько уменьшить по ширине.
# Это для анимации костяшек!
# 120 / 5 = 24
my $width_total = 24;
```
```
# На сколько уменьшить по высоте.
# Это для анимации костяшек!
# 63 / 5 = 12.6
my $height_total = 13;
```
```
# Каталог для нарезанных изображений:
$catalog = 'Cat_01';
```

Запуск скрипта в [FreeBSD](https://www.freebsd.org "Berkeley Software Distribution") ([Linux](https://linux.org)): $ perl cat_01_scissors&size.pl

### Скриншот 1 игры Пятнашки

![](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20screenshots/Screenshot%201%20-%20Game-15%2C%20variant%201%20(075%25).png "Лицензия (License) на игру: GNU GPL V3. Лицензия (License) на изображение: Free.")

### Скриншот 2 игры Пятнашки
![](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20screenshots/Screenshot%202%20-%20Game-15%2C%20variant%201%20(075%25).png "Лицензия (License) на игру: GNU GPL V3. Лицензия (License) на изображение: Free.")

Эта игра есть у меня на сайте: [https://drilnet.github.io](https://drilnet.github.io/ "Нажмите")
<br>
Изображение было взято отсюда: [https://github.com/drilnet/blender3d-logovrle8-logovrle16](https://github.com/drilnet/blender3d-logovrle8-logovrle16 "Blender 3D. Логотип VRLE8 и Логотип VRLE16")

[Ukraine](https://en.wikipedia.org/wiki/Ukraine) (Украина). (**C**) Демидов С.В.

<hr>

<div align="center">
<a href="https://github.com/drilnet/puzzle15">
[ Вернуться в начало репозитория игры Пятнашки ]
</a>
</div>

<hr>
