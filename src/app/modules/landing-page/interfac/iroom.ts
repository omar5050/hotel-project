
export interface IRoom {
    _id:        string;
    roomNumber: string;
    price:      number;
    capacity:   number;
    discount:   number;
    facilities: Facility[];
    createdBy:  CreatedBy;
    images:     string[];
    createdAt:  Date;
    updatedAt:  Date;
}

export interface CreatedBy {
    _id:      string;
    userName: string;
}

export interface Facility {
    _id:  string;
    name: string;
}