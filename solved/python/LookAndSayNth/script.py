# The "look and say" sequence is defined as follows: beginning with the term 1, each subsequent
# term visually describes the digits appearing in the previous term. The first few terms are as follows:
# 1
# 11
# 21
# 1211
# 111221
# As an example, the fourth term is 1211, since the third term consists of one 2 and one 1.
# Given an integer N, print the Nth term of this sequence.


def lookAndSayNthOcurrence(nth):
    if nth == 1:
        return "1"
    if nth == 2:
        return "11"
    #if greater we need to start with the "11" strings
    result = "11"
    for i in range(3, nth + 1):
        result += "$"
        l_result = len(result)
        intermediate = ""
        count = 1
        for j in range(1, l_result):
            if result[j] == result[j - 1]:
                count += 1
            else:
                intermediate += str(count + 0)
                intermediate += result[j - 1]
                count = 1
        result = intermediate
    return result

input = 4
assert lookAndSayNthOcurrence(input) == "1211"
input = 5
assert lookAndSayNthOcurrence(input) == "111221"
