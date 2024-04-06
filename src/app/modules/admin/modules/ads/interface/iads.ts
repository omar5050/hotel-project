
export interface tableAdss {
    success: boolean;
    message: string;
    data:    DataAds;
}

export interface DataAds {
[x: string]: any;
    ads:        Ads[];
    totalCount: number;
}

export interface Ads {
    _id:       string;
    isActive:  boolean;
    room:      Room;
    createdBy: CreatedBy;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreatedBy {
    _id:      string;
    userName: string;
}

export interface Room {
    _id:        string;
    roomNumber: string;
    price:      number;
    capacity:   number;
    discount:   number;
    facilities: string[];
    createdBy:  string;
    images:     string[];
    createdAt:  Date;
    updatedAt:  Date;
}
