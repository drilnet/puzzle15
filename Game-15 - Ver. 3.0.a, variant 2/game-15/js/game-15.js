
//
// Лицензия (License): GNU GPL V3.
// (C) Demidov S.V.
//

//
// Украина, 64250, Харьковская обл.,
// Балаклейский р-н, пос. Донец,
// ул. Стадионная 1-Б, кв. 20.
// Демидов С.В.
//

function G15_Start()
{

// ---

	// ---
	// | Глобальные переменные начинаются только с $.
	// ---

	// Расположение костяшек в массиве.
	// 15 - это пустое место.
	$G15_ArrayCell = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	// Интервал в миллисекундах.
	$g15_interval = 40;

	// Сколько анимированных кадров (с основным).
	$g15_total_frames = 5;

	// Сколько стандартно размешивать.
	$g15_s_stir = 128; // Размешивать $g15_s_stir раз(а).

	// Перемещений.
	$g15_transfer_cur = 0;

// ---

	// Установить перемещений 0.
	document.getElementById('transfer_cur').innerHTML = '&nbsp;<b>' + $g15_transfer_cur + '</b>';

	// Отключаем кнопку [ Начать игру ].
	// Отключаем кнопку [ Установить настройки по умолчанию ].
	G15_DisableButtons();

	// Отключаем Radio Buttons [ Установить нужное изображение ].
	G15_DisableRBImage();

	if ($G15 == 1)
		{
		// Поставить костяшки/изображения на свои места.

		// -
		G15_SetImage();
		}

// ---

	var ms;

	if ($G15 == 1)
		{
		// Миллисекунды.
		ms = 250;
		}
		else
		{
		// Миллисекунды.
		ms = 0;
		}

	// Плавная прозрачность для g15_idimage_15.
	// Минусовая.
	ms = G15_TransparentMinusImage_15(ms);

	if (document.getElementById('g15_mix_1').checked === true)
		{
		// Перемешать костяшки/изображения стандартно.
		ms = G15_Mix_1(ms);
		$G15 = 1; // Пятнашка не собранна!
		}

	if (document.getElementById('g15_mix_2').checked === true)
		{
		// Перемешать костяшки/изображения нестандартно.
		ms = G15_Mix_2(ms);
		$G15 = 1; // Пятнашка не собранна!
		}

	if (document.getElementById('g15_mix_3').checked === true)
		{
		// Поменять местами 13-ю и 14-ю костяшку.
		// Не перемешивать!
		ms = G15_Mix_3(ms);
		$G15 = 1; // Пятнашка не собранна!
		}

	ms = ms + $g15_interval;

	// Включить нужные ссылки возле пустого места, возле 15.
	setTimeout(G15_EnableLinks, ms);

	ms = ms + $g15_interval;

	// Включаем кнопку: [ Начать игру ].
	// Включаем кнопку: [ Установить настройки по умолчанию ].
	setTimeout(G15_EnableButtons, ms);

	// Включаем Radio Buttons [ Установить нужное изображение ].
	setTimeout(G15_EnableRBImage, ms);

	// Теперь можно играть!
}

// Инициализация.
function G15_Init()
{
	$G15 = 0;
	G15_SetDefaultRadioButtons();
	G15_EnableButtons();
	G15_EnableRBImage();

	$g15_catalog = '01';
}

// Установить по умолчанию Radio Buttons (для FireFox).
function G15_SetDefaultRadioButtons()
{
	// [ Размешать стандартно ], [ Размешать нестандартно ], [ Поменять местами ].
	document.getElementById('g15_mix_1').checked = true;
	document.getElementById('g15_mix_2').checked = false;
	document.getElementById('g15_mix_3').checked = false;

	// [ Включить анимацию ], [ Выключить анимацию ]
	document.getElementById('g15_anim_1').checked = false;
	document.getElementById('g15_anim_2').checked = true;

	// [ Цифры ], [ LogoVRLE8 ], [ LogoVRLE16 ].
	document.getElementById('g15_img_1').checked = false;
	document.getElementById('g15_img_2').checked = true;
	document.getElementById('g15_img_3').checked = false;
}

// Включить кнопки: [ Начать игру ], [ Установить настройки по умолчанию ].
function G15_EnableButtons()
{
	// Включаем кнопку [ Начать игру ]
	document.getElementById('g15_start_table').setAttribute('class', 'g15_txtbutton');
	document.getElementById('g15_start').innerHTML = "<a href=\"javascript:G15_Start()\" title=\"Нажмите\">Начать игру</a>";

	// Включаем кнопку [ Установить настройки по умолчанию ].
	document.getElementById('g15_set_table').setAttribute('class', 'g15_txtbutton');
	document.getElementById('g15_set').innerHTML = "<a href=\"javascript:G15_SetDefault()\" title=\"Нажмите\">Установить настройки по умолчанию</a>";
}

// Отключить кнопки: [ Начать игру ], [ Установить настройки по умолчанию ].
function G15_DisableButtons()
{
	// Отключаем кнопку [ Начать игру ].
	document.getElementById('g15_start_table').setAttribute('class', 'g15_txtbutton_gray');
	document.getElementById('g15_start').innerHTML = "Начать игру";

	// Отключаем кнопку [ Установить настройки по умолчанию ].
	document.getElementById('g15_set_table').setAttribute('class', 'g15_txtbutton_gray');
	document.getElementById('g15_set').innerHTML = "Установить настройки по умолчанию";
}

// включить Radio Buttons [ Установить нужное изображение ].
function G15_EnableRBImage()
{
	// Включаем Radio Buttons [ Установить нужное изображение ].
	document.getElementById('g15_img_1_label').setAttribute('style', 'pointer-events: block;');
	document.getElementById('g15_img_2_label').setAttribute('style', 'pointer-events: block;');
	document.getElementById('g15_img_3_label').setAttribute('style', 'pointer-events: block;');
}

// Отключить Radio Buttons [ Установить нужное изображение ].
function G15_DisableRBImage()
{
	// Отключаем Radio Buttons [ Установить нужное изображение ].
	document.getElementById('g15_img_1_label').setAttribute('style', 'pointer-events: none;');
	document.getElementById('g15_img_2_label').setAttribute('style', 'pointer-events: none;');
	document.getElementById('g15_img_3_label').setAttribute('style', 'pointer-events: none;');
}

// Установить настройки по умолчанию.
function G15_SetDefault()
{
	$G15 = 0;
	G15_SetDefaultRadioButtons();
	G15_SetImage()

	// Установить перемещений 0.
	document.getElementById('transfer_cur').innerHTML = '&nbsp;<b>' + 0 + '</b>';
}

// Установить нужное изображение.
function G15_SetImage()
{
	if (document.getElementById('g15_img_1').checked === true)
		{
		// Устанавливаем изображение: Цифры.
		$g15_catalog = '00';
		}

	if (document.getElementById('g15_img_2').checked === true)
		{
		// Устанавливаем изображение: LogoVRLE8.
		$g15_catalog = '01';
		}

	if (document.getElementById('g15_img_3').checked === true)
		{
		// Устанавливаем изображение: LogoVRLE16.
		$g15_catalog = '02';
		}

	G15_SetI();
}

// -
function G15_SetI()
{
	// 0, 1, 2, 3.
	document.getElementById('g15_idcell_0').innerHTML = '<a id=\"g15_idhref_0\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-00.png\"></a>';
	document.getElementById('g15_idcell_1').innerHTML = '<a id=\"g15_idhref_1\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-05.png\"></a>';
	document.getElementById('g15_idcell_2').innerHTML = '<a id=\"g15_idhref_2\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-10.png\"></a>';
	document.getElementById('g15_idcell_3').innerHTML = '<a id=\"g15_idhref_3\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-15.png\"></a>';

	// 4, 5, 6, 7.
	document.getElementById('g15_idcell_4').innerHTML = '<a id=\"g15_idhref_4\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-20.png\"></a>';
	document.getElementById('g15_idcell_5').innerHTML = '<a id=\"g15_idhref_5\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-25.png\"></a>';
	document.getElementById('g15_idcell_6').innerHTML = '<a id=\"g15_idhref_6\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-30.png\"></a>';
	document.getElementById('g15_idcell_7').innerHTML = '<a id=\"g15_idhref_7\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-35.png\"></a>';

	// 8, 9, 10, 11.
	document.getElementById('g15_idcell_8').innerHTML = '<a id=\"g15_idhref_8\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-40.png\"></a>';
	document.getElementById('g15_idcell_9').innerHTML = '<a id=\"g15_idhref_9\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-45.png\"></a>';
	document.getElementById('g15_idcell_10').innerHTML = '<a id=\"g15_idhref_10\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-50.png\"></a>';
	document.getElementById('g15_idcell_11').innerHTML = '<a id=\"g15_idhref_11\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-55.png\"></a>';

	// 12, 13, 14, 15.
	document.getElementById('g15_idcell_12').innerHTML = '<a id=\"g15_idhref_12\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-60.png\"></a>';
	document.getElementById('g15_idcell_13').innerHTML = '<a id=\"g15_idhref_13\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-65.png\"></a>';
	document.getElementById('g15_idcell_14').innerHTML = '<a id=\"g15_idhref_14\"><img class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-70.png\"></a>';
	document.getElementById('g15_idcell_15').innerHTML = '<a id=\"g15_idhref_15\"><img id=\"g15_idimage_15\" class=\"g15_image\" src=\"game-15/Cat_' + $g15_catalog + '/Image-75.png\"></a>';
}

// Плавная прозрачность для g15_idimage_15.
// Минусовая.
function G15_TransparentMinusImage_15(ms)
{
	// id.
	var idi = 'g15_idimage_15';

	var x, y, z;

	// Прозрачность.
	x = 100; // Прозрачность для IE.
	y = 100; // Прозрачность для остальных браузеров.

	// Плавная прозрачность (минусовая).
	for(z = 0; z < 5; z++)
		{
		x = x - 20;
		y = y - 20;

		ms = ms + $g15_interval; // Интервал.

		// Изменяем прозрачность.
		setTimeout(G15_StyleOpacity, ms, x, y / 100, idi);
		}

	return ms;
}

// Плавная прозрачность для g15_idimage_15.
// Плюсовая.
function G15_TransparentPlusImage_15(ms)
{
	// id.
	var idi = 'g15_idimage_15';

	var x, y, z;

	// Прозрачность.
	x = 0; // Прозрачность для IE.
	y = 0; // Прозрачность для остальных браузеров.

	// Плавная прозрачность (минусовая).
	for(z = 0; z < 5; z++)
		{
		x = x + 20;
		y = y + 20;

		ms = ms + $g15_interval; // Интервал.

		// Изменяем прозрачность.
		setTimeout(G15_StyleOpacity, ms, x, y / 100, idi);
		}

	return ms;
}

// Установить прозрачность изображению.
function G15_StyleOpacity(x, y, idi)
{
	// IE.
	document.getElementById(idi).style.filter = "alpha(opacity=" + x + ")";
	// Для остальных браузеров.
	document.getElementById(idi).style.opacity = y;
}

// Перемешать костяшки/изображения. Стандартно!
function G15_Mix_1(ms)
{
	var index_15, index_15_old;

	// Ищем в массиве где находится пустое место 15.
	index_15 = $G15_ArrayCell.indexOf(15);

	// Массивы.
	var ArrayPosition_1;
	var ArrayPosition_2;

	// Здесь позиции как перемещать костяшки/изображения.
	ArrayPosition_2 = [];

	var index_1, index_2, temp, z;

	index_2 = 0;

	// [!] Для проверки.
//	var txt = "\n";

	for(z = 0; z < $g15_s_stir; z++)
		{
		// Получаем нужные позиции вокруг пустого места.
		// Нужные позиции в массиве ArrayPosition_1.
		ArrayPosition_1 = G15_GetArrayPosition(index_15);

		// Генерируем случайный индекс к нужной позиции.
		index_1 = Math.floor(Math.random() * ArrayPosition_1.length);

		if (z != 0)
			{
			// Если равно, значит костяшка/изображение будет перемещена(о) обратно
			// (исключаем такую возможность).
			if (ArrayPosition_1[index_1] == index_15_old)
				{
				// Удаляем один элемент из массива ArrayPosition_1.
				ArrayPosition_1.splice(index_1, 1);

				if (ArrayPosition_1.length != 1)
					{
					// Теперь повторно генерируем случайный индекс к нужной позиции.
					index_1 = Math.floor(Math.random() * ArrayPosition_1.length);
					}
					else
					{
					// Генерировать не надо!
					// В ArrayPosition_1 один элемент!
					index_1 = 0;
					}

				// [!] Для проверки.
//				txt = "\n\nЕсть повтор!\n\n";
				}
				// [!] Для проверки.
//				else
//				{
//				txt = "\n\n";
//				}
			}

		// Записуем в массив ArrayPosition_2 позицию откуда взять.
		ArrayPosition_2[index_2] = ArrayPosition_1[index_1];
		index_2++;

		// Записуем в массив ArrayPosition_2 позицию куда переместить.
		ArrayPosition_2[index_2] = index_15;
		index_2++;

		// Примечание.
		// Структура массива ArrayPosition_2: отсюда, сюда, отсюда, сюда и т.д..

		// Делаем перестановку в глобальном массиве.
		temp = $G15_ArrayCell[ArrayPosition_1[index_1]];
			$G15_ArrayCell[ArrayPosition_1[index_1]] = $G15_ArrayCell[index_15];
				$G15_ArrayCell[index_15] = temp;

		// Запоминаем старое пустое место.
		index_15_old = index_15;

		// Новое пустое место.
		index_15 = ArrayPosition_1[index_1];

		// [!] Для проверки:
//		alert("$G15_ArrayCell = " + $G15_ArrayCell + "\n" + "ArraPosition_2 = " + ArrayPosition_2 +
//			"\n\n" + "Длина массива ArrayPosition_1 = " + ArrayPosition_1.length +
//				"\n\n" + "index_15_old = " + index_15_old + "\n" + "index_15 = " +
//					index_15 + txt);
		}

	index_1 = 0;
	index_2 = 1;

	// Перемешиваем на странице.
	for(z = 0; z < $g15_s_stir; z++)
		{
		ms = ms + $g15_interval;
		setTimeout(G15_MoveImage_1, ms, ArrayPosition_2[index_1], ArrayPosition_2[index_2]);

		index_1++;
		index_1++;
		index_2++;
		index_2++;
		}

	return ms;
}

// Переместить одну костяшку/изображение на странице.
// Операция проводится над двумя ячейками.
function G15_MoveImage_1(index, index_15)
{
	var temp;

	// На странице.
	temp = document.getElementById('g15_idcell_' + index).innerHTML;
		document.getElementById('g15_idcell_' + index).innerHTML = document.getElementById('g15_idcell_' + index_15).innerHTML;
			document.getElementById('g15_idcell_' + index_15).innerHTML = temp;
}

// Перемешать костяшки/изображения. Нестандартно!
function G15_Mix_2(ms)
{
	var index, index_15;

	// Ищем в массиве где находится пустое место 15.
	index_15 = $G15_ArrayCell.indexOf(15);

	var Array_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	var Array_2 = [];

	var x = Array_1.length;
	var y = 0;

	// Получить 15 неповторяющихся чисел.
	// Результат в массиве Array_2.
	for(x = x; x > 0; x--)
		{
		y = Math.floor(Math.random() * x);

		// Добавить в конец массива.
		Array_2.push(Array_1[y]);

		// Удалит один элемент с индексом "y" в масиве Array_1.
		Array_1.splice(y, 1);
		}

	// Перемешиваем на странице.
	for(x = 0; x < Array_2.length; x++)
		{
		index = Array_2[x];

		ms = ms + $g15_interval;
		setTimeout(G15_MoveImage_2, ms, index, index_15);

		index_15 = index;
		}

	return ms;
}

// Переместить одну костяшку/изображение на странице.
// Операция проводится над двумя ячейками.
function G15_MoveImage_2(index, index_15)
{
	var temp;

	// На странице.
	temp = document.getElementById('g15_idcell_' + index).innerHTML;
		document.getElementById('g15_idcell_' + index).innerHTML = document.getElementById('g15_idcell_' + index_15).innerHTML;
			document.getElementById('g15_idcell_' + index_15).innerHTML = temp;

	// Теперь в глобальном массиве.
	temp = $G15_ArrayCell[index];
		$G15_ArrayCell[index] = $G15_ArrayCell[index_15];
			$G15_ArrayCell[index_15] = temp;
}

// Поменять местами 13-ю и 14-ю костяшку!
// Не перемешивать!
function G15_Mix_3(ms)
{
	var index_13 = 13;
	var index_14 = 14;

	ms = ms + $g15_interval;
	setTimeout(G15_MoveImage_3, ms, index_13, index_14);

	return ms;
}

// Поменять местами костяшки/изображения на странице.
// Операция проводится над двумя ячейками (ячейка 13 и ячейка 14).
function G15_MoveImage_3(index_13, index_14)
{
	var temp;

	// На странице.
	temp = document.getElementById('g15_idcell_' + index_13).innerHTML;
		document.getElementById('g15_idcell_' + index_13).innerHTML = document.getElementById('g15_idcell_' + index_14).innerHTML;
			document.getElementById('g15_idcell_' + index_14).innerHTML = temp;

	// Теперь в глобальном массиве.
	temp = $G15_ArrayCell[index_13];
		$G15_ArrayCell[index_13] = $G15_ArrayCell[index_14];
			$G15_ArrayCell[index_14] = temp;
}

// Получаем нужные позиции вокруг пустого места.
function G15_GetArrayPosition(index_15)
{
	var ArrayPosition;

	switch(index_15)
		{

		case 0: ArrayPosition = [1, 4]; break;
			case 1: ArrayPosition = [0, 2, 5]; break;
				case 2: ArrayPosition = [1, 3, 6]; break;
			case 3: ArrayPosition = [2, 7]; break;

		case 4: ArrayPosition = [0, 5, 8]; break;
			case 5: ArrayPosition = [1, 4, 6, 9]; break;
				case 6: ArrayPosition = [2, 5, 7, 10]; break;
			case 7: ArrayPosition = [3, 6, 11]; break;

		case 8: ArrayPosition = [4, 9, 12]; break;
			case 9: ArrayPosition = [5, 8, 10, 13]; break;
				case 10: ArrayPosition = [6, 9, 11, 14]; break;
			case 11: ArrayPosition = [7, 10, 15]; break;

		case 12: ArrayPosition = [8, 13]; break;
			case 13: ArrayPosition = [9, 12, 14]; break;
				case 14: ArrayPosition = [10, 13, 15]; break;
			case 15: ArrayPosition = [11, 14]; break;

		// !
		default:
		alert("Возникла непредвиденная ошибка (function: GetArrayPosition(), switch, default)!");

		}

	return ArrayPosition;
}

// Включить нужные ссылки возле пустого места, возле 15.
function G15_EnableLinks()
{
	var index_15;

	// Ищем в массиве где находится пустое место 15.
	index_15 = $G15_ArrayCell.indexOf(15);

	switch(index_15)
		{

		case 0:
			// Ячейка 1.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).setAttribute('href', 'javascript:G15_Move_1()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).setAttribute('title', 'Нажмите');

			// Ячейка 4.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).setAttribute('href', 'javascript:G15_Move_4()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).setAttribute('title', 'Нажмите');
		break;

		case 1:
			// Ячейка 0.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[0]).setAttribute('href', 'javascript:G15_Move_0()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[0]).setAttribute('title', 'Нажмите');

			// Ячейка 2.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).setAttribute('href', 'javascript:G15_Move_2()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).setAttribute('title', 'Нажмите');

			// Ячейка 5.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).setAttribute('href', 'javascript:G15_Move_5()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).setAttribute('title', 'Нажмите');
		break;

		case 2:
			// Ячейка 1.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).setAttribute('href', 'javascript:G15_Move_1()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).setAttribute('title', 'Нажмите');

			// Ячейка 3.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[3]).setAttribute('href', 'javascript:G15_Move_3()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[3]).setAttribute('title', 'Нажмите');

			// Ячейка 6.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).setAttribute('href', 'javascript:G15_Move_6()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).setAttribute('title', 'Нажмите');
		break;

		case 3:
			// Ячейка 2.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).setAttribute('href', 'javascript:G15_Move_2()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).setAttribute('title', 'Нажмите');

			// Ячейка 7.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).setAttribute('href', 'javascript:G15_Move_7()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).setAttribute('title', 'Нажмите');
		break;

		case 4:
			// Ячейка 0.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[0]).setAttribute('href', 'javascript:G15_Move_0()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[0]).setAttribute('title', 'Нажмите');

			// Ячейка 5.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).setAttribute('href', 'javascript:G15_Move_5()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).setAttribute('title', 'Нажмите');

			// Ячейка 8.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).setAttribute('href', 'javascript:G15_Move_8()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).setAttribute('title', 'Нажмите');
		break;

		case 5:
			// Ячейка 1.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).setAttribute('href', 'javascript:G15_Move_1()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).setAttribute('title', 'Нажмите');

			// Ячейка 4.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).setAttribute('href', 'javascript:G15_Move_4()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).setAttribute('title', 'Нажмите');

			// Ячейка 6.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).setAttribute('href', 'javascript:G15_Move_6()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).setAttribute('title', 'Нажмите');

			// Ячейка 9.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).setAttribute('href', 'javascript:G15_Move_9()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).setAttribute('title', 'Нажмите');
		break;

		case 6:
			// Ячейка 2.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).setAttribute('href', 'javascript:G15_Move_2()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).setAttribute('title', 'Нажмите');

			// Ячейка 5.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).setAttribute('href', 'javascript:G15_Move_5()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).setAttribute('title', 'Нажмите');

			// Ячейка 7.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).setAttribute('href', 'javascript:G15_Move_7()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).setAttribute('title', 'Нажмите');

			// Ячейка 10.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).setAttribute('href', 'javascript:G15_Move_10()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).setAttribute('title', 'Нажмите');
		break;

		case 7:
			// Ячейка 3.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[3]).setAttribute('href', 'javascript:G15_Move_3()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[3]).setAttribute('title', 'Нажмите');

			// Ячейка 6.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).setAttribute('href', 'javascript:G15_Move_6()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).setAttribute('title', 'Нажмите');

			// Ячейка 11.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).setAttribute('href', 'javascript:G15_Move_11()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).setAttribute('title', 'Нажмите');
		break;

		case 8:
			// Ячейка 4.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).setAttribute('href', 'javascript:G15_Move_4()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).setAttribute('title', 'Нажмите');

			// Ячейка 9.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).setAttribute('href', 'javascript:G15_Move_9()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).setAttribute('title', 'Нажмите');

			// Ячейка 12.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[12]).setAttribute('href', 'javascript:G15_Move_12()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[12]).setAttribute('title', 'Нажмите');
		break;

		case 9:
			// Ячейка 5.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).setAttribute('href', 'javascript:G15_Move_5()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).setAttribute('title', 'Нажмите');

			// Ячейка 8.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).setAttribute('href', 'javascript:G15_Move_8()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).setAttribute('title', 'Нажмите');

			// Ячейка 10.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).setAttribute('href', 'javascript:G15_Move_10()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).setAttribute('title', 'Нажмите');

			// Ячейка 13.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).setAttribute('href', 'javascript:G15_Move_13()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).setAttribute('title', 'Нажмите');
		break;

		case 10:
			// Ячейка 6.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).setAttribute('href', 'javascript:G15_Move_6()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).setAttribute('title', 'Нажмите');

			// Ячейка 9.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).setAttribute('href', 'javascript:G15_Move_9()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).setAttribute('title', 'Нажмите');

			// Ячейка 11.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).setAttribute('href', 'javascript:G15_Move_11()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).setAttribute('title', 'Нажмите');

			// Ячейка 14.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).setAttribute('href', 'javascript:G15_Move_14()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).setAttribute('title', 'Нажмите');
		break;

		case 11:
			// Ячейка 7.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).setAttribute('href', 'javascript:G15_Move_7()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).setAttribute('title', 'Нажмите');

			// Ячейка 10.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).setAttribute('href', 'javascript:G15_Move_10()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).setAttribute('title', 'Нажмите');

			// Ячейка 15.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[15]).setAttribute('href', 'javascript:G15_Move_15()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[15]).setAttribute('title', 'Нажмите');
		break;

		case 12:
			// Ячейка 8.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).setAttribute('href', 'javascript:G15_Move_8()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).setAttribute('title', 'Нажмите');

			// Ячейка 13.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).setAttribute('href', 'javascript:G15_Move_13()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).setAttribute('title', 'Нажмите');
		break;

		case 13:
			// Ячейка 9.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).setAttribute('href', 'javascript:G15_Move_9()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).setAttribute('title', 'Нажмите');

			// Ячейка 12.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[12]).setAttribute('href', 'javascript:G15_Move_12()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[12]).setAttribute('title', 'Нажмите');

			// Ячейка 14.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).setAttribute('href', 'javascript:G15_Move_14()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).setAttribute('title', 'Нажмите');
		break;

		case 14:
			// Ячейка 10.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).setAttribute('href', 'javascript:G15_Move_10()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).setAttribute('title', 'Нажмите');

			// Ячейка 13.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).setAttribute('href', 'javascript:G15_Move_13()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).setAttribute('title', 'Нажмите');

			// Ячейка 15.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[15]).setAttribute('href', 'javascript:G15_Move_15()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[15]).setAttribute('title', 'Нажмите');
		break;

		case 15:
			// Ячейка 11.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).setAttribute('href', 'javascript:G15_Move_11()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).setAttribute('title', 'Нажмите');

			// Ячейка 14.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).setAttribute('href', 'javascript:G15_Move_14()');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).setAttribute('title', 'Нажмите');
		break;

		// !
		default:
		alert("Возникла непредвиденная ошибка (function: EnableLinks(), switch, default)!");

		}
}

// Выключить нужные ссылки возле пустого места, возле 15.
function G15_DisableLinks()
{
	var index_15;

	// Ищем в массиве где находится пустое место 15.
	index_15 = $G15_ArrayCell.indexOf(15);

	switch(index_15)
		{

		case 0:
			// Ячейка 1.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).removeAttribute('title');

			// Ячейка 4.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).removeAttribute('title');
		break;

		case 1:
			// Ячейка 0.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[0]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[0]).removeAttribute('title');

			// Ячейка 2.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).removeAttribute('title');

			// Ячейка 5.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).removeAttribute('title');
		break;

		case 2:
			// Ячейка 1.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).removeAttribute('title');

			// Ячейка 3.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[3]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[3]).removeAttribute('title');

			// Ячейка 6.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).removeAttribute('title');
		break;

		case 3:
			// Ячейка 2.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).removeAttribute('title');

			// Ячейка 7.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).removeAttribute('title');
		break;

		case 4:
			// Ячейка 0.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[0]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[0]).removeAttribute('title');

			// Ячейка 5.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).removeAttribute('title');

			// Ячейка 8.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).removeAttribute('title');
		break;

		case 5:
			// Ячейка 1.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[1]).removeAttribute('title');

			// Ячейка 4.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).removeAttribute('title');

			// Ячейка 6.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).removeAttribute('title');

			// Ячейка 9.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).removeAttribute('title');
		break;

		case 6:
			// Ячейка 2.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[2]).removeAttribute('title');

			// Ячейка 5.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).removeAttribute('title');

			// Ячейка 7.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).removeAttribute('title');

			// Ячейка 10.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).removeAttribute('title');
		break;

		case 7:
			// Ячейка 3.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[3]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[3]).removeAttribute('title');

			// Ячейка 6.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).removeAttribute('title');

			// Ячейка 11.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).removeAttribute('title');
		break;

		case 8:
			// Ячейка 4.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[4]).removeAttribute('title');

			// Ячейка 9.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).removeAttribute('title');

			// Ячейка 12.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[12]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[12]).removeAttribute('title');
		break;

		case 9:
			// Ячейка 5.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[5]).removeAttribute('title');

			// Ячейка 8.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).removeAttribute('title');

			// Ячейка 10.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).removeAttribute('title');

			// Ячейка 13.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).removeAttribute('title');
		break;

		case 10:
			// Ячейка 6.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[6]).removeAttribute('title');

			// Ячейка 9.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).removeAttribute('title');

			// Ячейка 11.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).removeAttribute('title');

			// Ячейка 14.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).removeAttribute('title');
		break;

		case 11:
			// Ячейка 7.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[7]).removeAttribute('title');

			// Ячейка 10.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).removeAttribute('title');

			// Ячейка 15.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[15]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[15]).removeAttribute('title');
		break;

		case 12:
			// Ячейка 8.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[8]).removeAttribute('title');

			// Ячейка 13.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).removeAttribute('title');
		break;

		case 13:
			// Ячейка 9.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[9]).removeAttribute('title');

			// Ячейка 12.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[12]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[12]).removeAttribute('title');

			// Ячейка 14.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).removeAttribute('title');
		break;

		case 14:
			// Ячейка 10.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[10]).removeAttribute('title');

			// Ячейка 13.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[13]).removeAttribute('title');

			// Ячейка 15.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[15]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[15]).removeAttribute('title');
		break;

		case 15:
			// Ячейка 11.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[11]).removeAttribute('title');

			// Ячейка 14.
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).removeAttribute('href');
			document.getElementById('g15_idhref_' + $G15_ArrayCell[14]).removeAttribute('title');
		break;

		// !
		default:
		alert("Возникла непредвиденная ошибка (function: EnableLinks(), switch, default)!");

		}

	return index_15;
}

// Поменять местами ячейки в таблице на странице (ячейку 0 с ячейкой index_15).
function G15_Move_0()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 0;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_0';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 1 с ячейкой index_15).
function G15_Move_1()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 1;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_1';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 2 с ячейкой index_15).
function G15_Move_2()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 2;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_2';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 3 с ячейкой index_15).
function G15_Move_3()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 3;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_3';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 4 с ячейкой index_15).
function G15_Move_4()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 4;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_4';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 5 с ячейкой index_15).
function G15_Move_5()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 5;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_5';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 6 с ячейкой index_15).
function G15_Move_6()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 6;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_6';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 7 с ячейкой index_15).
function G15_Move_7()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 7;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_7';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 8 с ячейкой index_15).
function G15_Move_8()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 8;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_8';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 9 с ячейкой index_15).
function G15_Move_9()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 9;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_9';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 10 с ячейкой index_15).
function G15_Move_10()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 10;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_10';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 11 с ячейкой index_15).
function G15_Move_11()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 11;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_11';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 12 с ячейкой index_15).
function G15_Move_12()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 12;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_12';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 13 с ячейкой index_15).
function G15_Move_13()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 13;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_13';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 14 с ячейкой index_15).
function G15_Move_14()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 14;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_14';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Поменять местами ячейки в таблице на странице (ячейку 15 с ячейкой index_15).
function G15_Move_15()
{
	var idc, index, index_15, temp_1, temp_2, x, y;

	// Выключить ссылки.
	index_15 = G15_DisableLinks();

	index = 15;

	// С анимацией.
	if (document.getElementById('g15_anim_1').checked === true)
		{
		idc = 'g15_idcell_15';

		temp_1 = document.getElementById(idc).innerHTML;
		temp_2 = document.getElementById('g15_idcell_' + index_15).innerHTML;

		// С какого начать (для движения на увеличение).
		x = $G15_ArrayCell[index] * $g15_total_frames + 1;

		// С какого начать (для движения на уменьшение).
		y = x + $g15_total_frames - 2;

		// -
		G15_Animation(idc, index, index_15, temp_1, temp_2, x, y);
		}
		else
		{
		// Без анимации.
		G15_CellToCell(index, index_15);
		}
}

// Анимация с перестановкой.
function G15_Animation(idc, index, index_15, temp_1, temp_2, x, y)
{
	var ms, z, zero_1, zero_2;

	ms = 0;

	// Цикл. Анимация.
	for(z = 0; z < $g15_total_frames - 1; z++)
		{
		// Дополнить нулём слева, если нужно.
		switch(String(x).length)
			{

			case 1:
				zero_1 = '0';
					break;

			case 2:
				zero_1 = '';
					break;

			// !
			default:
			alert("Возникла непредвиденная ошибка (function: Animation, switch, default, x)!");

			}

		// Дополнить нулём слева, если нужно.
		switch(String(y).length)
			{

			case 1:
				zero_2 = '0';
					break;

			case 2:
				zero_2 = '';
					break;

			// !
			default:
			alert("Возникла непредвиденная ошибка (function: Animation, switch, default, y)!");

			}

		ms = ms + $g15_interval; // Интервал.

		// Установить костяшки/изображения в ячейки.
		setTimeout(G15_SetImages_1, ms, idc, index_15, zero_1, zero_2, x, y);

		x++;
		y--;
		}

	ms = ms + $g15_interval; // Интервал.

	// Установить финальные костяшки/изображения (конец анимации),
	// плюс сделать перестановку в глобальном массиве.
	setTimeout(G15_SetImages_2, ms, idc, index, index_15, temp_1, temp_2);
}

// Установить костяшки/изображения в ячейки.
function G15_SetImages_1(idc, index_15, zero_1, zero_2, x, y)
{
	document.getElementById(idc).innerHTML =
	'<img class="g15_image" src="game-15/Cat_' + $g15_catalog + '/Image-' + zero_1 + x + '.png">';

	document.getElementById('g15_idcell_' + index_15).innerHTML =
	'<img class="g15_image" src="game-15/Cat_' + $g15_catalog + '/Image-' + zero_2 + y + '.png">';
}

// Установить финальные костяшки/изображения (конец анимации),
// плюс сделать перестановку в глобальном массиве.
function G15_SetImages_2(idc, index, index_15, temp_1, temp_2)
{
	document.getElementById(idc).innerHTML = temp_2;
	document.getElementById('g15_idcell_' + index_15).innerHTML = temp_1;

	// Теперь перестановка в глобальном массиве.
	var temp = $G15_ArrayCell[index];
		$G15_ArrayCell[index] = $G15_ArrayCell[index_15];
			$G15_ArrayCell[index_15] = temp;

	// Считаем количество перемещений.
	G15_Transfer();

	// Проверяем собраны ли костяшки/изображения!
	G15_Verify();
}

// Перемещение без анимации.
function G15_CellToCell(index, index_15)
{
	var temp;

	// На странице.
	temp = document.getElementById('g15_idcell_' + index).innerHTML;
		document.getElementById('g15_idcell_' + index).innerHTML = document.getElementById('g15_idcell_' + index_15).innerHTML;
			document.getElementById('g15_idcell_' + index_15).innerHTML = temp;

	// Теперь в глобальном массиве.
	temp = $G15_ArrayCell[index];
		$G15_ArrayCell[index] = $G15_ArrayCell[index_15];
			$G15_ArrayCell[index_15] = temp;

	// Считаем количество перемещений.
	G15_Transfer();

	// Проверяем собраны ли костяшки/изображения!
	G15_Verify();
}

// Считаем количество перемещений.
function G15_Transfer()
{
	$g15_transfer_cur++;
	document.getElementById('transfer_cur').innerHTML = '&nbsp;<b>' + $g15_transfer_cur + '</b>';
}

// Проверить собраны ли костяшки/изображения.
function G15_Verify()
{
	var ms;

	if (
		$G15_ArrayCell[0] == 0 && $G15_ArrayCell[1] == 1 && $G15_ArrayCell[2] == 2 && $G15_ArrayCell[3] == 3 &&
			$G15_ArrayCell[4] == 4 && $G15_ArrayCell[5] == 5 && $G15_ArrayCell[6] == 6 && $G15_ArrayCell[7] == 7 &&
				$G15_ArrayCell[8] == 8 && $G15_ArrayCell[9] == 9 && $G15_ArrayCell[10] == 10 && $G15_ArrayCell[11] == 11 &&
					$G15_ArrayCell[12] == 12 && $G15_ArrayCell[13] == 13 && $G15_ArrayCell[14] == 14 && $G15_ArrayCell[15] == 15
		)

			{
			// Пятнашка собранна!
			$G15 = 0;

			ms = 0;

			// Плавная прозрачность для g15_idimage_15.
			// Плюсовая.
			G15_TransparentPlusImage_15(ms);
			}
			else
			{

			// Включить нужные ссылки.
			G15_EnableLinks();

			// Продолжаем играть.
			}
}
