import {Component} from '@angular/core';
import {TicketService} from '../../_services/TicketService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DashboardComponent {

  public news: Array<{ title: string, content: string, footer: string }>;
  public tickets: Array<{ title: string }>;

  constructor(public ticketService: TicketService) {
    this.news = [
      {
        title: '100 Beta-Anmelder erreicht!',
        content: 'Transport freut sich über 100 erfolgreiche Beta-Anmelder! Ihr seid einfach nur krass. ' +
          'In nicht mal einem Monat zählen wir nun 100 erfolgreiche Anmeldungen in unserer Datenbank.' +
          ' Wir freuen uns gemeinsam mit Euch auf eine aufregende und spannende Zeit.',
        footer: 'Marcel Reif, 28.06.2018'
      }
    ];

    this.getTickets();
  }

  getTickets() {
    this.ticketService.getAllTickets().subscribe(value => {

    });
  }

}
