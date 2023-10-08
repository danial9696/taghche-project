import { GroupTagModel } from 'src/modules/faq/Tags/types';
import { ListItemModel } from 'src/views/components/tags-autocomplete.tsx/types';

// eslint-disable-next-line import/prefer-default-export
export const normalizedTagLists = (data: GroupTagModel[]) => {
  const transformedArray: ListItemModel[] = [];

  if (!data?.length) return [];

  data.forEach(groupTag => {
    transformedArray.push({
      title: groupTag.tagTitle,
      value: String(groupTag.tagId),
    });
  });

  return transformedArray;
};
