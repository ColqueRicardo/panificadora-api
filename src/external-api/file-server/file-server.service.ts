// import { Injectable } from "@nestjs/common";
// import { HttpService } from '@nestjs/axios';
// import { firstValueFrom } from 'rxjs';
// import * as FormData from 'form-data'
// import { IFileServerDelete, IFileServerGet, IFileServerMod, IUploadedFile } from 'src/libs/class/common';

// @Injectable()
// export class FileServerService {
//   private key: string;
//   private url: string = process.env.file_server_url;

//   constructor(private httpService: HttpService) {
//     this.key = process.env.file_server_key;
//   }

//   async get(id: number): Promise<IFileServerGet> {
//     const headers = {
//       Authorization: `${this.key}`,
//     };

//     const response = await firstValueFrom(
//       this.httpService.get(`${this.url}/files/${id}`, { headers })
//     );
//     return response.data;
//   }

//   async create(file: IUploadedFile): Promise<IFileServerMod> {
//     const formData = new FormData();
//     formData.append('name', file.originalname);
//     formData.append('file', file.buffer, {
//       filename: file.originalname,
//       contentType: file.mimetype,
//     });

//     const headers = {
//       Authorization: `${this.key}`,
//       ...formData.getHeaders(),
//     };

//     const response = await firstValueFrom(
//       this.httpService.post(`${this.url}/files/create`, formData, { headers })
//     );

//     console.log(response.data);
//     return response.data;
//   }

//   async update(id: number, file: IUploadedFile): Promise<IFileServerMod> {
//     const formData = new FormData();
//     formData.append('name', file.originalname);
//     formData.append('file', file.buffer, {
//       filename: file.originalname,
//       contentType: file.mimetype,
//     });

//     const headers = {
//       Authorization: `${this.key}`,
//       ...formData.getHeaders(),
//     };

//     const response = await firstValueFrom(
//       this.httpService.post(`${this.url}/files/${id}/update`, formData, { headers })
//     );

//     return response.data;
//   }

//   async delete(id: number): Promise<IFileServerDelete> {
//     const headers = {
//       Authorization: `${this.key}`,
//     };

//     const response = await firstValueFrom(
//       this.httpService.get(`${this.url}/files/${id}/delete`, { headers })
//     );

//     return response.data;
//   }
// }
