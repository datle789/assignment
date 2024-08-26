import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumDescription',
})
export class EnumDescriptionPipe implements PipeTransform {
  transform(
    code: string,
    enumList: { code: string; name: string }[]
  ): string | undefined {
    const matchedItem = enumList.find((item) => item.code === code);
    return matchedItem ? matchedItem.name : undefined;
  }
}
