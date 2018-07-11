import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command.service';
import { Command } from '../command';

@Component({
    selector: 'app-gestion-commandes',
    templateUrl: './gestion-commandes.component.html',
    styleUrls: ['./gestion-commandes.component.css']
})
export class GestionCommandesComponent implements OnInit {

    commands: Array<Command>;

    constructor(private commandService: CommandService) { }

    ngOnInit() {
        this.commandService.getCommands().subscribe((c: Array<Command>) => {
            c.forEach(command => {
                command.contenuCommande.forEach(contenu => {
                    contenu.priceByProduit = function() {
                        return this.quantity * this.product.price;
                    }
                })
                command.totalPrice = function() {
                    let total = 0.00;
                    this.contenuCommande.forEach(element => {
                        total += element.priceByProduit();
                    });
                    return total;
                }
            })          

            this.commands = c;
            console.log(this.commands);
        });
    }

}
