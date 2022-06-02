type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number //数据类型
  createdAt?: Date   //类/构造函数
}

type Tag = {
  id: string
  name: string
}

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //联合类型
  save: () => void
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
}

interface Window {
  tagList: Tag[]
  createTag: (name: string) => void
  findTag:(id:string)=> Tag
  removeTag: (id: string) => boolean
  updateTag:(id:string,name:string)=> 'success' | 'not found' | 'duplicated'
  //可以简化成 TagListModel['update']
}

