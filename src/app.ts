interface Item {
  id: string,
  name: string
}

export class App {
  list: HTMLElement;
  itemDraggedFrom: number;
  itemDraggedTo: number;
  itemDragged: Item;

  items: Item[] = [
    { id: 'cat', name: 'cat' },
    { id: 'dog', name: 'dog' },
    { id: 'mouse', name: 'mouse' },
    { id: 'rat', name: 'rat' },
    { id: 'hamster', name: 'hamster' },
    { id: 'bird', name: 'bird' },
    { id: 'lion', name: 'lion' },
    { id: 'snake', name: 'snake' },
  ];

  drag(item: Item) {
    this.itemDragged = item;
    if (!this.list.classList.contains('dragging')) {
      this.list.classList.add('dragging');
    }
    return true;
  }

  drop() {
    this.items.splice(this.itemDraggedFrom, 1);
    this.items.splice(this.itemDraggedTo, 0, this.itemDragged);
    if (this.list.classList.contains('dragging')) {
      this.list.classList.remove('dragging');
    }
    return true;
  }

  dragover(index: number) {
    this.itemDraggedTo = index;
    this.itemDraggedFrom = this.items.indexOf(this.itemDragged);
    if (this.itemDraggedFrom !== this.itemDraggedTo) {
      return false;
    }
    return true;
  }
}
