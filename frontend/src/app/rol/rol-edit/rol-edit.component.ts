import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTableService } from 'src/app/utility/update-table.service';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-edit',
  templateUrl: './rol-edit.component.html',
  styleUrls: ['./rol-edit.component.scss']
})
export class RolEditComponent {
  form: FormGroup;
  id: string;

  constructor(
    private dialogRef: MatDialogRef<RolEditComponent>,
    private formBuilder: FormBuilder,
    private rolService: RolService,
    private updateTable: UpdateTableService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]],
    });
    this.form.patchValue(this.data);
    this.id=data.id;
  }
  
  save(): void {
    if (this.form.valid) {
      const savedData = this.form.value;
      //console.log('Datos a guardar:', savedData);
      this.rolService.actualizarRol(this.id,savedData).subscribe((res:any)=>{
    
        this.updateTable.notifyTableUpdate();
        this.dialogRef.close(savedData);
        
      }); 
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }


}
