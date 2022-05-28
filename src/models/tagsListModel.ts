const localstorageKeyName = 'tagsList';
type TagListModel = {
  data: string[]
  fetch: () => string[]
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
    if (this.data.indexOf(name) >= 0) {return 'duplicated'; }
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localstorageKeyName, JSON.stringify(this.data));
  }
};
export default tagsListModel;