type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}


type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number //数据类型
  createdAt?: string   //类/构造函数
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

}

