import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoundsmanService } from '../../services/roundsman.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roundsman-register',
  templateUrl: './roundsman-register.component.html',
  styleUrls: ['./roundsman-register.component.css']
})
export class RoundsmanRegisterComponent implements OnInit {

  formRoundsman: FormGroup;
  roundsman: any;

  status: string;
  date: string;
  city: string;

  constructor( private _formBuilder: FormBuilder,
               private _roundsmanService: RoundsmanService ) { }

  ngOnInit(): void {

    this.status = 'PENDIENTE';

    this.formRoundsman = this._formBuilder.group({
      name: [ '', [ Validators.required, Validators.minLength(3)] ],
      phone: [ '', [ Validators.required, Validators.minLength(10), Validators.maxLength(10)] ],
      email: [ '', [ Validators.required, Validators.email ] ],
      type: [ '', Validators.required ],
      message: [ 'Hola, me gustaría formar parte del equipo Al Paso', [ Validators.required, Validators.minLength(3) ] ],
      terms_accept: [ false ]
    });

  }

  send() {

    if ( !this.formRoundsman.get('terms_accept').value ) {
      Swal.fire('¿Deseas continuar?', 'Por favor, acepta los términos y condiciones.', 'error')
      return;
    }

    this.date = new Date().toLocaleString('en-ES', {
      timeZone: 'America/Guayaquil',
      hour12: false
    });

    this.roundsman = {
      name: this.formRoundsman.get('name').value,
      phone: this.formRoundsman.get('phone').value,
      email: this.formRoundsman.get('email').value,
      type: this.formRoundsman.get('type').value,
      message: this.formRoundsman.get('message').value,
      terms_accep: this.formRoundsman.get('terms_accept').value,
      status: this.status,
      date: this.date
    };

    this._roundsmanService.save( this.roundsman ).subscribe( ( confirm ) => {
      Swal.fire({
        icon: 'success',
        title: 'Listo...',
        text: 'Registro Exitoso!',
        footer: '<span class="text-secondary">Muy pronto nos pondremos en contacto contigo.</span>'
      });

      this.formRoundsman.get('name').setValue('');
      this.formRoundsman.get('phone').setValue('');
      this.formRoundsman.get('email').setValue('');
      this.formRoundsman.get('type').setValue('');
      this.formRoundsman.get('message').setValue('');
      this.formRoundsman.get('terms_accept').setValue(false);
      
    });

  }

}
