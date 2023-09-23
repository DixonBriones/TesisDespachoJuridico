import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { UpdateTableService } from 'src/app/utility/update-table.service';



@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent {
  form: FormGroup;
  id: string;

  constructor(
    private dialogRef: MatDialogRef<ClienteEditComponent>,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      identification: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', Validators.required],
      address: [''],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['']
    });

    this.form.patchValue(this.data);
    this.id=data.id;
  }

  

  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      //console.log('Datos a guardar:', savedData);

      this.clienteService.actualizarCliente(this.id,savedData).subscribe((res)=>{
        this.updateTable.notifyTableUpdate();
        this.dialogRef.close(savedData);
      }); 
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}