import { Component, OnInit } from '@angular/core';
import { IMovements } from 'src/app/interfaces/movements.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { movementsService } from 'src/app/services/movements.service';
import { toastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  movements: Array<IMovements> = []
  users: Array<IUser> = []
  textoBuscar = ''
  constructor(private movementsService: movementsService, private toastService: toastService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getDataServices()
  }
  async getDataServices() {
    try {
      this.movements = await this.movementsService.getMovements().toPromise()
      this.movements = this.movements.map(x => ({
        ...x, show: true
      }))
    }
    catch (error) {
      this.toastService.catchError(error)
    }
  }
  onSearch(event) {
    const query = event.target.value.toLowerCase()
    requestAnimationFrame(() => {
      this.movements.forEach((item) => {
        const shouldShow = item.fecha.toLowerCase().indexOf(query) > -1 
        || item.usuario_id.nombre.toLowerCase().indexOf(query) > -1
        item.show = shouldShow;
      });
    });
  }
}
