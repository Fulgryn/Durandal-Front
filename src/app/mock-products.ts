import {Product} from './product';

export const PRODUCTS: Product[] =[
    {id: 1, name: 'Hanabi', quantity: 23, price: 15.00 , description: 'Joueurs: de 2 à 10 \n Durée: 1h \n Age: 10+', type: 'Coopération', editor: 'Je sais plus', picture: 'https://www.philibertnet.com/267775/hanabi.jpg', enabled: true},
    {id: 2, name: 'RPG Dice Set', quantity: 10, price: 15.00 , description: 'Set de dés pour jeu de rôle, 1d4, 1d6, 1d8, 1d12, 1d20, 1d100', type: 'Dés', editor: 'Chessex', picture: 'https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/299959.jpg', enabled: false},
    {id: 3, name: 'Donjons et Dragons 5e - Manuel du Joueur', quantity: 3, price: 50.00 , description: 'Toutes les règles pour les joueurs de Donjons et Dragons 5e', type: 'Jeu de Rôle', editor: 'Wizards of the Coast', picture: 'https://mxyzplk.files.wordpress.com/2014/09/5ephb.jpg', enabled :true}
]