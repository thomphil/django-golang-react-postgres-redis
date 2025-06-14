import importlib

def test_psycopg_importable():
    assert importlib.import_module('psycopg')
