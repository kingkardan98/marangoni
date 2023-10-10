def subTags(lst):
    tags = []
    for element in lst:
        for i in range(len(element) + 1):
            tags.append(element[0:i])
    for element in tags:
        if element == '':
            tags.remove(element)
    return tags

pelloni = ['auto', 'molle', 'pastiglie', 'barre', 'filtro', 'olio', 'aria', 'abitacolo', 'tergicristallo', 'febi', 'wix', 'brembo']
print(subTags(pelloni))
