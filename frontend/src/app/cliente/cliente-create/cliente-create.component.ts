import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ClienteCreateComponent>,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      identification: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', Validators.required],
      address: [''],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['']
    });
  }

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      console.log('Datos a guardar:', savedData);

      this.clienteService.insertarClientes(savedData).subscribe((res)=>{
        this.updateTable.notifyTableUpdate();
        this.dialogRef.close(savedData);
      }); 
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
