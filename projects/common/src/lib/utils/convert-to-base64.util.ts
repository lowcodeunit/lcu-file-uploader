// @dynamic

/**
 * @dynamic is used because this class contains static properties
 */

/**
 * Putting this here for local testing, then we can add changes to Ref Arch - Shannon
 */


import { Observable, Subscriber, Subject } from 'rxjs';
import { Base64Model } from '@lcu/common';

export class ConvertToBase64Util {

    /**
     *
     * @param event either type File or Blob
     *
     * Converts to Base64 and returns an observable of Base64Model
     */
    public static GetBase64LocalTest(files: Array<File>): Observable<Array<Base64Model>> {
      const base64Observable = new Subject<Array<Base64Model>>();
      const baseArray: Array<Base64Model> = [];
      let file: File;

      for (file of files) {
        const reader = new FileReader();
        ((file) => { // closure ensures we hit each item and not just he last one
            reader.onload = () => {
                baseArray.push(new Base64Model(reader.result.toString(), file));

                if (baseArray.length === files.length) {
                  base64Observable.next(baseArray);
                }
            };
        })(file);
        reader.readAsDataURL(file['file'].rawFile);
        reader.onerror = (error) => {
          console.error('Error: ', error);
        };
      }

      return base64Observable;
   }
}
