import CryptoJS from "crypto-js";

const secretKey: any = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

export function encryptData(data: string) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

export function decryptData(encData: string) {
  return CryptoJS.AES.decrypt(encData, secretKey).toString();
}
