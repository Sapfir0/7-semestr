import unittest
import outputPipe
from parseArgs import parseArgs, validateArgs
from main import main
import os


class ValidateArgsTest(unittest.TestCase):

    def test_no_data_count(self):
        with self.assertRaises(SystemExit):
            parser = parseArgs([])

    def test_incorrect_distribution(self):
        with self.assertRaises(Exception):
            parser = parseArgs(['25', '-d', 'incorectDistribution'])
            validateArgs(parser, parser.timeit, "")

    def test_no_type_of_random_data(self):
        with self.assertRaises(Exception):
            parser = parseArgs(['25', '-d', 'uniform'])
            validateArgs(parser, parser.timeit, "")

    def test_incorrect_type_of_random_data(self):
        with self.assertRaises(Exception):
            parser = parseArgs(['25', '-d', 'uniform', '-t', 'mytype'])
            validateArgs(parser, parser.timeit, "")

    def test_normal_distribution_for_integer(self):
        with self.assertRaises(Exception):
            parser = parseArgs(['25', '-d', 'normal', '-t', 'int'])
            validateArgs(parser, parser.timeit, "")

    def test_no_distribution_params(self):
        with self.assertRaises(Exception):
            parser = parseArgs(['25', '-d', 'uniform', '-t', 'float'])
            validateArgs(parser, parser.timeit, "")

    def test_negative_std(self):
        with self.assertRaises(Exception):
            parser = parseArgs(['25', '-d', 'normal', '-t', 'float', '-mean', '1', '-std', '-1'])
            validateArgs(parser, parser.timeit, "")

    def test_normal_distribution_float(self):  # нет исключения
        parser = parseArgs(['25', '-d', 'normal', '-t', 'float', '-mean', '1', '-std', '3'])
        validateArgs(parser, parser.timeit, "")

    def test_uniform_distribution_float(self):  # нет исключения
        parser = parseArgs(['25', '-d', 'uniform', '-t', 'float', '-min_value', '1', '-max_value', '3'])
        validateArgs(parser, parser.timeit, "")

    def test_write_in_file(self):
        outFile = './out.txt'
        main(['25', outFile, '-d', 'uniform', '-t', 'float', '-min_value', '1', '-max_value', '3'])
        self.assertTrue(os.path.isfile(outFile))
        self.assertGreater(os.path.getsize(outFile), 0)

    def test_equal_data_in_file_with_equal_seed(self):
        outFile = './out.txt'
        outFile2 = './out2.txt'
        main(['25', outFile, '-d', 'uniform', '-t', 'float', '-min_value', '1', '-max_value', '3', ])
        main(['25', outFile2, '-d', 'uniform', '-t', 'float', '-min_value', '1', '-max_value', '3'])
        with open(outFile) as f1:
            with open(outFile2) as f2:
                self.assertEqual(f1.read(), f2.read())


if __name__ == '__main__':
    unittest.main()
