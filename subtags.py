def subTags(lst):
    tags = []
    for element in lst:
        for i in range(len(element) + 1):
            tags.append(element[0:i])
    for element in tags:
        if element == '':
            tags.remove(element)
    tags = list(dict.fromkeys(tags))
    return tags

lista = []
print(subTags(lista))
