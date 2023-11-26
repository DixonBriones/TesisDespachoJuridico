import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-create',
  templateUrl: './rol-create.component.html',
  styleUrls: ['./rol-create.component.scss']
})
export class RolCreateComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RolCreateComponent>,
    private formBuilder: FormBuilder,
    private rolService: RolService,
    private updateTable: UpdateTableService,
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]],
    });

  }


  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      //console.log('Datos a guardar:', savedData);
      this.rolService.insertarRol(savedData).subscribe((res:any)=>{
    
        this.updateTable.notifyTableUpdate();
        this.dialogRef.close(savedData);
        
      }); 
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
