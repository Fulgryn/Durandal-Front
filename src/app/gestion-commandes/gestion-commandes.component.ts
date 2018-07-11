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
            this.commands = c;
            console.log(this.commands);
        });
    }

}
