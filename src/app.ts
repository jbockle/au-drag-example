interface Item {
  name: string
}

export class App {
  list: HTMLElement;
  itemDraggedFrom: number;
  itemDraggedTo: number;
  itemDragged: Item;

  items: Item[] = []

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.items.push({ name: `${i}` });
    }
  }

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
      if (this.itemDraggedFrom < this.itemDraggedTo) {
        this.itemDraggedTo--;
      }
      return false;
    }
    return true;
  }
}
