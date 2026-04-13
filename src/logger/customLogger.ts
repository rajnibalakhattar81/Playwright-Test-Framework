export class customLogger {


 private timestamp(): string {
   return new Date().toISOString();
 }


 info(message: string, ...args: any[]) {
   console.log('\x1b[32m',`[${this.timestamp()}] INFO: ${message}`, ...args); // Green color for info
 }


 error(message: string, ...args: any[]) {
   console.error('\x1b[31m',`[${this.timestamp()}] ERROR: ${message}`, ...args); // Red color for error
 }


 warn(message: string, ...args: any[]) {
   console.warn('\x1b[33m',`[${this.timestamp()}] WARN: ${message}`, ...args); // Yellow color for warning
 }
}
