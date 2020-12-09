type RootState = {
    recordList: RecordItem[];
    createRecordError: Error|null;
    tagList: Tag[];
    currentTag?: Tag;
}
type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: string; //类 / 构造函数
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; // 联合类型 success表示成功，duplicated表示那么重复
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
    save: () => void;
}
// interface Window {
//
// }