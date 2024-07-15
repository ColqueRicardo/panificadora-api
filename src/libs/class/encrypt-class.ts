import { enc, AES, mode, pad } from 'crypto-js';

export class EncryptionService {
  private key: string;
  private iv: string;

  constructor(key: string, iv: string) {
    this.key = key;
    this.iv = iv;
  }

  public encrypt(object: any): string {
    const _key = enc.Utf8.parse(this.key);
    const _iv = enc.Utf8.parse(this.iv);
    const encrypted = AES.encrypt(
      JSON.stringify(object), _key, {
      keySize: 16,
      iv: _iv,
      mode: mode.CBC,
      padding: pad.Pkcs7
    });
    return encrypted.toString();
  }

  public decrypt(encryptedText: string): any {
    const _key = enc.Utf8.parse(this.key);
    const _iv = enc.Utf8.parse(this.iv);
    const decrypted = AES.decrypt(encryptedText, _key, {
      keySize: 16,
      iv: _iv,
      mode: mode.CBC,
      padding: pad.Pkcs7
    });
    const decryptedText = decrypted.toString(enc.Utf8);
    return JSON.parse(decryptedText);
  }
}
