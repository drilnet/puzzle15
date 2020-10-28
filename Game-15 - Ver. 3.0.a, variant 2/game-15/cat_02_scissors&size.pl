
#
# Лицензия (License): GNU GPL V3.
# (C) Demidov S.V.
#

#
# Украина, 64250, Харьковская обл.,
# Балаклейский р-н, пос. Донец,
# ул. Стадионная 1-Б, кв. 20.
# Демидов С.В.
#

	# Для объявления переменных.
	use strict;

	# Имя файла входного изображения.
	my $in_image = 'images/02.LogoVRLE16.ver.7a_480x252.png';

	# На какие части порезать (в px).
	my $width_size = 120;
	my $height_size = 63;

	# На сколько уменьшить по ширине.
	# 120 / 5 = 24
	my $width_total = 24;

	# На сколько уменьшить по высоте.
	# 63 / 5 = 12.6
	my $height_total = 13;

	# Вычисляемое значение (размер по ширине).
	my $width;

	# Вычисляемое значение (размер по высоте).
	my $height;

	# Массив с именами файлов.
	my @array_filename;

	@array_filename = (	'out-0.png', 'out-1.png',
					'out-2.png', 'out-3.png',
						'out-4.png', 'out-5.png',
							'out-6.png', 'out-7.png',
								'out-8.png', 'out-9.png',
							'out-10.png', 'out-11.png',
						'out-12.png', 'out-13.png',
				'out-14.png', 'out-15.png');

	# Адрес в массиве @array_filename.
	my $array_filename_addr;

	# Новое имя для файла.
	my $newfilename;

	# Куда складывать новые изображения.
	my $catalog;

	# Текущее значение счётчика без нулей.
	my $count;

	# Текущее значение счётчика с нулями слева (нумерация).
	my $zeroc;

	# Временная переменная.
	my $temp;

	# Счётчик.
	my $z1;

	# Сколько раз изменять размер изображения.
	my $z2;

	# Складывать новые изображения сюда:
	$catalog = 'Cat_02';

	# С чего будет начинаться новое имя файла.
	$newfilename = 'Image-';

	# -
	$count = 0;

	# Изменять $z2 раза.
	$z2 = 5 - 1;

	# Проверка, существует ли каталог!
	if (-e $catalog)
		{
		# Каталог существует, удаляем его (вместе с файлами).
		`rm -r \'$catalog\'`;

		# Теперь создаём заново.
		`mkdir \'$catalog\'`;
		}
		else
		{
		# Создаём каталог для новых изображений.
		`mkdir \'$catalog\'`;
		}

	print "\n";

	print 'Нарезка (файлы с out-0.png по out-15.png)!';
	`convert \'$in_image\' -crop \'$width_size\'x\'$height_size\' +repage out.png`;
	print "\n";
	print 'Файлы нарезаны!';

	print "\n";
	print "\n";

	print 'Изменяем размер изображениям!';

	print "\n";

	# Проходимся по файлам: с out-0.png по out-15.png
	for ($array_filename_addr = 0; $array_filename_addr < @array_filename; $array_filename_addr++)
		{

		# Дополнить счетчик нулями слева.
		$zeroc = sprintf("%02d", $count);

		$temp = $catalog . '/'. $newfilename . $zeroc . '.png';

		`cp \'@array_filename[$array_filename_addr]\' \'$temp\'`;

		$count++;

		$width = $width_size;   # Ширина костяш. (изображения).
		$height = $height_size; # Высота костяш. (изображения).

		# Изменяем размер ($z2 раза).
		for ($z1 = 0; $z1 < $z2; $z1++)
			{
			# Дополнить счетчик нулями слева.
			$zeroc = sprintf("%02d", $count);

			$temp = $catalog . '/'. $newfilename . $zeroc . '.png';

			$width = $width - $width_total;    # На сколько уменьшить по ширине ($width_total).
			$height = $height - $height_total; # На сколько уменьшить по высоте ($height_total).

			`convert \'$array_filename[$array_filename_addr]\' -resize \'$width\'x\'$height\' $temp`;

			$count++;
			}
		}

	print 'Всё готово! См. каталог: ' . $catalog;
	print "\n";
	print "\n";

	# Удалить файлы с out-0.png по out-15.png
	for ($array_filename_addr = 0; $array_filename_addr < @array_filename; $array_filename_addr++)
		{
		`rm \'$array_filename[$array_filename_addr]\'`
		}