import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command.service';
import { Command } from '../command';
import { AppService } from '../app.service';

@Component({
    selector: 'app-my-commands',
    templateUrl: './my-commands.component.html',
    styleUrls: ['./my-commands.component.css']
})
export class MyCommandsComponent implements OnInit {

    commands: Array<Command>;

    constructor(private commandService: CommandService, private appService: AppService) { }

    ngOnInit() {
        this.commandService.getCommandsFrom(this.appService.access.email).subscribe((c: Array<Command>) => {
            this.commands = c;
            console.log(this.commands);
        });
    }

}
