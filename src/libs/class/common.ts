export interface IFileServerGet {
    name: string
    url: string
}

export interface IFileServerMod {
    file_id: number,
    file_url: string,
    message: string,
}

export interface IFileServerDelete {
    message: string,
}

export interface IUploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: any;
    size: number;
  }
