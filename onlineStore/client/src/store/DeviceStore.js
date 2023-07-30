import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Refregerators" },
      { id: 2, name: "SmartPhones" },
      { id: 3, name: "Notebooks" },
      { id: 4, name: "TVs" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "IPhone 12",
        price: 25000,
        rating: 5,
        img: "https://m.media-amazon.com/images/I/71ZhhSe9cML.__AC_SX300_SY300_QL70_ML2_.jpg",
      },
      {
        id: 2, name: "IPhone 13", price: 30000, rating: 5,
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712888128",
      },
      {
        id: 3, name: "DEXP Aquilon 13", price: 15000, rating: 4,
        img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/fcc83338c0ee5f59450fcfec86979001/38248e253762c8b302c60b5c627a347b0b8301b243fb0a61a6cf3e41cf64dea6.jpg.webp",
      },

      {
        id: 4, name: "Echips Travel", price: 24000, rating: 5,
        img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/413c5ae1b3cc64097714c66a69b99320/0db46148c74e81292b652fdb5d42f813fa0275ca88e7720d314eb5682bdac794.jpg.webp",
      },
      {
        id: 5, name: "Apple MacBook Air", price: 31000, rating: 4,
        img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/346bb8c452b32339a2ee696274e59ac4/f395a2a0f2c7c708ef38d3605f55e459245563a15e516a04d5bf8684c01a6a78.jpg.webp",
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

    // отслеживает состояние и при изменении вызывает ререндер
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
