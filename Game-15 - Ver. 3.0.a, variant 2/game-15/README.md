### Как вставить своё изображение!

Файлы: [cat_00_scissors&size.pl](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%202/game-15/cat_00_scissors%26size.pl), [cat_01_scissors&size.pl](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%202/game-15/cat_01_scissors%26size.pl), [cat_02_scissors&size.pl](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%202/game-15/cat_02_scissors%26size.pl).
<br>
Скрипты, которые делают нарезку костяшек/изображений для игры (скрипты написаны на [Perl](http://www.perl.org)).
<br>
Для работы скриптов необходим [ImageMagick](https://www.imagemagick.org/)!

Открыть скрипт (для примера [cat_00_scissors&size.pl](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%202/game-15/cat_00_scissors%26size.pl)) в любом текстовом редакторе!
<br>
Найти следующие строки:

```
# Имя файла входного изображения.
my $in_image = 'images/00.Numbers_480x252.png';
```
```
# На какие части порезать входное изображение.
my $width_size = 120;
my $height_size = 63;
```

Изображение у нас 480 x 252 px (480 / 4 = 120 px, 252 / 4 = 63 px).

```
# На сколько уменьшить по ширине.
# Это для анимации костяшек/изображений!
# 120 / 5 = 24
my $width_total = 24;
```
```
# На сколько уменьшить по высоте.
# Это для анимации костяшек/изображений!
# 63 / 5 = 12.6
my $height_total = 13;
```
```
# Каталог для нарезанных костяшек/изображений:
$catalog = 'Cat_00';
```

**Примечание.**
<br>
Комментарии к переменным здесь!
<br>
Немного отличаются от комментариев в скрипте!
<br>
Но! Разобратся можно!

Запуск скрипта в [FreeBSD](https://www.freebsd.org "Berkeley Software Distribution") ([Linux](https://linux.org)): **$ perl cat_00_scissors&size.pl**

Файлы [cat_00_scissors&size.pl](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%202/game-15/cat_00_scissors%26size.pl), [cat_01_scissors&size.pl](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%202/game-15/cat_01_scissors%26size.pl), [cat_02_scissors&size.pl](https://github.com/drilnet/puzzle15/blob/main/Game-15%20-%20Ver.%203.0.a%2C%20variant%202/game-15/cat_02_scissors%26size.pl) игрой не используются!
<br>
Их можно скопировать в другое место!

[Ukraine](https://en.wikipedia.org/wiki/Ukraine) (Украина). (**C**) Демидов С.В.
