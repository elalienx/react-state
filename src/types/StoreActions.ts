// Project files
import type User from "./User";

export default interface StoreActions {
  // Cart
  addItem: (id: number, sku: string) => void;
  updateItemQuantity: (sku: string, quantity: number) => void;
  emptyCart: () => void;

  // User
  logIn: (user: User) => void;
  logOut: () => void;
}
