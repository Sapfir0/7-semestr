
1.	Генерация случайных чисел и строк. 
Необходимо сгенерировать случайные числа или строки и записать их в файл или вывести на консоль. 

Параметры: 
•	количество данных, которые надо сгенерировать (первый позиционный параметр);
•	путь к выходному файлу (второй позиционный параметр), если не задан – результат выводится на консоль;
•	значение инициализации генератора (-seed), для одного и того же значения должны генерироваться идентичные данные, по умолчанию 0;
•	тип данных (-t, -type) - строка, задающая тип данных, возможные значения: “int” - целые числа, “float” - вещественные числа, “str” – строки. По умолчанию генерируются целые числа.
Для чисел: 	
•	распределение (-d, -distribution), возможные значения: uniform (равномерное), normal (нормальное распределение);
•	параметры распределения (-mean, -std, -min_value, -max_value).
Для строк:
•	длина стрый набор символов (-c, -charset) - по умолчанию все буквы и цифры латинского алфавита и знаки препинания.

import argparse
import numpy


parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('integers', metavar='N', type=int, nargs='+',
                    help='an integer for the accumulator')
parser.add_argument('--sum', dest='accumulate', action='store_const',
                    const=sum, default=max,
                    help='sum the integers (default: find the max)')

args = parser.parse_args()


numpy.random.seed(0)

