export interface ITeam {
    id:                      number;
    uid:                     string;
    password:                string;
    first_name:              string;
    last_name:               string;
    username:                string;
    email:                   string;
    avatar:                  string;
    gender:                  string;
    phone_number:            string;
    social_insurance_number: string;
    date_of_birth:           Date;
    employment:              Employment;
    address:                 Address;
    credit_card:             CreditCard;
    subscription:            Subscription;
}

export interface Address {
    city:           string;
    street_name:    string;
    street_address: string;
    zip_code:       string;
    state:          string;
    country:        Country;
    coordinates:    Coordinates;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export enum Country {
    UnitedStates = "United States",
}

export interface CreditCard {
    cc_number: string;
}

export interface Employment {
    title:     string;
    key_skill: string;
}

export interface Subscription {
    plan:           string;
    status:         Status;
    payment_method: string;
    term:           string;
}

export enum Status {
    Blocked = "Blocked",
    Idle = "Idle",
    Pending = "Pending",
}