import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Refregerator" },
      { id: 2, name: "SmartPhones" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
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
        id: 2,
        name: "IPhone 13",
        price: 30000,
        rating: 5,
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712888128",
      },
    ];

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

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
