Python - Lists


The list is a most versatile datatype available in Python which can be written
as a list of comma-separated values (items) between square brackets. Important
thing about a list is that items in a list need not be of the same type.

Creating a list is as simple as putting different comma-separated-values
between square brackets. For example -

list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5]
list3 = ["a", "b", "c", "d"]

Similar to string indices, list indices start at 0, and lists can be sliced,
concetenated and so on.

Accessing values in Lists
To access values in lists, use the square brackets for slicing along with the
index or indices to obtain value available at that index.

For example -

#! /usr/bin/python

list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5, 6, 7]
print("list1[0]: ", list1[0]);
print("list2[1:5]: ", list2[1:5])

When the above code is executed, it produces the following result -

list1[0]: physics
list2[1:5]: [2, 3, 4, 5]

Updating Lists
You can update single or multiple elements of lists by giving the slice on the
left-hand side of the assignment operator, and you can add to elements in a list
with the append() method. For example -

#! /usr/bin/python

list = ['physics', 'chemistry', 1997, 2000]
print("Value available at index 2: ")
print(list[2])
list[2] = 2001
print("New value available at index 2 : ")
print(list[2])

Note - append() method is dicussed in subsequent section.
