export interface IBookingSlot {
  productId: string;
  dates: IDateSlot[];
}

export interface IDateSlot {
  date: string;
  timeSlots: ITimeSlot[];
}

export interface ITimeSlot {
  start: number;
  end: number;
}

export interface IDatesGroup {
  month: string;
  dates: IDateSlot[]
}

export interface IGiftSlot {
  id: string;
  qty: number;
}

export interface IBookingGift {
  date: string;
  slots: IGiftSlot[];
}
