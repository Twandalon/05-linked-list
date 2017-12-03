'use strict';

//vinicio - This is capital L because it's a class
const LinkedList = require('../model/linked-list');

describe('linked-list.js',() => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new LinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
  });

  test('insertion should properly modify the next property', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(4));
    result.append(new LinkedList(10));

    expect(result.value).toEqual(5);
    expect(result.next.value).toEqual(4);
    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.next).toEqual(null);
  });

  test('find should find a node value in a linked list', () => {
    let linkedlist = new LinkedList(5);
    linkedlist.append(new LinkedList(10));
    linkedlist.append(new LinkedList(20));
    linkedlist.append(new LinkedList(30));
    expect(linkedlist.find(20).value).toEqual(20);
  });

  test('find should return null when a value is passed in that does not exist', () => {
    let linkedlist = new LinkedList(5);
    linkedlist.append(new LinkedList(10));
    linkedlist.append(new LinkedList(20));
    linkedlist.append(new LinkedList(30));
    expect(linkedlist.find(21)).toBe(null);
  });

  test('remove should update the next property and erase an element', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    first.append(second);
    first.append(third);
    // vinicio - I can do this because I return this at the end of append
    //first.append(second).append(third);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next.value).toEqual(30);
    expect(first.next.next.next).toEqual(null);

    first.remove(second);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(30);
    expect(first.next.next).toEqual(null);

  });


});
