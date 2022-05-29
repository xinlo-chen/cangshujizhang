const localstorageKeyName = 'tagsList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //联合类型
  save: () => void
}
const tagsListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localstorageKeyName) || '[]');
    return this.data;
  },
  create(name: string) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated'; }
    this.data.push({id:name,name:name});
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localstorageKeyName, JSON.stringify(this.data));
  }
};
export default tagsListModel;