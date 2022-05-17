export default interface ITableColumn {
  field: string
  title: string
  Component?: (props: { row: any, classes: any }) => any
}
