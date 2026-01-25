class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex < 0 || this.itemCount() == 0) return -1;
    let itemsRemaining = this.itemCount();
    for (
      let currentPageIndex = 0;
      currentPageIndex < pageIndex;
      currentPageIndex++
    ) {
      itemsRemaining -= this.itemsPerPage;
    }
    if (itemsRemaining <= 0) return -1;
    if (itemsRemaining <= this.itemsPerPage) return itemsRemaining;
    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex >= this.itemCount() || itemIndex < 0 || this.itemCount() == 0)
      return -1;
    let currentItemIdx = 0;
    let currentPage = 0;
    let numItemsOnCurrentPage = 0;
    while (currentItemIdx < itemIndex) {
      currentItemIdx += 1;
      numItemsOnCurrentPage += 1;
      if (numItemsOnCurrentPage == this.itemsPerPage) {
        currentPage += 1;
        numItemsOnCurrentPage = 0;
      }
    }
    return currentPage;
  }
}

const items = Array.from({ length: 12 }, () => Math.trunc(Math.random() * 10));
const helper = new PaginationHelper(items, 3);
console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(4));
console.log(helper.pageIndex(18));

// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
