function findFirstRepeated(gifts) {
    let giftSet = new Set()
    for (const id of gifts) {
          if (giftSet.has(id)) {
              return id;
          } else {
              giftSet.add(id);
          }
      }
      return -1
}