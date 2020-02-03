def quickSort(arr):
    innerQuickSort(arr, 0, len(arr) - 1)

def innerQuickSort(arr, left, right):
    if left >= right or right > len(arr) - 1:
        return
    print(arr)
    print("left is: " + str(left) + " and right is:" + str(right))
    pivot = arr[right]
    partitionIndex = partition(arr, left, right, pivot)
    print("partitionIndex is: " + str(partitionIndex))
    innerQuickSort(arr, left, partitionIndex)
    innerQuickSort(arr, partitionIndex + 1, right)

def partition(arr, left, right, pivot):
    while arr[left] < pivot:
        print("arr[left] is: " + str(arr[left]) + " and pivot is: " + str(pivot))
        left+=1
    while arr[right] > pivot:
        print("arr[right] is: " + str(arr[right]) + " and pivot is: " + str(pivot))
        right-=1
    print("swapping everything else from " + str(left) + " to " + str(right))
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left+=1
        right-=1
    return left - 1

arr = [7,5,6,9,1,3,4]
print("Before quickSort")
print(arr)
quickSort(arr)
print("After quickSort")
print(arr)
