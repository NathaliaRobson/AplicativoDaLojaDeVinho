import { tintos, roses, secos, brancos } from "../data/vinhos";

export const orderList = [
    { orderID: '918239182', orderDate: '01/10/2023', orderValue: '', orderWines: [[tintos[1], 4], [roses[3], 1], [tintos[4], 1]], deliveryStatus: 'A caminho' },
    { orderID: '129380232', orderDate: '05/10/2023', orderValue: '', orderWines: [[brancos[4], 4], [tintos[3], 3], [roses[2], 2]], deliveryStatus: 'Pendente' },
    { orderID: '392783012', orderDate: '10/10/2023', orderValue: '', orderWines: [[roses[3], 1], [roses[4], 2], [tintos[1], 3]], deliveryStatus: 'Pendente' },
    { orderID: '626382911', orderDate: '10/10/2023', orderValue: '', orderWines: [[roses[1], 3], [tintos[2], 5], [roses[0], 4], [secos[1], 2], [secos[4], 5], [tintos[2], 1]], deliveryStatus: 'Entregue' },
];