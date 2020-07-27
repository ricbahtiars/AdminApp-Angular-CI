import { Component, OnInit } from '@angular/core';
//import modul dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import halaman dialog yang sudah dibuat pada tahap sebelumnya
import { TambahDataComponent } from '../tambah-data/tambah-data.component';
// api service
import { ApiService } from '../api.service'; // import apiservice

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public dialog: MatDialog, //menambahkan variabel dialog
    public api: ApiService
    ) { 
      this.getData()
    }

    admin: any = []
    getData(){
      this.api.baca().subscribe(res => {
        this.admin= res
      })
    }
  ngOnInit(): void {
  }
//fungsi untuk menampilkan dialog penambahan alamat baru
buatKegiatan() {
  const dialogRef = this.dialog.open(TambahDataComponent, {
    width: '450px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog ditutup');
  });
}

//fungsi untuk menampilkan dialog edit data
editAdmin(data) {
  const dialogRef = this.dialog.open(TambahDataComponent, {
    width: '450px',
    data: data
  });
  dialogRef.afterClosed().subscribe(res => {
    this.getData() // menampilkan data setelah diperbarui
  });
}

//fungsi untuk menghapus data
hapusAdmin(id) {
  console.log('data dihapus')
  this.api.hapus(id).subscribe(res => {
    this.getData()
  })
}
}
