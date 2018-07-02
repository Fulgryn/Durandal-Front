import {Product} from './product';

export const PRODUCTS: Product[] =[
    {ref: 'COOP0001', name: 'Hanabi', quantity: 23, price: 15.00 , description: 'Joueurs: de 2 à 10 \n Durée: 1h \n Age: 10+', type: 'Coopération', year: new Date(), editor: 'Je sais plus', picture: ''},
    {ref: 'DIE0001', name: 'RPG Dice Set', quantity: 10, price: 15.00 , description: 'Set de dés pour jeu de rôle, 1d4, 1d6, 1d8, 1d12, 1d20, 1d100', type: 'Dés', year: new Date(), editor: 'Chessex', picture: ''},
    {ref: 'DND0001', name: 'Donjons et Dragons 5e - Manuel du Joueur', quantity: 3, price: 50.00 , description: 'Toutes les règles pour les joueurs de Donjons et Dragons 5e', type: 'Jeu de Rôle', year: new Date(), editor: 'Wizards of the Coast', picture: ''}
]