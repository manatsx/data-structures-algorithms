// Merge Two Sorted List
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Link: https://leetcode.com/problems/merge-two-sorted-lists/

package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

// Function para combinar dos listas ordenadas
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	newNode := &ListNode{}
	current := newNode

	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			current.Next = list1
			list1 = list1.Next
		} else {
			current.Next = list2
			list2 = list2.Next
		}
		current = current.Next
	}

	if list1 != nil {
		current.Next = list1
	} else if list2 != nil {
		current.Next = list2
	}

	return newNode.Next
}

func main() {
	list1 := &ListNode{1, &ListNode{2, &ListNode{4, nil}}}
	list2 := &ListNode{1, &ListNode{3, &ListNode{4, nil}}}
	fmt.Println(mergeTwoLists(list1, list2))
}

// Tengo dos listas enlazadas ordenadas y debo unirlas en una sola lista ordenada
