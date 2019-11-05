#Given an iterator with methods next() and hasNext(), create a wrapper iterator,
#PeekableInterface, which also implements peek().
#peek shows the next element that would be returned on next().



class PeekingIterator(object):
    #TODO: Implement here
    def __init__(self, iterator):
        pass

    def peek(self):
        pass

    def next(self):
        pass

    def hasNext(self):
        pass

#Feed our PeekingIterator
iter = PeekingIterator([1,2,3,4,5,6,7,8,9,10,11,12])
stopAt = 5
ix = 1
while iter.hasNext() and stopAt > ix:
    val = iter.peek()   # Get the next element but not advance the iterator.
    nxt = iter.next()         # Should return the same value as [val].
    ix+=1
    if val != nxt:
        print("val was: " + str(val))
        print("nxt was: " + str(nxt))
        print("Fail Sauce!")
        break;

#What if I do multiple peeks and multiple nexts?
#Both should be the same
val2 = iter.peek()
val3 = iter.peek()
if val2 != val3:
    print("Failsauce! val2 != val3")
#these should be different too
nxt2 = iter.next()
nxt3 = iter.next()
if nxt2 == nxt3:
    print("Failsauce! " + str(nxt2) + "==" + str(nxt3))
print("Finished!")
