# Check if a string is a permutation of another string

NO_OF_CHARS = 256
def isPermutation(input, comparer):
    inputCount = [0] * NO_OF_CHARS
    comparerCount = [0] * NO_OF_CHARS
    for ch in input:
        inputCount[ord(ch)] += 1
    for ch in comparer:
        comparerCount[ord(ch)] += 1

    if len(inputCount) != len(comparerCount) :
        print("Not Equal")

    for i in range(NO_OF_CHARS):
        if inputCount[i] != comparerCount[i]:
            print("Not Equal")
            return

    print("Success")


inp = "baacaa"
comp = "aacaab"

isPermutation(inp, comp)
