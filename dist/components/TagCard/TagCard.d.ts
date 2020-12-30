/// <reference types="react" />
export interface TagCardProps {
    /**
     *  每页最多展示多少个tag
     */
    pageSize: number;
    /**
     * tag的字符串数组
     */
    data: string[];
}
/**
 * 这是一个tag墙的组件
 */
declare const TagCard: (props: TagCardProps) => JSX.Element;
export default TagCard;
