import styles from './TagList.module.css';

import { Tag } from '../Tag/Tag';

interface TagListProps extends React.HTMLAttributes<HTMLUListElement> {
  tagsList: string[];
  handleDeleteTag: (tag: string) => void;
}

export const TagList: React.FC<TagListProps> = ({
  tagsList,
  handleDeleteTag,
}) => {
  return (
    <>
      {!!tagsList.length && (
        <ul className={styles.wrapper}>
          {tagsList.map((item, index) => (
            <Tag key={index} tag={item} handleDeleteTag={handleDeleteTag} />
          ))}
        </ul>
      )}
    </>
  );
};
