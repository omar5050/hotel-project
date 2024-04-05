
export interface Ibooking {
    _id:        string;
    startDate:  Date;
    endDate:    Date;
    totalPrice: number;
    user:       User;
    room:       Room;
    status:     string;
    createdAt:  Date;
    updatedAt:  Date;
}

export interface Room {
    _id:        string;
    roomNumber: string;
}

export interface User {
    _id:      string;
    userName: string;
}
