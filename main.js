const result = {
  "displayedName": {
    "displayedName": {
      "value": [
        "Профиль маячковый ПВХ 10 мм L3м"
      ],
      "description": "Полное наименование товара для клиента"
    }
  },
  "stock": {
    "stocks": {
      "34": {
        "2": "35",
        "3": "42",
        "4": "58",
        "5": "57",
        "6": "112",
        "20": "51",
        "22": "78",
        "26": "34",
        "32": "22",
        "35": "358",
        "40": "28",
        "43": "68",
        "45": "58",
        "49": "31",
        "51": "29",
        "56": "42",
        "62": "26",
        "64": "0",
        "65": "57",
        "86": "15",
        "114": "41",
        "117": "46",
        "143": "46",
        "162": "4",
        "171": "0",
        "176": "12"
      }
    }
  }
};

function productName(obj) {
  let name = obj.displayedName.displayedName.value[0];
  return name;
}

function goodsStock(obj) {
  const region = obj.stock.stocks;
  const regionNumber = Object.keys(region)[0];
  const arrGoodsStock = [];
  for (const key in region[regionNumber]) {
    if (region[regionNumber][key] !== "0") {
      arrGoodsStock.push(key);
    }
  }
  return arrGoodsStock;
}

function maxStock(obj) {
  const region = obj.stock.stocks;
  const regionNumber = Object.keys(region)[0];
  const arrNumberScore = [];
  const arrNumberGoods = Object.values(region[regionNumber]);
  const maxStockFind = Math.max(...arrNumberGoods);
  for (const key in region[regionNumber]) {
    if (+region[regionNumber][key] === maxStockFind) {
      arrNumberScore.push(key);
    }
  }
  return { max: maxStockFind, NumberScore: arrNumberScore };
}

console.log(productName(result));
console.log(goodsStock(result));
console.log(maxStock(result));
