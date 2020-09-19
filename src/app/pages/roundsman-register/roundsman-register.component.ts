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

  roundsman: any;
  roundsmanForm: FormGroup;

  constructor( private _formBuilder: FormBuilder,
               private _roundsmanService: RoundsmanService ) { }

  ngOnInit(): void {

    this.roundsmanForm = this._formBuilder.group({
      id           : ['', Validators.required],
      name         : ['', Validators.required],
      phone        : ['', Validators.required],
      email        : ['', Validators.required, Validators.email],
      type         : ['', Validators.required],
      message      : ['', Validators.required],
      terms_accept : [false, Validators.required]
    });

  }

  send() {

    let id = this.roundsmanForm.get('id').value;
    let name = this.roundsmanForm.get('name').value;
    let phone = this.roundsmanForm.get('phone').value;
    let email = this.roundsmanForm.get('email').value;
    let type = this.roundsmanForm.get('type').value;
    let message = this.roundsmanForm.get('message').value;
    let terms_accept = this.roundsmanForm.get('terms_accept').value;

    this.roundsman = {
      id,
      name,
      phone,
      email,
      type,
      message,
      terms_accept
    };

    this._roundsmanService.save( this.roundsman ).subscribe( ( confirm ) => {
      console.log("Confirmación", confirm);
      Swal.fire({
        icon: 'success',
        title: 'Listo...',
        text: 'Registro Exitos!',
        footer: 'Muy pronto nuestro un representante de Al Paso se pondrá en contacto contigo.'
      })
    });

  }

}
