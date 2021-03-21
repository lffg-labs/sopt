# Referir à documentação:
# https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize
from unicodedata import normalize

dicionario = {
    'a': [],
    'b': [],
    'c': [],
    'd': [],
    'e': [],
    'f': [],
    'g': [],
    'h': [],
    'i': [],
    'j': [],
    'k': [],
    'l': [],
    'm': [],
    'n': [],
    'o': [],
    'p': [],
    'q': [],
    'r': [],
    's': [],
    't': [],
    'u': [],
    'v': [],
    'w': [],
    'x': [],
    'y': [],
    'z': []}

linha = input()

for item in linha.split():
    # Converte a letra para lowercase e "remove o acento":
    letter = lower(normalize("NFD", item[0])[0])

    if letter in dicionario:
        if item not in dicionario[letter]:
            dicionario[letter].append(item)

print(dicionario)
