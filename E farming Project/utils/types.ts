export interface User {
    id: string;
    name: string;
    phone: string;
    username: string;
    password: string;
}

interface Market {
    commodity_name: string,
    state: string,
    district: string,
    market: string,
    min_price: string,
    max_price: string,
    modal_price: string,
}