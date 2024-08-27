import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumDescription',
})
export class EnumDescriptionPipe implements PipeTransform {
  transform(
    code: string | null,
    enumList: { code: string; name: string }[]
  ): string | undefined | null {
    const matchedItem = enumList.find((item) => item.code === code);
    return matchedItem ? matchedItem.name : undefined;
  }
}
