class Node:
    def __init__(self):
        self.next = None
        self.value = None

def printNodes(node):
    current = node
    while current is not None:
        print(current.value)
        current = current.next

def Solve(cNode):
    if cNode.next is not None:
        cNode.value = cNode.next.value
        cNode.next = cNode.next.next



a = Node()
a.value = "a"

b = Node()
b.value = "b"

c = Node()
c.value = "c"

d = Node()
d.value = "d"

e = Node()
e.value = "e"

a.next = b
b.next = c
c.next = d
d.next = e

print("Before removing")
printNodes(a)
Solve(c)
print("After removing")
printNodes(a)
