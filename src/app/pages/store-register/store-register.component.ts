import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoundsmanService } from '../../services/roundsman.service';
import Swal from 'sweetalert2';
import { StoreService } from '../../services/store.service';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.css']
})
export class StoreRegisterComponent implements OnInit {

  formStore: FormGroup;
  store: any;

  status: string;
  date: string;
  city: string;

  constructor( private analytics: AngularFireAnalytics,
               private _formBuilder: FormBuilder,
               private _storeService: StoreService,
               private router: Router ) 
  {

    // Guardar registro Google Anatytics
    this.analytics.logEvent('page_view', {
      page_location: this.router.url,
      page_path: this.router.url,
      page_title: 'Formulario Registro Local'
    });

  }

  ngOnInit(): void {

    this.status = 'PENDIENTE';

    this.formStore = this._formBuilder.group({
      name: [ '', [ Validators.required, Validators.minLength(3)] ],
      phone: [ '', [ Validators.required, Validators.minLength(10), Validators.maxLength(10)] ],
      email: [ '', [ Validators.required, Validators.email ] ],
      address: [ '', Validators.required ],
      business_name: [ '', Validators.required ],
      message: [ '', [ Validators.required, Validators.minLength(3) ] ],
      terms_accept: [ false ]
    });

  }

  send() {

    if ( !this.formStore.get('terms_accept').value ) {
      Swal.fire('¿Deseas continuar?', 'Por favor, acepta los términos y condiciones.', 'error')
      return;
    }

    this.date = new Date().toLocaleString('en-ES', {
      timeZone: 'America/Guayaquil',
      hour12: false
    });

    this.store = {
      name: this.formStore.get('name').value,
      phone: this.formStore.get('phone').value,
      email: this.formStore.get('email').value,
      address: this.formStore.get('address').value,
      message: this.formStore.get('message').value,
      business_name: this.formStore.get('business_name').value,
      terms_accep: this.formStore.get('terms_accept').value,
      status: this.status,
      date: this.date
    };

    this._storeService.save( this.store ).subscribe( ( confirm ) => {
      Swal.fire({
        icon: 'success',
        title: 'Listo...',
        text: 'Registro Exitoso!',
        footer: '<span class="text-secondary">Muy pronto nos pondremos en contacto contigo.</span>'
      });

      this.formStore.get('name').setValue('');
      this.formStore.get('phone').setValue('');
      this.formStore.get('email').setValue('');
      this.formStore.get('address').setValue('');
      this.formStore.get('business_name').setValue('');
      this.formStore.get('message').setValue('');
      this.formStore.get('terms_accept').setValue(false);
      
    });


  }

}
